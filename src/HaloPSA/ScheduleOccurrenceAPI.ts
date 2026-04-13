/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ScheduleOccurrenceAPI
 */

/**
 * ScheduleOccurrence module
 * @public
 */
export class ScheduleOccurrenceAPI extends BaseAPI {
  getScheduleOccurrence(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ScheduleOccurrence' })
  }

  postScheduleOccurrence({ items }: { items: Array<number> }): Promise<unknown> {
    return this.request({ method: 'post', data: items, path: '/ScheduleOccurrence' })
  }

  /**
   * @param {number} id
   */
  getScheduleOccurrenceById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/ScheduleOccurrence/${id}` })
  }
}
