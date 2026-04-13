/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link MailCampaignEmail} */
export type MailCampaignEmail = schemas['MailCampaignEmail']

/**
 * @module MailCampaignEmailAPI
 */

/**
 * MailCampaignEmail module
 * @public
 */
export class MailCampaignEmailAPI extends BaseAPI {
  getMailCampaignEmail(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MailCampaignEmail' })
  }

  postMailCampaignEmail({
    mailCampaignEmailList,
  }: {
    mailCampaignEmailList: Array<MailCampaignEmail>
  }): Promise<MailCampaignEmail> {
    return this.request({ method: 'post', data: mailCampaignEmailList, path: '/MailCampaignEmail' })
  }

  /**
   * @param {number} id
   */
  getMailCampaignEmailById({ id }: { id: number }): Promise<MailCampaignEmail> {
    return this.request({ method: 'get', path: `/MailCampaignEmail/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteMailCampaignEmailById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/MailCampaignEmail/${id}` })
  }
}
