/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ItemSupplier} */
export type ItemSupplier = schemas['ItemSupplier']

/**
 * @module ItemsupplierAPI
 */

/**
 * Itemsupplier module
 * @public
 */
export class ItemsupplierAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getItemsupplier(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/itemsupplier',
    })
  }

  /**
   * 
   * 
   
   */
  postItemsupplier(itemSupplier: Array<ItemSupplier>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/itemsupplier',
      data: itemSupplier,
    })
  }

  /**
   * @summary Get one ItemSupplier
   * @description Use this to return a single instance of ItemSupplier.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getItemsupplierById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/itemsupplier/${id}`,
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
  deleteItemsupplierById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/itemsupplier/${id}`,
    })
  }
}
