/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module IntegratorLogAPI
 */

/**
 * IntegratorLog module
 * @public
 */
export class IntegratorLogAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of IntegratorLog
   * @description Use this to return multiple IntegratorLog.<br>
				Requires authentication.
   * @param {number} [module_id] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   */
  getIntegratorLog({
    module_id,
    page_no,
    page_size,
    pageinate,
  }: {
    module_id?: number
    page_no?: number
    page_size?: number
    pageinate?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegratorLog',
      params: {
        module_id,
        page_no,
        page_size,
        pageinate,
      },
    })
  }
}
