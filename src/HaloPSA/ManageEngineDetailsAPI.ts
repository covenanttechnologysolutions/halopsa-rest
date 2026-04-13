/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ManageEngineDetails} */
export type ManageEngineDetails = schemas['ManageEngineDetails']

/**
 * @module ManageEngineDetailsAPI
 */

/**
 * ManageEngineDetails module
 * @public
 */
export class ManageEngineDetailsAPI extends BaseAPI {
  getManageEngineDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ManageEngineDetails' })
  }

  postManageEngineDetails({
    manageEngineDetailsList,
  }: {
    manageEngineDetailsList: Array<ManageEngineDetails>
  }): Promise<ManageEngineDetails> {
    return this.request({
      method: 'post',
      data: manageEngineDetailsList,
      path: '/ManageEngineDetails',
    })
  }

  /**
   * @param {number} id
   */
  getManageEngineDetailsById({ id }: { id: number }): Promise<ManageEngineDetails> {
    return this.request({ method: 'get', path: `/ManageEngineDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteManageEngineDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ManageEngineDetails/${id}` })
  }
}
