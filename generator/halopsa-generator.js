/**
 * Orchestrator:
 *   1. Emit src/HaloPSATypes.ts from the OpenAPI spec via openapi-typescript.
 *   2. Emit one src/HaloPSA/<Section>API.ts per URL root segment.
 *   3. Emit src/HaloAPI.ts, a barrel with lazy-getter properties for each section.
 *   4. Run ESLint --fix over everything that was written.
 */

const fs = require('fs')
const path = require('path')
const { ESLint } = require('eslint')
const { generateAPIClass } = require('./generator.js')
const OVERLAYS = require('./spec-overlays.js')

const SPEC_PATH = path.join(__dirname, 'spec', 'halo-psa-api.json')
const SRC_DIR = path.join(__dirname, '..', 'src')
const SECTIONS_DIR = path.join(SRC_DIR, 'HaloPSA')
const TYPES_FILE = path.join(SRC_DIR, 'HaloPSATypes.ts')
const HALOAPI_FILE = path.join(SRC_DIR, 'HaloAPI.ts')

function pascal(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

async function emitTypes(spec) {
  console.log('generating HaloPSATypes.ts from spec')
  // openapi-typescript v7 is ESM-only; use dynamic import from this CJS script.
  const mod = await import('openapi-typescript')
  const openapiTS = mod.default ?? mod
  // v7 returns an AST (array of ts.Node); we must format via astToString.
  // v6 returns a string. Handle both.
  const result = await openapiTS(spec)
  let output
  if (typeof result === 'string') {
    output = result
  } else if (mod.astToString) {
    output = mod.astToString(result)
  } else {
    throw new Error('Unexpected openapi-typescript output; no astToString export')
  }
  fs.writeFileSync(TYPES_FILE, output)
}

function groupOperationsBySection(paths) {
  const sections = {}
  for (const url of Object.keys(paths)) {
    const [, section] = url.split('/')
    if (!section) {
      continue
    }
    const key = pascal(section)
    if (!sections[key]) {
      sections[key] = []
    }
    sections[key].push({ url, methods: paths[url] })
  }
  return sections
}

/**
 * Build per-section { itemSchema, viewSchema } hints for response-type inference.
 * Uses two sources, in this order:
 *   1. Typed observations from the spec: any operation that already has a 2xx
 *      $ref response on either the list root (/Section) or item (/Section/{id}) URL.
 *   2. Name-match fallback: if schemas['<Section>'] exists, use it for items;
 *      if schemas['<Section>_View'] exists, use it for list roots.
 *
 * These hints then drive conservative inference for untyped endpoints
 * matching GET list, GET item, POST create, or PUT/PATCH update shapes.
 */
function buildSectionHints(paths, schemas) {
  const hints = {}
  const schemaNames = new Set(Object.keys(schemas ?? {}))

  for (const url of Object.keys(paths)) {
    const segments = url.split('/').filter(Boolean)
    if (!segments.length) {
      continue
    }
    const section = pascal(segments[0])
    const isRoot = segments.length === 1
    const isItem = segments.length === 2 && /^{[^}]+}$/.test(segments[1])
    if (!isRoot && !isItem) {
      continue
    }

    for (const method of Object.keys(paths[url])) {
      const op = paths[url][method]
      const resp = op.responses?.['200'] ?? op.responses?.['201']
      const ref = resp?.content?.['application/json']?.schema?.$ref
      if (!ref) {
        continue
      }
      const schemaName = ref.split('/').pop()
      if (!hints[section]) {
        hints[section] = {}
      }
      if (method === 'get' && isRoot && !hints[section].viewSchema) {
        hints[section].viewSchema = schemaName
      } else if (isItem && !hints[section].itemSchema) {
        hints[section].itemSchema = schemaName
      } else if (method === 'post' && isRoot && !hints[section].itemSchema) {
        hints[section].itemSchema = schemaName
      }
    }
  }

  // Name-match fallback for sections without typed obs.
  const sections = new Set()
  for (const url of Object.keys(paths)) {
    const [, s] = url.split('/')
    if (s) {
      sections.add(pascal(s))
    }
  }
  for (const section of sections) {
    if (!hints[section]) {
      hints[section] = {}
    }
    if (!hints[section].itemSchema && schemaNames.has(section)) {
      hints[section].itemSchema = section
    }
    if (!hints[section].viewSchema && schemaNames.has(`${section}_View`)) {
      hints[section].viewSchema = `${section}_View`
    }
  }

  return hints
}

