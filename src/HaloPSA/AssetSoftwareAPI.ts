/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module AssetSoftwareAPI
 */

/**
 * AssetSoftware module
 * @public
 */
export class AssetSoftwareAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of DeviceApplications
   * @description Use this to return multiple DeviceApplications.<br>
				Requires authentication.
   * @param {number} [device_id] 
   * @param {number} [licence_id] 
   * @param {string} [third_party_field] 
   * @param {string} [third_party_id] 
   * @param {number} [user_id] 
   */
  getAssetSoftware({
    device_id,
    licence_id,
    third_party_field,
    third_party_id,
    user_id,
  }: {
    device_id?: number
    licence_id?: number
    third_party_field?: string
    third_party_id?: string
    user_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AssetSoftware',
      params: {
        device_id,
        licence_id,
        third_party_field,
        third_party_id,
        user_id,
      },
    })
  }
}
