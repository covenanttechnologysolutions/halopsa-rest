/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link GoogleBusinessDetails} */
export type GoogleBusinessDetails = schemas['GoogleBusinessDetails']

/**
 * @module GoogleBusinessDetailsAPI
 */

/**
 * GoogleBusinessDetails module
 * @public
 */
export class GoogleBusinessDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getGoogleBusinessDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/GoogleBusinessDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postGoogleBusinessDetails(googleBusinessDetails: Array<GoogleBusinessDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/GoogleBusinessDetails',
      data: googleBusinessDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getGoogleBusinessDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/GoogleBusinessDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteGoogleBusinessDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/GoogleBusinessDetails/${id}`,
    })
  }
}
