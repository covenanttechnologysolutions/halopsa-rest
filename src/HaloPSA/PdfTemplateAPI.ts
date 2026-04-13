/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class PdfTemplateAPI extends BaseAPI {
  /**
   * @summary List of PdfTemplate
   * @description Use this to return multiple PdfTemplate. Requires authentication.
   * @param {string} [licencename]
   * @param {number} [type]
   */
  getPdfTemplate({ licencename, type }: { licencename?: string; type?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/PdfTemplate', params: { licencename, type } })
  }

  postPdfTemplate({
    pdfTemplateList,
  }: {
    pdfTemplateList: Array<PdfTemplate>
  }): Promise<PdfTemplate> {
    return this.request({ method: 'post', data: pdfTemplateList, path: '/PdfTemplate' })
  }

  /**
   * @summary Get one PdfTemplate
   * @description Use this to return a single instance of PdfTemplate. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {string} [licencename]
   * @param {string} [system_use]
   */
  getPdfTemplateById({
    id,
    includedetails,
    licencename,
    system_use,
  }: {
    id: number
    includedetails?: boolean
    licencename?: string
    system_use?: string
  }): Promise<PdfTemplate> {
    return this.request({
      method: 'get',
      path: `/PdfTemplate/${id}`,
      params: { includedetails, licencename, system_use },
    })
  }

  /**
   * @param {number} id
   */
  deletePdfTemplateById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/PdfTemplate/${id}` })
  }
}
