/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link TOutcome} */
export type TOutcome = schemas['TOutcome']

/**
 * @module OutcomeAPI
 */

/**
 * Outcome module
 * @public
 */
export class OutcomeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of TOutcome
   * @description Use this to return multiple TOutcome.<br>
				Requires authentication.
   * @param {number} [access_control_level] 
   * @param {boolean} [debug] 
   * @param {boolean} [excludesystemactions] 
   * @param {boolean} [quick_only] 
   * @param {boolean} [showhidden] 
   * @param {string} [showsystemactions] 
   * @param {number} [slastate] 
   * @param {number} [status] 
   * @param {number} [supplier_id] 
   * @param {number} [supplier_status] 
   * @param {number} [tickettype_id] 
   * @param {number} [workflow_id] 
   * @param {number} [workflow_step] 
   */
  getOutcome({
    access_control_level,
    debug,
    excludesystemactions,
    quick_only,
    showhidden,
    showsystemactions,
    slastate,
    status,
    supplier_id,
    supplier_status,
    tickettype_id,
    workflow_id,
    workflow_step,
  }: {
    access_control_level?: number
    debug?: boolean
    excludesystemactions?: boolean
    quick_only?: boolean
    showhidden?: boolean
    showsystemactions?: string
    slastate?: number
    status?: number
    supplier_id?: number
    supplier_status?: number
    tickettype_id?: number
    workflow_id?: number
    workflow_step?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Outcome',
      params: {
        access_control_level,
        debug,
        excludesystemactions,
        quick_only,
        showhidden,
        showsystemactions,
        slastate,
        status,
        supplier_id,
        supplier_status,
        tickettype_id,
        workflow_id,
        workflow_step,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postOutcome({ tOutcome }: { tOutcome: Array<TOutcome> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Outcome',
      data: tOutcome,
    })
  }

  /**
   * @summary Get one TOutcome
   * @description Use this to return a single instance of TOutcome.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} [action_id] 
   * @param {number} [anon_ticketid] 
   * @param {number} [contract_id] 
   * @param {boolean} [debug] 
   * @param {boolean} [includedetails] 
   * @param {number} [invoice_id] 
   * @param {number} [matched_kb_client_id] 
   * @param {number} [matched_kbid] 
   * @param {number} [override_user_id] 
   * @param {number} [purchaseorder_id] 
   * @param {number} [quotation_id] 
   * @param {number} [salesorder_id] 
   * @param {number} [selected_supplier_id] 
   * @param {number} [ticket_id] 
   * @param {string} [token] 
   */
  getOutcomeById({
    id,
    action_id,
    anon_ticketid,
    contract_id,
    debug,
    includedetails,
    invoice_id,
    matched_kb_client_id,
    matched_kbid,
    override_user_id,
    purchaseorder_id,
    quotation_id,
    salesorder_id,
    selected_supplier_id,
    ticket_id,
    token,
  }: {
    id: number
    action_id?: number
    anon_ticketid?: number
    contract_id?: number
    debug?: boolean
    includedetails?: boolean
    invoice_id?: number
    matched_kb_client_id?: number
    matched_kbid?: number
    override_user_id?: number
    purchaseorder_id?: number
    quotation_id?: number
    salesorder_id?: number
    selected_supplier_id?: number
    ticket_id?: number
    token?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Outcome/${id}`,
      params: {
        action_id,
        anon_ticketid,
        contract_id,
        debug,
        includedetails,
        invoice_id,
        matched_kb_client_id,
        matched_kbid,
        override_user_id,
        purchaseorder_id,
        quotation_id,
        salesorder_id,
        selected_supplier_id,
        ticket_id,
        token,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteOutcomeById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Outcome/${id}`,
    })
  }
}
