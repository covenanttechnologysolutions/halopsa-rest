/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class AdobeCommerceDetailsAPI extends BaseAPI {
  getAdobeCommerceDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AdobeCommerceDetails' })
  }

  postAdobeCommerceDetails({
    adobeCommerceDetailsList,
  }: {
    adobeCommerceDetailsList: Array<AdobeCommerceDetails>
  }): Promise<AdobeCommerceDetails> {
    return this.request({
      method: 'post',
      data: adobeCommerceDetailsList,
      path: '/AdobeCommerceDetails',
    })
  }

  /**
   * @param {number} id
   */
  getAdobeCommerceDetailsById({ id }: { id: number }): Promise<AdobeCommerceDetails> {
    return this.request({ method: 'get', path: `/AdobeCommerceDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAdobeCommerceDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AdobeCommerceDetails/${id}` })
  }
}
