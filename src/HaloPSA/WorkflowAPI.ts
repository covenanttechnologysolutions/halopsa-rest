/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link FlowHeader} */
export type FlowHeader = schemas['FlowHeader']

/**
 * @module WorkflowAPI
 */

/**
 * Workflow module
 * @public
 */
export class WorkflowAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of FlowHeader
   * @description Use this to return multiple FlowHeader.<br>
				Requires authentication.
   * @param {number} [access_control_level] 
   * @param {boolean} [includeinactive] 
   */
  getWorkflow({
    access_control_level,
    includeinactive,
  }: {
    access_control_level?: number
    includeinactive?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Workflow',
      params: {
        access_control_level,
        includeinactive,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postWorkflow({ flowHeader }: { flowHeader: Array<FlowHeader> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Workflow',
      data: flowHeader,
    })
  }

  /**
   * @summary Get one FlowHeader
   * @description Use this to return a single instance of FlowHeader.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getWorkflowById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Workflow/${id}`,
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
  deleteWorkflowById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Workflow/${id}`,
    })
  }
}
