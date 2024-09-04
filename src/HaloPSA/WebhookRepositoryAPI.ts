/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module WebhookRepositoryAPI
 */

/**
 * WebhookRepository module
 * @public
 */
export class WebhookRepositoryAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Webhook
   * @description Use this to return multiple Webhook.<br>
				Requires authentication.
   * @param {boolean} isazureautomation 
   * @param {number} type 
   */
  getWebhookRepository(isazureautomation: boolean, type: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/WebhookRepository',
      params: {
        isazureautomation,
        type,
      },
    })
  }

  /**
   * @summary Get one Webhook
   * @description Use this to return a single instance of Webhook.<br>
				Requires authentication.
   * @param {string} id 
   * @param {boolean} includedetails 
   */
  getWebhookRepositoryById(id: string, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/WebhookRepository/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
