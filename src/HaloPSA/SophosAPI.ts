/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module SophosAPI
 */

/**
 * Sophos module
 * @public
 */
export class SophosAPI extends BaseAPI {
  getSophosGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Sophos/Get' })
  }
}
