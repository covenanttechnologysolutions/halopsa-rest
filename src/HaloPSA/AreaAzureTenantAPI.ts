/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module AreaAzureTenantAPI
 */

/**
 * AreaAzureTenant module
 * @public
 */
export class AreaAzureTenantAPI extends BaseAPI {
  /**
   * @summary List of AreaAzureTenant
   * @description Use this to return multiple AreaAzureTenant. Requires authentication.
   * @param {string} [azure_tenant_id]
   * @param {number} [client_id]
   * @param {number} [details_id]
   * @param {boolean} [ignore_decrypt]
   * @param {boolean} [notset]
   * @param {boolean} [returnalliflinked]
   * @param {number} [site_id]
   */
  getAreaAzureTenant({
    azure_tenant_id,
    client_id,
    details_id,
    ignore_decrypt,
    notset,
    returnalliflinked,
    site_id,
  }: {
    azure_tenant_id?: string
    client_id?: number
    details_id?: number
    ignore_decrypt?: boolean
    notset?: boolean
    returnalliflinked?: boolean
    site_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/AreaAzureTenant',
      params: {
        azure_tenant_id,
        client_id,
        details_id,
        ignore_decrypt,
        notset,
        returnalliflinked,
        site_id,
      },
    })
  }
}
