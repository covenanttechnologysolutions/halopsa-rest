/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SalesMailbox} */
export type SalesMailbox = schemas['SalesMailbox']

/**
 * @module SalesMailboxAPI
 */

/**
 * SalesMailbox module
 * @public
 */
export class SalesMailboxAPI extends BaseAPI {
  getSalesMailbox(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SalesMailbox' })
  }

  postSalesMailbox({
    salesMailboxList,
  }: {
    salesMailboxList: Array<SalesMailbox>
  }): Promise<SalesMailbox> {
    return this.request({ method: 'post', data: salesMailboxList, path: '/SalesMailbox' })
  }

  /**
   * @summary Get one SalesMailbox
   * @description Use this to return a single instance of SalesMailbox. Requires authentication.
   * @param {number} id
   * @param {boolean} [_test_access]
   * @param {boolean} [includedetails]
   */
  getSalesMailboxById({
    id,
    _test_access,
    includedetails,
  }: {
    id: number
    _test_access?: boolean
    includedetails?: boolean
  }): Promise<SalesMailbox> {
    return this.request({
      method: 'get',
      path: `/SalesMailbox/${id}`,
      params: { _test_access, includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteSalesMailboxById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SalesMailbox/${id}` })
  }
}
