/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ScheduleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Schedule
   * @description Use this to return multiple Schedule.<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Schedule',
      params: {
        includedetails,
        primaryid,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postSchedule({ schedule }: { schedule: Array<Schedule> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Schedule',
      data: schedule,
    })
  }

  /**
   * @summary Get one Schedule
   * @description Use this to return a single instance of Schedule.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getScheduleById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Schedule/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
