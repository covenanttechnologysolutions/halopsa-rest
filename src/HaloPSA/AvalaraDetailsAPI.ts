/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link AvalaraDetails} */
export type AvalaraDetails = schemas['AvalaraDetails']

/**
 * @module AvalaraDetailsAPI
 */

/**
 * AvalaraDetails module
 * @public
 */
export class AvalaraDetailsAPI extends BaseAPI {
  getAvalaraDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AvalaraDetails' })
  }

  postAvalaraDetails({
    avalaraDetailsList,
  }: {
    avalaraDetailsList: Array<AvalaraDetails>
  }): Promise<AvalaraDetails> {
    return this.request({ method: 'post', data: avalaraDetailsList, path: '/AvalaraDetails' })
  }

  /**
   * @param {number} id
   */
  getAvalaraDetailsById({ id }: { id: number }): Promise<AvalaraDetails> {
    return this.request({ method: 'get', path: `/AvalaraDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAvalaraDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AvalaraDetails/${id}` })
  }
}
