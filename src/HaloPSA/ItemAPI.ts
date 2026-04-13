/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class ItemAPI extends BaseAPI {
  /**
   * @summary List of Item
   * @description Use this to return multiple Item. Requires authentication.
   * @param {string} [activeinactive] Filter on active/inactive items - comma seperated, first value being true or false for active, second for inactive.
   * @param {string} [advanced_search]
   * @param {number} [assetgroup_id] Filter by Items belonging to a particular Asset group.
   * @param {string} [assetgroups] Filter Items on asset groups, comma seperated ids.
   * @param {string} [assettypes] Filter Items on asset types, comma seperated ids.
   * @param {boolean} [autotask_service_items] Include only autotask service Items in the response.
   * @param {number} [count] Number of items to return in the response.
   * @param {string} [dbc_company_id]
   * @param {number} [exactdivision]
   * @param {boolean} [excluderecurring] Exclude recurring Items in the response.
   * @param {boolean} [includeactive] Include active Items in the response.
   * @param {boolean} [includeinactive] Include inactive Items in the response.
   * @param {string} [include_custom_fields] Comma separated list of Custom Field IDs to include in the response.
   * @param {number} [itemservice_id]
   * @param {number} [itemservicerequestdetails_id]
   * @param {number} [itemsupplierclientid] Filter by Items belonging to a supplier client.
   * @param {number} [itemsuppliercurrency] Return Item price with the specified currency (otherwise return standard price).
   * @param {number} [kashflowtenantid] Filter by Items belonging to a particular kashflow tenant.
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
   * @param {boolean} [qbitemsonly] Include only quickbook Items in the response.
   * @param {string} [qbocompanyid] Filter by Items quickbooks online company id.
   * @param {boolean} [recurringonly]
   * @param {number} [sagebusinesscloudtenantid]
   * @param {string} [search] Filters response based on the search string.
   * @param {string} [search1]
   * @param {boolean} [show_not_in_stock] Include Items not in stock in the response.
   * @param {number} [stocklocation_id] Filter by Items belonging to a particular stock location.
   * @param {number} [supplier_id] Filter by Items belonging to a particular supplier.
   * @param {string} [xerotenantid] Filter by Items xero tenant id.
   */
  getItem({
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
    include_custom_fields,
    itemservice_id,
    itemservicerequestdetails_id,
    itemsupplierclientid,
    itemsuppliercurrency,
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
  }: {
    activeinactive?: string
    advanced_search?: string
    assetgroup_id?: number
    assetgroups?: string
    assettypes?: string
    autotask_service_items?: boolean
    count?: number
    dbc_company_id?: string
    exactdivision?: number
    excluderecurring?: boolean
    includeactive?: boolean
    includeinactive?: boolean
    include_custom_fields?: string
    itemservice_id?: number
    itemservicerequestdetails_id?: number
    itemsupplierclientid?: number
    itemsuppliercurrency?: number
    kashflowtenantid?: number
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
    qbitemsonly?: boolean
    qbocompanyid?: string
    recurringonly?: boolean
    sagebusinesscloudtenantid?: number
    search?: string
    search1?: string
    show_not_in_stock?: boolean
    stocklocation_id?: number
    supplier_id?: number
    xerotenantid?: string
  }): Promise<unknown> {
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
        include_custom_fields,
        itemservice_id,
        itemservicerequestdetails_id,
        itemsupplierclientid,
        itemsuppliercurrency,
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

  postItem({ itemList }: { itemList: Array<Item> }): Promise<Item> {
    return this.request({ method: 'post', data: itemList, path: '/Item' })
  }

  /**
   * @summary Get one Item
   * @description Use this to return a single instance of Item. Requires authentication.
   * @param {number} id
   * @param {string} [dbc_company_id]
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {number} [kashflowtenantid]
   * @param {string} [qbocompanyid]
   * @param {number} [sagebusinesscloudtenantid]
   * @param {string} [xerotenantid]
   */
  getItemById({
    id,
    dbc_company_id,
    includedetails,
    kashflowtenantid,
    qbocompanyid,
    sagebusinesscloudtenantid,
    xerotenantid,
  }: {
    id: number
    dbc_company_id?: string
    includedetails?: boolean
    kashflowtenantid?: number
    qbocompanyid?: string
    sagebusinesscloudtenantid?: number
    xerotenantid?: string
  }): Promise<Item> {
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
   * @param {number} id
   */
  deleteItemById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Item/${id}` })
  }

  postItemNewAccountsId({ itemList }: { itemList: Array<Item> }): Promise<unknown> {
    return this.request({ method: 'post', data: itemList, path: '/Item/NewAccountsId' })
  }
}
