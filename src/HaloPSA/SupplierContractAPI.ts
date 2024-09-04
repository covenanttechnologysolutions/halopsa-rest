/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Contract} */
export type Contract = schemas['Contract']

/**
 * @module SupplierContractAPI
 */

/**
 * SupplierContract module
 * @public
 */
export class SupplierContractAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Contract
   * @description Use this to return multiple Contract.<br>
				Requires authentication.
   * @param {number} count (int) Number of contracts to return in the response.
   * @param {boolean} includeinactive (bool) Include inactive contracts in the response.
   * @param {string} order (string) The name of the field to order by first.
   * @param {string} order2 (string) The name of the field to order by second.
   * @param {string} order3 (string) The name of the field to order by third.
   * @param {string} order4 (string) The name of the field to order by fourth.
   * @param {string} order5 (string) The name of the field to order by fifth.
   * @param {boolean} orderdesc (bool) Whether to order ascending or descending on first order.
   * @param {boolean} orderdesc2 (bool) Whether to order ascending or descending on second order.
   * @param {boolean} orderdesc3 (bool) Whether to order ascending or descending on third order.
   * @param {boolean} orderdesc4 (bool) Whether to order ascending or descending on fourth order.
   * @param {boolean} orderdesc5 (bool) Whether to order ascending or descending on fifth order.
   * @param {number} page_no (int) When using Pagination, the page number to return.
   * @param {number} page_size (int) When using Pagination, the size of the page.
   * @param {boolean} pageinate (bool) Whether to use Pagination in the response.
   * @param {string} search (string) Filters response based on the search string.
   * @param {number} supplier_id (int) Filters by the specified supplier.
   */
  getSupplierContract(
    count: number,
    includeinactive: boolean,
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
    search: string,
    supplier_id: number,
  ): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postSupplierContract(contract: Array<Contract>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SupplierContract',
      data: contract,
    })
  }

  /**
   * @summary Get one Contract
   * @description Use this to return a single instance of Contract.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails (bool) Include extra objects in the response.
   */
  getSupplierContractById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SupplierContract/${id}`,
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
  deleteSupplierContractById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SupplierContract/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postSupplierContractNextRef(contract: Array<Contract>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SupplierContract/NextRef',
      data: contract,
    })
  }
}
