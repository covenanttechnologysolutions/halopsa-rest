/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Workdays} */
export type Workdays = schemas['Workdays']

/**
 * @module WorkdayAPI
 */

/**
 * Workday module
 * @public
 */
export class WorkdayAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Workdays
   * @description Use this to return multiple Workdays.<br>
				Requires authentication.
   * @param {number} [access_control_level] 
   * @param {boolean} [isconfig] 
   * @param {boolean} [showholidays] 
   */
  getWorkday({
    access_control_level,
    isconfig,
    showholidays,
  }: {
    access_control_level?: number
    isconfig?: boolean
    showholidays?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Workday',
      params: {
        access_control_level,
        isconfig,
        showholidays,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postWorkday({ workdays }: { workdays: Array<Workdays> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Workday',
      data: workdays,
    })
  }

  /**
   * @summary Get one Workdays
   * @description Use this to return a single instance of Workdays.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getWorkdayById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Workday/${id}`,
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
  deleteWorkdayById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Workday/${id}`,
    })
  }
}
