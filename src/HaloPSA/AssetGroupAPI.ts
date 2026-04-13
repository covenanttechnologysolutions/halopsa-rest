/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Generic} */
export type Generic = schemas['Generic']

/**
 * @module AssetGroupAPI
 */

/**
 * AssetGroup module
 * @public
 */
export class AssetGroupAPI extends BaseAPI {
  /**
   * @summary List of Generic
   * @description Use this to return multiple Generic. Requires authentication.
   * @param {string} [includetypesforgroups]
   * @param {boolean} [istree]
   * @param {string} [type]
   */
  getAssetGroup({
    includetypesforgroups,
    istree,
    type,
  }: {
    includetypesforgroups?: string
    istree?: boolean
    type?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/AssetGroup',
      params: { includetypesforgroups, istree, type },
    })
  }

  postAssetGroup({ genericList }: { genericList: Array<Generic> }): Promise<unknown> {
    return this.request({ method: 'post', data: genericList, path: '/AssetGroup' })
  }

  /**
   * @summary Get one Generic
   * @description Use this to return a single instance of Generic. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getAssetGroupById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/AssetGroup/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteAssetGroupById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AssetGroup/${id}` })
  }
}
