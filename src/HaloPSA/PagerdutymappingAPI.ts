/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module PagerdutymappingAPI
 */

/**
 * Pagerdutymapping module
 * @public
 */
export class PagerdutymappingAPI extends BaseAPI {
  /**
   * @summary List of PagerDutyMapping
   * @description Use this to return multiple PagerDutyMapping. Requires authentication.
   * @param {string} [service_id]
   */
  getPagerdutymapping({ service_id }: { service_id?: string }): Promise<unknown> {
    return this.request({ method: 'get', path: '/pagerdutymapping', params: { service_id } })
  }
}
