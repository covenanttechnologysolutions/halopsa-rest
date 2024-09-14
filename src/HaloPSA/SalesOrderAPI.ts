/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link OrderHead} */
export type OrderHead = schemas['OrderHead']

/**
 * @module SalesOrderAPI
 */

/**
 * SalesOrder module
 * @public
 */
export class SalesOrderAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of OrderHead
   * @description Use this to return multiple OrderHead.<br>
				Requires authentication.
   * @param {string} [advanced_search] 
   * @param {string} [billing_date] 
   * @param {number} [client_id] 
   * @param {string} [client_ids] 
   * @param {boolean} [closed] 
   * @param {number} [count] 
   * @param {boolean} [idonly] 
   * @param {boolean} [needsconsigning] 
   * @param {boolean} [needsinvoicing] 
   * @param {boolean} [needsordering] 
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
   * @param {string} [quote_status] 
   * @param {boolean} [ready_for_invoicing] 
   * @param {string} [search] 
   * @param {number} [site_id] 
   * @param {number} [ticket_id] 
   * @param {number} [toplevel_id] 
   * @param {number} [user_id] 
   */
  getSalesOrder({
    advanced_search,
    billing_date,
    client_id,
    client_ids,
    closed,
    count,
    idonly,
    needsconsigning,
    needsinvoicing,
    needsordering,
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
    quote_status,
    ready_for_invoicing,
    search,
    site_id,
    ticket_id,
    toplevel_id,
    user_id,
  }: {
    advanced_search?: string
    billing_date?: string
    client_id?: number
    client_ids?: string
    closed?: boolean
    count?: number
    idonly?: boolean
    needsconsigning?: boolean
    needsinvoicing?: boolean
    needsordering?: boolean
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
    quote_status?: string
    ready_for_invoicing?: boolean
    search?: string
    site_id?: number
    ticket_id?: number
    toplevel_id?: number
    user_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SalesOrder',
      params: {
        advanced_search,
        billing_date,
        client_id,
        client_ids,
        closed,
        count,
        idonly,
        needsconsigning,
        needsinvoicing,
        needsordering,
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
        quote_status,
        ready_for_invoicing,
        search,
        site_id,
        ticket_id,
        toplevel_id,
        user_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postSalesOrder({ orderHead }: { orderHead: Array<OrderHead> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SalesOrder',
      data: orderHead,
    })
  }

  /**
   * @summary Get one OrderHead
   * @description Use this to return a single instance of OrderHead.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [consignablelines] 
   * @param {boolean} [includedetails] 
   * @param {boolean} [invoiceablelines] 
   * @param {number} [oneline] 
   * @param {boolean} [pendingpolines] 
   */
  getSalesOrderById({
    id,
    consignablelines,
    includedetails,
    invoiceablelines,
    oneline,
    pendingpolines,
  }: {
    id: number
    consignablelines?: boolean
    includedetails?: boolean
    invoiceablelines?: boolean
    oneline?: number
    pendingpolines?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SalesOrder/${id}`,
      params: {
        consignablelines,
        includedetails,
        invoiceablelines,
        oneline,
        pendingpolines,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteSalesOrderById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SalesOrder/${id}`,
    })
  }
}
