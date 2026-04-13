/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module IntegratorScheduleAPI
 */

/**
 * IntegratorSchedule module
 * @public
 */
export class IntegratorScheduleAPI extends BaseAPI {
  /**
   * @summary List of IntegratorSchedule
   * @description Use this to return multiple IntegratorSchedule. Requires authentication.
   * @param {number} [page_no]
   * @param {number} [page_size]
   * @param {boolean} [pageinate]
   */
  getIntegratorSchedule({
    page_no,
    page_size,
    pageinate,
  }: {
    page_no?: number
    page_size?: number
    pageinate?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegratorSchedule',
      params: { page_no, page_size, pageinate },
    })
  }
}
