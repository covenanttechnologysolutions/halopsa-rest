/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link WebhookEvent} */
export type WebhookEvent = schemas['WebhookEvent']

/**
 * @module WebhookEventAPI
 */

/**
 * WebhookEvent module
 * @public
 */
export class WebhookEventAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of WebhookEvent
   * @description Use this to return multiple WebhookEvent.<br>
				Requires authentication.
   * @param {number} automation_id 
   * @param {number} count 
   * @param {boolean} idonly 
   * @param {number} integrationmethod_id 
   * @param {string} order 
   * @param {string} order2 
   * @param {string} order3 
   * @param {string} order4 
   * @param {string} order5 
   * @param {boolean} orderdesc 
   * @param {boolean} orderdesc2 
   * @param {boolean} orderdesc3 
   * @param {boolean} orderdesc4 
   * @param {boolean} orderdesc5 
   * @param {number} page_no 
   * @param {number} page_size 
   * @param {boolean} pageinate 
   * @param {string} webhook_id 
   */
  getWebhookEvent(
    automation_id: number,
    count: number,
    idonly: boolean,
    integrationmethod_id: number,
    order: string,
    order2: string,
    order3: string,
    order4: string,
    order5: string,
    orderdesc: boolean,
    orderdesc2: boolean,
    orderdesc3: boolean,
    orderdesc4: boolean,
    orderdesc5: boolean,
    page_no: number,
    page_size: number,
    pageinate: boolean,
    webhook_id: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/WebhookEvent',
      params: {
        automation_id,
        count,
        idonly,
        integrationmethod_id,
        order,
        order2,
        order3,
        order4,
        order5,
        orderdesc,
        orderdesc2,
        orderdesc3,
        orderdesc4,
        orderdesc5,
        page_no,
        page_size,
        pageinate,
        webhook_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postWebhookEvent(webhookEvent: Array<WebhookEvent>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/WebhookEvent',
      data: webhookEvent,
    })
  }

  /**
   * @summary Get one WebhookEvent
   * @description Use this to return a single instance of WebhookEvent.<br>
				Requires authentication.
   * @param {string} id 
   * @param {boolean} includedetails 
   */
  getWebhookEventById(id: string, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/WebhookEvent/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
