/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ClientCacheAPI
 */

/**
 * ClientCache module
 * @public
 */
export class ClientCacheAPI extends BaseAPI {
  getClientCache(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ClientCache' })
  }
}
