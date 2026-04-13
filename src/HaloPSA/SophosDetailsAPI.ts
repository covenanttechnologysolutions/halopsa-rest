/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SophosDetails} */
export type SophosDetails = schemas['SophosDetails']

/**
 * @module SophosDetailsAPI
 */

/**
 * SophosDetails module
 * @public
 */
export class SophosDetailsAPI extends BaseAPI {
  getSophosDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SophosDetails' })
  }

  postSophosDetails({
    sophosDetailsList,
  }: {
    sophosDetailsList: Array<SophosDetails>
  }): Promise<SophosDetails> {
    return this.request({ method: 'post', data: sophosDetailsList, path: '/SophosDetails' })
  }

  /**
   * @param {number} id
   */
  getSophosDetailsById({ id }: { id: number }): Promise<SophosDetails> {
    return this.request({ method: 'get', path: `/SophosDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteSophosDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SophosDetails/${id}` })
  }
}
