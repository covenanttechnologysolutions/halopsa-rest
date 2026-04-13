/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link CSPConsumptionData} */
export type CSPConsumptionData = schemas['CSPConsumptionData']

/**
 * @module CSPConsumptionDataAPI
 */

/**
 * CSPConsumptionData module
 * @public
 */
export class CSPConsumptionDataAPI extends BaseAPI {
  getCSPConsumptionData(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CSPConsumptionData' })
  }

  postCSPConsumptionData({
    cSPConsumptionDataList,
  }: {
    cSPConsumptionDataList: Array<CSPConsumptionData>
  }): Promise<CSPConsumptionData> {
    return this.request({
      method: 'post',
      data: cSPConsumptionDataList,
      path: '/CSPConsumptionData',
    })
  }

  /**
   * @param {number} id
   */
  getCSPConsumptionDataById({ id }: { id: number }): Promise<CSPConsumptionData> {
    return this.request({ method: 'get', path: `/CSPConsumptionData/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteCSPConsumptionDataById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CSPConsumptionData/${id}` })
  }

  postCSPConsumptionDataManage({
    cSPConsumptionDataList,
  }: {
    cSPConsumptionDataList: Array<CSPConsumptionData>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: cSPConsumptionDataList,
      path: '/CSPConsumptionData/manage',
    })
  }

  /**
   * @param {number} id
   */
  deleteCSPConsumptionDataParentById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CSPConsumptionData/Parent/${id}` })
  }
}
