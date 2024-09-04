/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module PdfTemplateRepositoryAPI
 */

/**
 * PdfTemplateRepository module
 * @public
 */
export class PdfTemplateRepositoryAPI extends HaloPSA {
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
  getPdfTemplateRepository(licencename: string, type: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/PdfTemplateRepository',
      params: {
        licencename,
        type,
      },
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
  getPdfTemplateRepositoryById(
    id: number,
    includedetails: boolean,
    licencename: string,
    system_use: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/PdfTemplateRepository/${id}`,
      params: {
        includedetails,
        licencename,
        system_use,
      },
    })
  }
}
