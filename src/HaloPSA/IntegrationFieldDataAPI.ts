/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link IntegrationFieldData} */
export type IntegrationFieldData = schemas['IntegrationFieldData']

/**
 * @module IntegrationFieldDataAPI
 */

/**
 * IntegrationFieldData module
 * @public
 */
export class IntegrationFieldDataAPI extends BaseAPI {
  getIntegrationFieldData(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationFieldData' })
  }

  postIntegrationFieldData({
    integrationFieldDataList,
  }: {
    integrationFieldDataList: Array<IntegrationFieldData>
  }): Promise<IntegrationFieldData> {
    return this.request({
      method: 'post',
      data: integrationFieldDataList,
      path: '/IntegrationFieldData',
    })
  }

  /**
   * @param {number} id
   */
  getIntegrationFieldDataById({ id }: { id: number }): Promise<IntegrationFieldData> {
    return this.request({ method: 'get', path: `/IntegrationFieldData/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteIntegrationFieldDataById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/IntegrationFieldData/${id}` })
  }
}
