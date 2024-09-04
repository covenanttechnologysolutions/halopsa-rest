/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ServiceRestrictionAPI
 */

/**
 * ServiceRestriction module
 * @public
 */
export class ServiceRestrictionAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ServiceRestriction
   * @description Use this to return multiple ServiceRestriction.<br>
				Requires authentication.
   * @param {number} client_id 
   * @param {number} service_category_id 
   * @param {number} service_id 
   */
  getServiceRestriction(
    client_id: number,
    service_category_id: number,
    service_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ServiceRestriction',
      params: {
        client_id,
        service_category_id,
        service_id,
      },
    })
  }
}
