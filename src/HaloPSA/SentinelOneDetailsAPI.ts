/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SentinelOneDetails} */
export type SentinelOneDetails = schemas['SentinelOneDetails']

/**
 * @module SentinelOneDetailsAPI
 */

/**
 * SentinelOneDetails module
 * @public
 */
export class SentinelOneDetailsAPI extends BaseAPI {
  getSentinelOneDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SentinelOneDetails' })
  }

  postSentinelOneDetails({
    sentinelOneDetailsList,
  }: {
    sentinelOneDetailsList: Array<SentinelOneDetails>
  }): Promise<SentinelOneDetails> {
    return this.request({
      method: 'post',
      data: sentinelOneDetailsList,
      path: '/SentinelOneDetails',
    })
  }

  /**
   * @param {number} id
   */
  getSentinelOneDetailsById({ id }: { id: number }): Promise<SentinelOneDetails> {
    return this.request({ method: 'get', path: `/SentinelOneDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteSentinelOneDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SentinelOneDetails/${id}` })
  }
}
