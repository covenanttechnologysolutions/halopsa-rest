/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module UserChangeAPI
 */

/**
 * UserChange module
 * @public
 */
export class UserChangeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of UserChange
   * @description Use this to return multiple UserChange.<br>
				Requires authentication.
   * @param {string} [change_date] 
   * @param {number} [count] 
   * @param {boolean} [exclude_generaluser] 
   * @param {boolean} [idonly] 
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
   */
  getUserChange({
    change_date,
    count,
    exclude_generaluser,
    idonly,
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
  }: {
    change_date?: string
    count?: number
    exclude_generaluser?: boolean
    idonly?: boolean
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/UserChange',
      params: {
        change_date,
        count,
        exclude_generaluser,
        idonly,
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
      },
    })
  }
}
