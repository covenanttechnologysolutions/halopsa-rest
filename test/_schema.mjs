/**
 * Runtime validators for spec-typed responses.
 *
 * Loads the OpenAPI spec, normalizes its `nullable: true` properties into
 * `type: ['X', 'null']` so ajv understands them, and compiles validators for
 * any schema name on demand. Tests use this to confirm Halo's actual responses
 * still match what the spec promises.
 */
import path from 'node:path'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import Ajv from 'ajv'
import { AssertionError } from 'node:assert'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SPEC_PATH = path.join(__dirname, '..', 'generator', 'spec', 'halo-psa-api.json')
const spec = JSON.parse(readFileSync(SPEC_PATH, 'utf8'))

// Normalize Halo's spec for ajv:
// 1. OpenAPI 3.0 uses `nullable: true`; rewrite to `type: [..., 'null']`.
// 2. Strip `additionalProperties: false`. Halo routinely returns fields the
//    spec didn't declare; clients should tolerate growth, and we only want
//    shape conformance on declared fields.
function normalizeSchemas(node) {
  if (!node || typeof node !== 'object') {
    return
  }
  if (Array.isArray(node)) {
    for (const item of node) {
      normalizeSchemas(item)
    }
    return
  }
  if (node.nullable === true && typeof node.type === 'string') {
    node.type = [node.type, 'null']
  }
  delete node.nullable
  if (node.additionalProperties === false) {
    delete node.additionalProperties
  }
  for (const key of Object.keys(node)) {
    normalizeSchemas(node[key])
  }
}
normalizeSchemas(spec.components?.schemas ?? {})

const ajv = new Ajv({
  strict: false,
  allErrors: true,
  // Skip `format` validation. The spec marks date fields as `format: "date-time"`
  // but Halo doesn't always return strict RFC 3339; we only want shape conformance
  // (string vs number, required props, etc.), not format-level lint.
  validateFormats: false,
})
ajv.addSchema(spec, 'halo-spec')

const cache = new Map()

function getValidator(schemaName) {
  if (cache.has(schemaName)) {
    return cache.get(schemaName)
  }
  const ref = `halo-spec#/components/schemas/${schemaName}`
  const v = ajv.getSchema(ref)
  if (!v) {
    throw new Error(`No schema found for ${schemaName} (ref: ${ref})`)
  }
  cache.set(schemaName, v)
  return v
}

/**
 * Validate `data` against the named OpenAPI schema. Throws an AssertionError
 * with the first 5 ajv errors when invalid; returns silently when valid.
 */
export function assertMatchesSchema(schemaName, data) {
  const validate = getValidator(schemaName)
  if (validate(data)) {
    return
  }
  const errs = (validate.errors ?? []).slice(0, 5).map((e) => {
    const where = e.instancePath || '(root)'
    const detail = e.params ? ` ${JSON.stringify(e.params)}` : ''
    return `  ${where} ${e.message}${detail}`
  })
  const more =
    (validate.errors?.length ?? 0) > 5 ? `\n  ...and ${validate.errors.length - 5} more` : ''
  throw new AssertionError({
    message: `Response does not match spec schema "${schemaName}":\n${errs.join('\n')}${more}`,
    actual: data,
  })
}
