/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Contract} */
export type Contract = schemas['Contract']
/** {@link Contract_View} */
export type Contract_View = schemas['Contract_View']

/**
 * @module SupplierContractAPI
 */

/**
 * SupplierContract module
 * @public
 */
export class SupplierContractAPI extends BaseAPI {
  /**
   * @summary List of Contract
   * @description Use this to return multiple Contract. Requires authentication.
   * @param {number} [count] Number of contracts to return in the response.
   * @param {boolean} [includeinactive] Include inactive contracts in the response.
   * @param {string} [order] The name of the field to order by first.
   * @param {string} [order2] The name of the field to order by second.
   * @param {string} [order3] The name of the field to order by third.
   * @param {string} [order4] The name of the field to order by fourth.
   * @param {string} [order5] The name of the field to order by fifth.
   * @param {boolean} [orderdesc] Whether to order ascending or descending on first order.
   * @param {boolean} [orderdesc2] Whether to order ascending or descending on second order.
   * @param {boolean} [orderdesc3] Whether to order ascending or descending on third order.
   * @param {boolean} [orderdesc4] Whether to order ascending or descending on fourth order.
   * @param {boolean} [orderdesc5] Whether to order ascending or descending on fifth order.
   * @param {number} [page_no] When using Pagination, the page number to return.
   * @param {number} [page_size] When using Pagination, the size of the page.
   * @param {boolean} [pageinate] Whether to use Pagination in the response.
   * @param {string} [search] Filters response based on the search string.
   * @param {number} [supplier_id] Filters by the specified supplier.
   */
  getSupplierContract({
    count,
    includeinactive,
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
    supplier_id,
  }: {
    count?: number
    includeinactive?: boolean
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
    supplier_id?: number
  }): Promise<Contract_View> {
    return this.request({
      method: 'get',
      path: '/SupplierContract',
      params: {
        count,
        includeinactive,
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
        supplier_id,
      },
    })
  }

  postSupplierContract({ contractList }: { contractList: Array<Contract> }): Promise<Contract> {
    return this.request({ method: 'post', data: contractList, path: '/SupplierContract' })
  }

  /**
   * @summary Get one Contract
   * @description Use this to return a single instance of Contract. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails] Include extra objects in the response.
   */
  getSupplierContractById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<Contract> {
    return this.request({
      method: 'get',
      path: `/SupplierContract/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteSupplierContractById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SupplierContract/${id}` })
  }

  postSupplierContractNextRef({
    contractList,
  }: {
    contractList: Array<Contract>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: contractList, path: '/SupplierContract/NextRef' })
  }
}
