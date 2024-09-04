/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link MYOBDetails} */
export type MYOBDetails = schemas['MYOBDetails']

/**
 * @module MYOBdetailsAPI
 */

/**
 * MYOBdetails module
 * @public
 */
export class MYOBdetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getMYOBdetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/MYOBdetails',
    })
  }

  /**
   * 
   * 
   
   */
  postMYOBdetails(mYOBDetails: Array<MYOBDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/MYOBdetails',
      data: mYOBDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getMYOBdetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/MYOBdetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteMYOBdetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/MYOBdetails/${id}`,
    })
  }
}
