/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class WorkflowTargetAPI extends BaseAPI {
  getWorkflowTarget(): Promise<unknown> {
    return this.request({ method: 'get', path: '/WorkflowTarget' })
  }

  postWorkflowTarget({
    workflowTargetList,
  }: {
    workflowTargetList: Array<WorkflowTarget>
  }): Promise<WorkflowTarget> {
    return this.request({ method: 'post', data: workflowTargetList, path: '/WorkflowTarget' })
  }

  /**
   * @param {number} id
   */
  getWorkflowTargetById({ id }: { id: number }): Promise<WorkflowTarget> {
    return this.request({ method: 'get', path: `/WorkflowTarget/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteWorkflowTargetById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/WorkflowTarget/${id}` })
  }
}
