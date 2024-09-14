/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AWSDetails} */
export type AWSDetails = schemas['AWSDetails']

/**
 * @module AWSDetailsAPI
 */

/**
 * AWSDetails module
 * @public
 */
export class AWSDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAWSDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AWSDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postAWSDetails({ aWSDetails }: { aWSDetails: Array<AWSDetails> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AWSDetails',
      data: aWSDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getAWSDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AWSDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAWSDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/AWSDetails/${id}`,
    })
  }
}
