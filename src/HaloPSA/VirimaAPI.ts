/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module VirimaAPI
 */

/**
 * Virima module
 * @public
 */
export class VirimaAPI extends BaseAPI {
  getVirimaGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Virima/Get' })
  }
}
