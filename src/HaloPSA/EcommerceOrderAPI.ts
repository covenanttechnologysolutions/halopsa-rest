/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class EcommerceOrderAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getEcommerceOrder({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/EcommerceOrder',
    })
  }

  /**
   * 
   * 
   
   */
  postEcommerceOrder({ ecommerceOrder }: { ecommerceOrder: Array<EcommerceOrder> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/EcommerceOrder',
      data: ecommerceOrder,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getEcommerceOrderById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/EcommerceOrder/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteEcommerceOrderById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/EcommerceOrder/${id}`,
    })
  }
}
