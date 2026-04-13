/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link DistributionListsLog} */
export type DistributionListsLog = schemas['DistributionListsLog']

/**
 * @module DistributionListsLogAPI
 */

/**
 * DistributionListsLog module
 * @public
 */
export class DistributionListsLogAPI extends BaseAPI {
  getDistributionListsLog(): Promise<unknown> {
    return this.request({ method: 'get', path: '/DistributionListsLog' })
  }

  postDistributionListsLog({
    distributionListsLogList,
  }: {
    distributionListsLogList: Array<DistributionListsLog>
  }): Promise<DistributionListsLog> {
    return this.request({
      method: 'post',
      data: distributionListsLogList,
      path: '/DistributionListsLog',
    })
  }

  /**
   * @param {number} id
   */
  getDistributionListsLogById({ id }: { id: number }): Promise<DistributionListsLog> {
    return this.request({ method: 'get', path: `/DistributionListsLog/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteDistributionListsLogById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/DistributionListsLog/${id}` })
  }
}
