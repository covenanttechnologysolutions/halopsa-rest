/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ApprovalProcess} */
export type ApprovalProcess = schemas['ApprovalProcess']

/**
 * @module ApprovalProcessAPI
 */

/**
 * ApprovalProcess module
 * @public
 */
export class ApprovalProcessAPI extends BaseAPI {
  /**
   * @summary List of ApprovalProcess
   * @description Use this to return multiple ApprovalProcess. Requires authentication.
   * @param {number} [access_control_level]
   */
  getApprovalProcess({
    access_control_level,
  }: {
    access_control_level?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/ApprovalProcess',
      params: { access_control_level },
    })
  }

  postApprovalProcess({
    approvalProcessList,
  }: {
    approvalProcessList: Array<ApprovalProcess>
  }): Promise<ApprovalProcess> {
    return this.request({ method: 'post', data: approvalProcessList, path: '/ApprovalProcess' })
  }

  /**
   * @summary Get one ApprovalProcess
   * @description Use this to return a single instance of ApprovalProcess. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getApprovalProcessById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ApprovalProcess> {
    return this.request({
      method: 'get',
      path: `/ApprovalProcess/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteApprovalProcessById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ApprovalProcess/${id}` })
  }
}
