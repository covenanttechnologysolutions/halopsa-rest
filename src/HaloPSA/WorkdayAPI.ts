/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class WorkdayAPI extends BaseAPI {
  /**
   * @summary List of Workdays
   * @description Use this to return multiple Workdays. Requires authentication.
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
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Workday',
      params: { access_control_level, isconfig, showholidays },
    })
  }

  postWorkday({ workdaysList }: { workdaysList: Array<Workdays> }): Promise<unknown> {
    return this.request({ method: 'post', data: workdaysList, path: '/Workday' })
  }

  /**
   * @summary Get one Workdays
   * @description Use this to return a single instance of Workdays. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getWorkdayById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Workday/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteWorkdayById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Workday/${id}` })
  }
}
