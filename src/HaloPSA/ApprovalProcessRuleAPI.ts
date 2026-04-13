/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class ApprovalProcessRuleAPI extends BaseAPI {
  /**
   * @summary List of ApprovalProcessRule
   * @description Use this to return multiple ApprovalProcessRule. Requires authentication.
   * @param {boolean} [global]
   * @param {number} [process_id]
   * @param {number} [step_id]
   */
  getApprovalProcessRule({
    global,
    process_id,
    step_id,
  }: {
    global?: boolean
    process_id?: number
    step_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/ApprovalProcessRule',
      params: { global, process_id, step_id },
    })
  }

  postApprovalProcessRule({
    approvalProcessRuleList,
  }: {
    approvalProcessRuleList: Array<ApprovalProcessRule>
  }): Promise<ApprovalProcessRule> {
    return this.request({
      method: 'post',
      data: approvalProcessRuleList,
      path: '/ApprovalProcessRule',
    })
  }

  /**
   * @summary Get one ApprovalProcessRule
   * @description Use this to return a single instance of ApprovalProcessRule. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getApprovalProcessRuleById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ApprovalProcessRule> {
    return this.request({
      method: 'get',
      path: `/ApprovalProcessRule/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteApprovalProcessRuleById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ApprovalProcessRule/${id}` })
  }
}
