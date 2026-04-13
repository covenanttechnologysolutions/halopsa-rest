/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Uname} */
export type Uname = schemas['Uname']

/**
 * @module AgentAPI
 */

/**
 * Agent module
 * @public
 */
export class AgentAPI extends BaseAPI {
  /**
   * @summary List of Uname
   * @description Use this to return multiple Uname. Requires authentication.
   * @param {string} [activeinactive] Takes two comma separated values, the first sets includeactive and the second sets includeinactive.
   * @param {boolean} [appointmentscreen]
   * @param {boolean} [basic_fields_only] Reduces the number of fields returned.
   * @param {boolean} [can_edit_only] Filter on Agents that you have permission to edit.
   * @param {number} [client_id] Filters by Agents belonging to a particular client.
   * @param {string} [clientidoverride]
   * @param {number} [department_id] Filters Agents belonging to a particular department.
   * @param {string} [departments] Filter on Agents that belong to a department, comma separated.
   * @param {string} [domain] Filter on Agent permissions - values: 'opps' - 'prjs' - 'reqs'.
   * @param {boolean} [exchangecalendars] Filters on Agents that have exchange calendars synced.
   * @param {boolean} [exclude_membership_info] Removes team and department membership information from the response.
   * @param {number} [excludeAgent] Exclude agent with id.
   * @param {boolean} [forcequalmatch]
   * @param {boolean} [include_membership_info] Always include team and department membership information in the response.
   * @param {boolean} [includeapiagents]
   * @param {string} [includedisabled] Include Agents that are inactive in the response.
   * @param {string} [includeenabled] Include Agents that are active in the response.
   * @param {boolean} [includenamedcount] Include the count of the number of Agents in the response.
   * @param {boolean} [includeroles] Include Agent roles in the response.
   * @param {boolean} [includestatus] Include Agent status in the response.
   * @param {string} [includeunassigned] Include the unassigned Agent in the response.
   * @param {boolean} [is_agent_cache] Special behaviour for Agent app Agent Cache build.
   * @param {string} [integration_type] Filter on Agents that belong to an integration - Possible values are 'okta'.
   * @param {boolean} [linemanagedonly] Filters on Agents that have a line manager.
   * @param {boolean} [linkingagents]
   * @param {boolean} [loadcache]
   * @param {string} [onlinestatuses] Filter on Agents that have a certain online status, comma separated.
   * @param {string} [order]
   * @param {string} [order2]
   * @param {string} [order3]
   * @param {string} [order4]
   * @param {string} [order5]
   * @param {boolean} [orderdesc]
   * @param {boolean} [orderdesc2]
   * @param {boolean} [orderdesc3]
   * @param {boolean} [orderdesc4]
   * @param {boolean} [orderdesc5]
   * @param {number} [page_no]
   * @param {number} [page_size]
   * @param {boolean} [pageinate]
   * @param {string} [qualifications] Filter by Agents with a certain qualifications - comma separated.
   * @param {boolean} [reassign] Filters on Agents that can assign to Agents in sections that agent is not a member of.
   * @param {boolean} [remoteagents] Filters on Agent invite permissions - if the field rlmiallowothertechinvites is false it will match to your agent id.
   * @param {string} [remoteagenttype] Filters on Agent invite permissions - if remoteagent is true and the field rlmiallowothertechinvites is true - values: 'beyondtrust' and 'logmein'.
   * @param {string} [role] Filter by Agents who have a particular role. Requires an int passed as a string.
   * @param {string} [search] Filter by Agents with a name, email address or telephone number like your search.
   * @param {boolean} [shiftagentsonly]
   * @param {boolean} [showall] Used to override org restrictions for main search - admin only.
   * @param {boolean} [showcounts] Include Agents ticket counts in the response.
   * @param {string} [team] Filter by Agents within a particular team.
   * @param {number} [team_id] Filter by Agents within a particular team id.
   * @param {string} [teams] Filter on Agents that belong to a team, comma separated.
   * @param {boolean} [thisAgentOnly] Only include your agent in the response.
   * @param {number} [ticketarea_id] Only for showcounts - ticket area filter.
   * @param {number} [tickettype_id] Filters by Agents that have access to particluar ticket types.
   * @param {number} [view_id] Only for showcounts - ticket view filter.
   * @param {boolean} [withemail] Filters on Agents that have an email.
   */
  getAgent({
    activeinactive,
    appointmentscreen,
    basic_fields_only,
    can_edit_only,
    client_id,
    clientidoverride,
    department_id,
    departments,
    domain,
    exchangecalendars,
    exclude_membership_info,
    excludeAgent,
    forcequalmatch,
    include_membership_info,
    includeapiagents,
    includedisabled,
    includeenabled,
    includenamedcount,
    includeroles,
    includestatus,
    includeunassigned,
    is_agent_cache,
    integration_type,
    linemanagedonly,
    linkingagents,
    loadcache,
    onlinestatuses,
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
    qualifications,
    reassign,
    remoteagents,
    remoteagenttype,
    role,
    search,
    shiftagentsonly,
    showall,
    showcounts,
    team,
    team_id,
    teams,
    thisAgentOnly,
    ticketarea_id,
    tickettype_id,
    view_id,
    withemail,
  }: {
    activeinactive?: string
    appointmentscreen?: boolean
    basic_fields_only?: boolean
    can_edit_only?: boolean
    client_id?: number
    clientidoverride?: string
    department_id?: number
    departments?: string
    domain?: string
    exchangecalendars?: boolean
    exclude_membership_info?: boolean
    excludeAgent?: number
    forcequalmatch?: boolean
    include_membership_info?: boolean
    includeapiagents?: boolean
    includedisabled?: string
    includeenabled?: string
    includenamedcount?: boolean
    includeroles?: boolean
    includestatus?: boolean
    includeunassigned?: string
    is_agent_cache?: boolean
    integration_type?: string
    linemanagedonly?: boolean
    linkingagents?: boolean
    loadcache?: boolean
    onlinestatuses?: string
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
    qualifications?: string
    reassign?: boolean
    remoteagents?: boolean
    remoteagenttype?: string
    role?: string
    search?: string
    shiftagentsonly?: boolean
    showall?: boolean
    showcounts?: boolean
    team?: string
    team_id?: number
    teams?: string
    thisAgentOnly?: boolean
    ticketarea_id?: number
    tickettype_id?: number
    view_id?: number
    withemail?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Agent',
      params: {
        activeinactive,
        appointmentscreen,
        basic_fields_only,
        can_edit_only,
        client_id,
        clientidoverride,
        department_id,
        departments,
        domain,
        exchangecalendars,
        exclude_membership_info,
        excludeAgent,
        forcequalmatch,
        include_membership_info,
        includeapiagents,
        includedisabled,
        includeenabled,
        includenamedcount,
        includeroles,
        includestatus,
        includeunassigned,
        is_agent_cache,
        integration_type,
        linemanagedonly,
        linkingagents,
        loadcache,
        onlinestatuses,
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
        qualifications,
        reassign,
        remoteagents,
        remoteagenttype,
        role,
        search,
        shiftagentsonly,
        showall,
        showcounts,
        team,
        team_id,
        teams,
        thisAgentOnly,
        ticketarea_id,
        tickettype_id,
        view_id,
        withemail,
      },
    })
  }

  postAgent({ unameList }: { unameList: Array<Uname> }): Promise<unknown> {
    return this.request({ method: 'post', data: unameList, path: '/Agent' })
  }

  /**
   * @summary Get one Uname
   * @description Use this to return a single instance of Uname. Requires authentication.
   * @param {number} id
   * @param {string} [clientidoverride]
   * @param {boolean} [get_htmldesigner_signature]
   * @param {boolean} [getholidayallowance]
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {boolean} [isagentconfig]
   * @param {boolean} [loadcache]
   */
  getAgentById({
    id,
    clientidoverride,
    get_htmldesigner_signature,
    getholidayallowance,
    includedetails,
    isagentconfig,
    loadcache,
  }: {
    id: number
    clientidoverride?: string
    get_htmldesigner_signature?: boolean
    getholidayallowance?: boolean
    includedetails?: boolean
    isagentconfig?: boolean
    loadcache?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/Agent/${id}`,
      params: {
        clientidoverride,
        get_htmldesigner_signature,
        getholidayallowance,
        includedetails,
        isagentconfig,
        loadcache,
      },
    })
  }

  /**
   * @param {number} id
   */
  deleteAgentById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Agent/${id}` })
  }

  getAgentMe(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Agent/me' })
  }

  postAgentClearCache(): Promise<unknown> {
    return this.request({ method: 'post', path: '/Agent/ClearCache' })
  }
}
