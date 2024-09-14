/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module PagerdutymappingAPI
 */

/**
 * Pagerdutymapping module
 * @public
 */
export class PagerdutymappingAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of PagerDutyMapping
   * @description Use this to return multiple PagerDutyMapping.<br>
				Requires authentication.
   * @param {string} [service_id] 
   */
  getPagerdutymapping({ service_id }: { service_id?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/pagerdutymapping',
      params: {
        service_id,
      },
    })
  }
}
