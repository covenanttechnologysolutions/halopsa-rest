/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class AdobeAcrobatDetailsAPI extends BaseAPI {
  getAdobeAcrobatDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AdobeAcrobatDetails' })
  }

  postAdobeAcrobatDetails({
    adobeAcrobatDetailsList,
  }: {
    adobeAcrobatDetailsList: Array<AdobeAcrobatDetails>
  }): Promise<AdobeAcrobatDetails> {
    return this.request({
      method: 'post',
      data: adobeAcrobatDetailsList,
      path: '/AdobeAcrobatDetails',
    })
  }

  /**
   * @param {number} id
   */
  getAdobeAcrobatDetailsById({ id }: { id: number }): Promise<AdobeAcrobatDetails> {
    return this.request({ method: 'get', path: `/AdobeAcrobatDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAdobeAcrobatDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AdobeAcrobatDetails/${id}` })
  }
}
