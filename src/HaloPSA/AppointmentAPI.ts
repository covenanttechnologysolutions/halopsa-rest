/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Appointment} */
export type Appointment = schemas['Appointment']

/**
 * @module AppointmentAPI
 */

/**
 * Appointment module
 * @public
 */
export class AppointmentAPI extends BaseAPI {
  /**
   * @summary List of Appointment
   * @description Use this to return multiple Appointment. Requires authentication.
   * @param {string} [advanced_search]
   * @param {string} [agents] Comma separated list of agent IDs. Returns these agent's appointments.
   * @param {boolean} [appointmentsonly] Only return appointments in the response.
   * @param {string} [assets]
   * @param {number} [client_id] Return appointments assigned to a particular client.
   * @param {string} [end_date] Return appointments with an end date greater than this value.
   * @param {boolean} [excludenonticketapptodo]
   * @param {boolean} [excluderecurring] Exclude recurring appointments in the response.
   * @param {boolean} [excluderecurringmaster] Exclude recurring master appointments in the response.
   * @param {boolean} [getopenjourney]
   * @param {boolean} [hidecompleted] Exclude completed appointments from the response.
   * @param {boolean} [includedeleted] Include deleted appointments in the response.
   * @param {boolean} [isrecurringchild] Return only appointments that have a recurring child appointment in the response.
   * @param {boolean} [isrecurringmaster] Return only appointments that have a recurring master appointment in the response.
   * @param {string} [locations]
   * @param {boolean} [my_approvals]
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
   * @param {boolean} [recurringchangeonly]
   * @param {string} [recurringmasterid] Return the master appointment with set id in the response.
   * @param {string} [search] Return appointments like this search string.
   * @param {boolean} [shiftsonly]
   * @param {boolean} [showall] Admin override to return all appointments.
   * @param {string} [showappointments] Include appointments in the response.
   * @param {boolean} [showchanges] Include change requests in the response.
   * @param {boolean} [showholidayonce]
   * @param {boolean} [showholidays] Include the appointment type 'holiday' in the response.
   * @param {boolean} [showprojects] Include projects in the response.
   * @param {boolean} [showshifts]
   * @param {string} [start_date] Return appointments with a start date greater than this value.
   * @param {string} [statuses]
   * @param {boolean} [tasksonly] Only return tasks in the response.
   * @param {number} [ticket_id] Return appointments assigned to a particular ticket.
   * @param {number} [toplevel_id] Filters by the specified top level.
   * @param {string} [types] Return appointments of these appointment types, comma seperated.
   * @param {number} [utcoffset] Adds an offset to the UTC date.
   */
  getAppointment({
    advanced_search,
    agents,
    appointmentsonly,
    assets,
    client_id,
    end_date,
    excludenonticketapptodo,
    excluderecurring,
    excluderecurringmaster,
    getopenjourney,
    hidecompleted,
    includedeleted,
    isrecurringchild,
    isrecurringmaster,
    locations,
    my_approvals,
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
    recurringchangeonly,
    recurringmasterid,
    search,
    shiftsonly,
    showall,
    showappointments,
    showchanges,
    showholidayonce,
    showholidays,
    showprojects,
    showshifts,
    start_date,
    statuses,
    tasksonly,
    ticket_id,
    toplevel_id,
    types,
    utcoffset,
  }: {
    advanced_search?: string
    agents?: string
    appointmentsonly?: boolean
    assets?: string
    client_id?: number
    end_date?: string
    excludenonticketapptodo?: boolean
    excluderecurring?: boolean
    excluderecurringmaster?: boolean
    getopenjourney?: boolean
    hidecompleted?: boolean
    includedeleted?: boolean
    isrecurringchild?: boolean
    isrecurringmaster?: boolean
    locations?: string
    my_approvals?: boolean
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
    recurringchangeonly?: boolean
    recurringmasterid?: string
    search?: string
    shiftsonly?: boolean
    showall?: boolean
    showappointments?: string
    showchanges?: boolean
    showholidayonce?: boolean
    showholidays?: boolean
    showprojects?: boolean
    showshifts?: boolean
    start_date?: string
    statuses?: string
    tasksonly?: boolean
    ticket_id?: number
    toplevel_id?: number
    types?: string
    utcoffset?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Appointment',
      params: {
        advanced_search,
        agents,
        appointmentsonly,
        assets,
        client_id,
        end_date,
        excludenonticketapptodo,
        excluderecurring,
        excluderecurringmaster,
        getopenjourney,
        hidecompleted,
        includedeleted,
        isrecurringchild,
        isrecurringmaster,
        locations,
        my_approvals,
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
        recurringchangeonly,
        recurringmasterid,
        search,
        shiftsonly,
        showall,
        showappointments,
        showchanges,
        showholidayonce,
        showholidays,
        showprojects,
        showshifts,
        start_date,
        statuses,
        tasksonly,
        ticket_id,
        toplevel_id,
        types,
        utcoffset,
      },
    })
  }

  postAppointment({
    appointmentList,
  }: {
    appointmentList: Array<Appointment>
  }): Promise<Appointment> {
    return this.request({ method: 'post', data: appointmentList, path: '/Appointment' })
  }

  /**
   * @summary Get one Appointment
   * @description Use this to return a single instance of Appointment. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails] Include extra objects in the response.
   */
  getAppointmentById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<Appointment> {
    return this.request({ method: 'get', path: `/Appointment/${id}`, params: { includedetails } })
  }

  /**
   * @summary Delete one Appointment
   * @description Delete specific Appointment. Requires authentication.
   * @param {number} id
   * @param {boolean} [ignoreexchangedelete]
   */
  deleteAppointmentById({
    id,
    ignoreexchangedelete,
  }: {
    id: number
    ignoreexchangedelete?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'delete',
      path: `/Appointment/${id}`,
      params: { ignoreexchangedelete },
    })
  }

  getAppointmentBooking(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Appointment/Booking' })
  }

  postAppointmentBooking({ appointment }: { appointment: Appointment }): Promise<unknown> {
    return this.request({ method: 'post', data: appointment, path: '/Appointment/Booking' })
  }

  postAppointmentGenerate({ items }: { items: Array<number> }): Promise<unknown> {
    return this.request({ method: 'post', data: items, path: '/Appointment/Generate' })
  }
}
