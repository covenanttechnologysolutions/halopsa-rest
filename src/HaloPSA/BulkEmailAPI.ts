/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module BulkEmailAPI
 */

/**
 * BulkEmail module
 * @public
 */
export class BulkEmailAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getBulkEmail({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/BulkEmail',
    })
  }

  /**
   * @summary Get one BulkEmail
   * @description Use this to return a single instance of BulkEmail.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getBulkEmailById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/BulkEmail/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
