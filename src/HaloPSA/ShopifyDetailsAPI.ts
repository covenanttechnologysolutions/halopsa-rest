/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ShopifyDetails} */
export type ShopifyDetails = schemas['ShopifyDetails']

/**
 * @module ShopifyDetailsAPI
 */

/**
 * ShopifyDetails module
 * @public
 */
export class ShopifyDetailsAPI extends BaseAPI {
  getShopifyDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ShopifyDetails' })
  }

  postShopifyDetails({
    shopifyDetailsList,
  }: {
    shopifyDetailsList: Array<ShopifyDetails>
  }): Promise<ShopifyDetails> {
    return this.request({ method: 'post', data: shopifyDetailsList, path: '/ShopifyDetails' })
  }

  /**
   * @param {number} id
   */
  getShopifyDetailsById({ id }: { id: number }): Promise<ShopifyDetails> {
    return this.request({ method: 'get', path: `/ShopifyDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteShopifyDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ShopifyDetails/${id}` })
  }
}
