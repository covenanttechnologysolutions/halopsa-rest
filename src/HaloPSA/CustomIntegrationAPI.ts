/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link OutboundIntegration} */
export type OutboundIntegration = schemas['OutboundIntegration']

/**
 * @module CustomIntegrationAPI
 */

/**
 * CustomIntegration module
 * @public
 */
export class CustomIntegrationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getCustomIntegration(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CustomIntegration',
    })
  }

  /**
   * 
   * 
   
   */
  postCustomIntegration(outboundIntegration: Array<OutboundIntegration>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CustomIntegration',
      data: outboundIntegration,
    })
  }

  /**
   * @summary Get one OutboundIntegration
   * @description Use this to return a single instance of OutboundIntegration.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   * @param {boolean} includemethods 
   * @param {number} module_id 
   */
  getCustomIntegrationById(
    id: number,
    includedetails: boolean,
    includemethods: boolean,
    module_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CustomIntegration/${id}`,
      params: {
        includedetails,
        includemethods,
        module_id,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteCustomIntegrationById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/CustomIntegration/${id}`,
    })
  }
}
