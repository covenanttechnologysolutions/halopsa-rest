/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link NHServerConfig} */
export type NHServerConfig = schemas['NHServerConfig']

/**
 * @module NhserverconfigAPI
 */

/**
 * Nhserverconfig module
 * @public
 */
export class NhserverconfigAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getNhserverconfig(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Nhserverconfig',
    })
  }

  /**
   * 
   * 
   
   */
  postNhserverconfig(nHServerConfig: Array<NHServerConfig>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Nhserverconfig',
      data: nHServerConfig,
    })
  }

  /**
   * @summary Get one NHServerConfig
   * @description Use this to return a single instance of NHServerConfig.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getNhserverconfigById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Nhserverconfig/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteNhserverconfigById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Nhserverconfig/${id}`,
    })
  }
}
