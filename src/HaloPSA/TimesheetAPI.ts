/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Timesheet} */
export type Timesheet = schemas['Timesheet']

/**
 * @module TimesheetAPI
 */

/**
 * Timesheet module
 * @public
 */
export class TimesheetAPI extends BaseAPI {
  getTimesheet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Timesheet' })
  }

  postTimesheet({ timesheetList }: { timesheetList: Array<Timesheet> }): Promise<Timesheet> {
    return this.request({ method: 'post', data: timesheetList, path: '/Timesheet' })
  }

  getTimesheetMine(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Timesheet/mine' })
  }

  getTimesheetForecasting(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Timesheet/forecasting' })
  }

  /**
   * @summary Get one Timesheet
   * @description Use this to return a single instance of Timesheet. Requires authentication.
   * @param {number} id
   * @param {number} [agent_id]
   * @param {string} [date]
   */
  getTimesheetById({
    id,
    agent_id,
    date,
  }: {
    id: number
    agent_id?: number
    date?: string
  }): Promise<Timesheet> {
    return this.request({ method: 'get', path: `/Timesheet/${id}`, params: { agent_id, date } })
  }
}
