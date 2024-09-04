/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AdobeAcrobatDetails} */
export type AdobeAcrobatDetails = schemas['AdobeAcrobatDetails']

/**
 * @module AdobeAcrobatDetailsAPI
 */

/**
 * AdobeAcrobatDetails module
 * @public
 */
export class AdobeAcrobatDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAdobeAcrobatDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AdobeAcrobatDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postAdobeAcrobatDetails(adobeAcrobatDetails: Array<AdobeAcrobatDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AdobeAcrobatDetails',
      data: adobeAcrobatDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getAdobeAcrobatDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AdobeAcrobatDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAdobeAcrobatDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/AdobeAcrobatDetails/${id}`,
    })
  }
}
