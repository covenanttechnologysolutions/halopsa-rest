/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SectionDetail} */
export type SectionDetail = schemas['SectionDetail']

/**
 * @module TeamAPI
 */

/**
 * Team module
 * @public
 */
export class TeamAPI extends BaseAPI {
  /**
   * @summary List of SectionDetail
   * @description Use this to return multiple SectionDetail. Requires authentication.
   * @param {boolean} [can_edit_only] Filter on teams that you have permission to edit.
   * @param {boolean} [chat_only] Filter on teams that are enabled fro live chat.
   * @param {number} [department_id] Filter Teams belonging to a particular department.
   * @param {string} [domain] For use with counts: reqs - tickets, opps - opportunities, prjs - projects.
   * @param {string} [ids] Filter by team ids, comma seperated.
   * @param {boolean} [include_managers] Show the managers in the response.
   * @param {string} [includeagentsforteams] Comma separated list of team names. Agents in these teams will be returned.
   * @param {string} [includedisabled] Include disabled Teams in the response.
   * @param {string} [includeenabled] Include enabled Teams in the response.
   * @param {boolean} [istree]
   * @param {boolean} [memberonly] Only returns sections that the current agent is a member of.
   * @param {boolean} [mydeps]
   * @param {boolean} [myteamsonly] Only returns sections that you are a member of.
   * @param {boolean} [orderbyseq] Order by sequence number.
   * @param {number} [outcome_id]
   * @param {boolean} [showall] Admin override to show all teams, overriding team permissions.
   * @param {boolean} [showcounts] Show the count of tickets in the response.
   * @param {number} [ticketarea_id] Only for showcounts - ticket area filter.
   * @param {string} [type] Filter by team domain: reqs - tickets, opps - opportunities, prjs - projects.
   * @param {number} [view_id] Only for showcounts - ticket view filter.
   */
  getTeam({
    can_edit_only,
    chat_only,
    department_id,
    domain,
    ids,
    include_managers,
    includeagentsforteams,
    includedisabled,
    includeenabled,
    istree,
    memberonly,
    mydeps,
    myteamsonly,
    orderbyseq,
    outcome_id,
    showall,
    showcounts,
    ticketarea_id,
    type,
    view_id,
  }: {
    can_edit_only?: boolean
    chat_only?: boolean
    department_id?: number
    domain?: string
    ids?: string
    include_managers?: boolean
    includeagentsforteams?: string
    includedisabled?: string
    includeenabled?: string
    istree?: boolean
    memberonly?: boolean
    mydeps?: boolean
    myteamsonly?: boolean
    orderbyseq?: boolean
    outcome_id?: number
    showall?: boolean
    showcounts?: boolean
    ticketarea_id?: number
    type?: string
    view_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Team',
      params: {
        can_edit_only,
        chat_only,
        department_id,
        domain,
        ids,
        include_managers,
        includeagentsforteams,
        includedisabled,
        includeenabled,
        istree,
        memberonly,
        mydeps,
        myteamsonly,
        orderbyseq,
        outcome_id,
        showall,
        showcounts,
        ticketarea_id,
        type,
        view_id,
      },
    })
  }

  postTeam({ sectionDetailList }: { sectionDetailList: Array<SectionDetail> }): Promise<unknown> {
    return this.request({ method: 'post', data: sectionDetailList, path: '/Team' })
  }

  getTeamTree(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Team/Tree' })
  }

  /**
   * @summary Get one SectionDetail
   * @description Use this to return a single instance of SectionDetail. Requires authentication.
   * @param {number} id
   * @param {boolean} [includeagents] Include agent details in the response.
   * @param {boolean} [includedetails] Include extra objects in the response.
   */
  getTeamById({
    id,
    includeagents,
    includedetails,
  }: {
    id: number
    includeagents?: boolean
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/Team/${id}`,
      params: { includeagents, includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteTeamById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Team/${id}` })
  }
}
