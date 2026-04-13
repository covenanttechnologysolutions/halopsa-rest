/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Device} */
export type Device = schemas['Device']
/** {@link Device_View} */
export type Device_View = schemas['Device_View']

/**
 * @module AssetAPI
 */

/**
 * Asset module
 * @public
 */
export class AssetAPI extends BaseAPI {
  /**
   * @summary List of Device
   * @description Use this to return multiple Device. Requires authentication.
   * @param {string} [activeinactive] Filter on active/inactive assets - comma seperated, first value being true or false for active, second for inactive.
   * @param {string} [advanced_search]
   * @param {number} [assetgroup_id] Filter by Assets belonging to a particular Asset group.
   * @param {string} [assetgroups] Filter Assets on asset groups, comma seperated ids.
   * @param {string} [assets]
   * @param {string} [assetstatuses] Filter Assets on asset statuses, comma seperated ids.
   * @param {number} [assettype]
   * @param {number} [assettype_id] Filter by Assets belonging to a particular Asset type.
   * @param {string} [assettypes] Filter Assets on asset types, comma seperated ids.
   * @param {boolean} [bookmarked] Include only Assets that are bookmarked in the response.
   * @param {number} [client_id] Filter by Assets belonging to a particular client.
   * @param {string} [client_ids] (array of int) Returns Assets based on client ID's in the array.
   * @param {number} [columns_id] The column profile ID.
   * @param {boolean} [consignable] Include only the Assets that are consignable in the response.
   * @param {number} [consignment_id] Filter by Assets consignment id.
   * @param {number} [contract_id] Filter by Assets assigned to a particular contract.
   * @param {number} [contract_id_adding_to] Include the billing period of the linked contract id in the response.
   * @param {number} [count] Number of Assets to return in the response.
   * @param {boolean} [domotzagents] Include only Assets with a linked Domotz agent in the response.
   * @param {string} [excludethese] Returns Assets based on the exclusion of these Asset ID's, comma seperated.
   * @param {string} [globalSearchID]
   * @param {boolean} [idonly] Include only the Asset ID in the response.
   * @param {boolean} [includeactive] Include active Assets in the response.
   * @param {boolean} [includeallowedstatus] Include the Asset column 'tallowallstatus' in the response.
   * @param {boolean} [includeassetfields] Include asset fields in the response - must also specify the URL parameter 'assettype_id' at the same time.
   * @param {boolean} [includechildren] Include child Assets in the response.
   * @param {boolean} [includecolumns] Include column details in the response.
   * @param {boolean} [includeinactive] Include inactive Assets in the response.
   * @param {boolean} [includeservices] Include Assets linked service ids in the response.
   * @param {boolean} [includeuser] Include user details in the response.
   * @param {Array<number>} [integration_tenantids]
   * @param {string} [integration_type] Filter on which integration the Asset was imported through - 'aterarmm', 'ninjarmm', 'syncromsp', 'domotz', 'connectwiseautomate', 'snow', 'datto', 'passportal', 'addigy', 'liongard'.
   * @param {string} [inventory_number]
   * @param {boolean} [islogonbehalfview]
   * @param {number} [item_id] Filter by Assets item id.
   * @param {number} [itemstock_id] Filter by Assets item stock id.
   * @param {number} [kb_id]
   * @param {boolean} [lastupdatefromdate] Include the field lastupdatefromdate in the response.
   * @param {boolean} [lastupdatetodate] Include the field lastupdatetodate in the response.
   * @param {number} [licence_id] Filter by Assets assigned to a particular licence.
   * @param {boolean} [linked_to_ticket]
   * @param {number} [linkedto_id] Filter by Assets linked to a particular Asset.
   * @param {boolean} [mine] Include only the Assets that belong to yourself in the response.
   * @param {boolean} [mysite] Include only the Assets that belong to your site in the response.
   * @param {boolean} [noicon] Exclude the Asset icon in the response.
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
   * @param {boolean} [previously_selected] Include the most recent dateoccured field from a linked ticket in the response.
   * @param {number} [previously_selected_client_id] Filter previously_selected by client id.
   * @param {number} [previously_selected_site_id] Filter previously_selected by site id.
   * @param {number} [previously_selected_user_id] Filter previously_selected by user id.
   * @param {number} [salesorder_id] Filter by Assets sales order id.
   * @param {number} [salesorder_line] Filter by Assets sales order line id.
   * @param {string} [search] Filters response based on the search string.
   * @param {boolean} [search_inventory_number_only] Whether to search only on inventory number in the search string.
   * @param {number} [service_id] Filter by Assets belonging to a particular service.
   * @param {string} [service_ids] Filter Assets on service ids, comma seperated ids.
   * @param {number} [site_id] Filter by Assets belonging to a particular site.
   * @param {number} [stockbin_id]
   * @param {Array<number>} [stockbin_ids]
   * @param {number} [supplier_contract_id] Filter by Assets assigned to a particular supplier contract.
   * @param {number} [supplier_id] Filter by Assets belonging to a particular supplier.
   * @param {string} [suppliercontracts] Filter Assets on supplier contracts, comma seperated ids.
   * @param {number} [ticket_id] Filter by Assets belonging to a particular ticket.
   * @param {number} [tickettype_id]
   * @param {number} [user_id]
   * @param {string} [username] Filters by the specified username.
   * @param {string} [include_custom_fields] Comma separated list of Custom Field IDs to include in the response.
   */
  getAsset({
    activeinactive,
    advanced_search,
    assetgroup_id,
    assetgroups,
    assets,
    assetstatuses,
    assettype,
    assettype_id,
    assettypes,
    bookmarked,
    client_id,
    client_ids,
    columns_id,
    consignable,
    consignment_id,
    contract_id,
    contract_id_adding_to,
    count,
    domotzagents,
    excludethese,
    globalSearchID,
    idonly,
    includeactive,
    includeallowedstatus,
    includeassetfields,
    includechildren,
    includecolumns,
    includeinactive,
    includeservices,
    includeuser,
    integration_tenantids,
    integration_type,
    inventory_number,
    islogonbehalfview,
    item_id,
    itemstock_id,
    kb_id,
    lastupdatefromdate,
    lastupdatetodate,
    licence_id,
    linked_to_ticket,
    linkedto_id,
    mine,
    mysite,
    noicon,
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
    previously_selected,
    previously_selected_client_id,
    previously_selected_site_id,
    previously_selected_user_id,
    salesorder_id,
    salesorder_line,
    search,
    search_inventory_number_only,
    service_id,
    service_ids,
    site_id,
    stockbin_id,
    stockbin_ids,
    supplier_contract_id,
    supplier_id,
    suppliercontracts,
    ticket_id,
    tickettype_id,
    user_id,
    username,
    include_custom_fields,
  }: {
    activeinactive?: string
    advanced_search?: string
    assetgroup_id?: number
    assetgroups?: string
    assets?: string
    assetstatuses?: string
    assettype?: number
    assettype_id?: number
    assettypes?: string
    bookmarked?: boolean
    client_id?: number
    client_ids?: string
    columns_id?: number
    consignable?: boolean
    consignment_id?: number
    contract_id?: number
    contract_id_adding_to?: number
    count?: number
    domotzagents?: boolean
    excludethese?: string
    globalSearchID?: string
    idonly?: boolean
    includeactive?: boolean
    includeallowedstatus?: boolean
    includeassetfields?: boolean
    includechildren?: boolean
    includecolumns?: boolean
    includeinactive?: boolean
    includeservices?: boolean
    includeuser?: boolean
    integration_tenantids?: Array<number>
    integration_type?: string
    inventory_number?: string
    islogonbehalfview?: boolean
    item_id?: number
    itemstock_id?: number
    kb_id?: number
    lastupdatefromdate?: boolean
    lastupdatetodate?: boolean
    licence_id?: number
    linked_to_ticket?: boolean
    linkedto_id?: number
    mine?: boolean
    mysite?: boolean
    noicon?: boolean
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
    previously_selected?: boolean
    previously_selected_client_id?: number
    previously_selected_site_id?: number
    previously_selected_user_id?: number
    salesorder_id?: number
    salesorder_line?: number
    search?: string
    search_inventory_number_only?: boolean
    service_id?: number
    service_ids?: string
    site_id?: number
    stockbin_id?: number
    stockbin_ids?: Array<number>
    supplier_contract_id?: number
    supplier_id?: number
    suppliercontracts?: string
    ticket_id?: number
    tickettype_id?: number
    user_id?: number
    username?: string
    include_custom_fields?: string
  }): Promise<Device_View> {
    return this.request({
      method: 'get',
      path: '/Asset',
      params: {
        activeinactive,
        advanced_search,
        assetgroup_id,
        assetgroups,
        assets,
        assetstatuses,
        assettype,
        assettype_id,
        assettypes,
        bookmarked,
        client_id,
        client_ids,
        columns_id,
        consignable,
        consignment_id,
        contract_id,
        contract_id_adding_to,
        count,
        domotzagents,
        excludethese,
        globalSearchID,
        idonly,
        includeactive,
        includeallowedstatus,
        includeassetfields,
        includechildren,
        includecolumns,
        includeinactive,
        includeservices,
        includeuser,
        integration_tenantids,
        integration_type,
        inventory_number,
        islogonbehalfview,
        item_id,
        itemstock_id,
        kb_id,
        lastupdatefromdate,
        lastupdatetodate,
        licence_id,
        linked_to_ticket,
        linkedto_id,
        mine,
        mysite,
        noicon,
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
        previously_selected,
        previously_selected_client_id,
        previously_selected_site_id,
        previously_selected_user_id,
        salesorder_id,
        salesorder_line,
        search,
        search_inventory_number_only,
        service_id,
        service_ids,
        site_id,
        stockbin_id,
        stockbin_ids,
        supplier_contract_id,
        supplier_id,
        suppliercontracts,
        ticket_id,
        tickettype_id,
        user_id,
        username,
        include_custom_fields,
      },
    })
  }

