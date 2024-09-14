/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module CustomIntegrationRepositoryAPI
 */

/**
 * CustomIntegrationRepository module
 * @public
 */
export class CustomIntegrationRepositoryAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getCustomIntegrationRepository({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CustomIntegrationRepository',
    })
  }

  /**
   * @summary Get one OutboundIntegration
   * @description Use this to return a single instance of OutboundIntegration.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   * @param {boolean} [includemethods] 
   * @param {number} [module_id] 
   */
  getCustomIntegrationRepositoryById({
    id,
    includedetails,
    includemethods,
    module_id,
  }: {
    id: number
    includedetails?: boolean
    includemethods?: boolean
    module_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CustomIntegrationRepository/${id}`,
      params: {
        includedetails,
        includemethods,
        module_id,
      },
    })
  }
}
