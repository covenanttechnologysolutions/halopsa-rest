/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Site} */
export type Site = schemas['Site']

/**
 * @module SiteAPI
 */

/**
 * Site module
 * @public
 */
export class SiteAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Site
   * @description Use this to return multiple Site.<br>
				Requires authentication.
   * @param {string} [activeinactive] (string) Takes two comma separated values, the first sets includeactive and the second sets includeinactive.
   * @param {string} [advanced_search] 
   * @param {boolean} [azuresites] (bool) Include only azure sites in the response.
   * @param {number} [client_id] (int) Filters by the specified client.
   * @param {number} [contract_id] 
   * @param {number} [count] (int) When not using pagination, the number of results to return.
   * @param {boolean} [exclude_internal] 
   * @param {boolean} [gfisites] (bool) Include only GFI sites in the response.
   * @param {boolean} [idonly] (bool) Returns only the ID field (Site ID) of the Sites (Not compatible with Pagination).
   * @param {boolean} [includeactive] (bool) Include sites that are active in the response.
   * @param {boolean} [includeaddress] (bool) Include site address in the response.
   * @param {boolean} [includeinactive] (bool) Include sites that are inactive in the response.
   * @param {boolean} [includenonstocklocations] (bool) Include sites that are not a stock location in the response.
   * @param {boolean} [includenoorderstockbin] 
   * @param {boolean} [includenotes] (bool) Include site notes in the response.
   * @param {boolean} [includestocklocations] (bool) Include sites that are a stock location in the response.
   * @param {boolean} [iscalendarfilter] 
   * @param {number} [item_id_qty] (bool) Include stock information fields for the specified item id in the response.
   * @param {number} [item_salesorder_id] (bool) Include stock information fields for the specified sales order id in the response.
   * @param {number} [item_salesorder_line] (bool) Include stock information fields for the specified sales oreder line id in the response.
   * @param {boolean} [lastupdatefromdate] (bool) Include the field lastupdatefromdate in the response.
   * @param {boolean} [lastupdatetodate] (bool) Include the field lastupdatetodate in the response.
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
   * @param {boolean} [override_enablestockbins] 
   * @param {number} [page_no] (int) When using Pagination, the page number to return.
   * @param {number} [page_size] (int) When using Pagination, the size of the page.
   * @param {boolean} [pageinate] (bool) Whether to use Pagination in the response.
   * @param {string} [search] (string) Filter by Customers like your search string.
   * @param {number} [site_id] 
   * @param {string} [sitefields] (string) IDs of site fields to include in the response.
   * @param {string} [stocklocation] (string) Filter on stock locations, comma separated.
   * @param {number} [toplevel_id] (int) Filters by the specified top level.
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
  }): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postSite({ site }: { site: Array<Site> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Site',
      data: site,
    })
  }

  /**
   * 
   * 
   
   */
  getSiteStockBins({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Site/StockBins',
    })
  }

  /**
   * @summary Get one Site
   * @description Use this to return a single instance of Site.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} [client_override] (int) Filters on a given client id.
   * @param {string} [domain] (string) Filter on site permissions - 'opps' defaults sites opportunities.
   * @param {boolean} [includeactivity] (bool) Whether to include site ticket activity in the response.
   * @param {boolean} [includedetails] (bool) Include extra objects in the response.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Site/${id}`,
      params: {
        client_override,
        domain,
        includeactivity,
        includedetails,
        issetup,
        tickettype_id,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteSiteById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Site/${id}`,
    })
  }
}
