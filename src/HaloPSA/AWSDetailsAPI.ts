/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class AWSDetailsAPI extends BaseAPI {
  getAWSDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AWSDetails' })
  }

  postAWSDetails({ aWSDetailsList }: { aWSDetailsList: Array<AWSDetails> }): Promise<AWSDetails> {
    return this.request({ method: 'post', data: aWSDetailsList, path: '/AWSDetails' })
  }

  /**
   * @param {number} id
   */
  getAWSDetailsById({ id }: { id: number }): Promise<AWSDetails> {
    return this.request({ method: 'get', path: `/AWSDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAWSDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AWSDetails/${id}` })
  }
}
