/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link DistributionLists} */
export type DistributionLists = schemas['DistributionLists']

/**
 * @module DistributionListsAPI
 */

/**
 * DistributionLists module
 * @public
 */
export class DistributionListsAPI extends BaseAPI {
  getDistributionLists(): Promise<unknown> {
    return this.request({ method: 'get', path: '/DistributionLists' })
  }

  postDistributionLists({
    distributionListsList,
  }: {
    distributionListsList: Array<DistributionLists>
  }): Promise<DistributionLists> {
    return this.request({ method: 'post', data: distributionListsList, path: '/DistributionLists' })
  }

  /**
   * @param {number} id
   */
  getDistributionListsById({ id }: { id: number }): Promise<DistributionLists> {
    return this.request({ method: 'get', path: `/DistributionLists/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteDistributionListsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/DistributionLists/${id}` })
  }
}
