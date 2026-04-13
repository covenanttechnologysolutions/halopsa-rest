/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module TwilioAPI
 */

/**
 * Twilio module
 * @public
 */
export class TwilioAPI extends BaseAPI {
  /**
   * @param {string} [guid]
   */
  postTwilioCallback({ file, guid }: { file: File; guid?: string }): Promise<unknown> {
    return this.request({ method: 'post', data: file, path: '/Twilio/callback', params: { guid } })
  }

  /**
   * @param {string} [guid]
   */
  postTwilioTwiml({ file, guid }: { file: File; guid?: string }): Promise<unknown> {
    return this.request({ method: 'post', data: file, path: '/Twilio/twiml', params: { guid } })
  }
}
