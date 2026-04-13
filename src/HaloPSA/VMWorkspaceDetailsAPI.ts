/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link VMWorkspaceDetails} */
export type VMWorkspaceDetails = schemas['VMWorkspaceDetails']

/**
 * @module VMWorkspaceDetailsAPI
 */

/**
 * VMWorkspaceDetails module
 * @public
 */
export class VMWorkspaceDetailsAPI extends BaseAPI {
  getVMWorkspaceDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/VMWorkspaceDetails' })
  }

  postVMWorkspaceDetails({
    vMWorkspaceDetailsList,
  }: {
    vMWorkspaceDetailsList: Array<VMWorkspaceDetails>
  }): Promise<VMWorkspaceDetails> {
    return this.request({
      method: 'post',
      data: vMWorkspaceDetailsList,
      path: '/VMWorkspaceDetails',
    })
  }

  /**
   * @param {number} id
   */
  getVMWorkspaceDetailsById({ id }: { id: number }): Promise<VMWorkspaceDetails> {
    return this.request({ method: 'get', path: `/VMWorkspaceDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteVMWorkspaceDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/VMWorkspaceDetails/${id}` })
  }
}
