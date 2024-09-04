/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link CSVTemplate} */
export type CSVTemplate = schemas['CSVTemplate']

/**
 * @module CSVTemplateAPI
 */

/**
 * CSVTemplate module
 * @public
 */
export class CSVTemplateAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getCSVTemplate(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CSVTemplate',
    })
  }

  /**
   * 
   * 
   
   */
  postCSVTemplate(cSVTemplate: Array<CSVTemplate>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CSVTemplate',
      data: cSVTemplate,
    })
  }

  /**
   * @summary Get one CSVTemplate
   * @description Use this to return a single instance of CSVTemplate.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getCSVTemplateById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CSVTemplate/${id}`,
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
  deleteCSVTemplateById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/CSVTemplate/${id}`,
    })
  }
}
