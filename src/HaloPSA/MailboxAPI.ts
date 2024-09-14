/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class MailboxAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Mailbox
   * @description Use this to return multiple Mailbox.<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Mailbox',
      params: {
        department_id,
        from_addresses,
        ignore_default,
        organisation_id,
        showall,
        team_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postMailbox({ mailbox }: { mailbox: Array<Mailbox> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Mailbox',
      data: mailbox,
    })
  }

  /**
   * @summary Get one Mailbox
   * @description Use this to return a single instance of Mailbox.<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Mailbox/${id}`,
      params: {
        includedetails,
        includeglobalsmtp,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteMailboxById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Mailbox/${id}`,
    })
  }
}
