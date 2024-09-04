/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Company} */
export type Company = schemas['Company']

/**
 * @module SupplierAPI
 */

/**
 * Supplier module
 * @public
 */
export class SupplierAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Company
   * @description Use this to return multiple Company.<br>
				Requires authentication.
   * @param {string} activeinactive 
   * @param {number} count 
   * @param {boolean} idonly 
   * @param {boolean} includeactive 
   * @param {boolean} includeinactive 
   * @param {number} kashflowtenantid 
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
   * @param {string} search 
   * @param {number} toplevel_id 
   * @param {string} xerotenantid 
   */
  getSupplier(
    activeinactive: string,
    count: number,
    idonly: boolean,
    includeactive: boolean,
    includeinactive: boolean,
    kashflowtenantid: number,
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
    toplevel_id: number,
    xerotenantid: string,
  ): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postSupplier(company: Array<Company>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Supplier',
      data: company,
    })
  }

  /**
   * @summary Get one Company
   * @description Use this to return a single instance of Company.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getSupplierById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Supplier/${id}`,
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
  deleteSupplierById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Supplier/${id}`,
    })
  }
}
