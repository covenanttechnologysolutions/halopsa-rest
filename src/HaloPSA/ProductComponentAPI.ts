/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ReleaseComponent} */
export type ReleaseComponent = schemas['ReleaseComponent']

/**
 * @module ProductComponentAPI
 */

/**
 * ProductComponent module
 * @public
 */
export class ProductComponentAPI extends BaseAPI {
  /**
   * @summary List of ReleaseComponent
   * @description Use this to return multiple ReleaseComponent. Requires authentication.
   * @param {number} [product_id]
   */
  getProductComponent({ product_id }: { product_id?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/ProductComponent', params: { product_id } })
  }

  postProductComponent({
    releaseComponentList,
  }: {
    releaseComponentList: Array<ReleaseComponent>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: releaseComponentList, path: '/ProductComponent' })
  }

  /**
   * @summary Get one ReleaseComponent
   * @description Use this to return a single instance of ReleaseComponent. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getProductComponentById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/ProductComponent/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteProductComponentById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ProductComponent/${id}` })
  }
}
