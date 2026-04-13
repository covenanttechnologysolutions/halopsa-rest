/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link TwilioWhatsAppDetails} */
export type TwilioWhatsAppDetails = schemas['TwilioWhatsAppDetails']

/**
 * @module TwilioWhatsAppDetailsAPI
 */

/**
 * TwilioWhatsAppDetails module
 * @public
 */
export class TwilioWhatsAppDetailsAPI extends BaseAPI {
  getTwilioWhatsAppDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TwilioWhatsAppDetails' })
  }

  postTwilioWhatsAppDetails({
    twilioWhatsAppDetailsList,
  }: {
    twilioWhatsAppDetailsList: Array<TwilioWhatsAppDetails>
  }): Promise<TwilioWhatsAppDetails> {
    return this.request({
      method: 'post',
      data: twilioWhatsAppDetailsList,
      path: '/TwilioWhatsAppDetails',
    })
  }

  /**
   * @param {number} id
   */
  getTwilioWhatsAppDetailsById({ id }: { id: number }): Promise<TwilioWhatsAppDetails> {
    return this.request({ method: 'get', path: `/TwilioWhatsAppDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteTwilioWhatsAppDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TwilioWhatsAppDetails/${id}` })
  }
}
