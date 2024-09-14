/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link SalesMailbox} */
export type SalesMailbox = schemas['SalesMailbox']

/**
 * @module SalesMailboxAPI
 */

/**
 * SalesMailbox module
 * @public
 */
export class SalesMailboxAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getSalesMailbox({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SalesMailbox',
    })
  }

  /**
   * 
   * 
   
   */
  postSalesMailbox({ salesMailbox }: { salesMailbox: Array<SalesMailbox> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SalesMailbox',
      data: salesMailbox,
    })
  }

  /**
   * @summary Get one SalesMailbox
   * @description Use this to return a single instance of SalesMailbox.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [_test_access] 
   * @param {boolean} [includedetails] 
   */
  getSalesMailboxById({
    id,
    _test_access,
    includedetails,
  }: {
    id: number
    _test_access?: boolean
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SalesMailbox/${id}`,
      params: {
        _test_access,
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteSalesMailboxById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SalesMailbox/${id}`,
    })
  }
}
