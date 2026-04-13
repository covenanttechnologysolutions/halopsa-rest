/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Journey} */
export type Journey = schemas['Journey']

/**
 * @module JourneyAPI
 */

/**
 * Journey module
 * @public
 */
export class JourneyAPI extends BaseAPI {
  getJourney(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Journey' })
  }

  postJourney({ journeyList }: { journeyList: Array<Journey> }): Promise<Journey> {
    return this.request({ method: 'post', data: journeyList, path: '/Journey' })
  }

  /**
   * @summary Get one Journey
   * @description Use this to return a single instance of Journey. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getJourneyById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<Journey> {
    return this.request({ method: 'get', path: `/Journey/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteJourneyById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Journey/${id}` })
  }
}
