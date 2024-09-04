/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ApprovalProcessRule} */
export type ApprovalProcessRule = schemas['ApprovalProcessRule']

/**
 * @module ApprovalProcessRuleAPI
 */

/**
 * ApprovalProcessRule module
 * @public
 */
export class ApprovalProcessRuleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ApprovalProcessRule
   * @description Use this to return multiple ApprovalProcessRule.<br>
				Requires authentication.
   * @param {boolean} global 
   * @param {number} process_id 
   * @param {number} step_id 
   */
  getApprovalProcessRule(global: boolean, process_id: number, step_id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ApprovalProcessRule',
      params: {
        global,
        process_id,
        step_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postApprovalProcessRule(approvalProcessRule: Array<ApprovalProcessRule>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ApprovalProcessRule',
      data: approvalProcessRule,
    })
  }

  /**
   * @summary Get one ApprovalProcessRule
   * @description Use this to return a single instance of ApprovalProcessRule.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getApprovalProcessRuleById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ApprovalProcessRule/${id}`,
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
  deleteApprovalProcessRuleById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ApprovalProcessRule/${id}`,
    })
  }
}
