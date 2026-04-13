/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class WebhookAPI extends BaseAPI {
  /**
   * @summary List of Webhook
   * @description Use this to return multiple Webhook. Requires authentication.
   * @param {boolean} [isazureautomation]
   * @param {number} [type]
   */
  getWebhook({
    isazureautomation,
    type,
  }: {
    isazureautomation?: boolean
    type?: number
  }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Webhook', params: { isazureautomation, type } })
  }

  postWebhook({ webhookList }: { webhookList: Array<Webhook> }): Promise<Webhook> {
    return this.request({ method: 'post', data: webhookList, path: '/Webhook' })
  }

  /**
   * @summary Get one Webhook
   * @description Use this to return a single instance of Webhook. Requires authentication.
   * @param {string} id
   * @param {boolean} [includedetails]
   */
  getWebhookById({
    id,
    includedetails,
  }: {
    id: string
    includedetails?: boolean
  }): Promise<Webhook> {
    return this.request({ method: 'get', path: `/Webhook/${id}`, params: { includedetails } })
  }

  /**
   * @param {string} id
   */
  deleteWebhookById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Webhook/${id}` })
  }
}
