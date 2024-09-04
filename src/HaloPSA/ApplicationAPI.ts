/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link NHD_Identity_Application} */
export type NHD_Identity_Application = schemas['NHD_Identity_Application']

/**
 * @module ApplicationAPI
 */

/**
 * Application module
 * @public
 */
export class ApplicationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getApplication(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Application',
    })
  }

  /**
   * 
   * 
   
   */
  postApplication(nHD_Identity_Application: Array<NHD_Identity_Application>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Application',
      data: nHD_Identity_Application,
    })
  }

  /**
   * @summary Get one NHD_Identity_Application
   * @description Use this to return a single instance of NHD_Identity_Application.<br>
				Requires authentication.
   * @param {string} id 
   * @param {boolean} includedetails 
   */
  getApplicationById(id: string, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Application/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  deleteApplicationById(id: string): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Application/${id}`,
    })
  }
}
