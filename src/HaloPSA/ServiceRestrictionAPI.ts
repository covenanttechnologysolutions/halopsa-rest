/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ServiceRestrictionAPI
 */

/**
 * ServiceRestriction module
 * @public
 */
export class ServiceRestrictionAPI extends BaseAPI {
  /**
   * @summary List of ServiceRestriction
   * @description Use this to return multiple ServiceRestriction. Requires authentication.
   * @param {number} [client_id]
   * @param {number} [service_category_id]
   * @param {number} [service_id]
   */
  getServiceRestriction({
    client_id,
    service_category_id,
    service_id,
  }: {
    client_id?: number
    service_category_id?: number
    service_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/ServiceRestriction',
      params: { client_id, service_category_id, service_id },
    })
  }
}
