/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class EmailStoreAPI extends BaseAPI {
  getEmailStore(): Promise<unknown> {
    return this.request({ method: 'get', path: '/EmailStore' })
  }

  postEmailStore({ emailStoreList }: { emailStoreList: Array<EmailStore> }): Promise<EmailStore> {
    return this.request({ method: 'post', data: emailStoreList, path: '/EmailStore' })
  }

  /**
   * @summary Get one EmailStore
   * @description Use this to return a single instance of EmailStore. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getEmailStoreById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<EmailStore> {
    return this.request({ method: 'get', path: `/EmailStore/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteEmailStoreById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/EmailStore/${id}` })
  }
}
