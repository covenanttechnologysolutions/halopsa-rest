/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link TenableDetails} */
export type TenableDetails = schemas['TenableDetails']

/**
 * @module TenableDetailsAPI
 */

/**
 * TenableDetails module
 * @public
 */
export class TenableDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTenableDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TenableDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postTenableDetails(tenableDetails: Array<TenableDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TenableDetails',
      data: tenableDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getTenableDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TenableDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTenableDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TenableDetails/${id}`,
    })
  }
}
