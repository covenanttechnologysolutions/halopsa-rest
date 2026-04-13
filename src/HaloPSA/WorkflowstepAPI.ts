/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module WorkflowstepAPI
 */

/**
 * Workflowstep module
 * @public
 */
export class WorkflowstepAPI extends BaseAPI {
  /**
   * @summary List of FlowDetail
   * @description Use this to return multiple FlowDetail. Requires authentication.
   * @param {boolean} [includecriteriainfo]
   */
  getWorkflowstep({ includecriteriainfo }: { includecriteriainfo?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: '/workflowstep', params: { includecriteriainfo } })
  }
}
