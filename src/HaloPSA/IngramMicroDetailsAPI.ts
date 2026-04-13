/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link IngramMicroDetails} */
export type IngramMicroDetails = schemas['IngramMicroDetails']

/**
 * @module IngramMicroDetailsAPI
 */

/**
 * IngramMicroDetails module
 * @public
 */
export class IngramMicroDetailsAPI extends BaseAPI {
  getIngramMicroDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IngramMicroDetails' })
  }

  postIngramMicroDetails({
    ingramMicroDetailsList,
  }: {
    ingramMicroDetailsList: Array<IngramMicroDetails>
  }): Promise<IngramMicroDetails> {
    return this.request({
      method: 'post',
      data: ingramMicroDetailsList,
      path: '/IngramMicroDetails',
    })
  }

  /**
   * @summary Get one IngramMicroDetails
   * @description Use this to return a single instance of IngramMicroDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getIngramMicroDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<IngramMicroDetails> {
    return this.request({
      method: 'get',
      path: `/IngramMicroDetails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteIngramMicroDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/IngramMicroDetails/${id}` })
  }
}
