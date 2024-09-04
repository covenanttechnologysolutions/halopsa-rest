const typeMapSanitize = (input = '') => {
  switch (input) {
    case 'double':
      return 'number'
    case 'bool':
      return 'boolean'
    case 'integer':
      return 'number'
    case 'int':
      return 'number'
    case 'application/octet-stream':
      return 'OctetStreamResponse'
    case 'application/pdf':
      return 'PDFResponse'
    case 'text/html':
      return 'HTMLResponse'
    case 'List<int>':
      return 'Array<number>'
    default:
      return sanitizeType(input)
  }
}

// remove invalid var name from the name of the type
const sanitizeType = (input = '') => input.replace(/\./g, '').replace(/\//g, '')
const generateTypeDef = ({ typeName, schemaType }) => {
  let name = sanitizeType(typeName)

  return schemaType === 'schemas'
    ? `/** {@link ${name}} */
export type ${name} = schemas['${typeName}']`
    : `/** {@link ${name}} */
export type ${name} = requestBodies['${typeName}']`
}

/**
 * Generates a name based on HTTP method and URL template.
 *
 * @param {string} method - The HTTP method (e.g., 'get', 'post', etc.).
 * @param {string} url - The URL template (e.g., '/users/{id}', '/products').
 * @return {string} A concatenated string representing the name.
 */
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
        return token.charAt(0).toUpperCase() + token.slice(1)
      })
      .join('')
      // strip invalid characters from function names
      .replaceAll(/([^a-zA-Z0-9_$])/g, '')
  )
}

/**
 * decipher supplied definition files
 * @param {{}} options
 * @param {string} options.apiName
 * @param {[]} options.operations
 */
function generateAPIClass({ apiName, operations = [] }) {
  // types holder for generating type aliases
  // type Types = Record<string, string>
  // system name, sanitized name
  const types = {}
  const requestBodies = {}

  const functions = []

  // loop over each defined operation for this module
  operations.forEach(({ url, methods }) => {
    // loop over each method for this url
    Object.keys(methods).forEach((method) => {
      const methodDefinition = methods[method]

      const operationName = generateOperationName({ method, url })
      const pathParams = methodDefinition.parameters?.filter((param) => param.in === 'path') ?? []
      const queryParams = methodDefinition.parameters?.filter((param) => param.in === 'query') ?? []
      const body = methodDefinition.requestBody
      let returnType = 'any'

      const requestParams = [] // holder for `this.request({ ... })
      const functionParams = [] // holder for functionName({ ... })

      requestParams.push(`method: '${method}'`)
      if (pathParams.length === 0) {
        requestParams.push(`path: '${url}'`)
      }

      // calculate body params
      if (body) {
        // extract type and name from schema
        let bodyType, bodyName
        // check if body is form-data
        if (body.content['multipart/form-data']) {
          bodyName = 'file'
          bodyType = 'File'
        } else if (body.content['application/json'].schema.$ref) {
          // check if ref to another type is defined:
          bodyType = body.content['application/json'].schema.$ref.split('/').pop()
          bodyName = bodyType.charAt(0).toLowerCase() + bodyType.slice(1)
          types[bodyType] = { schemaType: 'schemas' }
        } else {
          bodyType = body.content['application/json'].schema.type
          bodyName = bodyType
          // if array type
          if (bodyType === 'array') {
            // if array is a typed type
            if (body.content['application/json'].schema.items.$ref) {
              const arrayItemType = body.content['application/json'].schema.items.$ref
                .split('/')
                .pop()
              bodyName = arrayItemType.charAt(0).toLowerCase() + arrayItemType.slice(1)
              bodyType = `Array<${arrayItemType}>`
              types[arrayItemType] = { schemaType: 'schemas' }
            } else {
              // array is a built-in type
              bodyType = typeMapSanitize(body.content['application/json'].schema.items.type)
              bodyName = `list${bodyType.charAt(0).toUpperCase() + bodyType.slice(1)}`
            }
          }
        }
        requestParams.push(`data: ${bodyName}`)
        functionParams.push(`${bodyName}: ${bodyType}`)
      }

      // calculate path params
      if (pathParams.length > 0) {
        pathParams.forEach((param) => {
          const paramName = param.name
          let paramType = param.schema.type
          const sanitizedParamType = typeMapSanitize(paramType)
          functionParams.push(`${paramName}: ${sanitizedParamType}`)
        })
        requestParams.push(`path: \`${url.replaceAll(/({.+?})/g, (_, p1) => `$${p1}`)}\``)
      }

      // calculate query params
      if (queryParams.length > 0) {
        let params = {} // use map to squash duplicates
        queryParams.forEach((param) => {
          const paramName = param.name
          const paramType = param.schema?.type ?? 'any'
          params[paramName] = typeMapSanitize(paramType)
        })
        Object.keys(params).forEach((paramName) => {
          functionParams.push(`${paramName}: ${params[paramName]}`)
        })
        requestParams.push(`params: {
        ${Object.keys(params).join(', ')}
        }`)
      }

      // calculate jsdoc
      const paramsDocs = {}
      if (methodDefinition.parameters) {
        methodDefinition.parameters.forEach((param) => {
          const paramName = param.name
          const paramType = param.schema?.type
          const description = param.description ?? ''
          const sanitizedParamType = typeMapSanitize(paramType)
          paramsDocs[paramName] = `* @param {${sanitizedParamType}} ${paramName} ${description}`
        })
      }

      functions.push(`
  /**
   * ${methodDefinition.summary ? `@summary ${methodDefinition.summary}` : ''}
   * ${methodDefinition.description ? `@description ${methodDefinition.description}` : ''}
   ${Object.keys(paramsDocs)
     .map((docParam) => paramsDocs[docParam])
     .join('\n   ')}
   */
  ${operationName}(${functionParams.map((param) => param).join(', ')}): Promise<${returnType}> {
    return this.request({
      ${requestParams.map((param) => param).join(', ')}
      })
  }`)
    })
  })

  // use true/false map to generate required types for this module
  const typeDefs = Object.keys(
    // sort keys to order imports
    Object.keys(types)
      .sort()
      .reduce((obj, key) => {
        obj[key] = types[key]
        return obj
      }, {}),
  ).map((type) => generateTypeDef({ typeName: type, schemaType: types[type].schemaType }))

  return `/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
${typeDefs.join('\n')}

/**
 * @module ${apiName}API
 */

/**
 * ${apiName} module
 * @public
 */
export class ${apiName}API extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  ${functions.join('\n')}
}
  `
}

module.exports = {
  generateAPIClass,
}
