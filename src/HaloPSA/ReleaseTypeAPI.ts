/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ReleaseType} */
export type ReleaseType = schemas['ReleaseType']

/**
 * @module ReleaseTypeAPI
 */

/**
 * ReleaseType module
 * @public
 */
export class ReleaseTypeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getReleaseType(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ReleaseType',
    })
  }

  /**
   * 
   * 
   
   */
  postReleaseType(releaseType: Array<ReleaseType>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ReleaseType',
      data: releaseType,
    })
  }

  /**
   * @summary Get one ReleaseType
   * @description Use this to return a single instance of ReleaseType.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getReleaseTypeById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ReleaseType/${id}`,
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
  deleteReleaseTypeById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ReleaseType/${id}`,
    })
  }
}
