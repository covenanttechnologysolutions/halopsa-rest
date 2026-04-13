/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ItemStockHistoryAPI
 */

/**
 * ItemStockHistory module
 * @public
 */
export class ItemStockHistoryAPI extends BaseAPI {
  /**
   * @summary List of ItemStockHistory
   * @description Use this to return multiple ItemStockHistory. Requires authentication.
   * @param {number} [count]
   * @param {boolean} [idonly]
   * @param {number} [item_id]
   * @param {number} [itemstock_id]
   * @param {string} [order]
   * @param {string} [order2]
   * @param {string} [order3]
   * @param {string} [order4]
   * @param {string} [order5]
   * @param {boolean} [orderdesc]
   * @param {boolean} [orderdesc2]
   * @param {boolean} [orderdesc3]
   * @param {boolean} [orderdesc4]
   * @param {boolean} [orderdesc5]
   * @param {number} [page_no]
   * @param {number} [page_size]
   * @param {boolean} [pageinate]
   * @param {string} [search]
   * @param {number} [stockbin_id]
   * @param {number} [stocklocation_id]
   */
  getItemStockHistory({
    count,
    idonly,
    item_id,
    itemstock_id,
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
    search,
    stockbin_id,
    stocklocation_id,
  }: {
    count?: number
    idonly?: boolean
    item_id?: number
    itemstock_id?: number
    order?: string
    order2?: string
    order3?: string
    order4?: string
    order5?: string
    orderdesc?: boolean
    orderdesc2?: boolean
    orderdesc3?: boolean
    orderdesc4?: boolean
    orderdesc5?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
    search?: string
    stockbin_id?: number
    stocklocation_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/ItemStockHistory',
      params: {
        count,
        idonly,
        item_id,
        itemstock_id,
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
        search,
        stockbin_id,
        stocklocation_id,
      },
    })
  }

  /**
   * @param {number} id
   */
  getItemStockHistoryById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/ItemStockHistory/${id}` })
  }
}
