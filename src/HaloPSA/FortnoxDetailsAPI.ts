/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link FortnoxDetails} */
export type FortnoxDetails = schemas['FortnoxDetails']

/**
 * @module FortnoxDetailsAPI
 */

/**
 * FortnoxDetails module
 * @public
 */
export class FortnoxDetailsAPI extends BaseAPI {
  getFortnoxDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/FortnoxDetails' })
  }

  postFortnoxDetails({
    fortnoxDetailsList,
  }: {
    fortnoxDetailsList: Array<FortnoxDetails>
  }): Promise<FortnoxDetails> {
    return this.request({ method: 'post', data: fortnoxDetailsList, path: '/FortnoxDetails' })
  }

  /**
   * @param {number} id
   */
  getFortnoxDetailsById({ id }: { id: number }): Promise<FortnoxDetails> {
    return this.request({ method: 'get', path: `/FortnoxDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteFortnoxDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/FortnoxDetails/${id}` })
  }
}
