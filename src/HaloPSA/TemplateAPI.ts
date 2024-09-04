/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class TemplateAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of StdRequest
   * @description Use this to return multiple StdRequest.<br>
				Requires authentication.
   * @param {number} access_control_level (string) Filters response based on the access control level.
   * @param {number} action_id (int) Filter by the specified action.
   * @param {number} agent_id (int) Filter by reports with permissions to a particular agent id.
   * @param {boolean} anonanduser (bool) Filter on reports that can be viewed by anonymous users.
   * @param {number} asset_id (int) Filter by asset id.
   * @param {number} client_id (int) Filter by the specified client.
   * @param {number} department_id (int) Filter by reports with permissions to a particular department id.
   * @param {string} domain (string) Filter on tickets areas - 'reqs' = (not projects not oppportunities) or (projects not opportunities) - 'opps' = opportunities - 'prjs' = projects.
   * @param {number} group_id 
   * @param {number} include_ticket_id (int) Filter by the specified ticket.
   * @param {boolean} includeclients (bool) Include which clients have access to the reports.
   * @param {boolean} includenames (bool) Include which agents/teams/organisations have access to the reports.
   * @param {number} itil_ticket_type_id 
   * @param {number} itil_type (int) Filter by itil type.
   * @param {string} order (string) The name of the field to order by first.
   * @param {string} order2 (string) The name of the field to order by second.
   * @param {string} order3 (string) The name of the field to order by third.
   * @param {string} order4 (string) The name of the field to order by fourth.
   * @param {string} order5 (string) The name of the field to order by fifth.
   * @param {boolean} orderdesc (bool) Whether to order ascending or descending on first order.
   * @param {boolean} orderdesc2 (bool) Whether to order ascending or descending on second order.
   * @param {boolean} orderdesc3 (bool) Whether to order ascending or descending on third order.
   * @param {boolean} orderdesc4 (bool) Whether to order ascending or descending on fourth order.
   * @param {boolean} orderdesc5 (bool) Whether to order ascending or descending on fifth order.
   * @param {number} page_no (int) When using Pagination, the page number to return.
   * @param {number} page_size (int) When using Pagination, the size of the page.
   * @param {boolean} pageinate (bool) Whether to use Pagination in the response.
   * @param {number} parent_template_id (int) Filter by reports with permissions to a particular parent id.
   * @param {number} report_id (int) Filter by report id.
   * @param {string} search (string) Filters response based on the search string.
   * @param {boolean} showall (bool) Admin override to return all reports.
   * @param {number} team_id (int) Filter by reports with permissions to a particular team id.
   * @param {number} ticket_type_id (int) Filter by the specified ticket type.
   * @param {number} todo_client_id (string) Filters response based on the to-do client id.
   * @param {boolean} todo_only (bool) Include only reports that are 'to-do' in the response.
   * @param {number} type (int) Filters response based on the report type.
   * @param {string} types (string) Return reports of these report types, comma seperated.
   */
  getTemplate(
    access_control_level: number,
    action_id: number,
    agent_id: number,
    anonanduser: boolean,
    asset_id: number,
    client_id: number,
    department_id: number,
    domain: string,
    group_id: number,
    include_ticket_id: number,
    includeclients: boolean,
    includenames: boolean,
    itil_ticket_type_id: number,
    itil_type: number,
    order: string,
    order2: string,
    order3: string,
    order4: string,
    order5: string,
    orderdesc: boolean,
    orderdesc2: boolean,
    orderdesc3: boolean,
    orderdesc4: boolean,
    orderdesc5: boolean,
    page_no: number,
    page_size: number,
    pageinate: boolean,
    parent_template_id: number,
    report_id: number,
    search: string,
    showall: boolean,
    team_id: number,
    ticket_type_id: number,
    todo_client_id: number,
    todo_only: boolean,
    type: number,
    types: string,
  ): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postTemplate(stdRequest: Array<StdRequest>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Template',
      data: stdRequest,
    })
  }

  /**
   * @summary Get one StdRequest
   * @description Use this to return a single instance of StdRequest.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails (bool) Include extra objects in the response.
   * @param {boolean} includekbinfo (bool) Include knowledge base information in the response.
   */
  getTemplateById(id: number, includedetails: boolean, includekbinfo: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Template/${id}`,
      params: {
        includedetails,
        includekbinfo,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTemplateById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Template/${id}`,
    })
  }
}
