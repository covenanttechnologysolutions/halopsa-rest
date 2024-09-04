/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link SupplierOrderHeader} */
export type SupplierOrderHeader = schemas['SupplierOrderHeader']

/**
 * @module PurchaseOrderAPI
 */

/**
 * PurchaseOrder module
 * @public
 */
export class PurchaseOrderAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of SupplierOrderHeader
   * @description Use this to return multiple SupplierOrderHeader.<br>
				Requires authentication.
   * @param {boolean} awaiting_approval (int) Filter by the suppliers that are awaiting approval.
   * @param {boolean} awaitingstock (bool) Filter by suppliers awaiting stock.
   * @param {number} client_id (int) Filters by the specified client.
   * @param {boolean} closed (bool) Filter by closed status.
   * @param {number} count (int) Number of contracts to return in the response.
   * @param {boolean} deliver_to_us (bool) Filter on delivery to us option.
   * @param {number} deliver_to_user_salesorder_id 
   * @param {boolean} my_approvals (int) Filter by the suppliers that are awaiting approval from you.
   * @param {boolean} open (bool) Filter by open status.
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
   * @param {string} po_status (string) Filters by the specified purchase order statuses - comma seperated.
   * @param {number} salesorder_id (int) Filter by the specified sales order.
   * @param {string} search (string) Filters response based on the search string.
   * @param {number} site_id (int) Filters by the specified site.
   * @param {number} supplier_id (int) Filters by the specified supplier.
   * @param {number} ticket_id (int) Filter by the specified ticket.
   * @param {boolean} unsent (bool) Filter by sent status.
   * @param {number} user_id (int) Filters by the specified user.
   */
  getPurchaseOrder(
    awaiting_approval: boolean,
    awaitingstock: boolean,
    client_id: number,
    closed: boolean,
    count: number,
    deliver_to_us: boolean,
    deliver_to_user_salesorder_id: number,
    my_approvals: boolean,
    open: boolean,
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
    po_status: string,
    salesorder_id: number,
    search: string,
    site_id: number,
    supplier_id: number,
    ticket_id: number,
    unsent: boolean,
    user_id: number,
  ): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postPurchaseOrder(supplierOrderHeader: Array<SupplierOrderHeader>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/PurchaseOrder',
      data: supplierOrderHeader,
    })
  }

  /**
   * @summary Get one SupplierOrderHeader
   * @description Use this to return a single instance of SupplierOrderHeader.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} extrareceivablelines (bool) Include also the deliver to us for the suppliers that have recieved more quantity than they currently have in the response.
   * @param {boolean} includedetails (bool) Include extra objects in the response.
   * @param {boolean} invoiceablelines 
   * @param {boolean} receivablelines (bool) Include only consignable lines in the response.
   */
  getPurchaseOrderById(
    id: number,
    extrareceivablelines: boolean,
    includedetails: boolean,
    invoiceablelines: boolean,
    receivablelines: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/PurchaseOrder/${id}`,
      params: {
        extrareceivablelines,
        includedetails,
        invoiceablelines,
        receivablelines,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deletePurchaseOrderById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/PurchaseOrder/${id}`,
    })
  }
}
