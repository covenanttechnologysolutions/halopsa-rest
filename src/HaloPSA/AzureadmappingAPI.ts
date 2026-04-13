/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module AzureadmappingAPI
 */

/**
 * Azureadmapping module
 * @public
 */
export class AzureadmappingAPI extends BaseAPI {
  /**
   * @summary List of AzureADMapping
   * @description Use this to return multiple AzureADMapping. Requires authentication.
   * @param {number} [connection_id]
   */
  getAzureadmapping({ connection_id }: { connection_id?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/azureadmapping', params: { connection_id } })
  }
}
