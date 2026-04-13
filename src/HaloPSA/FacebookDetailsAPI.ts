/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link FacebookDetails} */
export type FacebookDetails = schemas['FacebookDetails']

/**
 * @module FacebookDetailsAPI
 */

/**
 * FacebookDetails module
 * @public
 */
export class FacebookDetailsAPI extends BaseAPI {
  /**
   * @summary List of FacebookDetails
   * @description Use this to return multiple FacebookDetails. Requires authentication.
   * @param {string} [page_id]
   */
  getFacebookDetails({ page_id }: { page_id?: string }): Promise<unknown> {
    return this.request({ method: 'get', path: '/FacebookDetails', params: { page_id } })
  }

  postFacebookDetails({
    facebookDetailsList,
  }: {
    facebookDetailsList: Array<FacebookDetails>
  }): Promise<FacebookDetails> {
    return this.request({ method: 'post', data: facebookDetailsList, path: '/FacebookDetails' })
  }

  /**
   * @summary Get one FacebookDetails
   * @description Use this to return a single instance of FacebookDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getFacebookDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<FacebookDetails> {
    return this.request({
      method: 'get',
      path: `/FacebookDetails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteFacebookDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/FacebookDetails/${id}` })
  }
}
