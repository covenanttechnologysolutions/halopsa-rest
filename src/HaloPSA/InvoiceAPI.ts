/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link InvoiceDetail} */
export type InvoiceDetail = schemas['InvoiceDetail']
/** {@link InvoiceHeader} */
export type InvoiceHeader = schemas['InvoiceHeader']
/** {@link InvoiceHeader_View} */
export type InvoiceHeader_View = schemas['InvoiceHeader_View']
/** {@link Viewers} */
export type Viewers = schemas['Viewers']

/**
 * @module InvoiceAPI
 */

/**
 * Invoice module
 * @public
 */
export class InvoiceAPI extends BaseAPI {
  /**
   * @summary List of InvoiceHeader
   * @description Use this to return multiple InvoiceHeader. Requires authentication.
   * @param {string} [advanced_search]
   * @param {number} [asset_id] Filters by the specified asset.
   * @param {boolean} [awaiting_approval]
   * @param {string} [billing_date] Filter on billing date.
   * @param {string} [billingcategory_ids] Filters by the specified billing categories, comma seperated.
   * @param {string} [start_date] Filter Invoices with date greater than specified date (Date Filter selected by datesearch parameter).
   * @param {string} [end_date] Filter Invoices with date less than specified date (Date Filter selected by datesearch parameter).
   * @param {string} [datesearch] Date used for start_date and end_date parameters. Possible values are invoice_date, last_modified, duedate, schedulestartdate and scheduleenddate.
   * @param {number} [client_id] Filters by the specified client.
   * @param {string} [client_ids] Filters by the specified clients, comma seperated.
   * @param {number} [contract_id] Filters by the specified contract.
   * @param {number} [count] Number of contracts to return in the response.
   * @param {boolean} [idonly] Include only the Invoice ID in the response.
   * @param {boolean} [includecredits] Include invoice type credits in the response.
   * @param {boolean} [includeinvoices] Include invoice type invoice in the response.
   * @param {boolean} [includelines] Include invoice lines in the response.
   * @param {boolean} [includepoinvoices]
   * @param {boolean} [invoicedateend] Include the field invoicedateend in the response.
   * @param {boolean} [invoicedatestart] Include the field invoicedatestart in the response.
   * @param {boolean} [my_approvals]
   * @param {boolean} [notpostedonly] Filter on invoices that have not been posted.
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
   * @param {Array<number>} [paymentstatuses] (array of int) Filter on invoice payment status, comma seperated int.
   * @param {boolean} [postedonly] Filter on invoices that have been posted.
   * @param {number} [purchaseorder_id]
   * @param {string} [quote_status] Filters by the specified quote statuses, comma seperated.
   * @param {boolean} [ready_for_invoicing] Filters on whether the invoice is ready for invoicing.
   * @param {number} [recurringinvoice_id] Filter by contracts recurring invoice id.
   * @param {boolean} [reviewrequired]
   * @param {string} [rinvoice_type] Filter on invoice type - values 'contracts', 'invoices', 'both'.
   * @param {number} [salesorder_id] Filter by contracts sales order id.
   * @param {string} [search] Filters response based on the search string.
   * @param {number} [sent_status]
   * @param {number} [site_id] Filters by the specified site.
   * @param {boolean} [stripeautopaymentrequired]
   * @param {number} [ticket_id] Return contracts assigned to a particular ticket.
   * @param {number} [toplevel_id]
   * @param {number} [user_id] Filters by the specified user.
   * @param {string} [third_party_id] Finds an Invoice using Third Party Invoice Number.
   * @param {string} [xero_id] Finds an Invoice using Xero Online ID.
   * @param {number} [quickbooks_id] Finds an Invoice using Quickbooks Online ID.
   * @param {boolean} [include_linked_item_details] Include Invoice lines linked Item.
   */
  getInvoice({
    advanced_search,
    asset_id,
    awaiting_approval,
    billing_date,
    billingcategory_ids,
    start_date,
    end_date,
    datesearch,
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
    third_party_id,
    xero_id,
    quickbooks_id,
    include_linked_item_details,
  }: {
    advanced_search?: string
    asset_id?: number
    awaiting_approval?: boolean
    billing_date?: string
    billingcategory_ids?: string
    start_date?: string
    end_date?: string
    datesearch?: string
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
    third_party_id?: string
    xero_id?: string
    quickbooks_id?: number
    include_linked_item_details?: boolean
  }): Promise<InvoiceHeader_View> {
    return this.request({
      method: 'get',
      path: '/Invoice',
      params: {
        advanced_search,
        asset_id,
        awaiting_approval,
        billing_date,
        billingcategory_ids,
        start_date,
        end_date,
        datesearch,
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
        third_party_id,
        xero_id,
        quickbooks_id,
        include_linked_item_details,
      },
    })
  }

  postInvoice({
    invoiceHeaderList,
  }: {
    invoiceHeaderList: Array<InvoiceHeader>
  }): Promise<InvoiceHeader> {
    return this.request({ method: 'post', data: invoiceHeaderList, path: '/Invoice' })
  }

  /**
   * @summary Get one InvoiceHeader
   * @description Use this to return a single instance of InvoiceHeader. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails] Include extra objects in the response.
   */
  getInvoiceById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<InvoiceHeader> {
    return this.request({ method: 'get', path: `/Invoice/${id}`, params: { includedetails } })
  }

  /**
   * @summary Delete one InvoiceHeader
   * @description Delete specific InvoiceHeader. Requires authentication.
   * @param {number} id
   * @param {boolean} [bypass_accounts_sync]
   */
  deleteInvoiceById({
    id,
    bypass_accounts_sync,
  }: {
    id: number
    bypass_accounts_sync?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'delete',
      path: `/Invoice/${id}`,
      params: { bypass_accounts_sync },
    })
  }

  postInvoiceUpdatelines({
    invoiceDetailList,
  }: {
    invoiceDetailList: Array<InvoiceDetail>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: invoiceDetailList, path: '/Invoice/updatelines' })
  }

  getInvoiceLines(): Promise<InvoiceHeader_View> {
    return this.request({ method: 'get', path: '/Invoice/lines' })
  }

  /**
   * @param {number} id
   */
  postInvoiceByIdVoid({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'post', path: `/Invoice/${id}/void` })
  }

  postInvoiceView({ viewersList }: { viewersList: Array<Viewers> }): Promise<unknown> {
    return this.request({ method: 'post', data: viewersList, path: '/Invoice/View' })
  }

  /**
   * @param {number} id
   */
  postInvoicePDFById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'post', path: `/Invoice/PDF/${id}` })
  }
}
