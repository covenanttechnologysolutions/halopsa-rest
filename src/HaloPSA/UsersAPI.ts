/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link UserPrefs} */
export type UserPrefs = schemas['UserPrefs']
/** {@link Users} */
export type Users = schemas['Users']

/**
 * @module UsersAPI
 */

/**
 * Users module
 * @public
 */
export class UsersAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Users
   * @description Use this to return multiple Users.<br>
				Requires authentication.
   * @param {string} [activeinactive] (string) Takes two comma separated values, the first sets includeactive and the second sets includeinactive.
   * @param {string} [advanced_search] 
   * @param {boolean} [allapprovers] (bool) Adds an or condition to show all Users that are approvers in the response.
   * @param {boolean} [approvers_only] (bool) Include only users that are an approver in the response.
   * @param {number} [asset_id] (int) Filter by Users assigned to a particular asset.
   * @param {number} [client_id] (int) Filters by Users belonging to a particular client.
   * @param {number} [contract_id] (int) Filter by Users assigned to a particular device application type.
   * @param {number} [count] (int) When not using pagination, the number of results to return.
   * @param {number} [department_id] (int) Filters Users belonging to a particular department.
   * @param {boolean} [exclude_agents] (bool) Exclude users that are also an agent in the response.
   * @param {boolean} [exclude_defaultsiteusers] 
   * @param {boolean} [exclude_generaluser] (int) Exclude Users that are General Users.
   * @param {boolean} [idonly] (bool) Returns only the ID field (User ID) of the Users (Not compatible with Pagination).
   * @param {boolean} [includeactive] (bool) Include users that are active in the response.
   * @param {boolean} [includebillinginfo] (bool) Include billing information in the response.
   * @param {boolean} [includeinactive] (bool) Include users that are inactive in the response.
   * @param {boolean} [includename] 
   * @param {boolean} [includenonserviceaccount] (bool) Include users that are a non-service account in the response.
   * @param {boolean} [includenotes] (bool) Include user notes in the response.
   * @param {boolean} [includeserviceaccount] (bool) Include users that are a service account in the response.
   * @param {string} [integration_type] (string) Filter on Users that belong to an integration - Possible values are 'okta' and 'azure'.
   * @param {boolean} [is_followers] 
   * @param {boolean} [is3cxcall] 
   * @param {boolean} [lastupdatefromdate] (bool) Include the field lastupdatefromdate in the response.
   * @param {boolean} [lastupdatetodate] (bool) Include the field lastupdatetodate in the response.
   * @param {number} [licence_id] 
   * @param {boolean} [listagentuserfirst] (bool) Order by users that are also agents first in the response.
   * @param {boolean} [myallcustomers] 
   * @param {boolean} [myarea] (bool) Include only Users that belong to your area in the response.
   * @param {boolean} [mydepartment] (bool) Include only Users that belong to your department in the response.
   * @param {boolean} [mysite] (bool) Include only Users that belong to your site in the response.
   * @param {boolean} [mysitecontact] (bool) Include only Users that belong to your site contact in the response.
   * @param {boolean} [mytoplevel] (bool) Include only Users that belong to your top level in the response.
   * @param {number} [opp_id] (int) Filter by Users assigned to a particular opportunity.
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
   * @param {number} [organisation_id] (int) Filters by Users belonging to a particular organisation.
   * @param {number} [page_no] (int) When using Pagination, the page number to return.
   * @param {number} [page_size] (int) When using Pagination, the size of the page.
   * @param {boolean} [pageinate] (bool) Whether to use Pagination in the response.
   * @param {number} [role] 
   * @param {string} [search] (string) Filter by Users like your search string.
   * @param {boolean} [search_phonenumbers] (bool) Filter by Users with a phone number like your search.
   * @param {number} [site_id] (int) Filters by Users belonging to a particular site.
   * @param {number} [supplier_id] (int) Filters by Users belonging to the specified supplier.
   * @param {number} [tickettype_id] 
   * @param {number} [toplevel_id] (int) Filter by Users belonging to a particular top level.
   */
  getUsers({
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Users',
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
      },
    })
  }

  /**
   * 
   * 
   
   */
  postUsers({ users }: { users: Array<Users> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Users',
      data: users,
    })
  }

  /**
   * @summary Get one Users
   * @description Use this to return a single instance of Users.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} [client_id] (int) Filters by the specified client.
   * @param {number} [client_override] 
   * @param {string} [domain] (string) Filter on site permissions - 'opps' defaults users opportunities.
   * @param {boolean} [includeactivity] (bool) Whether to include site ticket activity in the response.
   * @param {boolean} [includebillinginfo] (bool) Include billing information in the response.
   * @param {boolean} [includedetails] (bool) Include extra objects in the response.
   * @param {boolean} [includepopups] (bool) Whether to include customer pop ups in the response.
   * @param {boolean} [includeusersassets] (bool) Include user assets in the response.
   * @param {boolean} [issetup] 
   * @param {number} [opp_id] (int) Filter by User assigned to a particular opportunity.
   * @param {number} [site_id] (int) Filters by the specified site.
   * @param {number} [site_override] 
   * @param {number} [supplier_id] (int) Filters by the specified supplier.
   * @param {number} [tickettype_id] 
   * @param {string} [username] (string) Filters by the specified username.
   */
  getUsersById({
    id,
    client_id,
    client_override,
    domain,
    includeactivity,
    includebillinginfo,
    includedetails,
    includepopups,
    includeusersassets,
    issetup,
    opp_id,
    site_id,
    site_override,
    supplier_id,
    tickettype_id,
    username,
  }: {
    id: number
    client_id?: number
    client_override?: number
    domain?: string
    includeactivity?: boolean
    includebillinginfo?: boolean
    includedetails?: boolean
    includepopups?: boolean
    includeusersassets?: boolean
    issetup?: boolean
    opp_id?: number
    site_id?: number
    site_override?: number
    supplier_id?: number
    tickettype_id?: number
    username?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Users/${id}`,
      params: {
        client_id,
        client_override,
        domain,
        includeactivity,
        includebillinginfo,
        includedetails,
        includepopups,
        includeusersassets,
        issetup,
        opp_id,
        site_id,
        site_override,
        supplier_id,
        tickettype_id,
        username,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteUsersById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Users/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  getUsersMe({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Users/me',
    })
  }

  /**
   * 
   * 
   
   */
  postUsersPrefs({ userPrefs }: { userPrefs: Array<UserPrefs> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Users/prefs',
      data: userPrefs,
    })
  }
}
