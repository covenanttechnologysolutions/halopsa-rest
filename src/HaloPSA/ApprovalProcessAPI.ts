/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ApprovalProcessAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ApprovalProcess
   * @description Use this to return multiple ApprovalProcess.<br>
				Requires authentication.
   * @param {number} [access_control_level] 
   */
  getApprovalProcess({ access_control_level }: { access_control_level?: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ApprovalProcess',
      params: {
        access_control_level,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postApprovalProcess({
    approvalProcess,
  }: {
    approvalProcess: Array<ApprovalProcess>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ApprovalProcess',
      data: approvalProcess,
    })
  }

  /**
   * @summary Get one ApprovalProcess
   * @description Use this to return a single instance of ApprovalProcess.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getApprovalProcessById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ApprovalProcess/${id}`,
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
  deleteApprovalProcessById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ApprovalProcess/${id}`,
    })
  }
}
