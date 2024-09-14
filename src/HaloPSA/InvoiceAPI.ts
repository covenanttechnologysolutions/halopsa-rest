/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link InvoiceDetail} */
export type InvoiceDetail = schemas['InvoiceDetail']
/** {@link InvoiceHeader} */
export type InvoiceHeader = schemas['InvoiceHeader']

/**
 * @module InvoiceAPI
 */

/**
 * Invoice module
 * @public
 */
export class InvoiceAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of InvoiceHeader
   * @description Use this to return multiple InvoiceHeader.<br>
				Requires authentication.
   * @param {string} [advanced_search] 
   * @param {number} [asset_id] (int) Filters by the specified asset.
   * @param {boolean} [awaiting_approval] 
   * @param {string} [billing_date] (string) Filter on billing date.
   * @param {string} [billingcategory_ids] (string) Filters by the specified billing categories, comma seperated.
   * @param {number} [client_id] (int) Filters by the specified client.
   * @param {string} [client_ids] (string) Filters by the specified clients, comma seperated.
   * @param {number} [contract_id] (int) Filters by the specified contract.
   * @param {number} [count] (int) Number of contracts to return in the response.
   * @param {boolean} [idonly] (bool) Include only the Invoice ID in the response.
   * @param {boolean} [includecredits] (bool) Include invoice type credits in the response.
   * @param {boolean} [includeinvoices] (bool) Include invoice type invoice in the response.
   * @param {boolean} [includelines] (bool) Include invoice lines in the response.
   * @param {boolean} [includepoinvoices] 
   * @param {boolean} [invoicedateend] (bool) Include the field invoicedateend in the response.
   * @param {boolean} [invoicedatestart] (bool) Include the field invoicedatestart in the response.
   * @param {boolean} [my_approvals] 
   * @param {boolean} [notpostedonly] (bool) Filter on invoices that have not been posted.
   * @param {string} [order] (string) The name of the field to order by first.
   * @param {string} [order2] (string) The name of the field to order by second.
   * @param {string} [order3] (string) The name of the field to order by third.
   * @param {string} [order4] (string) The name of the field to order by fourth.
   * @param {string} [order5] (string) The name of the field to order by fifth.
   * @param {boolean} [orderdesc] (bool) Whether to order ascending or descending on first order.
   * @param {boolean} [orderdesc2] (bool) Whether to order ascending or descending on second order.
   * @param {boolean} [orderdesc3] (bool) Whether to order ascending or descending on third order.
   * @param {boolean} [orderdesc4] (bool) Whether to order ascending or descending on fourth order.
   * @param {boolean} [orderdesc5] (bool) Whether to order ascending or descending on fifth order.
   * @param {number} [page_no] (int) When using Pagination, the page number to return.
   * @param {number} [page_size] (int) When using Pagination, the size of the page.
   * @param {boolean} [pageinate] (bool) Whether to use Pagination in the response.
   * @param {Array<number>} [paymentstatuses] (array of int) Filter on invoice payment status, comma seperated int.
   * @param {boolean} [postedonly] (bool) Filter on invoices that have been posted.
   * @param {number} [purchaseorder_id] 
   * @param {string} [quote_status] (string) Filters by the specified quote statuses, comma seperated.
   * @param {boolean} [ready_for_invoicing] (bool) Filters on whether the invoice is ready for invoicing.
   * @param {number} [recurringinvoice_id] (int) Filter by contracts recurring invoice id.
   * @param {boolean} [reviewrequired] 
   * @param {string} [rinvoice_type] (string) Filter on invoice type - values 'contracts', 'invoices', 'both'.
   * @param {number} [salesorder_id] (int) Filter by contracts sales order id.
   * @param {string} [search] (string) Filters response based on the search string.
   * @param {number} [sent_status] 
   * @param {number} [site_id] (int) Filters by the specified site.
   * @param {boolean} [stripeautopaymentrequired] 
   * @param {number} [ticket_id] (int) Return contracts assigned to a particular ticket.
   * @param {number} [toplevel_id] 
   * @param {number} [user_id] (int) Filters by the specified user.
   */
  getInvoice({
    advanced_search,
    asset_id,
    awaiting_approval,
    billing_date,
    billingcategory_ids,
    client_id,
    client_ids,
    contract_id,
    count,
    idonly,
    includecredits,
    includeinvoices,
    includelines,
    includepoinvoices,
    invoicedateend,
    invoicedatestart,
    my_approvals,
    notpostedonly,
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
    paymentstatuses,
    postedonly,
    purchaseorder_id,
    quote_status,
    ready_for_invoicing,
    recurringinvoice_id,
    reviewrequired,
    rinvoice_type,
    salesorder_id,
    search,
    sent_status,
    site_id,
    stripeautopaymentrequired,
    ticket_id,
    toplevel_id,
    user_id,
  }: {
    advanced_search?: string
    asset_id?: number
    awaiting_approval?: boolean
    billing_date?: string
    billingcategory_ids?: string
    client_id?: number
    client_ids?: string
    contract_id?: number
    count?: number
    idonly?: boolean
    includecredits?: boolean
    includeinvoices?: boolean
    includelines?: boolean
    includepoinvoices?: boolean
    invoicedateend?: boolean
    invoicedatestart?: boolean
    my_approvals?: boolean
    notpostedonly?: boolean
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
    paymentstatuses?: Array<number>
    postedonly?: boolean
    purchaseorder_id?: number
    quote_status?: string
    ready_for_invoicing?: boolean
    recurringinvoice_id?: number
    reviewrequired?: boolean
    rinvoice_type?: string
    salesorder_id?: number
    search?: string
    sent_status?: number
    site_id?: number
    stripeautopaymentrequired?: boolean
    ticket_id?: number
    toplevel_id?: number
    user_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Invoice',
      params: {
        advanced_search,
        asset_id,
        awaiting_approval,
        billing_date,
        billingcategory_ids,
        client_id,
        client_ids,
        contract_id,
        count,
        idonly,
        includecredits,
        includeinvoices,
        includelines,
        includepoinvoices,
        invoicedateend,
        invoicedatestart,
        my_approvals,
        notpostedonly,
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
        paymentstatuses,
        postedonly,
        purchaseorder_id,
        quote_status,
        ready_for_invoicing,
        recurringinvoice_id,
        reviewrequired,
        rinvoice_type,
        salesorder_id,
        search,
        sent_status,
        site_id,
        stripeautopaymentrequired,
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
  postInvoice({ invoiceHeader }: { invoiceHeader: Array<InvoiceHeader> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Invoice',
      data: invoiceHeader,
    })
  }

  /**
   * @summary Get one InvoiceHeader
   * @description Use this to return a single instance of InvoiceHeader.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] (bool) Include extra objects in the response.
   */
  getInvoiceById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Invoice/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   * @summary Delete one InvoiceHeader
   * @description Delete specific InvoiceHeader.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [bypass_accounts_sync] 
   */
  deleteInvoiceById({
    id,
    bypass_accounts_sync,
  }: {
    id: number
    bypass_accounts_sync?: boolean
  }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Invoice/${id}`,
      params: {
        bypass_accounts_sync,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postInvoiceUpdatelines({ invoiceDetail }: { invoiceDetail: Array<InvoiceDetail> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Invoice/updatelines',
      data: invoiceDetail,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  postInvoicePDFById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'post',
      path: `/Invoice/PDF/${id}`,
    })
  }
}
