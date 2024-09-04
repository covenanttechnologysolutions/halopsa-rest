/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module AssetTypeMappingsAPI
 */

/**
 * AssetTypeMappings module
 * @public
 */
export class AssetTypeMappingsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAssetTypeMappings(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AssetTypeMappings',
    })
  }

  /**
   * @summary Get one XTypeMapping
   * @description Use this to return a single instance of XTypeMapping.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getAssetTypeMappingsById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AssetTypeMappings/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
