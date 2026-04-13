/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module IntegratorLogAPI
 */

/**
 * IntegratorLog module
 * @public
 */
export class IntegratorLogAPI extends BaseAPI {
  /**
   * @summary List of IntegratorLog
   * @description Use this to return multiple IntegratorLog. Requires authentication.
   * @param {number} [module_id]
   * @param {number} [page_no]
   * @param {number} [page_size]
   * @param {boolean} [pageinate]
   */
  getIntegratorLog({
    module_id,
    page_no,
    page_size,
    pageinate,
  }: {
    module_id?: number
    page_no?: number
    page_size?: number
    pageinate?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegratorLog',
      params: { module_id, page_no, page_size, pageinate },
    })
  }
}
