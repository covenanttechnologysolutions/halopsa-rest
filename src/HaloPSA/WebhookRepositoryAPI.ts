/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module WebhookRepositoryAPI
 */

/**
 * WebhookRepository module
 * @public
 */
export class WebhookRepositoryAPI extends BaseAPI {
  /**
   * @summary List of Webhook
   * @description Use this to return multiple Webhook. Requires authentication.
   * @param {boolean} [isazureautomation]
   * @param {number} [type]
   */
  getWebhookRepository({
    isazureautomation,
    type,
  }: {
    isazureautomation?: boolean
    type?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/WebhookRepository',
      params: { isazureautomation, type },
    })
  }

  /**
   * @summary Get one Webhook
   * @description Use this to return a single instance of Webhook. Requires authentication.
   * @param {string} id
   * @param {boolean} [includedetails]
   */
  getWebhookRepositoryById({
    id,
    includedetails,
  }: {
    id: string
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/WebhookRepository/${id}`,
      params: { includedetails },
    })
  }
}
