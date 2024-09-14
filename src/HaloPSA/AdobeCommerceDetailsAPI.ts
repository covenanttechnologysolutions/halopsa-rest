/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AdobeCommerceDetails} */
export type AdobeCommerceDetails = schemas['AdobeCommerceDetails']

/**
 * @module AdobeCommerceDetailsAPI
 */

/**
 * AdobeCommerceDetails module
 * @public
 */
export class AdobeCommerceDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAdobeCommerceDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AdobeCommerceDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postAdobeCommerceDetails({
    adobeCommerceDetails,
  }: {
    adobeCommerceDetails: Array<AdobeCommerceDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AdobeCommerceDetails',
      data: adobeCommerceDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getAdobeCommerceDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AdobeCommerceDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAdobeCommerceDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/AdobeCommerceDetails/${id}`,
    })
  }
}
