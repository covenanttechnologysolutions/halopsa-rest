/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module IntegrationSiteMappingAPI
 */

/**
 * IntegrationSiteMapping module
 * @public
 */
export class IntegrationSiteMappingAPI extends BaseAPI {
  /**
   * @summary List of IntegrationSiteMapping
   * @description Use this to return multiple IntegrationSiteMapping. Requires authentication.
   * @param {boolean} [get_active_only]
   * @param {number} [msid]
   * @param {string} [third_party_client_id]
   */
  getIntegrationSiteMapping({
    get_active_only,
    msid,
    third_party_client_id,
  }: {
    get_active_only?: boolean
    msid?: number
    third_party_client_id?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationSiteMapping',
      params: { get_active_only, msid, third_party_client_id },
    })
  }
}
