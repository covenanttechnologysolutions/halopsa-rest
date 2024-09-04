/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class TimesheetEventAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of TimesheetEvent
   * @description Use this to return multiple TimesheetEvent.<br>
				Requires authentication.
   * @param {number} agent_id 
   * @param {string} agents 
   * @param {string} end_date 
   * @param {string} start_date 
   * @param {number} utcoffset 
   */
  getTimesheetEvent(
    agent_id: number,
    agents: string,
    end_date: string,
    start_date: string,
    utcoffset: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TimesheetEvent',
      params: {
        agent_id,
        agents,
        end_date,
        start_date,
        utcoffset,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postTimesheetEvent(timesheetEvent: Array<TimesheetEvent>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TimesheetEvent',
      data: timesheetEvent,
    })
  }

  /**
   * 
   * 
   
   */
  getTimesheetEventMine(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TimesheetEvent/mine',
    })
  }

  /**
   * @summary Get one TimesheetEvent
   * @description Use this to return a single instance of TimesheetEvent.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getTimesheetEventById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TimesheetEvent/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTimesheetEventById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TimesheetEvent/${id}`,
    })
  }
}
