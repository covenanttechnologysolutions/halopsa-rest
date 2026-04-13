/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module MailchimpAPI
 */

/**
 * Mailchimp module
 * @public
 */
export class MailchimpAPI extends BaseAPI {
  getMailchimpGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Mailchimp/Get' })
  }
}
