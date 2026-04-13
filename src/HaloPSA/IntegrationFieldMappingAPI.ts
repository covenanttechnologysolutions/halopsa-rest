/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module IntegrationFieldMappingAPI
 */

/**
 * IntegrationFieldMapping module
 * @public
 */
export class IntegrationFieldMappingAPI extends BaseAPI {
  /**
   * @summary List of IntegrationFieldMapping
   * @description Use this to return multiple IntegrationFieldMapping. Requires authentication.
   * @param {string} [msid]
   * @param {number} [product_id]
   * @param {string} [subtypeid]
   * @param {boolean} [syncfields]
   * @param {string} [typeid]
   * @param {string} [xmvalue]
   */
  getIntegrationFieldMapping({
    msid,
    product_id,
    subtypeid,
    syncfields,
    typeid,
    xmvalue,
  }: {
    msid?: string
    product_id?: number
    subtypeid?: string
    syncfields?: boolean
    typeid?: string
    xmvalue?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationFieldMapping',
      params: { msid, product_id, subtypeid, syncfields, typeid, xmvalue },
    })
  }
}
