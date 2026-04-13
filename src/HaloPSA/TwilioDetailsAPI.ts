/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module TwilioDetailsAPI
 */

/**
 * TwilioDetails module
 * @public
 */
export class TwilioDetailsAPI extends BaseAPI {
  getTwilioDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TwilioDetails' })
  }
}
