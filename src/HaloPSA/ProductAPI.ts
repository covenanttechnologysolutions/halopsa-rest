/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ReleaseProduct} */
export type ReleaseProduct = schemas['ReleaseProduct']

/**
 * @module ProductAPI
 */

/**
 * Product module
 * @public
 */
export class ProductAPI extends BaseAPI {
  /**
   * @summary List of ReleaseProduct
   * @description Use this to return multiple ReleaseProduct. Requires authentication.
   * @param {number} [devops_instance]
   * @param {boolean} [third_party_only]
   */
  getProduct({
    devops_instance,
    third_party_only,
  }: {
    devops_instance?: number
    third_party_only?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Product',
      params: { devops_instance, third_party_only },
    })
  }

  postProduct({
    releaseProductList,
  }: {
    releaseProductList: Array<ReleaseProduct>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: releaseProductList, path: '/Product' })
  }

  /**
   * @summary Get one ReleaseProduct
   * @description Use this to return a single instance of ReleaseProduct. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getProductById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Product/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteProductById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Product/${id}` })
  }
}
