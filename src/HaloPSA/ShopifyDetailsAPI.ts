/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ShopifyDetails} */
export type ShopifyDetails = schemas['ShopifyDetails']

/**
 * @module ShopifyDetailsAPI
 */

/**
 * ShopifyDetails module
 * @public
 */
export class ShopifyDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getShopifyDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ShopifyDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postShopifyDetails(shopifyDetails: Array<ShopifyDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ShopifyDetails',
      data: shopifyDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getShopifyDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ShopifyDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteShopifyDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ShopifyDetails/${id}`,
    })
  }
}
