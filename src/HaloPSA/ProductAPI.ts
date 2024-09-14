/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ProductAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ReleaseProduct
   * @description Use this to return multiple ReleaseProduct.<br>
				Requires authentication.
   * @param {number} [devops_instance] 
   * @param {boolean} [third_party_only] 
   */
  getProduct({
    devops_instance,
    third_party_only,
  }: {
    devops_instance?: number
    third_party_only?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Product',
      params: {
        devops_instance,
        third_party_only,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postProduct({ releaseProduct }: { releaseProduct: Array<ReleaseProduct> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Product',
      data: releaseProduct,
    })
  }

  /**
   * @summary Get one ReleaseProduct
   * @description Use this to return a single instance of ReleaseProduct.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getProductById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Product/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteProductById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Product/${id}`,
    })
  }
}
