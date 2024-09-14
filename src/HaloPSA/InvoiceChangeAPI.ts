/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link InvoiceChange} */
export type InvoiceChange = schemas['InvoiceChange']

/**
 * @module InvoiceChangeAPI
 */

/**
 * InvoiceChange module
 * @public
 */
export class InvoiceChangeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of InvoiceChange
   * @description Use this to return multiple InvoiceChange.<br>
				Requires authentication.
   * @param {number} [count] 
   * @param {boolean} [idonly] 
   * @param {number} [invoice_id] 
   * @param {number} [line_id] 
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
   * @param {number} [type_id] 
   */
  getInvoiceChange({
    count,
    idonly,
    invoice_id,
    line_id,
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
    type_id,
  }: {
    count?: number
    idonly?: boolean
    invoice_id?: number
    line_id?: number
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
    type_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/InvoiceChange',
      params: {
        count,
        idonly,
        invoice_id,
        line_id,
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
        type_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postInvoiceChange({ invoiceChange }: { invoiceChange: Array<InvoiceChange> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/InvoiceChange',
      data: invoiceChange,
    })
  }
}
