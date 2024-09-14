/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link CabHeader} */
export type CabHeader = schemas['CabHeader']

/**
 * @module CABAPI
 */

/**
 * CAB module
 * @public
 */
export class CABAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of CabHeader
   * @description Use this to return multiple CabHeader.<br>
				Requires authentication.
   * @param {boolean} [includemembers] 
   */
  getCAB({ includemembers }: { includemembers?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CAB',
      params: {
        includemembers,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postCAB({ cabHeader }: { cabHeader: Array<CabHeader> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CAB',
      data: cabHeader,
    })
  }

  /**
   * @summary Get one CabHeader
   * @description Use this to return a single instance of CabHeader.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getCABById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CAB/${id}`,
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
  deleteCABById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/CAB/${id}`,
    })
  }
}
