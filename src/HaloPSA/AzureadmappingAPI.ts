/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module AzureadmappingAPI
 */

/**
 * Azureadmapping module
 * @public
 */
export class AzureadmappingAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of AzureADMapping
   * @description Use this to return multiple AzureADMapping.<br>
				Requires authentication.
   * @param {number} connection_id 
   */
  getAzureadmapping(connection_id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/azureadmapping',
      params: {
        connection_id,
      },
    })
  }
}
