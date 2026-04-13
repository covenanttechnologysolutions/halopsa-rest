/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class AmazonSellerDetailsAPI extends BaseAPI {
  getAmazonSellerDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AmazonSellerDetails' })
  }

  postAmazonSellerDetails({
    amazonSellerDetailsList,
  }: {
    amazonSellerDetailsList: Array<AmazonSellerDetails>
  }): Promise<AmazonSellerDetails> {
    return this.request({
      method: 'post',
      data: amazonSellerDetailsList,
      path: '/AmazonSellerDetails',
    })
  }

  /**
   * @param {number} id
   */
  getAmazonSellerDetailsById({ id }: { id: number }): Promise<AmazonSellerDetails> {
    return this.request({ method: 'get', path: `/AmazonSellerDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAmazonSellerDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AmazonSellerDetails/${id}` })
  }
}
