/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link MarketingUnsubscribe} */
export type MarketingUnsubscribe = schemas['MarketingUnsubscribe']

/**
 * @module MarketingUnsubscribeAPI
 */

/**
 * MarketingUnsubscribe module
 * @public
 */
export class MarketingUnsubscribeAPI extends BaseAPI {
  getMarketingUnsubscribe(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MarketingUnsubscribe' })
  }

  postMarketingUnsubscribe({
    marketingUnsubscribeList,
  }: {
    marketingUnsubscribeList: Array<MarketingUnsubscribe>
  }): Promise<MarketingUnsubscribe> {
    return this.request({
      method: 'post',
      data: marketingUnsubscribeList,
      path: '/MarketingUnsubscribe',
    })
  }

  /**
   * @param {number} id
   */
  getMarketingUnsubscribeById({ id }: { id: number }): Promise<MarketingUnsubscribe> {
    return this.request({ method: 'get', path: `/MarketingUnsubscribe/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteMarketingUnsubscribeById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/MarketingUnsubscribe/${id}` })
  }
}
