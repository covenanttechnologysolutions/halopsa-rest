/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link PdfTemplate} */
export type PdfTemplate = schemas['PdfTemplate']

/**
 * @module PdfTemplateAPI
 */

/**
 * PdfTemplate module
 * @public
 */
export class PdfTemplateAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of PdfTemplate
   * @description Use this to return multiple PdfTemplate.<br>
				Requires authentication.
   * @param {string} licencename 
   * @param {number} type 
   */
  getPdfTemplate(licencename: string, type: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/PdfTemplate',
      params: {
        licencename,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postPdfTemplate(pdfTemplate: Array<PdfTemplate>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/PdfTemplate',
      data: pdfTemplate,
    })
  }

  /**
   * @summary Get one PdfTemplate
   * @description Use this to return a single instance of PdfTemplate.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   * @param {string} licencename 
   * @param {string} system_use 
   */
  getPdfTemplateById(
    id: number,
    includedetails: boolean,
    licencename: string,
    system_use: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/PdfTemplate/${id}`,
      params: {
        includedetails,
        licencename,
        system_use,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deletePdfTemplateById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/PdfTemplate/${id}`,
    })
  }
}
