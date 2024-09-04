/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module IntegrationFieldMappingAPI
 */

/**
 * IntegrationFieldMapping module
 * @public
 */
export class IntegrationFieldMappingAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of IntegrationFieldMapping
   * @description Use this to return multiple IntegrationFieldMapping.<br>
				Requires authentication.
   * @param {string} msid 
   * @param {number} product_id 
   * @param {string} subtypeid 
   * @param {boolean} syncfields 
   * @param {string} typeid 
   * @param {string} xmvalue 
   */
  getIntegrationFieldMapping(
    msid: string,
    product_id: number,
    subtypeid: string,
    syncfields: boolean,
    typeid: string,
    xmvalue: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationFieldMapping',
      params: {
        msid,
        product_id,
        subtypeid,
        syncfields,
        typeid,
        xmvalue,
      },
    })
  }
}
