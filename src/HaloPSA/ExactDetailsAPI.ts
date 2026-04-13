/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ExactDetails} */
export type ExactDetails = schemas['ExactDetails']

/**
 * @module ExactDetailsAPI
 */

/**
 * ExactDetails module
 * @public
 */
export class ExactDetailsAPI extends BaseAPI {
  /**
   * @summary List of ExactDetails
   * @description Use this to return multiple ExactDetails. Requires authentication.
   * @param {boolean} [connectedonly]
   * @param {string} [division]
   */
  getExactDetails({
    connectedonly,
    division,
  }: {
    connectedonly?: boolean
    division?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/ExactDetails',
      params: { connectedonly, division },
    })
  }

  postExactDetails({
    exactDetailsList,
  }: {
    exactDetailsList: Array<ExactDetails>
  }): Promise<ExactDetails> {
    return this.request({ method: 'post', data: exactDetailsList, path: '/ExactDetails' })
  }

  /**
   * @summary Get one ExactDetails
   * @description Use this to return a single instance of ExactDetails. Requires authentication.
   * @param {number} id
   * @param {number} [division]
   * @param {boolean} [includedetails]
   */
  getExactDetailsById({
    id,
    division,
    includedetails,
  }: {
    id: number
    division?: number
    includedetails?: boolean
  }): Promise<ExactDetails> {
    return this.request({
      method: 'get',
      path: `/ExactDetails/${id}`,
      params: { division, includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteExactDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ExactDetails/${id}` })
  }
}
