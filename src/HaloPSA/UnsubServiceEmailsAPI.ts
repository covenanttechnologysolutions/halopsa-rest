/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link UnsubEmailServiceUsers} */
export type UnsubEmailServiceUsers = schemas['UnsubEmailServiceUsers']

/**
 * @module UnsubServiceEmailsAPI
 */

/**
 * UnsubServiceEmails module
 * @public
 */
export class UnsubServiceEmailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getUnsubServiceEmails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/UnsubServiceEmails',
    })
  }

  /**
   * 
   * 
   
   */
  postUnsubServiceEmails({
    unsubEmailServiceUsers,
  }: {
    unsubEmailServiceUsers: Array<UnsubEmailServiceUsers>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/UnsubServiceEmails',
      data: unsubEmailServiceUsers,
    })
  }

  /**
   * @summary Get one UnsubEmailServiceUsers
   * @description Use this to return a single instance of UnsubEmailServiceUsers.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getUnsubServiceEmailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/UnsubServiceEmails/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteUnsubServiceEmailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/UnsubServiceEmails/${id}`,
    })
  }
}
