/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module VersionInfoAPI
 */

/**
 * VersionInfo module
 * @public
 */
export class VersionInfoAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {number} product_id 
   */
  getVersionInfo(product_id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/VersionInfo',
      params: {
        product_id,
      },
    })
  }

  /**
   * @summary Get one Release
   * @description Use this to return a single instance of Release.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getVersionInfoById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/VersionInfo/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {number} count 
   * @param {boolean} dontshownotes 
   * @param {number} product_id 
   * @param {string} search 
   */
  getVersionInfoSearchVersionInfo(
    count: number,
    dontshownotes: boolean,
    product_id: number,
    search: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/VersionInfo/SearchVersionInfo',
      params: {
        count,
        dontshownotes,
        product_id,
        search,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getVersionInfoGetOneSpotlightById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/VersionInfo/GetOneSpotlight/${id}`,
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {number} count 
   * @param {boolean} dontshownotes 
   * @param {number} product_id 
   */
  getVersionInfoSpotlight(count: number, dontshownotes: boolean, product_id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/VersionInfo/Spotlight',
      params: {
        count,
        dontshownotes,
        product_id,
      },
    })
  }
}
