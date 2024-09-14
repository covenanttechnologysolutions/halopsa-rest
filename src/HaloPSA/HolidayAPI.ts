/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class HolidayAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Holidays
   * @description Use this to return multiple Holidays.<br>
				Requires authentication.
   * @param {number} [agent_id] 
   * @param {boolean} [approved_only] 
   * @param {DateTime} [end_date] 
   * @param {number} [entity] 
   * @param {boolean} [include_apid] 
   * @param {boolean} [inclusive_end] 
   * @param {boolean} [inclusive_start] 
   * @param {boolean} [my_approvals] 
   * @param {DateTime} [start_date] 
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
    end_date?: DateTime
    entity?: number
    include_apid?: boolean
    inclusive_end?: boolean
    inclusive_start?: boolean
    my_approvals?: boolean
    start_date?: DateTime
    workdayid?: number
  }): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postHoliday({ holidays }: { holidays: Array<Holidays> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Holiday',
      data: holidays,
    })
  }

  /**
   * @summary Get one Holidays
   * @description Use this to return a single instance of Holidays.<br>
				Requires authentication.
   * @param {string} id 
   * @param {boolean} [includedetails] 
   */
  getHolidayById({ id, includedetails }: { id: string; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Holiday/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  deleteHolidayById({ id }: { id: string }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Holiday/${id}`,
    })
  }
}
