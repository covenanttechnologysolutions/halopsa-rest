/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module BookingTypeAPI
 */

/**
 * BookingType module
 * @public
 */
export class BookingTypeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of BookingType
   * @description Use this to return multiple BookingType.<br>
				Requires authentication.
   * @param {number} [type] 
   */
  getBookingType({ type }: { type?: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/BookingType',
      params: {
        type,
      },
    })
  }
}
