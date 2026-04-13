/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Area} */
export type Area = schemas['Area']
/** {@link Area_View} */
export type Area_View = schemas['Area_View']

/**
 * @module ClientAPI
 */

/**
 * Client module
 * @public
 */
export class ClientAPI extends BaseAPI {
  /**
   * @summary List of Area
   * @description Use this to return multiple Area. Requires authentication.
   * @param {boolean} [accountmanageronly] Include only clients that you are an account manager of in the response.
   * @param {string} [activeinactive] Takes two comma separated values, the first sets includeactive and the second sets includeinactive.
   * @param {string} [advanced_search]
   * @param {boolean} [azureclients] Include only azure clients in the response.
   * @param {boolean} [callplan] Include only clients that have the field acalldate in the past in the response.
   * @param {number} [columns_id]
   * @param {number} [count] When not using pagination, the number of results to return.
   * @param {string} [domain]
   * @param {boolean} [exclude_internal]
   * @param {boolean} [gficlients] Include only GFI clients in the response.
   * @param {boolean} [idonly] Returns only the ID field (Area ID) of the Clients (Not compatible with Pagination).
   * @param {boolean} [includeactive] Include clients that are active in the response.
   * @param {boolean} [includeazuretenants] Include azure tenants in the response.
   * @param {boolean} [includecolumns]
   * @param {boolean} [includeinactive] Include clients that are inactive in the response.
   * @param {boolean} [includeinvoicetemplatename] Include invoice template names in the response.
   * @param {boolean} [includenotes] Include client notes in the response.
   * @param {boolean} [includeqbofields]
   * @param {string} [include_custom_fields] Comma separated list of Custom Field IDs to include in the response.
   * @param {Array<number>} [integration_tenantids]
   * @param {string} [integration_type]
   * @param {boolean} [isjira]
   * @param {boolean} [issentinel] Include only sentinel clients in the response.
   * @param {boolean} [isservicenow]
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
   * @param {number} [page_no] When using Pagination, the page number to return.
   * @param {number} [page_size] When using Pagination, the size of the page.
   * @param {boolean} [pageinate] Whether to use Pagination in the response.
   * @param {string} [search] Filter by Customers like your search string.
   * @param {string} [search_name_only]
   * @param {number} [sentinelid] Filter by sentinel id.
   * @param {boolean} [showcounts]
   * @param {string} [sitefields] IDs of site fields to include in the response.
   * @param {number} [snowaccountid]
   * @param {boolean} [snowclients] Include only snow clients in the response.
   * @param {number} [ticketarea_id]
   * @param {number} [toplevel_id] Filter by Customers belonging to a particular top level.
   * @param {number} [view_id]
   */
  getClient({
    accountmanageronly,
    activeinactive,
    advanced_search,
    azureclients,
    callplan,
    columns_id,
    count,
    domain,
    exclude_internal,
    gficlients,
    idonly,
    includeactive,
    includeazuretenants,
    includecolumns,
    includeinactive,
    includeinvoicetemplatename,
    includenotes,
    includeqbofields,
    include_custom_fields,
    integration_tenantids,
    integration_type,
    isjira,
    issentinel,
    isservicenow,
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
    page_no,
    page_size,
    pageinate,
    search,
    search_name_only,
    sentinelid,
    showcounts,
    sitefields,
    snowaccountid,
    snowclients,
    ticketarea_id,
    toplevel_id,
    view_id,
  }: {
    accountmanageronly?: boolean
    activeinactive?: string
    advanced_search?: string
    azureclients?: boolean
    callplan?: boolean
    columns_id?: number
    count?: number
    domain?: string
    exclude_internal?: boolean
    gficlients?: boolean
    idonly?: boolean
    includeactive?: boolean
    includeazuretenants?: boolean
    includecolumns?: boolean
    includeinactive?: boolean
    includeinvoicetemplatename?: boolean
    includenotes?: boolean
    includeqbofields?: boolean
    include_custom_fields?: string
    integration_tenantids?: Array<number>
    integration_type?: string
    isjira?: boolean
    issentinel?: boolean
    isservicenow?: boolean
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
    page_no?: number
    page_size?: number
    pageinate?: boolean
    search?: string
    search_name_only?: string
    sentinelid?: number
    showcounts?: boolean
    sitefields?: string
    snowaccountid?: number
    snowclients?: boolean
    ticketarea_id?: number
    toplevel_id?: number
    view_id?: number
  }): Promise<Area_View> {
    return this.request({
      method: 'get',
      path: '/Client',
      params: {
        accountmanageronly,
        activeinactive,
        advanced_search,
        azureclients,
        callplan,
        columns_id,
        count,
        domain,
        exclude_internal,
        gficlients,
        idonly,
        includeactive,
        includeazuretenants,
        includecolumns,
        includeinactive,
        includeinvoicetemplatename,
        includenotes,
        includeqbofields,
        include_custom_fields,
        integration_tenantids,
        integration_type,
        isjira,
        issentinel,
        isservicenow,
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
        page_no,
        page_size,
        pageinate,
        search,
        search_name_only,
        sentinelid,
        showcounts,
        sitefields,
        snowaccountid,
        snowclients,
        ticketarea_id,
        toplevel_id,
        view_id,
      },
    })
  }

  postClient({ areaList }: { areaList: Array<Area> }): Promise<Area> {
    return this.request({ method: 'post', data: areaList, path: '/Client' })
  }

  /**
   * @summary Get one Area
   * @description Use this to return a single instance of Area. Requires authentication.
   * @param {number} id
   * @param {string} [domain] Filter on client permissions - 'opps' defaults client opportunities.
   * @param {boolean} [getavailablerts] Include a list of a ticket types the client can log.
   * @param {boolean} [includeactivity] Whether to include customer ticket activity in the response.
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {boolean} [includeperiods] Include pre-pay periods in the response.
   * @param {boolean} [includeprepay] Include pre-pay in the response.
   * @param {number} [tickettype_id]
   */
  getClientById({
    id,
    domain,
    getavailablerts,
    includeactivity,
    includedetails,
    includeperiods,
    includeprepay,
    tickettype_id,
  }: {
    id: number
    domain?: string
    getavailablerts?: boolean
    includeactivity?: boolean
    includedetails?: boolean
    includeperiods?: boolean
    includeprepay?: boolean
    tickettype_id?: number
  }): Promise<Area> {
    return this.request({
      method: 'get',
      path: `/Client/${id}`,
      params: {
        domain,
        getavailablerts,
        includeactivity,
        includedetails,
        includeperiods,
        includeprepay,
        tickettype_id,
      },
    })
  }

  /**
   * @param {number} id
   */
  deleteClientById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Client/${id}` })
  }

  getClientMe(): Promise<Area> {
    return this.request({ method: 'get', path: '/Client/me' })
  }

  postClientNewAccountsId({ areaList }: { areaList: Array<Area> }): Promise<unknown> {
    return this.request({ method: 'post', data: areaList, path: '/Client/NewAccountsId' })
  }

  postClientPaymentMethodUpdate({ areaList }: { areaList: Array<Area> }): Promise<unknown> {
    return this.request({ method: 'post', data: areaList, path: '/Client/PaymentMethodUpdate' })
  }
}
