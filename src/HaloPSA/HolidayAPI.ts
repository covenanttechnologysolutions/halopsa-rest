/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Holidays} */
export type Holidays = schemas['Holidays']

/**
 * @module HolidayAPI
 */

/**
 * Holiday module
 * @public
 */
export class HolidayAPI extends BaseAPI {
  /**
   * @summary List of Holidays
   * @description Use this to return multiple Holidays. Requires authentication.
   * @param {number} [agent_id]
   * @param {boolean} [approved_only]
   * @param {string} [end_date]
   * @param {number} [entity]
   * @param {boolean} [include_apid]
   * @param {boolean} [inclusive_end]
   * @param {boolean} [inclusive_start]
   * @param {boolean} [my_approvals]
   * @param {string} [start_date]
   * @param {number} [workdayid]
   */
  getHoliday({
    agent_id,
    approved_only,
    end_date,
    entity,
    include_apid,
    inclusive_end,
    inclusive_start,
    my_approvals,
    start_date,
    workdayid,
  }: {
    agent_id?: number
    approved_only?: boolean
    end_date?: string
    entity?: number
    include_apid?: boolean
    inclusive_end?: boolean
    inclusive_start?: boolean
    my_approvals?: boolean
    start_date?: string
    workdayid?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Holiday',
      params: {
        agent_id,
        approved_only,
        end_date,
        entity,
        include_apid,
        inclusive_end,
        inclusive_start,
        my_approvals,
        start_date,
        workdayid,
      },
    })
  }

  postHoliday({ holidaysList }: { holidaysList: Array<Holidays> }): Promise<unknown> {
    return this.request({ method: 'post', data: holidaysList, path: '/Holiday' })
  }

  /**
   * @summary Get one Holidays
   * @description Use this to return a single instance of Holidays. Requires authentication.
   * @param {string} id
   * @param {boolean} [includedetails]
   */
  getHolidayById({
    id,
    includedetails,
  }: {
    id: string
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Holiday/${id}`, params: { includedetails } })
  }

  /**
   * @param {string} id
   */
  deleteHolidayById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Holiday/${id}` })
  }
}
