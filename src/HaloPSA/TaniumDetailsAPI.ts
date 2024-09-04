/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link TaniumDetails} */
export type TaniumDetails = schemas['TaniumDetails']

/**
 * @module TaniumDetailsAPI
 */

/**
 * TaniumDetails module
 * @public
 */
export class TaniumDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTaniumDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TaniumDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postTaniumDetails(taniumDetails: Array<TaniumDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TaniumDetails',
      data: taniumDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getTaniumDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TaniumDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTaniumDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TaniumDetails/${id}`,
    })
  }
}
