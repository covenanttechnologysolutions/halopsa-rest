/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link WorkflowTarget} */
export type WorkflowTarget = schemas['WorkflowTarget']

/**
 * @module WorkflowTargetAPI
 */

/**
 * WorkflowTarget module
 * @public
 */
export class WorkflowTargetAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getWorkflowTarget({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/WorkflowTarget',
    })
  }

  /**
   * 
   * 
   
   */
  postWorkflowTarget({ workflowTarget }: { workflowTarget: Array<WorkflowTarget> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/WorkflowTarget',
      data: workflowTarget,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getWorkflowTargetById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/WorkflowTarget/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteWorkflowTargetById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/WorkflowTarget/${id}`,
    })
  }
}
