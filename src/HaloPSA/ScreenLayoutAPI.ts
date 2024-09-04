/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ScreenLayout} */
export type ScreenLayout = schemas['ScreenLayout']

/**
 * @module ScreenLayoutAPI
 */

/**
 * ScreenLayout module
 * @public
 */
export class ScreenLayoutAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ScreenLayout
   * @description Use this to return multiple ScreenLayout.<br>
				Requires authentication.
   * @param {number} typeid 
   */
  getScreenLayout(typeid: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ScreenLayout',
      params: {
        typeid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postScreenLayout(screenLayout: Array<ScreenLayout>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ScreenLayout',
      data: screenLayout,
    })
  }

  /**
   * @summary Get one ScreenLayout
   * @description Use this to return a single instance of ScreenLayout.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getScreenLayoutById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ScreenLayout/${id}`,
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
  deleteScreenLayoutById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ScreenLayout/${id}`,
    })
  }
}
