/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module PdfTemplateRepositoryAPI
 */

/**
 * PdfTemplateRepository module
 * @public
 */
export class PdfTemplateRepositoryAPI extends BaseAPI {
  /**
   * @summary List of PdfTemplate
   * @description Use this to return multiple PdfTemplate. Requires authentication.
   * @param {string} [licencename]
   * @param {number} [type]
   */
  getPdfTemplateRepository({
    licencename,
    type,
  }: {
    licencename?: string
    type?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/PdfTemplateRepository',
      params: { licencename, type },
    })
  }

  /**
   * @summary Get one PdfTemplate
   * @description Use this to return a single instance of PdfTemplate. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {string} [licencename]
   * @param {string} [system_use]
   */
  getPdfTemplateRepositoryById({
    id,
    includedetails,
    licencename,
    system_use,
  }: {
    id: number
    includedetails?: boolean
    licencename?: string
    system_use?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/PdfTemplateRepository/${id}`,
      params: { includedetails, licencename, system_use },
    })
  }
}
