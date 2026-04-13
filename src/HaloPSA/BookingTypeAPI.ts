/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module BookingTypeAPI
 */

/**
 * BookingType module
 * @public
 */
export class BookingTypeAPI extends BaseAPI {
  /**
   * @summary List of BookingType
   * @description Use this to return multiple BookingType. Requires authentication.
   * @param {number} [type]
   */
  getBookingType({ type }: { type?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/BookingType', params: { type } })
  }
}
