/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module RaynetAPI
 */

/**
 * Raynet module
 * @public
 */
export class RaynetAPI extends BaseAPI {
  getRaynetGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Raynet/Get' })
  }
}
