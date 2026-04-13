/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class WorkflowAPI extends BaseAPI {
  /**
   * @summary List of FlowHeader
   * @description Use this to return multiple FlowHeader. Requires authentication.
   * @param {number} [access_control_level]
   * @param {boolean} [includeinactive]
   */
  getWorkflow({
    access_control_level,
    includeinactive,
  }: {
    access_control_level?: number
    includeinactive?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Workflow',
      params: { access_control_level, includeinactive },
    })
  }

  postWorkflow({ flowHeaderList }: { flowHeaderList: Array<FlowHeader> }): Promise<unknown> {
    return this.request({ method: 'post', data: flowHeaderList, path: '/Workflow' })
  }

  /**
   * @summary Get one FlowHeader
   * @description Use this to return a single instance of FlowHeader. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getWorkflowById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Workflow/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteWorkflowById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Workflow/${id}` })
  }
}
