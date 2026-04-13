/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ForethoughtDetails} */
export type ForethoughtDetails = schemas['ForethoughtDetails']

/**
 * @module ForethoughtDetailsAPI
 */

/**
 * ForethoughtDetails module
 * @public
 */
export class ForethoughtDetailsAPI extends BaseAPI {
  getForethoughtDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ForethoughtDetails' })
  }

  postForethoughtDetails({
    forethoughtDetailsList,
  }: {
    forethoughtDetailsList: Array<ForethoughtDetails>
  }): Promise<ForethoughtDetails> {
    return this.request({
      method: 'post',
      data: forethoughtDetailsList,
      path: '/ForethoughtDetails',
    })
  }

  /**
   * @param {number} id
   */
  getForethoughtDetailsById({ id }: { id: number }): Promise<ForethoughtDetails> {
    return this.request({ method: 'get', path: `/ForethoughtDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteForethoughtDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ForethoughtDetails/${id}` })
  }
}
