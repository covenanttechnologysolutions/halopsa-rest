/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class AgentAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Uname
   * @description Use this to return multiple Uname.<br>
				Requires authentication.
   * @param {string} [activeinactive] (string) Takes two comma separated values, the first sets includeactive and the second sets includeinactive.
   * @param {boolean} [appointmentscreen] 
   * @param {boolean} [can_edit_only] (bool) Filter on Agents that you have permission to edit.
   * @param {number} [client_id] (int) Filters by Agents belonging to a particular client.
   * @param {string} [clientidoverride] 
   * @param {number} [department_id] (int) Filters Agents belonging to a particular department.
   * @param {string} [departments] (string) Filter on Agents that belong to a department, comma separated.
   * @param {string} [domain] (string) Filter on Agent permissions - values: 'opps' - 'prjs' - 'reqs'.
   * @param {boolean} [exchangecalendars] (bool) Filters on Agents that have exchange calendars synced.
   * @param {number} [excludeAgent] (int) Exclude agent with id.
   * @param {boolean} [forcequalmatch] 
   * @param {boolean} [includeapiagents] 
   * @param {string} [includedisabled] (bool) Include Agents that are inactive in the response.
   * @param {string} [includeenabled] (bool) Include Agents that are active in the response.
   * @param {boolean} [includenamedcount] (bool) Include the count of the number of Agents in the response.
   * @param {boolean} [includeroles] (bool) Include Agent roles in the response.
   * @param {boolean} [includestatus] (bool) Include Agent status in the response.
   * @param {string} [includeunassigned] (bool) Include the unassigned Agent in the response.
   * @param {string} [integration_type] (string) Filter on Agents that belong to an integration - Possible values are 'okta'.
   * @param {boolean} [linemanagedonly] (bool) Filters on Agents that have a line manager.
   * @param {boolean} [linkingagents] 
   * @param {boolean} [loadcache] 
   * @param {string} [onlinestatuses] (string) Filter on Agents that have a certain online status, comma separated.
   * @param {string} [qualifications] (string) Filter by Agents with a certain qualifications - comma separated.
   * @param {boolean} [reassign] (bool) Filters on Agents that can assign to Agents in sections that agent is not a member of.
   * @param {boolean} [remoteagents] (bool) Filters on Agent invite permissions - if the field rlmiallowothertechinvites is false it will match to your agent id.
   * @param {string} [remoteagenttype] (string) Filters on Agent invite permissions - if remoteagent is true and the field rlmiallowothertechinvites is true - values: 'beyondtrust' and 'logmein'.
   * @param {string} [role] (string) Filter by Agents who have a particular role. Requires an int passed as a string.
   * @param {string} [search] (string) Filter by Agents with a name, email address or telephone number like your search.
   * @param {boolean} [shiftagentsonly] 
   * @param {boolean} [showall] (bool) Used to override org restrictions for main search - admin only.
   * @param {boolean} [showcounts] (bool) Include Agents ticket counts in the response.
   * @param {string} [team] (string) Filter by Agents within a particular team.
   * @param {number} [team_id] (int) Filter by Agents within a particular team id.
   * @param {string} [teams] (string) Filter on Agents that belong to a team, comma separated.
   * @param {boolean} [thisAgentOnly] (bool) Only include your agent in the response.
   * @param {number} [ticketarea_id] (int) Only for showcounts - ticket area filter.
   * @param {number} [tickettype_id] (int) Filters by Agents that have access to particluar ticket types.
   * @param {number} [view_id] (int) Only for showcounts - ticket view filter.
   * @param {boolean} [withemail] (bool) Filters on Agents that have an email.
   */
  getAgent({
    activeinactive,
    appointmentscreen,
    can_edit_only,
    client_id,
    clientidoverride,
    department_id,
    departments,
    domain,
    exchangecalendars,
    excludeAgent,
    forcequalmatch,
    includeapiagents,
    includedisabled,
    includeenabled,
    includenamedcount,
    includeroles,
    includestatus,
    includeunassigned,
    integration_type,
    linemanagedonly,
    linkingagents,
    loadcache,
    onlinestatuses,
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
    can_edit_only?: boolean
    client_id?: number
    clientidoverride?: string
    department_id?: number
    departments?: string
    domain?: string
    exchangecalendars?: boolean
    excludeAgent?: number
    forcequalmatch?: boolean
    includeapiagents?: boolean
    includedisabled?: string
    includeenabled?: string
    includenamedcount?: boolean
    includeroles?: boolean
    includestatus?: boolean
    includeunassigned?: string
    integration_type?: string
    linemanagedonly?: boolean
    linkingagents?: boolean
    loadcache?: boolean
    onlinestatuses?: string
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Agent',
      params: {
        activeinactive,
        appointmentscreen,
        can_edit_only,
        client_id,
        clientidoverride,
        department_id,
        departments,
        domain,
        exchangecalendars,
        excludeAgent,
        forcequalmatch,
        includeapiagents,
        includedisabled,
        includeenabled,
        includenamedcount,
        includeroles,
        includestatus,
        includeunassigned,
        integration_type,
        linemanagedonly,
        linkingagents,
        loadcache,
        onlinestatuses,
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

  /**
   * 
   * 
   
   */
  postAgent({ uname }: { uname: Array<Uname> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Agent',
      data: uname,
    })
  }

  /**
   * @summary Get one Uname
   * @description Use this to return a single instance of Uname.<br>
				Requires authentication.
   * @param {number} id 
   * @param {string} [clientidoverride] 
   * @param {boolean} [get_htmldesigner_signature] 
   * @param {boolean} [getholidayallowance] 
   * @param {boolean} [includedetails] (bool) Include extra objects in the response.
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
  }): Promise<any> {
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
   *
   *
   * @param {number} id
   */
  deleteAgentById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Agent/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  getAgentMe({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Agent/me',
    })
  }

  /**
   * 
   * 
   
   */
  postAgentClearCache({}: {}): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Agent/ClearCache',
    })
  }
}
