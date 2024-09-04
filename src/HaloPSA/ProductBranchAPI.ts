/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ProductBranchAPI
 */

/**
 * ProductBranch module
 * @public
 */
export class ProductBranchAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ReleaseBranch
   * @description Use this to return multiple ReleaseBranch.<br>
				Requires authentication.
   * @param {number} product_id 
   */
  getProductBranch(product_id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ProductBranch',
      params: {
        product_id,
      },
    })
  }
}
