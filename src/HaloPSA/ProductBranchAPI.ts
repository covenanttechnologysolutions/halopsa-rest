/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ProductBranchAPI
 */

/**
 * ProductBranch module
 * @public
 */
export class ProductBranchAPI extends BaseAPI {
  /**
   * @summary List of ReleaseBranch
   * @description Use this to return multiple ReleaseBranch. Requires authentication.
   * @param {number} [product_id]
   */
  getProductBranch({ product_id }: { product_id?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/ProductBranch', params: { product_id } })
  }
}
