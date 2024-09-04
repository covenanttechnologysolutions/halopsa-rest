/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link FaultApproval} */
export type FaultApproval = schemas['FaultApproval']

/**
 * @module TicketApprovalAPI
 */

/**
 * TicketApproval module
 * @public
 */
export class TicketApprovalAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of FaultApproval
   * @description Use this to return multiple FaultApproval.<br>
				Requires authentication.
   * @param {number} action_number 
   * @param {boolean} include_agent_details 
   * @param {boolean} include_attachments 
   * @param {boolean} includeapprovaldetails 
   * @param {boolean} mine 
   * @param {number} ticket_id 
   */
  getTicketApproval(
    action_number: number,
    include_agent_details: boolean,
    include_attachments: boolean,
    includeapprovaldetails: boolean,
    mine: boolean,
    ticket_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TicketApproval',
      params: {
        action_number,
        include_agent_details,
        include_attachments,
        includeapprovaldetails,
        mine,
        ticket_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postTicketApproval(faultApproval: Array<FaultApproval>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TicketApproval',
      data: faultApproval,
    })
  }

  /**
   * @summary Get one FaultApproval
   * @description Use this to return a single instance of FaultApproval.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getTicketApprovalById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TicketApproval/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   * @param {number} seq
   */
  deleteTicketApprovalidseq(id: number, seq: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TicketApproval/${id}&${seq}`,
    })
  }
}
