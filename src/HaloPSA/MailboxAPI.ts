/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Mailbox} */
export type Mailbox = schemas['Mailbox']

/**
 * @module MailboxAPI
 */

/**
 * Mailbox module
 * @public
 */
export class MailboxAPI extends BaseAPI {
  /**
   * @summary List of Mailbox
   * @description Use this to return multiple Mailbox. Requires authentication.
   * @param {number} [department_id]
   * @param {boolean} [from_addresses]
   * @param {boolean} [ignore_default]
   * @param {number} [organisation_id]
   * @param {boolean} [showall]
   * @param {number} [team_id]
   */
  getMailbox({
    department_id,
    from_addresses,
    ignore_default,
    organisation_id,
    showall,
    team_id,
  }: {
    department_id?: number
    from_addresses?: boolean
    ignore_default?: boolean
    organisation_id?: number
    showall?: boolean
    team_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Mailbox',
      params: { department_id, from_addresses, ignore_default, organisation_id, showall, team_id },
    })
  }

  postMailbox({ mailboxList }: { mailboxList: Array<Mailbox> }): Promise<Mailbox> {
    return this.request({ method: 'post', data: mailboxList, path: '/Mailbox' })
  }

  /**
   * @summary Get one Mailbox
   * @description Use this to return a single instance of Mailbox. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {boolean} [includeglobalsmtp]
   */
  getMailboxById({
    id,
    includedetails,
    includeglobalsmtp,
  }: {
    id: number
    includedetails?: boolean
    includeglobalsmtp?: boolean
  }): Promise<Mailbox> {
    return this.request({
      method: 'get',
      path: `/Mailbox/${id}`,
      params: { includedetails, includeglobalsmtp },
    })
  }

  /**
   * @param {number} id
   */
  deleteMailboxById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Mailbox/${id}` })
  }

  /**
   * @param {number} id
   */
  getMailboxByIdOutlookContacts({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Mailbox/${id}/OutlookContacts` })
  }
}
