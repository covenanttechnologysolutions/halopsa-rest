/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link MattermostDetails} */
export type MattermostDetails = schemas['MattermostDetails']

/**
 * @module MattermostDetailsAPI
 */

/**
 * MattermostDetails module
 * @public
 */
export class MattermostDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getMattermostDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/MattermostDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postMattermostDetails(mattermostDetails: Array<MattermostDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/MattermostDetails',
      data: mattermostDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getMattermostDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/MattermostDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteMattermostDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/MattermostDetails/${id}`,
    })
  }
}
