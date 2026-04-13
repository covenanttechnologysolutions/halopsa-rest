/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link MailCampaign} */
export type MailCampaign = schemas['MailCampaign']

/**
 * @module MailCampaignAPI
 */

/**
 * MailCampaign module
 * @public
 */
export class MailCampaignAPI extends BaseAPI {
  getMailCampaign(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MailCampaign' })
  }

  postMailCampaign({
    mailCampaignList,
  }: {
    mailCampaignList: Array<MailCampaign>
  }): Promise<MailCampaign> {
    return this.request({ method: 'post', data: mailCampaignList, path: '/MailCampaign' })
  }

  /**
   * @param {number} id
   */
  getMailCampaignById({ id }: { id: number }): Promise<MailCampaign> {
    return this.request({ method: 'get', path: `/MailCampaign/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteMailCampaignById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/MailCampaign/${id}` })
  }
}
