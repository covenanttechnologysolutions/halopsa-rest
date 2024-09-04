/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ItemStock} */
export type ItemStock = schemas['ItemStock']

/**
 * @module ItemStockAPI
 */

/**
 * ItemStock module
 * @public
 */
export class ItemStockAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ItemStock
   * @description Use this to return multiple ItemStock.<br>
				Requires authentication.
   * @param {number} count 
   * @param {boolean} idonly 
   * @param {number} item_id 
   * @param {string} order 
   * @param {string} order2 
   * @param {string} order3 
   * @param {string} order4 
   * @param {string} order5 
   * @param {boolean} orderdesc 
   * @param {boolean} orderdesc2 
   * @param {boolean} orderdesc3 
   * @param {boolean} orderdesc4 
   * @param {boolean} orderdesc5 
   * @param {number} page_no 
   * @param {number} page_size 
   * @param {boolean} pageinate 
   * @param {number} stockbin_id 
   * @param {number} stocklocation_id 
   */
  getItemStock(
    count: number,
    idonly: boolean,
    item_id: number,
    order: string,
    order2: string,
    order3: string,
    order4: string,
    order5: string,
    orderdesc: boolean,
    orderdesc2: boolean,
    orderdesc3: boolean,
    orderdesc4: boolean,
    orderdesc5: boolean,
    page_no: number,
    page_size: number,
    pageinate: boolean,
    stockbin_id: number,
    stocklocation_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ItemStock',
      params: {
        count,
        idonly,
        item_id,
        order,
        order2,
        order3,
        order4,
        order5,
        orderdesc,
        orderdesc2,
        orderdesc3,
        orderdesc4,
        orderdesc5,
        page_no,
        page_size,
        pageinate,
        stockbin_id,
        stocklocation_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postItemStock(itemStock: Array<ItemStock>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ItemStock',
      data: itemStock,
    })
  }

  /**
   * @summary Get one ItemStock
   * @description Use this to return a single instance of ItemStock.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getItemStockById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ItemStock/${id}`,
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
  deleteItemStockById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ItemStock/${id}`,
    })
  }
}
