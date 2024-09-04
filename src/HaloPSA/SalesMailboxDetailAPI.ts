/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link SalesMailboxDetail} */
export type SalesMailboxDetail = schemas['SalesMailboxDetail']

/**
 * @module SalesMailboxDetailAPI
 */

/**
 * SalesMailboxDetail module
 * @public
 */
export class SalesMailboxDetailAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  postSalesMailboxDetail(salesMailboxDetail: Array<SalesMailboxDetail>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SalesMailboxDetail',
      data: salesMailboxDetail,
    })
  }
}
