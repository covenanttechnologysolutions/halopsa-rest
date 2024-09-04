/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class AppointmentAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Appointment
   * @description Use this to return multiple Appointment.<br>
				Requires authentication.
   * @param {string} advanced_search 
   * @param {string} agents (string) Comma separated list of agent IDs. Returns these agent's appointments.
   * @param {boolean} appointmentsonly (bool) Only return appointments in the response.
   * @param {string} assets 
   * @param {number} client_id (int) Return appointments assigned to a particular client.
   * @param {string} end_date (string) Return appointments with an end date greater than this value.
   * @param {boolean} excludenonticketapptodo 
   * @param {boolean} excluderecurring (bool) Exclude recurring appointments in the response.
   * @param {boolean} excluderecurringmaster (bool) Exclude recurring master appointments in the response.
   * @param {boolean} getopenjourney 
   * @param {boolean} hidecompleted (bool) Exclude completed appointments from the response.
   * @param {boolean} includedeleted (bool) Include deleted appointments in the response.
   * @param {boolean} isrecurringchild (bool) Return only appointments that have a recurring child appointment in the response.
   * @param {boolean} isrecurringmaster (bool) Return only appointments that have a recurring master appointment in the response.
   * @param {string} locations 
   * @param {boolean} my_approvals 
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
   * @param {boolean} recurringchangeonly 
   * @param {string} recurringmasterid (string) Return the master appointment with set id in the response.
   * @param {string} search (string) Return appointments like this search string.
   * @param {boolean} shiftsonly 
   * @param {boolean} showall (bool) Admin override to return all appointments.
   * @param {string} showappointments (string) Include appointments in the response.
   * @param {boolean} showchanges (bool) Include change requests in the response.
   * @param {boolean} showholidayonce 
   * @param {boolean} showholidays (bool) Include the appointment type 'holiday' in the response.
   * @param {boolean} showprojects (bool) Include projects in the response.
   * @param {boolean} showshifts 
   * @param {string} start_date (string) Return appointments with a start date greater than this value.
   * @param {string} statuses 
   * @param {boolean} tasksonly (bool) Only return tasks in the response.
   * @param {number} ticket_id (int) Return appointments assigned to a particular ticket.
   * @param {number} toplevel_id (int) Filters by the specified top level.
   * @param {string} types (string) Return appointments of these appointment types, comma seperated.
   * @param {number} utcoffset (double) Adds an offset to the UTC date.
   */
  getAppointment(
    advanced_search: string,
    agents: string,
    appointmentsonly: boolean,
    assets: string,
    client_id: number,
    end_date: string,
    excludenonticketapptodo: boolean,
    excluderecurring: boolean,
    excluderecurringmaster: boolean,
    getopenjourney: boolean,
    hidecompleted: boolean,
    includedeleted: boolean,
    isrecurringchild: boolean,
    isrecurringmaster: boolean,
    locations: string,
    my_approvals: boolean,
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
    recurringchangeonly: boolean,
    recurringmasterid: string,
    search: string,
    shiftsonly: boolean,
    showall: boolean,
    showappointments: string,
    showchanges: boolean,
    showholidayonce: boolean,
    showholidays: boolean,
    showprojects: boolean,
    showshifts: boolean,
    start_date: string,
    statuses: string,
    tasksonly: boolean,
    ticket_id: number,
    toplevel_id: number,
    types: string,
    utcoffset: number,
  ): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postAppointment(appointment: Array<Appointment>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Appointment',
      data: appointment,
    })
  }

  /**
   * @summary Get one Appointment
   * @description Use this to return a single instance of Appointment.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails (bool) Include extra objects in the response.
   */
  getAppointmentById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Appointment/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   * @summary Delete one Appointment
   * @description Delete specific Appointment.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} ignoreexchangedelete 
   */
  deleteAppointmentById(id: number, ignoreexchangedelete: boolean): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Appointment/${id}`,
      params: {
        ignoreexchangedelete,
      },
    })
  }

  /**
   * 
   * 
   
   */
  getAppointmentBooking(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Appointment/Booking',
    })
  }

  /**
   * 
   * 
   
   */
  postAppointmentBooking(appointment: Appointment): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Appointment/Booking',
      data: appointment,
    })
  }

  /**
   * 
   * 
   
   */
  postAppointmentGenerate(listNumber: number): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Appointment/Generate',
      data: listNumber,
    })
  }
}
