/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class UnsubServiceEmailsAPI extends BaseAPI {
  getUnsubServiceEmails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/UnsubServiceEmails' })
  }

  postUnsubServiceEmails({
    unsubEmailServiceUsersList,
  }: {
    unsubEmailServiceUsersList: Array<UnsubEmailServiceUsers>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: unsubEmailServiceUsersList,
      path: '/UnsubServiceEmails',
    })
  }

  /**
   * @summary Get one UnsubEmailServiceUsers
   * @description Use this to return a single instance of UnsubEmailServiceUsers. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getUnsubServiceEmailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/UnsubServiceEmails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteUnsubServiceEmailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/UnsubServiceEmails/${id}` })
  }
}
