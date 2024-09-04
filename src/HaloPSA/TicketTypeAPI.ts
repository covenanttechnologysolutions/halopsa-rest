/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link RequestType} */
export type RequestType = schemas['RequestType']

/**
 * @module TicketTypeAPI
 */

/**
 * TicketType module
 * @public
 */
export class TicketTypeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of RequestType
   * @description Use this to return multiple RequestType.<br>
				Requires authentication.
   * @param {number} access_control_level (int) Filters response based on the access control level.
   * @param {boolean} anonanduser (bool) Filter on ticket types that can be viewed by anonymous users.
   * @param {boolean} can_create_only (bool) Filters by the ticket types that are created.
   * @param {boolean} can_edit_only (bool) Filters by the ticket types that can be edited.
   * @param {boolean} canagentsselect (bool) Filter on ticket types that agents can select.
   * @param {boolean} canusercreate 
   * @param {number} client_id (int) Filter Request Types by a particular customer.
   * @param {string} domain (string) For use with counts: reqs - tickets, opps - opportunities, prjs - projects.
   * @param {number} group_id (int) Filters by the ticket type group.
   * @param {number} include_current (int) Includes this ticket type in the response - used alongside can create and can edit.
   * @param {boolean} include_mandatory_field_check 
   * @param {boolean} isquicktimedropdown (bool) Filters by the ticket types that display on quick time.
   * @param {number} itil_type (int) Filter by itil type.
   * @param {number} outcome_id 
   * @param {string} searchtickets (string) Filter on ticket types based on tickets.
   * @param {boolean} showall (bool) Admin override to show all ticket types, overriding tickets permissions.
   * @param {boolean} showcounts (bool) Show the count of tickets in the response.
   * @param {boolean} showinactive (bool) Include inactive ticket types in the response.
   * @param {boolean} sprints_only 
   * @param {number} ticketarea_id (int) Only for showcounts - ticket area filter.
   * @param {boolean} user_only (bool) Filters by the ticket types that user can see.
   * @param {number} view_id (int) Only for showcounts - ticket view filter.
   */
  getTicketType(
    access_control_level: number,
    anonanduser: boolean,
    can_create_only: boolean,
    can_edit_only: boolean,
    canagentsselect: boolean,
    canusercreate: boolean,
    client_id: number,
    domain: string,
    group_id: number,
    include_current: number,
    include_mandatory_field_check: boolean,
    isquicktimedropdown: boolean,
    itil_type: number,
    outcome_id: number,
    searchtickets: string,
    showall: boolean,
    showcounts: boolean,
    showinactive: boolean,
    sprints_only: boolean,
    ticketarea_id: number,
    user_only: boolean,
    view_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TicketType',
      params: {
        access_control_level,
        anonanduser,
        can_create_only,
        can_edit_only,
        canagentsselect,
        canusercreate,
        client_id,
        domain,
        group_id,
        include_current,
        include_mandatory_field_check,
        isquicktimedropdown,
        itil_type,
        outcome_id,
        searchtickets,
        showall,
        showcounts,
        showinactive,
        sprints_only,
        ticketarea_id,
        user_only,
        view_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postTicketType(requestType: Array<RequestType>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TicketType',
      data: requestType,
    })
  }

  /**
   * @summary Get one RequestType
   * @description Use this to return a single instance of RequestType.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} can_create_only (bool) Filters by the statuses that are created.
   * @param {boolean} can_edit_only (bool) Filters by the statuses that can be edited.
   * @param {boolean} debug (bool) Include debug information in the response.
   * @param {boolean} includeconfig 
   * @param {boolean} includedetails (bool) Include extra objects in the response.
   * @param {boolean} includekbinfo (bool) Include knowledge base information in the response.
   * @param {boolean} includeteamrestrictions 
   * @param {boolean} isdetailscreen 
   * @param {boolean} isnewticket 
   * @param {boolean} survey_fields 
   * @param {number} ticket_id (int) Filter by the specified ticket.
   */
  getTicketTypeById(
    id: number,
    can_create_only: boolean,
    can_edit_only: boolean,
    debug: boolean,
    includeconfig: boolean,
    includedetails: boolean,
    includekbinfo: boolean,
    includeteamrestrictions: boolean,
    isdetailscreen: boolean,
    isnewticket: boolean,
    survey_fields: boolean,
    ticket_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TicketType/${id}`,
      params: {
        can_create_only,
        can_edit_only,
        debug,
        includeconfig,
        includedetails,
        includekbinfo,
        includeteamrestrictions,
        isdetailscreen,
        isnewticket,
        survey_fields,
        ticket_id,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTicketTypeById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TicketType/${id}`,
    })
  }
}
