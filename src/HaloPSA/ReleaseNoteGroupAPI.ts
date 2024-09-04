/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ReleaseNoteGroup} */
export type ReleaseNoteGroup = schemas['ReleaseNoteGroup']

/**
 * @module ReleaseNoteGroupAPI
 */

/**
 * ReleaseNoteGroup module
 * @public
 */
export class ReleaseNoteGroupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getReleaseNoteGroup(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ReleaseNoteGroup',
    })
  }

  /**
   * 
   * 
   
   */
  postReleaseNoteGroup(releaseNoteGroup: Array<ReleaseNoteGroup>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ReleaseNoteGroup',
      data: releaseNoteGroup,
    })
  }

  /**
   * @summary Get one ReleaseNoteGroup
   * @description Use this to return a single instance of ReleaseNoteGroup.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getReleaseNoteGroupById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ReleaseNoteGroup/${id}`,
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
  deleteReleaseNoteGroupById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ReleaseNoteGroup/${id}`,
    })
  }
}
