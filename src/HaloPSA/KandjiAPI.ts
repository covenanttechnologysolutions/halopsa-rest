/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module KandjiAPI
 */

/**
 * Kandji module
 * @public
 */
export class KandjiAPI extends BaseAPI {
  getKandjiGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Kandji/Get' })
  }
}
