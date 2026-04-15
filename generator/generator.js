/**
 * Per-section API file generator for the HaloPSA OpenAPI 3 spec.
 * Called by halopsa-generator.js with a pre-grouped list of operations.
 */

const BUILTIN_TYPES = ['string', 'number', 'boolean', 'integer', 'int', 'double', 'bool', 'object']

const JSON_BODY_CONTENT_TYPES = [
  'application/json',
  'application/json-patch+json',
  'application/*+json',
  'text/json',
]

function typeMapSanitize(input = '') {
  switch (input) {
    case 'double':
    case 'integer':
    case 'int':
      return 'number'
    case 'bool':
      return 'boolean'
    case 'array':
      return 'Array<unknown>'
    case 'object':
      return 'Record<string, unknown>'
    case 'DateTime':
    case 'Date':
    case 'Guid':
      return 'string'
    case 'List<int>':
      return 'Array<number>'
    case 'application/octet-stream':
      return 'OctetStreamResponse'
    case 'application/pdf':
      return 'PDFResponse'
    case 'text/html':
      return 'HTMLResponse'
    default:
      return sanitizeType(input)
  }
}

/**
 * Map an OpenAPI param/property name to a valid TS identifier, replacing
 * any non-identifier characters with underscores. Returns null if the input
 * is already a valid identifier (caller can skip aliasing in that case).
 */
function safeIdentifier(name) {
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) {
    return null
  }
  return name.replace(/[^A-Za-z0-9_$]/g, '_')
}

/**
 * Resolve a query param schema into a TS type, handling the array case properly.
 */
function resolveParamType(schema) {
  if (!schema) {
    return 'any'
  }
  if (schema.type === 'array' && schema.items) {
    const itemType = schema.items.type
    if (itemType && BUILTIN_TYPES.includes(itemType)) {
      return `Array<${typeMapSanitize(itemType)}>`
    }
    return 'Array<unknown>'
  }
  if (schema.type) {
    return typeMapSanitize(schema.type)
  }
  return 'any'
}

// strip chars not valid in a TS identifier
function sanitizeType(input = '') {
  return input.replace(/[./]/g, '')
}

