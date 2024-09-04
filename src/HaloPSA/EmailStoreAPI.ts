/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link EmailStore} */
export type EmailStore = schemas['EmailStore']

/**
 * @module EmailStoreAPI
 */

/**
 * EmailStore module
 * @public
 */
export class EmailStoreAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getEmailStore(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/EmailStore',
    })
  }

  /**
   * 
   * 
   
   */
  postEmailStore(emailStore: Array<EmailStore>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/EmailStore',
      data: emailStore,
    })
  }

  /**
   * @summary Get one EmailStore
   * @description Use this to return a single instance of EmailStore.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getEmailStoreById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/EmailStore/${id}`,
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
  deleteEmailStoreById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/EmailStore/${id}`,
    })
  }
}
