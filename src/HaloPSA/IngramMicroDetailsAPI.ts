/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link IngramMicroDetails} */
export type IngramMicroDetails = schemas['IngramMicroDetails']

/**
 * @module IngramMicroDetailsAPI
 */

/**
 * IngramMicroDetails module
 * @public
 */
export class IngramMicroDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getIngramMicroDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IngramMicroDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postIngramMicroDetails({
    ingramMicroDetails,
  }: {
    ingramMicroDetails: Array<IngramMicroDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IngramMicroDetails',
      data: ingramMicroDetails,
    })
  }

  /**
   * @summary Get one IngramMicroDetails
   * @description Use this to return a single instance of IngramMicroDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getIngramMicroDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/IngramMicroDetails/${id}`,
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
  deleteIngramMicroDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/IngramMicroDetails/${id}`,
    })
  }
}
