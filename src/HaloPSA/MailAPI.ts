/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link GmailMessage} */
export type GmailMessage = schemas['GmailMessage']
/** {@link IMAPMessage} */
export type IMAPMessage = schemas['IMAPMessage']
/** {@link Pop3Message} */
export type Pop3Message = schemas['Pop3Message']

/**
 * @module MailAPI
 */

/**
 * Mail module
 * @public
 */
export class MailAPI extends BaseAPI {
  postMailAzure(): Promise<unknown> {
    return this.request({ method: 'post', path: '/Mail/Azure' })
  }

  postMailIntegratorAzure(): Promise<unknown> {
    return this.request({ method: 'post', path: '/Mail/Integrator/Azure' })
  }

  postMailIntegratorGoogle({ gmailMessage }: { gmailMessage: GmailMessage }): Promise<unknown> {
    return this.request({ method: 'post', data: gmailMessage, path: '/Mail/Integrator/Google' })
  }

  postMailIntegratorPop3({ pop3Message }: { pop3Message: Pop3Message }): Promise<unknown> {
    return this.request({ method: 'post', data: pop3Message, path: '/Mail/Integrator/Pop3' })
  }

  postMailIntegratorIMAP({ iMAPMessage }: { iMAPMessage: IMAPMessage }): Promise<unknown> {
    return this.request({ method: 'post', data: iMAPMessage, path: '/Mail/Integrator/IMAP' })
  }

  /**
   * @param {number} [task_id]
   */
  postMailProcessMail({
    items,
    task_id,
  }: {
    items: Array<number>
    task_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: items,
      path: '/Mail/ProcessMail',
      params: { task_id },
    })
  }
}
