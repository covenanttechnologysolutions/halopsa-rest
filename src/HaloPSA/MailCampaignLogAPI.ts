/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module MailCampaignLogAPI
 */

/**
 * MailCampaignLog module
 * @public
 */
export class MailCampaignLogAPI extends BaseAPI {
  getMailCampaignLog(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MailCampaignLog' })
  }

  /**
   * @param {number} id
   */
  getMailCampaignLogById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/MailCampaignLog/${id}` })
  }
}
