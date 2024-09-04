/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link SynnexDetails} */
export type SynnexDetails = schemas['SynnexDetails']

/**
 * @module SynnexDetailsAPI
 */

/**
 * SynnexDetails module
 * @public
 */
export class SynnexDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getSynnexDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SynnexDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postSynnexDetails(synnexDetails: Array<SynnexDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SynnexDetails',
      data: synnexDetails,
    })
  }

  /**
   * @summary Get one IngramMicroDetails
   * @description Use this to return a single instance of IngramMicroDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getSynnexDetailsById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SynnexDetails/${id}`,
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
  deleteSynnexDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SynnexDetails/${id}`,
    })
  }
}
