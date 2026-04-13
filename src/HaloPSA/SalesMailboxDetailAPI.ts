/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SalesMailboxDetail} */
export type SalesMailboxDetail = schemas['SalesMailboxDetail']

/**
 * @module SalesMailboxDetailAPI
 */

/**
 * SalesMailboxDetail module
 * @public
 */
export class SalesMailboxDetailAPI extends BaseAPI {
  getSalesMailboxDetail(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SalesMailboxDetail' })
  }

  postSalesMailboxDetail({
    salesMailboxDetailList,
  }: {
    salesMailboxDetailList: Array<SalesMailboxDetail>
  }): Promise<SalesMailboxDetail> {
    return this.request({
      method: 'post',
      data: salesMailboxDetailList,
      path: '/SalesMailboxDetail',
    })
  }
}
