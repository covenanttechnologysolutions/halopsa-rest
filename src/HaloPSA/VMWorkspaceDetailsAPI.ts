/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link VMWorkspaceDetails} */
export type VMWorkspaceDetails = schemas['VMWorkspaceDetails']

/**
 * @module VMWorkspaceDetailsAPI
 */

/**
 * VMWorkspaceDetails module
 * @public
 */
export class VMWorkspaceDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getVMWorkspaceDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/VMWorkspaceDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postVMWorkspaceDetails(vMWorkspaceDetails: Array<VMWorkspaceDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/VMWorkspaceDetails',
      data: vMWorkspaceDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getVMWorkspaceDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/VMWorkspaceDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteVMWorkspaceDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/VMWorkspaceDetails/${id}`,
    })
  }
}