  postAsset({ deviceList }: { deviceList: Array<Device> }): Promise<Device> {
    return this.request({ method: 'post', data: deviceList, path: '/Asset' })
  }

  /**
   * @summary Get one Device
   * @description Use this to return a single instance of Device. Requires authentication.
   * @param {number} id
   * @param {number} [assettype_id]
   * @param {boolean} [includeactivity] Include activity details in the response.
   * @param {boolean} [includeallowedstatus] Include allowed statuses details in the response.
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {boolean} [includediagramdetails] Include diagram details in the response.
   * @param {boolean} [includehierarchy] Include hierarchy details in the response.
   */
  getAssetById({
    id,
    assettype_id,
    includeactivity,
    includeallowedstatus,
    includedetails,
    includediagramdetails,
    includehierarchy,
  }: {
    id: number
    assettype_id?: number
    includeactivity?: boolean
    includeallowedstatus?: boolean
    includedetails?: boolean
    includediagramdetails?: boolean
    includehierarchy?: boolean
  }): Promise<Device> {
    return this.request({
      method: 'get',
      path: `/Asset/${id}`,
      params: {
        assettype_id,
        includeactivity,
        includeallowedstatus,
        includedetails,
        includediagramdetails,
        includehierarchy,
      },
    })
  }

  /**
   * @param {number} id
   */
  deleteAssetById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Asset/${id}` })
  }

  getAssetNextTag(): Promise<Record<string, unknown>> {
    return this.request({ method: 'get', path: '/Asset/NextTag' })
  }

  getAssetGetAllSoftwareVersions(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Asset/GetAllSoftwareVersions' })
  }
}
