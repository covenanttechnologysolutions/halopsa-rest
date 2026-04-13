/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link AddigyDetails} */
export type AddigyDetails = schemas['AddigyDetails']

/**
 * @module AddigyDetailsAPI
 */

/**
 * AddigyDetails module
 * @public
 */
export class AddigyDetailsAPI extends BaseAPI {
  getAddigyDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AddigyDetails' })
  }

  postAddigyDetails({
    addigyDetailsList,
  }: {
    addigyDetailsList: Array<AddigyDetails>
  }): Promise<AddigyDetails> {
    return this.request({ method: 'post', data: addigyDetailsList, path: '/AddigyDetails' })
  }

  /**
   * @param {number} id
   */
  getAddigyDetailsById({ id }: { id: number }): Promise<AddigyDetails> {
    return this.request({ method: 'get', path: `/AddigyDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAddigyDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AddigyDetails/${id}` })
  }
}
