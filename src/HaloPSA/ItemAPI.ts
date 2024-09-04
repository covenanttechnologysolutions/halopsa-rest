/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Item} */
export type Item = schemas['Item']

/**
 * @module ItemAPI
 */

/**
 * Item module
 * @public
 */
export class ItemAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Item
   * @description Use this to return multiple Item.<br>
				Requires authentication.
   * @param {string} activeinactive (string) Filter on active/inactive items - comma seperated, first value being true or false for active, second for inactive.
   * @param {string} advanced_search 
   * @param {number} assetgroup_id (int) Filter by Items belonging to a particular Asset group.
   * @param {string} assetgroups (string) Filter Items on asset groups, comma seperated ids.
   * @param {string} assettypes (string) Filter Items on asset types, comma seperated ids.
   * @param {boolean} autotask_service_items (bool) Include only autotask service Items in the response.
   * @param {number} count (int) Number of items to return in the response.
   * @param {string} dbc_company_id 
   * @param {number} exactdivision 
   * @param {boolean} excluderecurring (bool) Exclude recurring Items in the response.
   * @param {boolean} includeactive (bool) Include active Items in the response.
   * @param {boolean} includeinactive (bool) Include inactive Items in the response.
   * @param {number} itemservice_id 
   * @param {number} itemservicerequestdetails_id 
   * @param {number} itemsupplierclientid (int) Filter by Items belonging to a supplier client.
   * @param {number} kashflowtenantid (int) Filter by Items belonging to a particular kashflow tenant.
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
   * @param {boolean} qbitemsonly (bool) Include only quickbook Items in the response.
   * @param {string} qbocompanyid (string) Filter by Items quickbooks online company id.
   * @param {boolean} recurringonly 
   * @param {number} sagebusinesscloudtenantid 
   * @param {string} search (string) Filters response based on the search string.
   * @param {string} search1 
   * @param {boolean} show_not_in_stock (bool) Include Items not in stock in the response.
   * @param {number} stocklocation_id (int) Filter by Items belonging to a particular stock location.
   * @param {number} supplier_id (int) Filter by Items belonging to a particular supplier.
   * @param {string} xerotenantid (string) Filter by Items xero tenant id.
   */
  getItem(
    activeinactive: string,
    advanced_search: string,
    assetgroup_id: number,
    assetgroups: string,
    assettypes: string,
    autotask_service_items: boolean,
    count: number,
    dbc_company_id: string,
    exactdivision: number,
    excluderecurring: boolean,
    includeactive: boolean,
    includeinactive: boolean,
    itemservice_id: number,
    itemservicerequestdetails_id: number,
    itemsupplierclientid: number,
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
    qbitemsonly: boolean,
    qbocompanyid: string,
    recurringonly: boolean,
    sagebusinesscloudtenantid: number,
    search: string,
    search1: string,
    show_not_in_stock: boolean,
    stocklocation_id: number,
    supplier_id: number,
    xerotenantid: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Item',
      params: {
        activeinactive,
        advanced_search,
        assetgroup_id,
        assetgroups,
        assettypes,
        autotask_service_items,
        count,
        dbc_company_id,
        exactdivision,
        excluderecurring,
        includeactive,
        includeinactive,
        itemservice_id,
        itemservicerequestdetails_id,
        itemsupplierclientid,
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
        qbitemsonly,
        qbocompanyid,
        recurringonly,
        sagebusinesscloudtenantid,
        search,
        search1,
        show_not_in_stock,
        stocklocation_id,
        supplier_id,
        xerotenantid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postItem(item: Array<Item>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Item',
      data: item,
    })
  }

  /**
   * @summary Get one Item
   * @description Use this to return a single instance of Item.<br>
				Requires authentication.
   * @param {number} id 
   * @param {string} dbc_company_id 
   * @param {boolean} includedetails (bool) Include extra objects in the response.
   * @param {number} kashflowtenantid 
   * @param {string} qbocompanyid 
   * @param {number} sagebusinesscloudtenantid 
   * @param {string} xerotenantid 
   */
  getItemById(
    id: number,
    dbc_company_id: string,
    includedetails: boolean,
    kashflowtenantid: number,
    qbocompanyid: string,
    sagebusinesscloudtenantid: number,
    xerotenantid: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Item/${id}`,
      params: {
        dbc_company_id,
        includedetails,
        kashflowtenantid,
        qbocompanyid,
        sagebusinesscloudtenantid,
        xerotenantid,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteItemById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Item/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postItemNewAccountsId(item: Array<Item>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Item/NewAccountsId',
      data: item,
    })
  }
}
