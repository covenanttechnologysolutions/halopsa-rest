/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module WhatsAppAPI
 */

/**
 * WhatsApp module
 * @public
 */
export class WhatsAppAPI extends BaseAPI {
  getWhatsAppGetData(): Promise<unknown> {
    return this.request({ method: 'get', path: '/WhatsApp/Get/Data' })
  }

  getWhatsAppGetProcessedIds(): Promise<unknown> {
    return this.request({ method: 'get', path: '/WhatsApp/Get/ProcessedIds' })
  }
}
