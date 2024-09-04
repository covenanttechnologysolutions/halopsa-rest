/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ProductComponentAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ReleaseComponent
   * @description Use this to return multiple ReleaseComponent.<br>
				Requires authentication.
   * @param {number} product_id 
   */
  getProductComponent(product_id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ProductComponent',
      params: {
        product_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postProductComponent(releaseComponent: Array<ReleaseComponent>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ProductComponent',
      data: releaseComponent,
    })
  }

  /**
   * @summary Get one ReleaseComponent
   * @description Use this to return a single instance of ReleaseComponent.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getProductComponentById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ProductComponent/${id}`,
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
  deleteProductComponentById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ProductComponent/${id}`,
    })
  }
}
