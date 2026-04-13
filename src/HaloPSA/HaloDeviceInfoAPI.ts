/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link NHD_DeviceInfo} */
export type NHD_DeviceInfo = schemas['NHD_DeviceInfo']

/**
 * @module HaloDeviceInfoAPI
 */

/**
 * HaloDeviceInfo module
 * @public
 */
export class HaloDeviceInfoAPI extends BaseAPI {
  /**
   * @param {string} id
   */
  getHaloDeviceInfoById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'get', path: `/HaloDeviceInfo/${id}` })
  }

  /**
   * @param {string} id
   */
  deleteHaloDeviceInfoById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/HaloDeviceInfo/${id}` })
  }

  postHaloDeviceInfo({
    nHD_DeviceInfoList,
  }: {
    nHD_DeviceInfoList: Array<NHD_DeviceInfo>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: nHD_DeviceInfoList, path: '/HaloDeviceInfo' })
  }
}