// Turn something like "(int) Filter on the id.\r\n\t\t\t\t(optional)" into "Filter on the id. (optional)"
function normalizeDescription(input = '') {
  if (!input) {
    return ''
  }
  return (
    input
      // strip common HTML tags
      .replace(/<\s*br\s*\/?\s*>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      // strip leading (type) annotation, since the @param already carries the type
      .replace(/^\s*\((?:string|int|integer|number|bool|boolean|double)\)\s*/i, '')
      // fold whitespace
      .replace(/[\r\n\t]+/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim()
  )
}

function generateOperationName({ method, url }) {
  return (
    method +
    url
      .slice(1)
      .split('/')
      .map((token) => {
        if (token === '{id}') {
          return 'ById'
        }
        // strip braces for other path params, keep first char as-typed
        const clean = token.replace(/[{}]/g, '')
        return clean.charAt(0).toUpperCase() + clean.slice(1)
      })
      .join('')
      .replace(/[^a-zA-Z0-9_$]/g, '')
  )
}

/**
 * Pick the first matching JSON content shape from an OpenAPI content map.
 */
function firstJsonContent(content) {
  if (!content) {
    return null
  }
  for (const ct of JSON_BODY_CONTENT_TYPES) {
    if (content[ct]) {
      return { contentType: ct, value: content[ct] }
    }
  }
  return null
}

/**
 * Resolve an OpenAPI schema into a TS type string.
 * Records any schema refs encountered into `usedSchemas` so callers can emit imports.
 *
 * @returns TS type string or null if unresolvable.
 */
function resolveSchemaType(schema, usedSchemas) {
  if (!schema) {
    return null
  }
  if (schema.$ref) {
    const name = sanitizeType(schema.$ref.split('/').pop())
    usedSchemas.add(name)
    return name
  }
  if (schema.type === 'array' && schema.items) {
    const inner = resolveSchemaType(schema.items, usedSchemas)
    return inner ? `Array<${inner}>` : null
  }
  if (schema.type) {
    const mapped = typeMapSanitize(schema.type)
    return BUILTIN_TYPES.includes(schema.type) ? mapped : null
  }
  return null
}

/**
 * Determine the response TS type for an operation from its 2xx responses.
 * Populates `usedSchemas` and `usedHelpers` with what was referenced.
 * Returns { type, isBinary } or null when no 2xx response defines a body.
 */
function resolveExplicitResponseType(responses, usedSchemas, usedHelpers) {
  if (!responses) {
    return null
  }

  const codes = Object.keys(responses)
    .filter((c) => /^2\d\d$/.test(c))
    .sort()

  for (const code of codes) {
    const resp = responses[code]
    if (!resp) {
      continue
    }

    if (code === '204' && !resp.content) {
      usedHelpers.add('NoContentResponse')
      return { type: 'NoContentResponse', isBinary: false }
    }

    const content = resp.content
    if (!content) {
      continue
    }

    const types = []
    let isBinary = false

    const json = firstJsonContent(content)
    if (json?.value?.schema) {
      const schema = json.value.schema
      // HaloPSA quirk: GET /Attachment/{id} declares a binary body inside
      // application/json. Treat format: binary as a binary response regardless
      // of the declared media type.
      if (schema.format === 'binary') {
        usedHelpers.add('OctetStreamResponse')
        types.push('OctetStreamResponse')
        isBinary = true
      } else {
        const t = resolveSchemaType(schema, usedSchemas)
        if (t) {
          types.push(t)
        }
      }
    }

    if (content['application/octet-stream']) {
      usedHelpers.add('OctetStreamResponse')
      types.push('OctetStreamResponse')
      isBinary = true
    }
    if (content['application/pdf']) {
      usedHelpers.add('PDFResponse')
      types.push('PDFResponse')
      isBinary = true
    }
    if (content['text/html']) {
      usedHelpers.add('HTMLResponse')
      types.push('HTMLResponse')
    }

    if (types.length) {
      return { type: [...new Set(types)].join(' | '), isBinary }
    }
  }

  return null
}

/**
 * Infer a response type for an untyped operation based on REST convention +
 * per-section schema hints. Conservative: only fires for list/item/create/update
 * on the canonical `/Section` or `/Section/{id}` URL shape. Returns null when
 * the pattern doesn't match or no hint is available.
 */
function inferResponseType({ method, url, sectionHint, usedSchemas }) {
  if (!sectionHint) {
    return null
  }
  const segments = url.split('/').filter(Boolean)
  if (!segments.length) {
    return null
  }

  // Only infer for the single-segment root (/Section) or item (/Section/{param}) shapes.
  const isRoot = segments.length === 1
  const isItem = segments.length === 2 && /^{[^}]+}$/.test(segments[1])

  let inferred = null
  if (method === 'get' && isRoot) {
    inferred = sectionHint.viewSchema
  } else if (method === 'get' && isItem) {
    inferred = sectionHint.itemSchema
  } else if (method === 'post' && isRoot) {
    inferred = sectionHint.itemSchema
  } else if ((method === 'put' || method === 'patch') && isItem) {
    inferred = sectionHint.itemSchema
  }

  if (!inferred) {
    return null
  }
  usedSchemas.add(inferred)
  return inferred
}

function resolveResponseType({ method, url, responses, sectionHint, usedSchemas, usedHelpers }) {
  const explicit = resolveExplicitResponseType(responses, usedSchemas, usedHelpers)
  if (explicit) {
    return explicit
  }
  const inferred = inferResponseType({ method, url, sectionHint, usedSchemas })
  if (inferred) {
    return { type: inferred, isBinary: false }
  }
  return { type: 'unknown', isBinary: false }
}

/**
 * Build a JSDoc block from summary, description, and param docs.
 * Returns empty string when nothing to document.
 */
function buildJsDoc({ summary, description, paramDocs }) {
  const lines = []
  const s = normalizeDescription(summary)
  const d = normalizeDescription(description)
  // avoid duplicating summary into description when spec repeats them
  if (s) {
    lines.push(`@summary ${s}`)
  }
  if (d && d !== s) {
    lines.push(`@description ${d}`)
  }
  for (const doc of paramDocs) {
    lines.push(doc)
  }
  if (!lines.length) {
    return ''
  }
  return ['/**', ...lines.map((l) => ` * ${l}`), ' */'].join('\n  ')
}

/**
 * Resolve a request body into { tsType, paramName } or null if empty.
 */
function resolveBody(body, usedSchemas) {
  if (!body?.content) {
    return null
  }

  // multipart/form-data -> File
  if (body.content['multipart/form-data']) {
    return { tsType: 'File', paramName: 'file' }
  }

  const json = firstJsonContent(body.content)
  if (!json?.value?.schema) {
    return null
  }
  const schema = json.value.schema

  if (schema.$ref) {
    const refName = sanitizeType(schema.$ref.split('/').pop())
    usedSchemas.add(refName)
    const paramName = refName.charAt(0).toLowerCase() + refName.slice(1)
    return { tsType: refName, paramName }
  }

  if (schema.type === 'array') {
    if (schema.items?.$ref) {
      const refName = sanitizeType(schema.items.$ref.split('/').pop())
      usedSchemas.add(refName)
      const paramName = refName.charAt(0).toLowerCase() + refName.slice(1) + 'List'
      return { tsType: `Array<${refName}>`, paramName }
    }
    const inner = typeMapSanitize(schema.items?.type ?? 'unknown')
    return { tsType: `Array<${inner}>`, paramName: 'items' }
  }

  if (schema.type) {
    const inner = typeMapSanitize(schema.type)
    return { tsType: inner, paramName: 'body' }
  }

  return null
}

/**
 * Generate a single section (.ts) file.
 * @param {object} opts
 * @param {string} opts.apiName     Section name (e.g. "Actions")
 * @param {Array}  opts.operations  [{ url, methods }, ...]
 */
function generateAPIClass({ apiName, operations = [], sectionHint }) {
  const usedSchemas = new Set() // e.g., "Actions", "Addressbook"
  const usedHelpers = new Set() // NoContentResponse, PDFResponse, ...
  const functions = []

  for (const { url, methods } of operations) {
    for (const [method, methodDefinition] of Object.entries(methods)) {
      // operationId is spec-provided but noisy in HaloPSA; stick with URL-derived naming.
      const operationName = generateOperationName({ method, url })
      const params = methodDefinition.parameters ?? []
      const pathParams = params.filter((p) => p.in === 'path')
      const queryParams = params.filter((p) => p.in === 'query')

      const requestParams = [`method: '${method}'`]
      const functionParams = []
      const functionTypes = []
      const paramDocs = []

      const body = resolveBody(methodDefinition.requestBody, usedSchemas)
      if (body) {
        requestParams.push(`data: ${body.paramName}`)
        functionParams.push(body.paramName)
        functionTypes.push(`${body.paramName}: ${body.tsType}`)
      }

      if (pathParams.length) {
        for (const p of pathParams) {
          const tsType = resolveParamType(p.schema)
          functionParams.push(p.name)
          functionTypes.push(`${p.name}${p.required === false ? '?' : ''}: ${tsType}`)
          const desc = normalizeDescription(p.description)
          paramDocs.push(
            `@param {${tsType}} ${p.required === false ? `[${p.name}]` : p.name}${desc ? ` ${desc}` : ''}`,
          )
        }
        const interpolated = url.replace(/{([^}]+)}/g, (_, name) => `\${${name}}`)
        requestParams.push(`path: \`${interpolated}\``)
      } else {
        requestParams.push(`path: '${url}'`)
      }

      // Dedupe query params by name (last wins). Dotted names like
      // "file_stream.CanRead" aren't valid JS identifiers, so we alias them to
      // a safe identifier for the signature and rebuild the original key in
      // the `params` object using a string-quoted property.
      if (queryParams.length) {
        const seen = new Map()
        for (const p of queryParams) {
          seen.set(p.name, {
            tsType: resolveParamType(p.schema),
            required: !!p.required,
            description: p.description,
          })
        }
        const paramPairs = []
        for (const [rawName, meta] of seen) {
          const alias = safeIdentifier(rawName)
          const tsName = alias ?? rawName
          functionParams.push(alias ? `'${rawName}': ${alias}` : rawName)
          functionTypes.push(
            `${alias ? `'${rawName}'` : rawName}${meta.required ? '' : '?'}: ${meta.tsType}`,
          )
          const desc = normalizeDescription(meta.description)
          paramDocs.push(
            `@param {${meta.tsType}} ${meta.required ? rawName : `[${rawName}]`}${desc ? ` ${desc}` : ''}`,
          )
          paramPairs.push(alias ? `'${rawName}': ${tsName}` : rawName)
        }
        requestParams.push(`params: { ${paramPairs.join(', ')} }`)
      }

      const { type: returnType, isBinary } = resolveResponseType({
        method,
        url,
        responses: methodDefinition.responses,
        sectionHint,
        usedSchemas,
        usedHelpers,
      })

      if (isBinary) {
        requestParams.push(`responseType: 'arraybuffer'`)
      }

      const jsDoc = buildJsDoc({
        summary: methodDefinition.summary,
        description: methodDefinition.description,
        paramDocs,
      })

      // Build the function. When no params, emit `()` instead of destructured empty object.
      const signature = functionParams.length
        ? `{ ${functionParams.join(', ')} }: { ${functionTypes.join(', ')} }`
        : ''

      functions.push(
        [
          jsDoc,
          `${operationName}(${signature}): Promise<${returnType}> {`,
          `    return this.request({ ${requestParams.join(', ')} })`,
          `  }`,
        ]
          .filter(Boolean)
          .join('\n  '),
      )
    }
  }

  // Build imports and per-section type aliases from the schemas referenced
  // anywhere in this section's request/response signatures.
  const sortedSchemas = [...usedSchemas].sort()
  const sortedHelpers = [...usedHelpers].sort()

  const helperImport = sortedHelpers.length
    ? `import type { ${sortedHelpers.join(', ')} } from '../types'\n`
    : ''
  const schemaBlock = sortedSchemas.length
    ? [
        `import type { components } from '../types'`,
        `type schemas = components['schemas']`,
        ...sortedSchemas.map((n) => `/** {@link ${n}} */\nexport type ${n} = schemas['${n}']`),
        '',
      ].join('\n')
    : ''

  return `/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
${helperImport}${schemaBlock}
/**
 * @module ${apiName}API
 */

/**
 * ${apiName} module
 * @public
 */
export class ${apiName}API extends BaseAPI {
  ${functions.join('\n\n  ')}
}
`
}

module.exports = {
  generateAPIClass,
  generateOperationName,
  normalizeDescription,
}
