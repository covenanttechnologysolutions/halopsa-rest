/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Schedule} */
export type Schedule = schemas['Schedule']

/**
 * @module ScheduleAPI
 */

/**
 * Schedule module
 * @public
 */
export class ScheduleAPI extends BaseAPI {
  /**
   * @summary List of Schedule
   * @description Use this to return multiple Schedule. Requires authentication.
   * @param {boolean} [includedetails]
   * @param {number} [primaryid]
   * @param {number} [type]
   */
  getSchedule({
    includedetails,
    primaryid,
    type,
  }: {
    includedetails?: boolean
    primaryid?: number
    type?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Schedule',
      params: { includedetails, primaryid, type },
    })
  }

  postSchedule({ scheduleList }: { scheduleList: Array<Schedule> }): Promise<Schedule> {
    return this.request({ method: 'post', data: scheduleList, path: '/Schedule' })
  }

  /**
   * @summary Get one Schedule
   * @description Use this to return a single instance of Schedule. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getScheduleById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<Schedule> {
    return this.request({ method: 'get', path: `/Schedule/${id}`, params: { includedetails } })
  }
}
