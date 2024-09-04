/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class AssetGroupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Generic
   * @description Use this to return multiple Generic.<br>
				Requires authentication.
   * @param {string} includetypesforgroups 
   * @param {boolean} istree 
   * @param {string} type 
   */
  getAssetGroup(includetypesforgroups: string, istree: boolean, type: string): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AssetGroup',
      params: {
        includetypesforgroups,
        istree,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postAssetGroup(generic: Array<Generic>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AssetGroup',
      data: generic,
    })
  }

  /**
   * @summary Get one Generic
   * @description Use this to return a single instance of Generic.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getAssetGroupById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AssetGroup/${id}`,
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
  deleteAssetGroupById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/AssetGroup/${id}`,
    })
  }
}
