/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class TicketTypeAPI extends BaseAPI {
  /**
   * @summary List of RequestType
   * @description Use this to return multiple RequestType. Requires authentication.
   * @param {number} [access_control_level] Filters response based on the access control level.
   * @param {boolean} [anonanduser] Filter on ticket types that can be viewed by anonymous users.
   * @param {boolean} [can_create_only] Filters by the ticket types that are created.
   * @param {boolean} [can_edit_only] Filters by the ticket types that can be edited.
   * @param {boolean} [canagentsselect] Filter on ticket types that agents can select.
   * @param {boolean} [canusercreate]
   * @param {number} [client_id] Filter Request Types by a particular customer.
   * @param {string} [domain] For use with counts: reqs - tickets, opps - opportunities, prjs - projects.
   * @param {number} [group_id] Filters by the ticket type group.
   * @param {number} [include_current] Includes this ticket type in the response - used alongside can create and can edit.
   * @param {boolean} [include_mandatory_field_check]
   * @param {boolean} [isquicktimedropdown] Filters by the ticket types that display on quick time.
   * @param {number} [itil_type] Filter by itil type.
   * @param {number} [outcome_id]
   * @param {string} [searchtickets] Filter on ticket types based on tickets.
   * @param {boolean} [showall] Admin override to show all ticket types, overriding tickets permissions.
   * @param {boolean} [showcounts] Show the count of tickets in the response.
   * @param {boolean} [showinactive] Include inactive ticket types in the response.
   * @param {boolean} [sprints_only]
   * @param {number} [ticketarea_id] Only for showcounts - ticket area filter.
   * @param {boolean} [user_only] Filters by the ticket types that user can see.
   * @param {number} [view_id] Only for showcounts - ticket view filter.
   */
  getTicketType({
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
  }: {
    access_control_level?: number
    anonanduser?: boolean
    can_create_only?: boolean
    can_edit_only?: boolean
    canagentsselect?: boolean
    canusercreate?: boolean
    client_id?: number
    domain?: string
    group_id?: number
    include_current?: number
    include_mandatory_field_check?: boolean
    isquicktimedropdown?: boolean
    itil_type?: number
    outcome_id?: number
    searchtickets?: string
    showall?: boolean
    showcounts?: boolean
    showinactive?: boolean
    sprints_only?: boolean
    ticketarea_id?: number
    user_only?: boolean
    view_id?: number
  }): Promise<unknown> {
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

  postTicketType({ requestTypeList }: { requestTypeList: Array<RequestType> }): Promise<unknown> {
    return this.request({ method: 'post', data: requestTypeList, path: '/TicketType' })
  }

  /**
   * @summary Get one RequestType
   * @description Use this to return a single instance of RequestType. Requires authentication.
   * @param {number} id
   * @param {boolean} [can_create_only] Filters by the statuses that are created.
   * @param {boolean} [can_edit_only] Filters by the statuses that can be edited.
   * @param {boolean} [debug] Include debug information in the response.
   * @param {boolean} [includeconfig]
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {boolean} [includekbinfo] Include knowledge base information in the response.
   * @param {boolean} [includeteamrestrictions]
   * @param {boolean} [isdetailscreen]
   * @param {boolean} [isnewticket]
   * @param {boolean} [survey_fields]
   * @param {number} [ticket_id] Filter by the specified ticket.
   */
  getTicketTypeById({
    id,
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
  }: {
    id: number
    can_create_only?: boolean
    can_edit_only?: boolean
    debug?: boolean
    includeconfig?: boolean
    includedetails?: boolean
    includekbinfo?: boolean
    includeteamrestrictions?: boolean
    isdetailscreen?: boolean
    isnewticket?: boolean
    survey_fields?: boolean
    ticket_id?: number
  }): Promise<unknown> {
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
   * @param {number} id
   */
  deleteTicketTypeById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TicketType/${id}` })
  }
}
