/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link PRTGDetails} */
export type PRTGDetails = schemas['PRTGDetails']

/**
 * @module PRTGDetailsAPI
 */

/**
 * PRTGDetails module
 * @public
 */
export class PRTGDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getPRTGDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/PRTGDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postPRTGDetails({ pRTGDetails }: { pRTGDetails: Array<PRTGDetails> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/PRTGDetails',
      data: pRTGDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getPRTGDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/PRTGDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deletePRTGDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/PRTGDetails/${id}`,
    })
  }
}
