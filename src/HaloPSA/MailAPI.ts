/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class MailAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  postMailAzure(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Mail/Azure',
    })
  }

  /**
   * 
   * 
   
   */
  postMailIntegratorAzure(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Mail/Integrator/Azure',
    })
  }

  /**
   * 
   * 
   
   */
  postMailIntegratorGoogle(gmailMessage: GmailMessage): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Mail/Integrator/Google',
      data: gmailMessage,
    })
  }

  /**
   * 
   * 
   
   */
  postMailIntegratorPop3(pop3Message: Pop3Message): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Mail/Integrator/Pop3',
      data: pop3Message,
    })
  }

  /**
   * 
   * 
   
   */
  postMailIntegratorIMAP(iMAPMessage: IMAPMessage): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Mail/Integrator/IMAP',
      data: iMAPMessage,
    })
  }

  /**
   *
   *
   * @param {number} task_id
   */
  postMailProcessMail(listNumber: number, task_id: number): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Mail/ProcessMail',
      data: listNumber,
      params: {
        task_id,
      },
    })
  }
}
