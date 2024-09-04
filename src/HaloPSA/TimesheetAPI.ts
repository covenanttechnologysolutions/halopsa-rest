/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class TimesheetAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTimesheet(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Timesheet',
    })
  }

  /**
   * 
   * 
   
   */
  postTimesheet(timesheet: Array<Timesheet>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Timesheet',
      data: timesheet,
    })
  }

  /**
   * 
   * 
   
   */
  getTimesheetMine(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Timesheet/mine',
    })
  }

  /**
   * 
   * 
   
   */
  getTimesheetForecasting(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Timesheet/forecasting',
    })
  }

  /**
   * @summary Get one Timesheet
   * @description Use this to return a single instance of Timesheet.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} agent_id 
   * @param {string} date 
   */
  getTimesheetById(id: number, agent_id: number, date: string): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Timesheet/${id}`,
      params: {
        agent_id,
        date,
      },
    })
  }
}
