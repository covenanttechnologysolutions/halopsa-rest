/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SupplierOrderHeader} */
export type SupplierOrderHeader = schemas['SupplierOrderHeader']
/** {@link SupplierOrderHeader_View} */
export type SupplierOrderHeader_View = schemas['SupplierOrderHeader_View']
/** {@link Viewers} */
export type Viewers = schemas['Viewers']

/**
 * @module PurchaseOrderAPI
 */

/**
 * PurchaseOrder module
 * @public
 */
export class PurchaseOrderAPI extends BaseAPI {
  /**
   * @summary List of SupplierOrderHeader
   * @description Use this to return multiple SupplierOrderHeader. Requires authentication.
   * @param {boolean} [awaiting_approval] Filter by the suppliers that are awaiting approval.
   * @param {boolean} [awaitingstock] Filter by suppliers awaiting stock.
   * @param {number} [client_id] Filters by the specified client.
   * @param {boolean} [closed] Filter by closed status.
   * @param {number} [count] Number of contracts to return in the response.
   * @param {boolean} [deliver_to_us] Filter on delivery to us option.
   * @param {number} [deliver_to_user_salesorder_id]
   * @param {boolean} [my_approvals] Filter by the suppliers that are awaiting approval from you.
   * @param {boolean} [open] Filter by open status.
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
   * @param {string} [po_status] Filters by the specified purchase order statuses - comma seperated.
   * @param {number} [salesorder_id] Filter by the specified sales order.
   * @param {string} [search] Filters response based on the search string.
   * @param {number} [site_id] Filters by the specified site.
   * @param {number} [supplier_id] Filters by the specified supplier.
   * @param {number} [ticket_id] Filter by the specified ticket.
   * @param {boolean} [unsent] Filter by sent status.
   * @param {number} [user_id] Filters by the specified user.
   */
  getPurchaseOrder({
    awaiting_approval,
    awaitingstock,
    client_id,
    closed,
    count,
    deliver_to_us,
    deliver_to_user_salesorder_id,
    my_approvals,
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
    po_status,
    salesorder_id,
    search,
    site_id,
    supplier_id,
    ticket_id,
    unsent,
    user_id,
  }: {
    awaiting_approval?: boolean
    awaitingstock?: boolean
    client_id?: number
    closed?: boolean
    count?: number
    deliver_to_us?: boolean
    deliver_to_user_salesorder_id?: number
    my_approvals?: boolean
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
    po_status?: string
    salesorder_id?: number
    search?: string
    site_id?: number
    supplier_id?: number
    ticket_id?: number
    unsent?: boolean
    user_id?: number
  }): Promise<SupplierOrderHeader_View> {
    return this.request({
      method: 'get',
      path: '/PurchaseOrder',
      params: {
        awaiting_approval,
        awaitingstock,
        client_id,
        closed,
        count,
        deliver_to_us,
        deliver_to_user_salesorder_id,
        my_approvals,
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
        po_status,
        salesorder_id,
        search,
        site_id,
        supplier_id,
        ticket_id,
        unsent,
        user_id,
      },
    })
  }

  postPurchaseOrder({
    supplierOrderHeaderList,
  }: {
    supplierOrderHeaderList: Array<SupplierOrderHeader>
  }): Promise<SupplierOrderHeader> {
    return this.request({ method: 'post', data: supplierOrderHeaderList, path: '/PurchaseOrder' })
  }

  /**
   * @summary Get one SupplierOrderHeader
   * @description Use this to return a single instance of SupplierOrderHeader. Requires authentication.
   * @param {number} id
   * @param {boolean} [extrareceivablelines] Include also the deliver to us for the suppliers that have recieved more quantity than they currently have in the response.
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {boolean} [invoiceablelines]
   * @param {boolean} [receivablelines] Include only consignable lines in the response.
   */
  getPurchaseOrderById({
    id,
    extrareceivablelines,
    includedetails,
    invoiceablelines,
    receivablelines,
  }: {
    id: number
    extrareceivablelines?: boolean
    includedetails?: boolean
    invoiceablelines?: boolean
    receivablelines?: boolean
  }): Promise<SupplierOrderHeader> {
    return this.request({
      method: 'get',
      path: `/PurchaseOrder/${id}`,
      params: { extrareceivablelines, includedetails, invoiceablelines, receivablelines },
    })
  }

  /**
   * @param {number} id
   */
  deletePurchaseOrderById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/PurchaseOrder/${id}` })
  }

  postPurchaseOrderConfirmreceipt({
    supplierOrderHeader,
  }: {
    supplierOrderHeader: SupplierOrderHeader
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: supplierOrderHeader,
      path: '/PurchaseOrder/confirmreceipt',
    })
  }

  postPurchaseOrderView({ viewersList }: { viewersList: Array<Viewers> }): Promise<unknown> {
    return this.request({ method: 'post', data: viewersList, path: '/PurchaseOrder/View' })
  }
}
