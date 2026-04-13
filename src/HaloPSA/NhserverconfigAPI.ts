/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class NhserverconfigAPI extends BaseAPI {
  getNhserverconfig(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Nhserverconfig' })
  }

  postNhserverconfig({
    nHServerConfigList,
  }: {
    nHServerConfigList: Array<NHServerConfig>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: nHServerConfigList, path: '/Nhserverconfig' })
  }

  /**
   * @summary Get one NHServerConfig
   * @description Use this to return a single instance of NHServerConfig. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getNhserverconfigById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/Nhserverconfig/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteNhserverconfigById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Nhserverconfig/${id}` })
  }
}
