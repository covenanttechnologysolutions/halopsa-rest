/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Company} */
export type Company = schemas['Company']
/** {@link Company_View} */
export type Company_View = schemas['Company_View']

/**
 * @module SupplierAPI
 */

/**
 * Supplier module
 * @public
 */
export class SupplierAPI extends BaseAPI {
  /**
   * @summary List of Company
   * @description Use this to return multiple Company. Requires authentication.
   * @param {string} [activeinactive]
   * @param {number} [count]
   * @param {boolean} [idonly]
   * @param {boolean} [includeactive]
   * @param {boolean} [includeinactive]
   * @param {number} [kashflowtenantid]
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
   * @param {number} [toplevel_id]
   * @param {string} [xerotenantid]
   */
  getSupplier({
    activeinactive,
    count,
    idonly,
    includeactive,
    includeinactive,
    kashflowtenantid,
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
    toplevel_id,
    xerotenantid,
  }: {
    activeinactive?: string
    count?: number
    idonly?: boolean
    includeactive?: boolean
    includeinactive?: boolean
    kashflowtenantid?: number
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
    toplevel_id?: number
    xerotenantid?: string
  }): Promise<Company_View> {
    return this.request({
      method: 'get',
      path: '/Supplier',
      params: {
        activeinactive,
        count,
        idonly,
        includeactive,
        includeinactive,
        kashflowtenantid,
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
        toplevel_id,
        xerotenantid,
      },
    })
  }

  postSupplier({ companyList }: { companyList: Array<Company> }): Promise<Company> {
    return this.request({ method: 'post', data: companyList, path: '/Supplier' })
  }

  /**
   * @summary Get one Company
   * @description Use this to return a single instance of Company. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getSupplierById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<Company> {
    return this.request({ method: 'get', path: `/Supplier/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteSupplierById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Supplier/${id}` })
  }
}
