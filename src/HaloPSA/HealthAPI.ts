/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module HealthAPI
 */

/**
 * Health module
 * @public
 */
export class HealthAPI extends BaseAPI {
  getHealth(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Health' })
  }

  getHealthHashing(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Health/Hashing' })
  }
}
