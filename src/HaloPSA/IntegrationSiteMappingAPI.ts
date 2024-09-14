/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module IntegrationSiteMappingAPI
 */

/**
 * IntegrationSiteMapping module
 * @public
 */
export class IntegrationSiteMappingAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of IntegrationSiteMapping
   * @description Use this to return multiple IntegrationSiteMapping.<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationSiteMapping',
      params: {
        get_active_only,
        msid,
        third_party_client_id,
      },
    })
  }
}
