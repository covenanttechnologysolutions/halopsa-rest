/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AmazonSellerDetails} */
export type AmazonSellerDetails = schemas['AmazonSellerDetails']

/**
 * @module AmazonSellerDetailsAPI
 */

/**
 * AmazonSellerDetails module
 * @public
 */
export class AmazonSellerDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAmazonSellerDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AmazonSellerDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postAmazonSellerDetails(amazonSellerDetails: Array<AmazonSellerDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AmazonSellerDetails',
      data: amazonSellerDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getAmazonSellerDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AmazonSellerDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAmazonSellerDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/AmazonSellerDetails/${id}`,
    })
  }
}
