/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link EcommerceOrder} */
export type EcommerceOrder = schemas['EcommerceOrder']

/**
 * @module EcommerceOrderAPI
 */

/**
 * EcommerceOrder module
 * @public
 */
export class EcommerceOrderAPI extends BaseAPI {
  getEcommerceOrder(): Promise<unknown> {
    return this.request({ method: 'get', path: '/EcommerceOrder' })
  }

  postEcommerceOrder({
    ecommerceOrderList,
  }: {
    ecommerceOrderList: Array<EcommerceOrder>
  }): Promise<EcommerceOrder> {
    return this.request({ method: 'post', data: ecommerceOrderList, path: '/EcommerceOrder' })
  }

  /**
   * @param {number} id
   */
  getEcommerceOrderById({ id }: { id: number }): Promise<EcommerceOrder> {
    return this.request({ method: 'get', path: `/EcommerceOrder/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteEcommerceOrderById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/EcommerceOrder/${id}` })
  }
}
