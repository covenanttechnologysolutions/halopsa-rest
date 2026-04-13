/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link StdRequest} */
export type StdRequest = schemas['StdRequest']

/**
 * @module TemplateAPI
 */

/**
 * Template module
 * @public
 */
export class TemplateAPI extends BaseAPI {
  /**
   * @summary List of StdRequest
   * @description Use this to return multiple StdRequest. Requires authentication.
   * @param {number} [access_control_level] Filters response based on the access control level.
   * @param {number} [action_id] Filter by the specified action.
   * @param {number} [agent_id] Filter by reports with permissions to a particular agent id.
   * @param {boolean} [anonanduser] Filter on reports that can be viewed by anonymous users.
   * @param {number} [asset_id] Filter by asset id.
   * @param {number} [client_id] Filter by the specified client.
   * @param {number} [department_id] Filter by reports with permissions to a particular department id.
   * @param {string} [domain] Filter on tickets areas - 'reqs' = (not projects not oppportunities) or (projects not opportunities) - 'opps' = opportunities - 'prjs' = projects.
   * @param {number} [group_id]
   * @param {number} [include_ticket_id] Filter by the specified ticket.
   * @param {boolean} [includeclients] Include which clients have access to the reports.
   * @param {boolean} [includenames] Include which agents/teams/organisations have access to the reports.
   * @param {number} [itil_ticket_type_id]
   * @param {number} [itil_type] Filter by itil type.
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
   * @param {number} [parent_template_id] Filter by reports with permissions to a particular parent id.
   * @param {number} [report_id] Filter by report id.
   * @param {string} [search] Filters response based on the search string.
   * @param {boolean} [showall] Admin override to return all reports.
   * @param {number} [team_id] Filter by reports with permissions to a particular team id.
   * @param {number} [ticket_type_id] Filter by the specified ticket type.
   * @param {number} [todo_client_id] Filters response based on the to-do client id.
   * @param {boolean} [todo_only] Include only reports that are 'to-do' in the response.
   * @param {number} [type] Filters response based on the report type.
   * @param {string} [types] Return reports of these report types, comma seperated.
   */
  getTemplate({
    access_control_level,
    action_id,
    agent_id,
    anonanduser,
    asset_id,
    client_id,
    department_id,
    domain,
    group_id,
    include_ticket_id,
    includeclients,
    includenames,
    itil_ticket_type_id,
    itil_type,
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
    parent_template_id,
    report_id,
    search,
    showall,
    team_id,
    ticket_type_id,
    todo_client_id,
    todo_only,
    type,
    types,
  }: {
    access_control_level?: number
    action_id?: number
    agent_id?: number
    anonanduser?: boolean
    asset_id?: number
    client_id?: number
    department_id?: number
    domain?: string
    group_id?: number
    include_ticket_id?: number
    includeclients?: boolean
    includenames?: boolean
    itil_ticket_type_id?: number
    itil_type?: number
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
    parent_template_id?: number
    report_id?: number
    search?: string
    showall?: boolean
    team_id?: number
    ticket_type_id?: number
    todo_client_id?: number
    todo_only?: boolean
    type?: number
    types?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Template',
      params: {
        access_control_level,
        action_id,
        agent_id,
        anonanduser,
        asset_id,
        client_id,
        department_id,
        domain,
        group_id,
        include_ticket_id,
        includeclients,
        includenames,
        itil_ticket_type_id,
        itil_type,
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
        parent_template_id,
        report_id,
        search,
        showall,
        team_id,
        ticket_type_id,
        todo_client_id,
        todo_only,
        type,
        types,
      },
    })
  }

  postTemplate({ stdRequestList }: { stdRequestList: Array<StdRequest> }): Promise<unknown> {
    return this.request({ method: 'post', data: stdRequestList, path: '/Template' })
  }

  /**
   * @summary Get one StdRequest
   * @description Use this to return a single instance of StdRequest. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {boolean} [includekbinfo] Include knowledge base information in the response.
   */
  getTemplateById({
    id,
    includedetails,
    includekbinfo,
  }: {
    id: number
    includedetails?: boolean
    includekbinfo?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/Template/${id}`,
      params: { includedetails, includekbinfo },
    })
  }

  /**
   * @param {number} id
   */
  deleteTemplateById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Template/${id}` })
  }
}
