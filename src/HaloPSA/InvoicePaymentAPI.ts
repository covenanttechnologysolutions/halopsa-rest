/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link InvoicePayment_List} */
export type InvoicePayment_List = schemas['InvoicePayment_List']

/**
 * @module InvoicePaymentAPI
 */

/**
 * InvoicePayment module
 * @public
 */
export class InvoicePaymentAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of InvoicePayment
   * @description Use this to return multiple InvoicePayment.<br>
				Requires authentication.
   * @param {number} client_id 
   * @param {number} count 
   * @param {string} intent_id 
   * @param {number} invoice_id 
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
   */
  getInvoicePayment(
    client_id: number,
    count: number,
    intent_id: string,
    invoice_id: number,
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
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/InvoicePayment',
      params: {
        client_id,
        count,
        intent_id,
        invoice_id,
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
      },
    })
  }

  /**
   * 
   * 
   
   */
  postInvoicePayment(invoicePayment_List: Array<InvoicePayment_List>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/InvoicePayment',
      data: invoicePayment_List,
    })
  }

  /**
   * @summary Get one InvoicePayment
   * @description Use this to return a single instance of InvoicePayment.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getInvoicePaymentById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/InvoicePayment/${id}`,
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
  deleteInvoicePaymentById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/InvoicePayment/${id}`,
    })
  }
}
