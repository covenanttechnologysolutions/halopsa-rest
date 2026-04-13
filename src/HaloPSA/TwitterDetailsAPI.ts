/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link TwitterDetails} */
export type TwitterDetails = schemas['TwitterDetails']

/**
 * @module TwitterDetailsAPI
 */

/**
 * TwitterDetails module
 * @public
 */
export class TwitterDetailsAPI extends BaseAPI {
  /**
   * @summary List of TwitterDetails
   * @description Use this to return multiple TwitterDetails. Requires authentication.
   * @param {string} [account_id]
   */
  getTwitterDetails({ account_id }: { account_id?: string }): Promise<unknown> {
    return this.request({ method: 'get', path: '/TwitterDetails', params: { account_id } })
  }

  postTwitterDetails({
    twitterDetailsList,
  }: {
    twitterDetailsList: Array<TwitterDetails>
  }): Promise<TwitterDetails> {
    return this.request({ method: 'post', data: twitterDetailsList, path: '/TwitterDetails' })
  }

  /**
   * @summary Get one TwitterDetails
   * @description Use this to return a single instance of TwitterDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getTwitterDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<TwitterDetails> {
    return this.request({
      method: 'get',
      path: `/TwitterDetails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteTwitterDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TwitterDetails/${id}` })
  }
}