function emitSectionFiles(sections, sectionHints) {
  if (!fs.existsSync(SECTIONS_DIR)) {
    fs.mkdirSync(SECTIONS_DIR, { recursive: true })
  }

  const apiNames = Object.keys(sections).sort()
  for (const apiName of apiNames) {
    const file = generateAPIClass({
      apiName,
      operations: sections[apiName],
      sectionHint: sectionHints[apiName],
    })
    const fileName = path.join(SECTIONS_DIR, `${apiName}API.ts`)
    fs.writeFileSync(fileName, file)
  }
  return apiNames
}

function emitHaloAPI(apiNames) {
  const imports = apiNames.map((n) => `import { ${n}API } from './HaloPSA/${n}API'`).join('\n')
  const typeExports = apiNames
    .map((n) => `export type * as ${n}APITypes from './HaloPSA/${n}API'`)
    .join('\n')

  const getters = apiNames
    .map(
      (n) => `  get ${n}API(): ${n}API {
    const v = new ${n}API(this.#halo)
    Object.defineProperty(this, '${n}API', { value: v, configurable: true })
    return v
  }`,
    )
    .join('\n\n')

  const out = `/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from './HaloPSA'
${imports}

${typeExports}

/**
 * Top-level HaloPSA client.
 *
 * All section clients are exposed as lazy getters so you pay for each only
 * when first accessed. Each access caches the instance in place.
 *
 * @example
 * \`\`\`ts
 * const halo = new HaloAPI({ clientId, clientSecret, companyUrl, scope: 'all' })
 * const tickets = await halo.TicketsAPI.getTickets({})
 * \`\`\`
 *
 * @public
 */
export class HaloAPI {
  readonly #halo: HaloPSA

  constructor(options: HaloOptions) {
    this.#halo = new HaloPSA(options)
  }

${getters}
}

export default HaloAPI
`
  fs.writeFileSync(HALOAPI_FILE, out)
}

async function runEslintFix() {
  console.log('running eslint --fix on generated files')
  const eslint = new ESLint({ fix: true })
  const results = await eslint.lintFiles(['src/HaloPSA/*.ts', 'src/HaloAPI.ts'])
  await ESLint.outputFixes(results)
  const formatter = await eslint.loadFormatter('stylish')
  const text = formatter.format(results)
  if (text.trim()) {
    console.log(text)
  }
}

/**
 * Apply per-endpoint overlays from spec-overlays.js onto the parsed spec.
 * Each overlay key is "METHOD /path"; Object.assign replaces matching
 * top-level keys on the operation (requestBody, parameters, etc.).
 */
function applyOverlays(spec, overlays) {
  for (const [key, patch] of Object.entries(overlays)) {
    const [method, url] = key.split(' ')
    const op = spec.paths?.[url]?.[method.toLowerCase()]
    if (!op) {
      console.warn(`overlay target not found in spec: ${key}`)
      continue
    }
    Object.assign(op, patch)
    console.log(`applied overlay: ${key}`)
  }
}

async function generate() {
  const spec = require(SPEC_PATH)
  applyOverlays(spec, OVERLAYS)

  await emitTypes(spec)

  const sections = groupOperationsBySection(spec.paths)
  const sectionHints = buildSectionHints(spec.paths, spec.components?.schemas ?? {})

  const withHints = Object.values(sectionHints).filter((h) => h?.itemSchema || h?.viewSchema).length
  console.log(
    `emitting ${Object.keys(sections).length} section files (${withHints} with inferred response hints)`,
  )
  const apiNames = emitSectionFiles(sections, sectionHints)

  console.log('emitting HaloAPI.ts barrel')
  emitHaloAPI(apiNames)

  await runEslintFix()
  console.log('done')
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})
