/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module HaloFieldAPI
 */

/**
 * HaloField module
 * @public
 */
export class HaloFieldAPI extends BaseAPI {
  getHaloField(): Promise<unknown> {
    return this.request({ method: 'get', path: '/HaloField' })
  }
}
