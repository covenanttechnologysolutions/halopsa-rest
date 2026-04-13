/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module McpAPI
 */

/**
 * Mcp module
 * @public
 */
export class McpAPI extends BaseAPI {
  getMcp(): Promise<unknown> {
    return this.request({ method: 'get', path: '/mcp' })
  }

  postMcp(): Promise<unknown> {
    return this.request({ method: 'post', path: '/mcp' })
  }

  deleteMcp(): Promise<unknown> {
    return this.request({ method: 'delete', path: '/mcp' })
  }
}
