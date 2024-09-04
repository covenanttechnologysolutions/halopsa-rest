/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module AreaRequestTypeAPI
 */

/**
 * AreaRequestType module
 * @public
 */
export class AreaRequestTypeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAreaRequestType(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AreaRequestType',
    })
  }

  /**
   * @summary Get one AreaRequestType
   * @description Use this to return a single instance of AreaRequestType.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getAreaRequestTypeById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AreaRequestType/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
