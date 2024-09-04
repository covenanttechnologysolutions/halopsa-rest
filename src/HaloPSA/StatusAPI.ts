/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link TStatus} */
export type TStatus = schemas['TStatus']

/**
 * @module StatusAPI
 */

/**
 * Status module
 * @public
 */
export class StatusAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of TStatus
   * @description Use this to return multiple TStatus.<br>
				Requires authentication.
   * @param {string} domain 
   * @param {boolean} excludeclosed 
   * @param {boolean} excludepending 
   * @param {number} outcome_id 
   * @param {boolean} showall 
   * @param {boolean} showcounts 
   * @param {boolean} showquickchangeoptions 
   * @param {boolean} split_closed 
   * @param {number} ticket_id 
   * @param {number} ticket_id_firstchild 
   * @param {number} ticketarea_id 
   * @param {number} tickettype_group_id 
   * @param {number} tickettype_id 
   * @param {string} tickettype_ids 
   * @param {string} type 
   * @param {number} view_id 
   */
  getStatus(
    domain: string,
    excludeclosed: boolean,
    excludepending: boolean,
    outcome_id: number,
    showall: boolean,
    showcounts: boolean,
    showquickchangeoptions: boolean,
    split_closed: boolean,
    ticket_id: number,
    ticket_id_firstchild: number,
    ticketarea_id: number,
    tickettype_group_id: number,
    tickettype_id: number,
    tickettype_ids: string,
    type: string,
    view_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Status',
      params: {
        domain,
        excludeclosed,
        excludepending,
        outcome_id,
        showall,
        showcounts,
        showquickchangeoptions,
        split_closed,
        ticket_id,
        ticket_id_firstchild,
        ticketarea_id,
        tickettype_group_id,
        tickettype_id,
        tickettype_ids,
        type,
        view_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postStatus(tStatus: Array<TStatus>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Status',
      data: tStatus,
    })
  }

  /**
   * @summary Get one TStatus
   * @description Use this to return a single instance of TStatus.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getStatusById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Status/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteStatusById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Status/${id}`,
    })
  }
}
