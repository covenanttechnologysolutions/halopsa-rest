/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Site} */
export type Site = schemas['Site']
/** {@link Site_List} */
export type Site_List = schemas['Site_List']
/** {@link Site_View} */
export type Site_View = schemas['Site_View']

/**
 * @module SiteAPI
 */

/**
 * Site module
 * @public
 */
export class SiteAPI extends BaseAPI {
  /**
   * @summary List of Site
   * @description Use this to return multiple Site. Requires authentication.
   * @param {string} [activeinactive] Takes two comma separated values, the first sets includeactive and the second sets includeinactive.
   * @param {string} [advanced_search]
   * @param {boolean} [azuresites] Include only azure sites in the response.
   * @param {number} [client_id] Filters by the specified client.
   * @param {number} [contract_id]
   * @param {number} [count] When not using pagination, the number of results to return.
   * @param {boolean} [exclude_internal]
   * @param {boolean} [gfisites] Include only GFI sites in the response.
   * @param {boolean} [idonly] Returns only the ID field (Site ID) of the Sites (Not compatible with Pagination).
   * @param {boolean} [includeactive] Include sites that are active in the response.
   * @param {boolean} [includeaddress] Include site address in the response.
   * @param {boolean} [includeinactive] Include sites that are inactive in the response.
   * @param {boolean} [includenonstocklocations] Include sites that are not a stock location in the response.
   * @param {boolean} [includenoorderstockbin]
   * @param {boolean} [includenotes] Include site notes in the response.
   * @param {boolean} [includestocklocations] Include sites that are a stock location in the response.
   * @param {string} [include_custom_fields] Comma separated list of Custom Field IDs to include in the response.
   * @param {boolean} [iscalendarfilter]
   * @param {number} [item_id_qty] Include stock information fields for the specified item id in the response.
   * @param {number} [item_salesorder_id] Include stock information fields for the specified sales order id in the response.
   * @param {number} [item_salesorder_line] Include stock information fields for the specified sales oreder line id in the response.
   * @param {boolean} [lastupdatefromdate] Include the field lastupdatefromdate in the response.
   * @param {boolean} [lastupdatetodate] Include the field lastupdatetodate in the response.
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
   * @param {boolean} [override_enablestockbins]
   * @param {number} [page_no] When using Pagination, the page number to return.
   * @param {number} [page_size] When using Pagination, the size of the page.
   * @param {boolean} [pageinate] Whether to use Pagination in the response.
   * @param {string} [search] Filter by Customers like your search string.
   * @param {number} [site_id]
   * @param {string} [sitefields] IDs of site fields to include in the response.
   * @param {string} [stocklocation] Filter on stock locations, comma separated.
   * @param {number} [toplevel_id] Filters by the specified top level.
   * @param {number} [user_override]
   */
  getSite({
    activeinactive,
    advanced_search,
    azuresites,
    client_id,
    contract_id,
    count,
    exclude_internal,
    gfisites,
    idonly,
    includeactive,
    includeaddress,
    includeinactive,
    includenonstocklocations,
    includenoorderstockbin,
    includenotes,
    includestocklocations,
    include_custom_fields,
    iscalendarfilter,
    item_id_qty,
    item_salesorder_id,
    item_salesorder_line,
    lastupdatefromdate,
    lastupdatetodate,
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
    override_enablestockbins,
    page_no,
    page_size,
    pageinate,
    search,
    site_id,
    sitefields,
    stocklocation,
    toplevel_id,
    user_override,
  }: {
    activeinactive?: string
    advanced_search?: string
    azuresites?: boolean
    client_id?: number
    contract_id?: number
    count?: number
    exclude_internal?: boolean
    gfisites?: boolean
    idonly?: boolean
    includeactive?: boolean
    includeaddress?: boolean
    includeinactive?: boolean
    includenonstocklocations?: boolean
    includenoorderstockbin?: boolean
    includenotes?: boolean
    includestocklocations?: boolean
    include_custom_fields?: string
    iscalendarfilter?: boolean
    item_id_qty?: number
    item_salesorder_id?: number
    item_salesorder_line?: number
    lastupdatefromdate?: boolean
    lastupdatetodate?: boolean
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
    override_enablestockbins?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
    search?: string
    site_id?: number
    sitefields?: string
    stocklocation?: string
    toplevel_id?: number
    user_override?: number
  }): Promise<Site_View> {
    return this.request({
      method: 'get',
      path: '/Site',
      params: {
        activeinactive,
        advanced_search,
        azuresites,
        client_id,
        contract_id,
        count,
        exclude_internal,
        gfisites,
        idonly,
        includeactive,
        includeaddress,
        includeinactive,
        includenonstocklocations,
        includenoorderstockbin,
        includenotes,
        includestocklocations,
        include_custom_fields,
        iscalendarfilter,
        item_id_qty,
        item_salesorder_id,
        item_salesorder_line,
        lastupdatefromdate,
        lastupdatetodate,
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
        override_enablestockbins,
        page_no,
        page_size,
        pageinate,
        search,
        site_id,
        sitefields,
        stocklocation,
        toplevel_id,
        user_override,
      },
    })
  }

  postSite({ siteList }: { siteList: Array<Site> }): Promise<Site> {
    return this.request({ method: 'post', data: siteList, path: '/Site' })
  }

  getSiteStockBins(): Promise<Array<Site_List>> {
    return this.request({ method: 'get', path: '/Site/StockBins' })
  }

  /**
   * @summary Get one Site
   * @description Use this to return a single instance of Site. Requires authentication.
   * @param {number} id
   * @param {number} [client_override] Filters on a given client id.
   * @param {string} [domain] Filter on site permissions - 'opps' defaults sites opportunities.
   * @param {boolean} [includeactivity] Whether to include site ticket activity in the response.
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {boolean} [issetup]
   * @param {number} [tickettype_id]
   */
  getSiteById({
    id,
    client_override,
    domain,
    includeactivity,
    includedetails,
    issetup,
    tickettype_id,
  }: {
    id: number
    client_override?: number
    domain?: string
    includeactivity?: boolean
    includedetails?: boolean
    issetup?: boolean
    tickettype_id?: number
  }): Promise<Site> {
    return this.request({
      method: 'get',
      path: `/Site/${id}`,
      params: { client_override, domain, includeactivity, includedetails, issetup, tickettype_id },
    })
  }

  /**
   * @param {number} id
   */
  deleteSiteById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Site/${id}` })
  }
}
