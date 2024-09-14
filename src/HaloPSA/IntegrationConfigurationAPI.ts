/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link IntegrationConfiguration} */
export type IntegrationConfiguration = schemas['IntegrationConfiguration']

/**
 * @module IntegrationConfigurationAPI
 */

/**
 * IntegrationConfiguration module
 * @public
 */
export class IntegrationConfigurationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getIntegrationConfiguration({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationConfiguration',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationConfiguration({
    integrationConfiguration,
  }: {
    integrationConfiguration: Array<IntegrationConfiguration>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationConfiguration',
      data: integrationConfiguration,
    })
  }

  /**
   * @summary Get one IntegrationConfiguration
   * @description Use this to return a single instance of IntegrationConfiguration.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getIntegrationConfigurationById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/IntegrationConfiguration/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
