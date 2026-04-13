/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link MailboxCredential} */
export type MailboxCredential = schemas['MailboxCredential']

/**
 * @module MailboxCredentialAPI
 */

/**
 * MailboxCredential module
 * @public
 */
export class MailboxCredentialAPI extends BaseAPI {
  getMailboxCredential(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MailboxCredential' })
  }

  postMailboxCredential({
    mailboxCredentialList,
  }: {
    mailboxCredentialList: Array<MailboxCredential>
  }): Promise<MailboxCredential> {
    return this.request({ method: 'post', data: mailboxCredentialList, path: '/MailboxCredential' })
  }

  /**
   * @param {number} id
   */
  getMailboxCredentialById({ id }: { id: number }): Promise<MailboxCredential> {
    return this.request({ method: 'get', path: `/MailboxCredential/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteMailboxCredentialById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/MailboxCredential/${id}` })
  }
}
