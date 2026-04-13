/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module EmailAddressBookAPI
 */

/**
 * EmailAddressBook module
 * @public
 */
export class EmailAddressBookAPI extends BaseAPI {
  /**
   * @summary List of Users
   * @description Use this to return multiple Users. Requires authentication.
   * @param {string} [activeinactive] Takes two comma separated values, the first sets includeactive and the second sets includeinactive.
   * @param {string} [advanced_search]
   * @param {boolean} [allapprovers] Adds an or condition to show all Users that are approvers in the response.
   * @param {boolean} [approvers_only] Include only users that are an approver in the response.
   * @param {number} [asset_id] Filter by Users assigned to a particular asset.
   * @param {number} [client_id] Filters by Users belonging to a particular client.
   * @param {number} [contract_id] Filter by Users assigned to a particular device application type.
   * @param {number} [count] When not using pagination, the number of results to return.
   * @param {number} [department_id] Filters Users belonging to a particular department.
   * @param {boolean} [exclude_agents] Exclude users that are also an agent in the response.
   * @param {boolean} [exclude_defaultsiteusers]
   * @param {boolean} [exclude_generaluser] Exclude Users that are General Users.
   * @param {boolean} [idonly] Returns only the ID field (User ID) of the Users (Not compatible with Pagination).
   * @param {boolean} [includeactive] Include users that are active in the response.
   * @param {boolean} [includebillinginfo] Include billing information in the response.
   * @param {string} [include_custom_fields] Comma separated list of Custom Field IDs to include in the response.
   * @param {boolean} [includeinactive] Include users that are inactive in the response.
   * @param {boolean} [includename]
   * @param {boolean} [includenonserviceaccount] Include users that are a non-service account in the response.
   * @param {boolean} [includenotes] Include user notes in the response.
   * @param {boolean} [includeserviceaccount] Include users that are a service account in the response.
   * @param {string} [integration_type] Filter on Users that belong to an integration - Possible values are 'okta' and 'azure'.
   * @param {boolean} [is_followers]
   * @param {boolean} [is3cxcall]
   * @param {boolean} [lastupdatefromdate] Include the field lastupdatefromdate in the response.
   * @param {boolean} [lastupdatetodate] Include the field lastupdatetodate in the response.
   * @param {number} [licence_id]
   * @param {boolean} [listagentuserfirst] Order by users that are also agents first in the response.
   * @param {boolean} [myallcustomers]
   * @param {boolean} [myarea] Include only Users that belong to your area in the response.
   * @param {boolean} [mydepartment] Include only Users that belong to your department in the response.
   * @param {boolean} [mysite] Include only Users that belong to your site in the response.
   * @param {boolean} [mysitecontact] Include only Users that belong to your site contact in the response.
   * @param {boolean} [mytoplevel] Include only Users that belong to your top level in the response.
   * @param {number} [opp_id] Filter by Users assigned to a particular opportunity.
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
   * @param {number} [organisation_id] Filters by Users belonging to a particular organisation.
   * @param {number} [page_no] When using Pagination, the page number to return.
   * @param {number} [page_size] When using Pagination, the size of the page.
   * @param {boolean} [pageinate] Whether to use Pagination in the response.
   * @param {number} [role]
   * @param {string} [search] Filter by Users like your search string.
   * @param {boolean} [search_phonenumbers] Filter by Users with a phone number like your search.
   * @param {number} [site_id] Filters by Users belonging to a particular site.
   * @param {number} [supplier_id] Filters by Users belonging to the specified supplier.
   * @param {number} [tickettype_id]
   * @param {number} [toplevel_id] Filter by Users belonging to a particular top level.
   * @param {number} [linked_to_user_id] Filter by Users that are linked to the specified User ID.
   */
  getEmailAddressBook({
    activeinactive,
    advanced_search,
    allapprovers,
    approvers_only,
    asset_id,
    client_id,
    contract_id,
    count,
    department_id,
    exclude_agents,
    exclude_defaultsiteusers,
    exclude_generaluser,
    idonly,
    includeactive,
    includebillinginfo,
    include_custom_fields,
    includeinactive,
    includename,
    includenonserviceaccount,
    includenotes,
    includeserviceaccount,
    integration_type,
    is_followers,
    is3cxcall,
    lastupdatefromdate,
    lastupdatetodate,
    licence_id,
    listagentuserfirst,
    myallcustomers,
    myarea,
    mydepartment,
    mysite,
    mysitecontact,
    mytoplevel,
    opp_id,
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
    organisation_id,
    page_no,
    page_size,
    pageinate,
    role,
    search,
    search_phonenumbers,
    site_id,
    supplier_id,
    tickettype_id,
    toplevel_id,
    linked_to_user_id,
  }: {
    activeinactive?: string
    advanced_search?: string
    allapprovers?: boolean
    approvers_only?: boolean
    asset_id?: number
    client_id?: number
    contract_id?: number
    count?: number
    department_id?: number
    exclude_agents?: boolean
    exclude_defaultsiteusers?: boolean
    exclude_generaluser?: boolean
    idonly?: boolean
    includeactive?: boolean
    includebillinginfo?: boolean
    include_custom_fields?: string
    includeinactive?: boolean
    includename?: boolean
    includenonserviceaccount?: boolean
    includenotes?: boolean
    includeserviceaccount?: boolean
    integration_type?: string
    is_followers?: boolean
    is3cxcall?: boolean
    lastupdatefromdate?: boolean
    lastupdatetodate?: boolean
    licence_id?: number
    listagentuserfirst?: boolean
    myallcustomers?: boolean
    myarea?: boolean
    mydepartment?: boolean
    mysite?: boolean
    mysitecontact?: boolean
    mytoplevel?: boolean
    opp_id?: number
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
    organisation_id?: number
    page_no?: number
    page_size?: number
    pageinate?: boolean
    role?: number
    search?: string
    search_phonenumbers?: boolean
    site_id?: number
    supplier_id?: number
    tickettype_id?: number
    toplevel_id?: number
    linked_to_user_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/EmailAddressBook',
      params: {
        activeinactive,
        advanced_search,
        allapprovers,
        approvers_only,
        asset_id,
        client_id,
        contract_id,
        count,
        department_id,
        exclude_agents,
        exclude_defaultsiteusers,
        exclude_generaluser,
        idonly,
        includeactive,
        includebillinginfo,
        include_custom_fields,
        includeinactive,
        includename,
        includenonserviceaccount,
        includenotes,
        includeserviceaccount,
        integration_type,
        is_followers,
        is3cxcall,
        lastupdatefromdate,
        lastupdatetodate,
        licence_id,
        listagentuserfirst,
        myallcustomers,
        myarea,
        mydepartment,
        mysite,
        mysitecontact,
        mytoplevel,
        opp_id,
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
        organisation_id,
        page_no,
        page_size,
        pageinate,
        role,
        search,
        search_phonenumbers,
        site_id,
        supplier_id,
        tickettype_id,
        toplevel_id,
        linked_to_user_id,
      },
    })
  }
}
