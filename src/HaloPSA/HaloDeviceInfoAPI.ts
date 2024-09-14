/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class HaloDeviceInfoAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   *
   *
   * @param {string} id
   */
  getHaloDeviceInfoById({ id }: { id: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/HaloDeviceInfo/${id}`,
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  deleteHaloDeviceInfoById({ id }: { id: string }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/HaloDeviceInfo/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postHaloDeviceInfo({ nHD_DeviceInfo }: { nHD_DeviceInfo: Array<NHD_DeviceInfo> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/HaloDeviceInfo',
      data: nHD_DeviceInfo,
    })
  }
}
