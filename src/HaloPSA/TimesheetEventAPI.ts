/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link TimesheetEvent} */
export type TimesheetEvent = schemas['TimesheetEvent']

/**
 * @module TimesheetEventAPI
 */

/**
 * TimesheetEvent module
 * @public
 */
export class TimesheetEventAPI extends BaseAPI {
  /**
   * @summary List of TimesheetEvent
   * @description Use this to return multiple TimesheetEvent. Requires authentication.
   * @param {number} [agent_id]
   * @param {string} [agents]
   * @param {string} [end_date]
   * @param {string} [start_date]
   * @param {number} [utcoffset]
   */
  getTimesheetEvent({
    agent_id,
    agents,
    end_date,
    start_date,
    utcoffset,
  }: {
    agent_id?: number
    agents?: string
    end_date?: string
    start_date?: string
    utcoffset?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/TimesheetEvent',
      params: { agent_id, agents, end_date, start_date, utcoffset },
    })
  }

  postTimesheetEvent({
    timesheetEventList,
  }: {
    timesheetEventList: Array<TimesheetEvent>
  }): Promise<TimesheetEvent> {
    return this.request({ method: 'post', data: timesheetEventList, path: '/TimesheetEvent' })
  }

  getTimesheetEventMine(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TimesheetEvent/mine' })
  }

  /**
   * @summary Get one TimesheetEvent
   * @description Use this to return a single instance of TimesheetEvent. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getTimesheetEventById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<TimesheetEvent> {
    return this.request({
      method: 'get',
      path: `/TimesheetEvent/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteTimesheetEventById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TimesheetEvent/${id}` })
  }
}
