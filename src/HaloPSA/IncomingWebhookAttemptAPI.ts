/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module IncomingWebhookAttemptAPI
 */

/**
 * IncomingWebhookAttempt module
 * @public
 */
export class IncomingWebhookAttemptAPI extends BaseAPI {
  getIncomingWebhookAttempt(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IncomingWebhookAttempt' })
  }
}
