/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module EventAPI
 */

/**
 * Event module
 * @public
 */
export class EventAPI extends BaseAPI {
  getEvent(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Event' })
  }

  postEvent({ items }: { items: Array<number> }): Promise<unknown> {
    return this.request({ method: 'post', data: items, path: '/Event' })
  }

  /**
   * @param {number} id
   */
  getEventById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Event/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteEventById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Event/${id}` })
  }
}
