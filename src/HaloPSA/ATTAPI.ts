/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ATTAPI
 */

/**
 * ATT module
 * @public
 */
export class ATTAPI extends BaseAPI {
  getATTPriceAndAvailability(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ATT/PriceAndAvailability' })
  }
}
