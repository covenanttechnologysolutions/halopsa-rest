/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ChangeCalendarAPI
 */

/**
 * ChangeCalendar module
 * @public
 */
export class ChangeCalendarAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getChangeCalendar({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ChangeCalendar',
    })
  }
}
