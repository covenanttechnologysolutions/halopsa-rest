/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link DeviceChange} */
export type DeviceChange = schemas['DeviceChange']

/**
 * @module AssetChangeAPI
 */

/**
 * AssetChange module
 * @public
 */
export class AssetChangeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of DeviceChange
   * @description Use this to return multiple DeviceChange.<br>
				Requires authentication.
   * @param {number} [asset_id] 
   * @param {number} [count] 
   * @param {boolean} [idonly] 
   * @param {number} [licence_id] 
   * @param {string} [order] 
   * @param {string} [order2] 
   * @param {string} [order3] 
   * @param {string} [order4] 
   * @param {string} [order5] 
   * @param {boolean} [orderdesc] 
   * @param {boolean} [orderdesc2] 
   * @param {boolean} [orderdesc3] 
   * @param {boolean} [orderdesc4] 
   * @param {boolean} [orderdesc5] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   * @param {string} [search] 
   * @param {number} [user_id] 
   */
  getAssetChange({
    asset_id,
    count,
    idonly,
    licence_id,
    order,
    order2,
    order3,
    order4,
    order5,
    orderdesc,
    orderdesc2,
    orderdesc3,
    orderdesc4,
    orderdesc5,
    page_no,
    page_size,
    pageinate,
    search,
    user_id,
  }: {
    asset_id?: number
    count?: number
    idonly?: boolean
    licence_id?: number
    order?: string
    order2?: string
    order3?: string
    order4?: string
    order5?: string
    orderdesc?: boolean
    orderdesc2?: boolean
    orderdesc3?: boolean
    orderdesc4?: boolean
    orderdesc5?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
    search?: string
    user_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AssetChange',
      params: {
        asset_id,
        count,
        idonly,
        licence_id,
        order,
        order2,
        order3,
        order4,
        order5,
        orderdesc,
        orderdesc2,
        orderdesc3,
        orderdesc4,
        orderdesc5,
        page_no,
        page_size,
        pageinate,
        search,
        user_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postAssetChange({ deviceChange }: { deviceChange: Array<DeviceChange> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AssetChange',
      data: deviceChange,
    })
  }
}
