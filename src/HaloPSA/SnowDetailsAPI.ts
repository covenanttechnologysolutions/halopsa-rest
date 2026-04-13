/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SnowDetails} */
export type SnowDetails = schemas['SnowDetails']

/**
 * @module SnowDetailsAPI
 */

/**
 * SnowDetails module
 * @public
 */
export class SnowDetailsAPI extends BaseAPI {
  /**
   * @summary List of SnowDetails
   * @description Use this to return multiple SnowDetails. Requires authentication.
   * @param {boolean} [includedetails]
   */
  getSnowDetails({ includedetails }: { includedetails?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: '/SnowDetails', params: { includedetails } })
  }

  postSnowDetails({
    snowDetailsList,
  }: {
    snowDetailsList: Array<SnowDetails>
  }): Promise<SnowDetails> {
    return this.request({ method: 'post', data: snowDetailsList, path: '/SnowDetails' })
  }

  /**
   * @summary Get one SnowDetails
   * @description Use this to return a single instance of SnowDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [doDecrypt]
   * @param {boolean} [includedetails]
   */
  getSnowDetailsById({
    id,
    doDecrypt,
    includedetails,
  }: {
    id: number
    doDecrypt?: boolean
    includedetails?: boolean
  }): Promise<SnowDetails> {
    return this.request({
      method: 'get',
      path: `/SnowDetails/${id}`,
      params: { doDecrypt, includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteSnowDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SnowDetails/${id}` })
  }
}
