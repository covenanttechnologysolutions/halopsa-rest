/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Webhook} */
export type Webhook = schemas['Webhook']

/**
 * @module WebhookAPI
 */

/**
 * Webhook module
 * @public
 */
export class WebhookAPI extends HaloPSA {
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
  getWebhook(isazureautomation: boolean, type: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Webhook',
      params: {
        isazureautomation,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postWebhook(webhook: Array<Webhook>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Webhook',
      data: webhook,
    })
  }

  /**
   * @summary Get one Webhook
   * @description Use this to return a single instance of Webhook.<br>
				Requires authentication.
   * @param {string} id 
   * @param {boolean} includedetails 
   */
  getWebhookById(id: string, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Webhook/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  deleteWebhookById(id: string): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Webhook/${id}`,
    })
  }
}
