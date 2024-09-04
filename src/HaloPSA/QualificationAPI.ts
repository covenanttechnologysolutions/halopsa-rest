/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Qualification} */
export type Qualification = schemas['Qualification']

/**
 * @module QualificationAPI
 */

/**
 * Qualification module
 * @public
 */
export class QualificationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Qualification
   * @description Use this to return multiple Qualification.<br>
				Requires authentication.
   * @param {boolean} includecriteriainfo 
   */
  getQualification(includecriteriainfo: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Qualification',
      params: {
        includecriteriainfo,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postQualification(qualification: Array<Qualification>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Qualification',
      data: qualification,
    })
  }

  /**
   * @summary Get one Qualification
   * @description Use this to return a single instance of Qualification.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getQualificationById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Qualification/${id}`,
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
  deleteQualificationById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Qualification/${id}`,
    })
  }
}
