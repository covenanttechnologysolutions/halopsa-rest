/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ExactDetails} */
export type ExactDetails = schemas['ExactDetails']

/**
 * @module ExactDetailsAPI
 */

/**
 * ExactDetails module
 * @public
 */
export class ExactDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ExactDetails
   * @description Use this to return multiple ExactDetails.<br>
				Requires authentication.
   * @param {boolean} [connectedonly] 
   * @param {string} [division] 
   */
  getExactDetails({
    connectedonly,
    division,
  }: {
    connectedonly?: boolean
    division?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ExactDetails',
      params: {
        connectedonly,
        division,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postExactDetails({ exactDetails }: { exactDetails: Array<ExactDetails> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ExactDetails',
      data: exactDetails,
    })
  }

  /**
   * @summary Get one ExactDetails
   * @description Use this to return a single instance of ExactDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} [division] 
   * @param {boolean} [includedetails] 
   */
  getExactDetailsById({
    id,
    division,
    includedetails,
  }: {
    id: number
    division?: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ExactDetails/${id}`,
      params: {
        division,
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteExactDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ExactDetails/${id}`,
    })
  }
}
