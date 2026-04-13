/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link IncomingWebhook} */
export type IncomingWebhook = schemas['IncomingWebhook']

/**
 * @module IncomingWebhookAPI
 */

/**
 * IncomingWebhook module
 * @public
 */
export class IncomingWebhookAPI extends BaseAPI {
  getIncomingWebhook(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IncomingWebhook' })
  }

  postIncomingWebhook({
    incomingWebhookList,
  }: {
    incomingWebhookList: Array<IncomingWebhook>
  }): Promise<IncomingWebhook> {
    return this.request({ method: 'post', data: incomingWebhookList, path: '/IncomingWebhook' })
  }

  /**
   * @param {number} id
   */
  getIncomingWebhookById({ id }: { id: number }): Promise<IncomingWebhook> {
    return this.request({ method: 'get', path: `/IncomingWebhook/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteIncomingWebhookById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/IncomingWebhook/${id}` })
  }

  postIncomingWebhookProcess({ items }: { items: Array<number> }): Promise<unknown> {
    return this.request({ method: 'post', data: items, path: '/IncomingWebhook/Process' })
  }
}
