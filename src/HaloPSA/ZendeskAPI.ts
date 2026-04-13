/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ZendeskAPI
 */

/**
 * Zendesk module
 * @public
 */
export class ZendeskAPI extends BaseAPI {
  getZendeskGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Zendesk/Get' })
  }
}
