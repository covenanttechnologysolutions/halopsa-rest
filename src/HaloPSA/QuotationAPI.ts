/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link QuotationApproval} */
export type QuotationApproval = schemas['QuotationApproval']
/** {@link QuotationHeader} */
export type QuotationHeader = schemas['QuotationHeader']

/**
 * @module QuotationAPI
 */

/**
 * Quotation module
 * @public
 */
export class QuotationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of QuotationHeader
   * @description Use this to return multiple QuotationHeader.<br>
				Requires authentication.
   * @param {boolean} [awaiting_approval] 
   * @param {number} [client_id] 
   * @param {boolean} [closed] 
   * @param {number} [count] 
   * @param {number} [currentclientorall] 
   * @param {boolean} [includelines] 
   * @param {boolean} [my_approvals] 
   * @param {boolean} [needsprocessing] 
   * @param {boolean} [open] 
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
   * @param {boolean} [processed] 
   * @param {string} [quote_status] 
   * @param {string} [search] 
   * @param {number} [site_id] 
   * @param {number} [ticket_id] 
   * @param {number} [user_id] 
   */
  getQuotation({
    awaiting_approval,
    client_id,
    closed,
    count,
    currentclientorall,
    includelines,
    my_approvals,
    needsprocessing,
    open,
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
    processed,
    quote_status,
    search,
    site_id,
    ticket_id,
    user_id,
  }: {
    awaiting_approval?: boolean
    client_id?: number
    closed?: boolean
    count?: number
    currentclientorall?: number
    includelines?: boolean
    my_approvals?: boolean
    needsprocessing?: boolean
    open?: boolean
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
    processed?: boolean
    quote_status?: string
    search?: string
    site_id?: number
    ticket_id?: number
    user_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Quotation',
      params: {
        awaiting_approval,
        client_id,
        closed,
        count,
        currentclientorall,
        includelines,
        my_approvals,
        needsprocessing,
        open,
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
        processed,
        quote_status,
        search,
        site_id,
        ticket_id,
        user_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postQuotation({ quotationHeader }: { quotationHeader: Array<QuotationHeader> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Quotation',
      data: quotationHeader,
    })
  }

  /**
   * @summary Get one QuotationHeader
   * @description Use this to return a single instance of QuotationHeader.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   * @param {boolean} [isportalview] 
   */
  getQuotationById({
    id,
    includedetails,
    isportalview,
  }: {
    id: number
    includedetails?: boolean
    isportalview?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Quotation/${id}`,
      params: {
        includedetails,
        isportalview,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteQuotationById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Quotation/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postQuotationApproval({
    quotationApproval,
  }: {
    quotationApproval: Array<QuotationApproval>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Quotation/Approval',
      data: quotationApproval,
    })
  }
}
