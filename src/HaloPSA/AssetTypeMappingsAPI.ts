/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module AssetTypeMappingsAPI
 */

/**
 * AssetTypeMappings module
 * @public
 */
export class AssetTypeMappingsAPI extends BaseAPI {
  getAssetTypeMappings(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AssetTypeMappings' })
  }

  /**
   * @summary Get one XTypeMapping
   * @description Use this to return a single instance of XTypeMapping. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getAssetTypeMappingsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/AssetTypeMappings/${id}`,
      params: { includedetails },
    })
  }
}
