/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module IntegratorScheduleAPI
 */

/**
 * IntegratorSchedule module
 * @public
 */
export class IntegratorScheduleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of IntegratorSchedule
   * @description Use this to return multiple IntegratorSchedule.<br>
				Requires authentication.
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   */
  getIntegratorSchedule({
    page_no,
    page_size,
    pageinate,
  }: {
    page_no?: number
    page_size?: number
    pageinate?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegratorSchedule',
      params: {
        page_no,
        page_size,
        pageinate,
      },
    })
  }
}
