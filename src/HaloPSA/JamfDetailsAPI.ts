/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link JamfDetails} */
export type JamfDetails = schemas['JamfDetails']

/**
 * @module JamfDetailsAPI
 */

/**
 * JamfDetails module
 * @public
 */
export class JamfDetailsAPI extends BaseAPI {
  getJamfDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/JamfDetails' })
  }

  postJamfDetails({
    jamfDetailsList,
  }: {
    jamfDetailsList: Array<JamfDetails>
  }): Promise<JamfDetails> {
    return this.request({ method: 'post', data: jamfDetailsList, path: '/JamfDetails' })
  }

  /**
   * @param {number} id
   */
  getJamfDetailsById({ id }: { id: number }): Promise<JamfDetails> {
    return this.request({ method: 'get', path: `/JamfDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteJamfDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/JamfDetails/${id}` })
  }
}
