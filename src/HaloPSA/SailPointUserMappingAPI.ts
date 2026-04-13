/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module SailPointUserMappingAPI
 */

/**
 * SailPointUserMapping module
 * @public
 */
export class SailPointUserMappingAPI extends BaseAPI {
  getSailPointUserMapping(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SailPointUserMapping' })
  }
}
