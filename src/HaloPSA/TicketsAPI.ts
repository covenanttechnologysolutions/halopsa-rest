/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Faults} */
export type Faults = schemas['Faults']

/**
 * @module TicketsAPI
 */

/**
 * Tickets module
 * @public
 */
export class TicketsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Faults
   * @description Use this to return multiple Faults.<br>
				Requires authentication.
   * @param {string} [advanced_search] 
   * @param {string} [agent] (array of int) Returns tickets based on Agent ID's in the array.
   * @param {number} [agent_id] (int) Filters by the specified agent.
   * @param {string} [alerttype] (string) Includes fninjaalertid field in the response - 'ninjarmm' to use.
   * @param {number} [asset_id] (int) Filters by the specified asset.
   * @param {string} [awaitinginput] 
   * @param {boolean} [billableonly] 
   * @param {string} [billing_date] (string) Filter on billing date.
   * @param {string} [billing_type] (string) Filter on billing type.
   * @param {number} [billingcontractid] 
   * @param {string} [calendar_enddate] (string) Specifies the calendar search parameter in which actions will have occured before this date.
   * @param {string} [calendar_startdate] (string) Specifies the calendar search parameter in which actions will have occured after this date.
   * @param {string} [category_1] (array of int) Returns tickets based on category 1 ID's in the array.
   * @param {string} [category_2] (array of int) Returns tickets based on category 2 ID's in the array.
   * @param {string} [category_3] (array of int) Returns tickets based on category 3 ID's in the array.
   * @param {string} [category_4] (array of int) Returns tickets based on category 4 ID's in the array.
   * @param {boolean} [checkmyticketsonly] 
   * @param {number} [client_id] (int) Filters by the specified client.
   * @param {string} [client_ids] (array of int) Returns tickets based on client ID's in the array.
   * @param {string} [client_ref] 
   * @param {boolean} [closed_only] (bool) Returns only closed tickets in the response.
   * @param {number} [columns_id] (int) The column profile ID.
   * @param {number} [contract_id] (int) Filters by the specified contract.
   * @param {number} [contract_period] (int) Filters by the specified contract period.
   * @param {number} [count] (int) Number of Tickets to return in the response.
   * @param {string} [datesearch] (string) The date field to search against. Examples: Date Opened - 'dateoccured', Date Closed - 'datecleared'.
   * @param {boolean} [debug] 
   * @param {boolean} [default_columns] (bool) Include only the default columns in the response.
   * @param {boolean} [deleted] 
   * @param {string} [domain] (string) Filter on tickets areas - 'reqs' = (not projects not oppportunities) or (projects not opportunities) - 'opps' = opportunities - 'prjs' = projects.
   * @param {string} [enddate] (string) For use with the datesearch parameter.
   * @param {boolean} [enddatetime] (bool) Include project end date and time details in the response.
   * @param {boolean} [excludeslacalcs] (bool) Exclude sla calculation details in the response.
   * @param {string} [excludethese] (array of int) Returns tickets based on the exclusion of these fault ID's in the array.
   * @param {boolean} [excludetickettypeallowall] (bool) Exclude ticket type allow all details in the response.
   * @param {string} [extraportalfilter] (string) Filter on the extraportalfilter field - 'MyTicketsOnly' for my tickets - 'MyClientTickets' for my client tickets.
   * @param {string} [facebook_id] (string) Filters by the specified facebook ID.
   * @param {boolean} [fetchgrandchildren] 
   * @param {string} [flagged] (array of int) Returns tickets based on flagged ticket ID's in the array.
   * @param {string} [followedandagents] (array of int) Returns tickets based on agent and follower ID's in the array.
   * @param {boolean} [ignoremilestonerestriction] 
   * @param {boolean} [includeaccountmanager] (bool) Include account manager details in the response.
   * @param {boolean} [includeagent] (bool) Include agent details in the response.
   * @param {boolean} [includeallopen] 
   * @param {boolean} [includeappointmentid] (bool) Include appointment ID in the response.
   * @param {string} [includeapproval] (array of int) Filter on approval tickets in the array. 1 = approval - 0 = not approval
   * @param {boolean} [includeassetkeyfield] (bool) Include asset key field in the response.
   * @param {boolean} [includeassettype] (bool) Include asset type details in the response.
   * @param {string} [includebreached] (array of int) Returns tickets based on breached ticket ID's in the array.
   * @param {boolean} [includebudgettype] (bool) Include budget type details in the response.
   * @param {boolean} [includechildids] (bool) Include child ticket IDs in the response.
   * @param {boolean} [includechildread] (bool) Include child tickets that have been read details in the response.
   * @param {string} [includechildren] (array of int) Filter on child tickets in the array. 0 = No children and not a child - 1 = Has children - 2 = is a child
   * @param {string} [includeclosed] (array of int) Filter on closed in the array - 1 = Closed - 0 = Not Closed.
   * @param {boolean} [includecolumns] (bool) Include column details in the response.
   * @param {boolean} [includecompleted] 
   * @param {boolean} [includecontract] (bool) Include contract details in the response.
   * @param {boolean} [includecountryregion] 
   * @param {boolean} [includefirstname] (bool) Include first name of user details in the response.
   * @param {string} [includefollowedonly] (array of int) Returns tickets based on follower ID's in the array.
   * @param {string} [includehold] (array of int) Returns tickets based on on-hold ticket ID's in the array.
   * @param {string} [includeinactivetechs] (array of int) Returns tickets based on inactive tech ID's in the array.
   * @param {string} [includeinactiveusers] (array of int) Filter on inactive users in the array - 1 = inactive - 0 = active.
   * @param {boolean} [includeitilname] (bool) Include ITIL name details in the response.
   * @param {boolean} [includelastaction] (bool) Include the last action in the response (Note: only returned if one ticket result is returned).
   * @param {boolean} [includelastincomingemail] (bool) Include last incoming email details in the response.
   * @param {boolean} [includelastname] (bool) Include last name of user details in the response.
   * @param {boolean} [includelastnote] (bool) Include last note details in the response.
   * @param {boolean} [includelocked] 
   * @param {boolean} [includemailbox] (bool) Include email box details in the response.
   * @param {boolean} [includemailid] 
   * @param {string} [includemyuseronly] (array of int) Returns tickets based on my user ID in the array.
   * @param {boolean} [includenextactivitydate] (bool) Include nextactivitydate in the response.
   * @param {boolean} [includenextappointmenttype] (bool) Include next appointment type details in the response.
   * @param {boolean} [includeparentsubject] 
   * @param {string} [includeprojects] (array of int) Filter on projects in the array - 1 = Opportunities not Projects - 2 = Projects not Opportunities - 0 = Neither.
   * @param {string} [includeread] (array of int) Returns tickets based on read ticket ID's in the array.
   * @param {boolean} [includerelatedservices] (bool) Include related services in the response.
   * @param {boolean} [includerelease1] (bool) Include release 1 details in the response.
   * @param {boolean} [includerelease2] (bool) Include release 2 details in the response.
   * @param {boolean} [includerelease3] (bool) Include release 3 details in the response.
   * @param {boolean} [includeservicecategory] (bool) Include service category in the response.
   * @param {boolean} [includeslaactiondate] (bool) Include the SLA action date in the response.
   * @param {boolean} [includeslatimer] (bool) Include SLA timer in the response.
   * @param {boolean} [includestatus] (bool) Include status details in the response.
   * @param {string} [includesubmittedonly] (array of int) Returns tickets based on agent submitted ID's in the array.
   * @param {boolean} [includesupplier] (bool) Include supplier details in the response.
   * @param {boolean} [includetickettype] (bool) Include ticket type details in the response.
   * @param {boolean} [includetimetaken] (bool) Include time taken in the response.
   * @param {boolean} [includetoplevel] (bool) Include top level details in the response.
   * @param {boolean} [includeviewing] (bool) Include tickets currently being viewed details in the response.
   * @param {boolean} [includeworkflowstage] (bool) Include workflow stage details in the response.
   * @param {boolean} [includeworkflowstagenumber] (bool) Include workflow stage number in the response.
   * @param {boolean} [includuserdepartments] 
   * @param {boolean} [inlcludeopenchildcount] (bool) Include open child ticket count in the response.
   * @param {boolean} [invlucebranch] 
   * @param {boolean} [ismilestone] 
   * @param {boolean} [isorion] (bool) Include integration orion details in the response.
   * @param {boolean} [isquicktimesearch] (bool) Returns only quick time tickets in the response.
   * @param {boolean} [isscom] (bool) Include integration scom details in the response.
   * @param {boolean} [isteams] (bool) Returns only teams tickets in the response.
   * @param {boolean} [iszapier] (bool) Returns a single ticket based on permissions in the response.
   * @param {string} [itil_requesttype] (array of int) Returns tickets based on ITIL request type ID's in the array.
   * @param {number} [itil_requesttype_id] (int) Filters by the specified ITIL ticket type.
   * @param {boolean} [kanbanviewontheagentapp] (bool) Include agent app kanban view in the response.
   * @param {boolean} [kanbanviewontheportal] (bool) Include portal kanban view in the response.
   * @param {boolean} [lastupdatefromdate] 
   * @param {boolean} [lastupdatetodate] 
   * @param {number} [list_id] (int) Filters by the specified list.
   * @param {number} [milestone_id] 
   * @param {boolean} [mine] (bool) Include only the tickets that belong to yourself in the response.
   * @param {boolean} [nochargeonly] 
   * @param {boolean} [notime] 
   * @param {boolean} [onlytime] 
   * @param {boolean} [open_only] (bool) Returns only open tickets in the response.
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
   * @param {number} [orion_type] (bool) Filters by the orion type.
   * @param {number} [page_no] (int) When using Pagination, the page number to return.
   * @param {number} [page_size] (int) When using Pagination, the size of the page. Maximum size: 100
   * @param {boolean} [pageinate] (bool) Whether to use Pagination in the response.
   * @param {number} [parent_id] (int) Filters by the specified parent.
   * @param {boolean} [pending_review] (bool) Filter on pending review.
   * @param {boolean} [per_action] (bool) Whether to calculate billing per action.
   * @param {boolean} [prepayorcontractonly] 
   * @param {string} [priority] (array of int) Returns tickets based on priority ID's in the array.
   * @param {string} [product] (array of int) Returns tickets based on product ID's in the array.
   * @param {string} [project_ids] 
   * @param {boolean} [ready_for_invoicing] (bool) Filter on ready for invoicing.
   * @param {number} [related_id] (int) Filters by the specified related ticket.
   * @param {number} [release_id] (int) Filters by the specified release.
   * @param {string} [requesttype] (array of int) Returns tickets based on request type ID's in the array.
   * @param {number} [requesttype_id] (int) Filters by the specified request type.
   * @param {string} [requesttypegroup] (array of int) Returns tickets based on request type group ID's in the array.
   * @param {string} [search] (string) Filters response based on the search string.
   * @param {string} [search_details] (string) Returns tickets based on the details matching the search.
   * @param {string} [search_id] (string) Returns tickets based on ids matching the search.
   * @param {string} [search_inventory_number] (string) Returns tickets based on an asset tag matching the search.
   * @param {string} [search_oppcompanyname] (string) Returns tickets based on the opportunity company name matching the search.
   * @param {string} [search_oppcontactname] (string) Returns tickets based on the opportunity contact name matching the search.
   * @param {string} [search_oppemailaddress] (string) Returns tickets based on the opportunity email addresss matching the search.
   * @param {string} [search_release1] (string) Returns tickets based on release 1 matching the search.
   * @param {string} [search_release2] (string) Returns tickets based on release 2 matching the search.
   * @param {string} [search_release3] (string) Returns tickets based on release 3 matching the search.
   * @param {string} [search_releasenote] (string) Returns tickets based on the release note matching the search.
   * @param {string} [search_reportedby] (string) Returns tickets based on the reportedby field matching the search.
   * @param {string} [search_summary] (string) Returns tickets based on the summary matching the search.
   * @param {string} [search_supplier_reference] (string) Returns tickets based on the supplier reference matching the search.
   * @param {string} [search_user_name] (string) Returns tickets based on users matching the search.
   * @param {string} [search_version] (string) Returns tickets based on the software version matching the search.
   * @param {boolean} [searchactions] (bool) Whether to search actions when using search.
   * @param {number} [searchthisticketid] (int) Filters by the specified ticket.
   * @param {number} [service_id] (int) Filters by the specified service.
   * @param {string} [showonroadmap] (array of int) Filter on roadmap visibility in the array - 1 = visible - 0 = Not visible.
   * @param {number} [site_id] (int) Filters by the specified site.
   * @param {boolean} [sitepostcode] (bool) Include site postcode details in the response.
   * @param {string} [sla] (array of int) Returns tickets based on SLA ID's in the array.
   * @param {number} [sprint_for_tickettype_id] 
   * @param {boolean} [sprints] (bool) Returns only sprint tickets in the response.
   * @param {boolean} [startandendset] (bool) Filter on tickets that have a project start and end date set.
   * @param {string} [startdate] (string) For use with the datesearch parameter.
   * @param {boolean} [startdatetime] (bool) Include project start date and time details in the response.
   * @param {string} [status] (array of int) Returns tickets based on Status ID's in the array.
   * @param {number} [status_id] (int) Filters by the specified status.
   * @param {string} [submittedandagents] (array of int) Returns tickets based on agent and agent submitted ID's in the array.
   * @param {number} [supplier_id] (int) Filters by the specified supplier.
   * @param {string} [supplier_status] (array of int) Returns tickets based on supplier status ID's in the array.
   * @param {string} [team] (array of int) Returns tickets based on Team ID's in the array.
   * @param {string} [team_name] (string) Include teame name details in the response.
   * @param {number} [ticketarea_id] (int) Will return tickets in this ticket area in the response.
   * @param {number} [ticketcontract_id] (int) Filters by the specified ticket contract.
   * @param {boolean} [ticketidonly] (bool) Returns only the ID fields (Ticket ID, SLA ID, Status ID, Client ID and Name and Lastincomingemail date) of the Tickets (Not compatible with Pagination).
   * @param {string} [ticketids] (string) Returns only the tickets specified in the response.
   * @param {number} [ticketlinktype] 
   * @param {number} [toplevel_id] (int) Filters by the specified top level.
   * @param {boolean} [unlinked_only] (bool) Returns only unlinked tickets in the response.
   * @param {number} [user_id] (int) Filters by the specified user.
   * @param {string} [username] (string) Filters by the specified username.
   * @param {number} [utcoffset] (double) Adds an offset to the UTC date.
   * @param {number} [view_id] (int) The ID of the filter profile to filter by.
   * @param {boolean} [withattachments] (bool) Returns only tickets with 1 or more attachment.
   */
  getTickets({
    advanced_search,
    agent,
    agent_id,
    alerttype,
    asset_id,
    awaitinginput,
    billableonly,
    billing_date,
    billing_type,
    billingcontractid,
    calendar_enddate,
    calendar_startdate,
    category_1,
    category_2,
    category_3,
    category_4,
    checkmyticketsonly,
    client_id,
    client_ids,
    client_ref,
    closed_only,
    columns_id,
    contract_id,
    contract_period,
    count,
    datesearch,
    debug,
    default_columns,
    deleted,
    domain,
    enddate,
    enddatetime,
    excludeslacalcs,
    excludethese,
    excludetickettypeallowall,
    extraportalfilter,
    facebook_id,
    fetchgrandchildren,
    flagged,
    followedandagents,
    ignoremilestonerestriction,
    includeaccountmanager,
    includeagent,
    includeallopen,
    includeappointmentid,
    includeapproval,
    includeassetkeyfield,
    includeassettype,
    includebreached,
    includebudgettype,
    includechildids,
    includechildread,
    includechildren,
    includeclosed,
    includecolumns,
    includecompleted,
    includecontract,
    includecountryregion,
    includefirstname,
    includefollowedonly,
    includehold,
    includeinactivetechs,
    includeinactiveusers,
    includeitilname,
    includelastaction,
    includelastincomingemail,
    includelastname,
    includelastnote,
    includelocked,
    includemailbox,
    includemailid,
    includemyuseronly,
    includenextactivitydate,
    includenextappointmenttype,
    includeparentsubject,
    includeprojects,
    includeread,
    includerelatedservices,
    includerelease1,
    includerelease2,
    includerelease3,
    includeservicecategory,
    includeslaactiondate,
    includeslatimer,
    includestatus,
    includesubmittedonly,
    includesupplier,
    includetickettype,
    includetimetaken,
    includetoplevel,
    includeviewing,
    includeworkflowstage,
    includeworkflowstagenumber,
    includuserdepartments,
    inlcludeopenchildcount,
    invlucebranch,
    ismilestone,
    isorion,
    isquicktimesearch,
    isscom,
    isteams,
    iszapier,
    itil_requesttype,
    itil_requesttype_id,
    kanbanviewontheagentapp,
    kanbanviewontheportal,
    lastupdatefromdate,
    lastupdatetodate,
    list_id,
    milestone_id,
    mine,
    nochargeonly,
    notime,
    onlytime,
    open_only,
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
    orion_type,
    page_no,
    page_size,
    pageinate,
    parent_id,
    pending_review,
    per_action,
    prepayorcontractonly,
    priority,
    product,
    project_ids,
    ready_for_invoicing,
    related_id,
    release_id,
    requesttype,
    requesttype_id,
    requesttypegroup,
    search,
    search_details,
    search_id,
    search_inventory_number,
    search_oppcompanyname,
    search_oppcontactname,
    search_oppemailaddress,
    search_release1,
    search_release2,
    search_release3,
    search_releasenote,
    search_reportedby,
    search_summary,
    search_supplier_reference,
    search_user_name,
    search_version,
    searchactions,
    searchthisticketid,
    service_id,
    showonroadmap,
    site_id,
    sitepostcode,
    sla,
    sprint_for_tickettype_id,
    sprints,
    startandendset,
    startdate,
    startdatetime,
    status,
    status_id,
    submittedandagents,
    supplier_id,
    supplier_status,
    team,
    team_name,
    ticketarea_id,
    ticketcontract_id,
    ticketidonly,
    ticketids,
    ticketlinktype,
    toplevel_id,
    unlinked_only,
    user_id,
    username,
    utcoffset,
    view_id,
    withattachments,
  }: {
    advanced_search?: string
    agent?: string
    agent_id?: number
    alerttype?: string
    asset_id?: number
    awaitinginput?: string
    billableonly?: boolean
    billing_date?: string
    billing_type?: string
    billingcontractid?: number
    calendar_enddate?: string
    calendar_startdate?: string
    category_1?: string
    category_2?: string
    category_3?: string
    category_4?: string
    checkmyticketsonly?: boolean
    client_id?: number
    client_ids?: string
    client_ref?: string
    closed_only?: boolean
    columns_id?: number
    contract_id?: number
    contract_period?: number
    count?: number
    datesearch?: string
    debug?: boolean
    default_columns?: boolean
    deleted?: boolean
    domain?: string
    enddate?: string
    enddatetime?: boolean
    excludeslacalcs?: boolean
    excludethese?: string
    excludetickettypeallowall?: boolean
    extraportalfilter?: string
    facebook_id?: string
    fetchgrandchildren?: boolean
    flagged?: string
    followedandagents?: string
    ignoremilestonerestriction?: boolean
    includeaccountmanager?: boolean
    includeagent?: boolean
    includeallopen?: boolean
    includeappointmentid?: boolean
    includeapproval?: string
    includeassetkeyfield?: boolean
    includeassettype?: boolean
    includebreached?: string
    includebudgettype?: boolean
    includechildids?: boolean
    includechildread?: boolean
    includechildren?: string
    includeclosed?: string
    includecolumns?: boolean
    includecompleted?: boolean
    includecontract?: boolean
    includecountryregion?: boolean
    includefirstname?: boolean
    includefollowedonly?: string
    includehold?: string
    includeinactivetechs?: string
    includeinactiveusers?: string
    includeitilname?: boolean
    includelastaction?: boolean
    includelastincomingemail?: boolean
    includelastname?: boolean
    includelastnote?: boolean
    includelocked?: boolean
    includemailbox?: boolean
    includemailid?: boolean
    includemyuseronly?: string
    includenextactivitydate?: boolean
    includenextappointmenttype?: boolean
    includeparentsubject?: boolean
    includeprojects?: string
    includeread?: string
    includerelatedservices?: boolean
    includerelease1?: boolean
    includerelease2?: boolean
    includerelease3?: boolean
    includeservicecategory?: boolean
    includeslaactiondate?: boolean
    includeslatimer?: boolean
    includestatus?: boolean
    includesubmittedonly?: string
    includesupplier?: boolean
    includetickettype?: boolean
    includetimetaken?: boolean
    includetoplevel?: boolean
    includeviewing?: boolean
    includeworkflowstage?: boolean
    includeworkflowstagenumber?: boolean
    includuserdepartments?: boolean
    inlcludeopenchildcount?: boolean
    invlucebranch?: boolean
    ismilestone?: boolean
    isorion?: boolean
    isquicktimesearch?: boolean
    isscom?: boolean
    isteams?: boolean
    iszapier?: boolean
    itil_requesttype?: string
    itil_requesttype_id?: number
    kanbanviewontheagentapp?: boolean
    kanbanviewontheportal?: boolean
    lastupdatefromdate?: boolean
    lastupdatetodate?: boolean
    list_id?: number
    milestone_id?: number
    mine?: boolean
    nochargeonly?: boolean
    notime?: boolean
    onlytime?: boolean
    open_only?: boolean
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
    orion_type?: number
    page_no?: number
    page_size?: number
    pageinate?: boolean
    parent_id?: number
    pending_review?: boolean
    per_action?: boolean
    prepayorcontractonly?: boolean
    priority?: string
    product?: string
    project_ids?: string
    ready_for_invoicing?: boolean
    related_id?: number
    release_id?: number
    requesttype?: string
    requesttype_id?: number
    requesttypegroup?: string
    search?: string
    search_details?: string
    search_id?: string
    search_inventory_number?: string
    search_oppcompanyname?: string
    search_oppcontactname?: string
    search_oppemailaddress?: string
    search_release1?: string
    search_release2?: string
    search_release3?: string
    search_releasenote?: string
    search_reportedby?: string
    search_summary?: string
    search_supplier_reference?: string
    search_user_name?: string
    search_version?: string
    searchactions?: boolean
    searchthisticketid?: number
    service_id?: number
    showonroadmap?: string
    site_id?: number
    sitepostcode?: boolean
    sla?: string
    sprint_for_tickettype_id?: number
    sprints?: boolean
    startandendset?: boolean
    startdate?: string
    startdatetime?: boolean
    status?: string
    status_id?: number
    submittedandagents?: string
    supplier_id?: number
    supplier_status?: string
    team?: string
    team_name?: string
    ticketarea_id?: number
    ticketcontract_id?: number
    ticketidonly?: boolean
    ticketids?: string
    ticketlinktype?: number
    toplevel_id?: number
    unlinked_only?: boolean
    user_id?: number
    username?: string
    utcoffset?: number
    view_id?: number
    withattachments?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Tickets',
      params: {
        advanced_search,
        agent,
        agent_id,
        alerttype,
        asset_id,
        awaitinginput,
        billableonly,
        billing_date,
        billing_type,
        billingcontractid,
        calendar_enddate,
        calendar_startdate,
        category_1,
        category_2,
        category_3,
        category_4,
        checkmyticketsonly,
        client_id,
        client_ids,
        client_ref,
        closed_only,
        columns_id,
        contract_id,
        contract_period,
        count,
        datesearch,
        debug,
        default_columns,
        deleted,
        domain,
        enddate,
        enddatetime,
        excludeslacalcs,
        excludethese,
        excludetickettypeallowall,
        extraportalfilter,
        facebook_id,
        fetchgrandchildren,
        flagged,
        followedandagents,
        ignoremilestonerestriction,
        includeaccountmanager,
        includeagent,
        includeallopen,
        includeappointmentid,
        includeapproval,
        includeassetkeyfield,
        includeassettype,
        includebreached,
        includebudgettype,
        includechildids,
        includechildread,
        includechildren,
        includeclosed,
        includecolumns,
        includecompleted,
        includecontract,
        includecountryregion,
        includefirstname,
        includefollowedonly,
        includehold,
        includeinactivetechs,
        includeinactiveusers,
        includeitilname,
        includelastaction,
        includelastincomingemail,
        includelastname,
        includelastnote,
        includelocked,
        includemailbox,
        includemailid,
        includemyuseronly,
        includenextactivitydate,
        includenextappointmenttype,
        includeparentsubject,
        includeprojects,
        includeread,
        includerelatedservices,
        includerelease1,
        includerelease2,
        includerelease3,
        includeservicecategory,
        includeslaactiondate,
        includeslatimer,
        includestatus,
        includesubmittedonly,
        includesupplier,
        includetickettype,
        includetimetaken,
        includetoplevel,
        includeviewing,
        includeworkflowstage,
        includeworkflowstagenumber,
        includuserdepartments,
        inlcludeopenchildcount,
        invlucebranch,
        ismilestone,
        isorion,
        isquicktimesearch,
        isscom,
        isteams,
        iszapier,
        itil_requesttype,
        itil_requesttype_id,
        kanbanviewontheagentapp,
        kanbanviewontheportal,
        lastupdatefromdate,
        lastupdatetodate,
        list_id,
        milestone_id,
        mine,
        nochargeonly,
        notime,
        onlytime,
        open_only,
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
        orion_type,
        page_no,
        page_size,
        pageinate,
        parent_id,
        pending_review,
        per_action,
        prepayorcontractonly,
        priority,
        product,
        project_ids,
        ready_for_invoicing,
        related_id,
        release_id,
        requesttype,
        requesttype_id,
        requesttypegroup,
        search,
        search_details,
        search_id,
        search_inventory_number,
        search_oppcompanyname,
        search_oppcontactname,
        search_oppemailaddress,
        search_release1,
        search_release2,
        search_release3,
        search_releasenote,
        search_reportedby,
        search_summary,
        search_supplier_reference,
        search_user_name,
        search_version,
        searchactions,
        searchthisticketid,
        service_id,
        showonroadmap,
        site_id,
        sitepostcode,
        sla,
        sprint_for_tickettype_id,
        sprints,
        startandendset,
        startdate,
        startdatetime,
        status,
        status_id,
        submittedandagents,
        supplier_id,
        supplier_status,
        team,
        team_name,
        ticketarea_id,
        ticketcontract_id,
        ticketidonly,
        ticketids,
        ticketlinktype,
        toplevel_id,
        unlinked_only,
        user_id,
        username,
        utcoffset,
        view_id,
        withattachments,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postTickets({ faults }: { faults: Array<Faults> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tickets',
      data: faults,
    })
  }

  /**
   * @summary Get one Faults
   * @description Use this to return a single instance of Faults.<br>
				Requires authentication.
   * @param {number} id 
   * @param {string} [amailentryid] 
   * @param {number} [assignedto] 
   * @param {boolean} [consignablelines] 
   * @param {boolean} [debug] (bool) Include debug information in the response.
   * @param {boolean} [dodatabaselookup] 
   * @param {string} [email] 
   * @param {boolean} [include_auditing] (bool) Include auditing in the response.
   * @param {boolean} [includeagent] 
   * @param {boolean} [includechildids] 
   * @param {boolean} [includedetails] (bool) Include extra objects in the response.
   * @param {boolean} [includelastaction] 
   * @param {boolean} [includelastappointment] (bool) Include the last appointment in the response.
   * @param {boolean} [includelinkedobjects] (bool) Include linked objects in the response.
   * @param {boolean} [includenextappointment] (bool) Include the next appointment in the response.
   * @param {boolean} [includeparentchangeinfo] 
   * @param {boolean} [includeparentsubject] 
   * @param {boolean} [includeseenby] 
   * @param {boolean} [is_portal] 
   * @param {boolean} [isdetailscreen] 
   * @param {boolean} [ishalolink] 
   * @param {boolean} [ispreview] 
   * @param {boolean} [isteams] (bool) Returns only teams tickets in the response.
   * @param {boolean} [nocache] (bool) Whether to cache the response.
   * @param {string} [subject] 
   * @param {boolean} [ticketidonly] (bool) Include only details related to the ticket specified in the response.
   * @param {number} [utcoffset] 
   */
  getTicketsById({
    id,
    amailentryid,
    assignedto,
    consignablelines,
    debug,
    dodatabaselookup,
    email,
    include_auditing,
    includeagent,
    includechildids,
    includedetails,
    includelastaction,
    includelastappointment,
    includelinkedobjects,
    includenextappointment,
    includeparentchangeinfo,
    includeparentsubject,
    includeseenby,
    is_portal,
    isdetailscreen,
    ishalolink,
    ispreview,
    isteams,
    nocache,
    subject,
    ticketidonly,
    utcoffset,
  }: {
    id: number
    amailentryid?: string
    assignedto?: number
    consignablelines?: boolean
    debug?: boolean
    dodatabaselookup?: boolean
    email?: string
    include_auditing?: boolean
    includeagent?: boolean
    includechildids?: boolean
    includedetails?: boolean
    includelastaction?: boolean
    includelastappointment?: boolean
    includelinkedobjects?: boolean
    includenextappointment?: boolean
    includeparentchangeinfo?: boolean
    includeparentsubject?: boolean
    includeseenby?: boolean
    is_portal?: boolean
    isdetailscreen?: boolean
    ishalolink?: boolean
    ispreview?: boolean
    isteams?: boolean
    nocache?: boolean
    subject?: string
    ticketidonly?: boolean
    utcoffset?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Tickets/${id}`,
      params: {
        amailentryid,
        assignedto,
        consignablelines,
        debug,
        dodatabaselookup,
        email,
        include_auditing,
        includeagent,
        includechildids,
        includedetails,
        includelastaction,
        includelastappointment,
        includelinkedobjects,
        includenextappointment,
        includeparentchangeinfo,
        includeparentsubject,
        includeseenby,
        is_portal,
        isdetailscreen,
        ishalolink,
        ispreview,
        isteams,
        nocache,
        subject,
        ticketidonly,
        utcoffset,
      },
    })
  }

  /**
   * @summary Delete one Faults
   * @description Delete specific Faults.<br>
				Requires authentication.
   * @param {number} id 
   * @param {string} [reason] 
   */
  deleteTicketsById({ id, reason }: { id: number; reason?: string }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Tickets/${id}`,
      params: {
        reason,
      },
    })
  }

  /**
   * 
   * 
   
   */
  getTicketsZapier({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Tickets/zapier',
    })
  }

  /**
   * 
   * 
   
   */
  getTicketsSalesmailbox({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Tickets/salesmailbox',
    })
  }

  /**
   * 
   * 
   
   */
  postTicketsObject({ faults }: { faults: Faults }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tickets/Object',
      data: faults,
    })
  }

  /**
   * 
   * 
   
   */
  postTicketsVote({ faults }: { faults: Array<Faults> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tickets/vote',
      data: faults,
    })
  }

  /**
   * 
   * 
   
   */
  postTicketsView({ faults }: { faults: Array<Faults> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tickets/View',
      data: faults,
    })
  }

  /**
   * 
   * 
   
   */
  postTicketsProcesschildren({ faults }: { faults: Array<Faults> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tickets/processchildren',
      data: faults,
    })
  }
}
