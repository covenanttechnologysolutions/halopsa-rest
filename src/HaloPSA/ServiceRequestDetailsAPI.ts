/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ServiceRequestDetailsAPI
 */

/**
 * ServiceRequestDetails module
 * @public
 */
export class ServiceRequestDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ServiceRequestDetails
   * @description Use this to return multiple ServiceRequestDetails.<br>
				Requires authentication.
   * @param {boolean} exclude_urls 
   * @param {boolean} includedetails 
   * @param {number} service_id 
   */
  getServiceRequestDetails(
    exclude_urls: boolean,
    includedetails: boolean,
    service_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ServiceRequestDetails',
      params: {
        exclude_urls,
        includedetails,
        service_id,
      },
    })
  }
}
