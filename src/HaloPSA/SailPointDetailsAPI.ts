/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SailPointDetails} */
export type SailPointDetails = schemas['SailPointDetails']

/**
 * @module SailPointDetailsAPI
 */

/**
 * SailPointDetails module
 * @public
 */
export class SailPointDetailsAPI extends BaseAPI {
  getSailPointDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SailPointDetails' })
  }

  postSailPointDetails({
    sailPointDetailsList,
  }: {
    sailPointDetailsList: Array<SailPointDetails>
  }): Promise<SailPointDetails> {
    return this.request({ method: 'post', data: sailPointDetailsList, path: '/SailPointDetails' })
  }

  /**
   * @param {number} id
   */
  getSailPointDetailsById({ id }: { id: number }): Promise<SailPointDetails> {
    return this.request({ method: 'get', path: `/SailPointDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteSailPointDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SailPointDetails/${id}` })
  }
}
