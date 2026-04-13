/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SnipeITDetails} */
export type SnipeITDetails = schemas['SnipeITDetails']

/**
 * @module SnipeITDetailsAPI
 */

/**
 * SnipeITDetails module
 * @public
 */
export class SnipeITDetailsAPI extends BaseAPI {
  getSnipeITDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SnipeITDetails' })
  }

  postSnipeITDetails({
    snipeITDetailsList,
  }: {
    snipeITDetailsList: Array<SnipeITDetails>
  }): Promise<SnipeITDetails> {
    return this.request({ method: 'post', data: snipeITDetailsList, path: '/SnipeITDetails' })
  }

  /**
   * @param {number} id
   */
  getSnipeITDetailsById({ id }: { id: number }): Promise<SnipeITDetails> {
    return this.request({ method: 'get', path: `/SnipeITDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteSnipeITDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SnipeITDetails/${id}` })
  }
}
