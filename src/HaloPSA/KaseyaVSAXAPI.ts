/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module KaseyaVSAXAPI
 */

/**
 * KaseyaVSAX module
 * @public
 */
export class KaseyaVSAXAPI extends BaseAPI {
  getKaseyaVSAXGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/KaseyaVSAX/Get' })
  }

  /**
   * @param {number} detailsId
   */
  postKaseyaVSAXCreateWebhookDetailsId({ detailsId }: { detailsId: number }): Promise<unknown> {
    return this.request({ method: 'post', path: `/KaseyaVSAX/CreateWebhook/${detailsId}` })
  }

  /**
   * @param {number} detailsId
   */
  deleteKaseyaVSAXDeleteWebhookDetailsId({ detailsId }: { detailsId: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/KaseyaVSAX/DeleteWebhook/${detailsId}` })
  }
}
