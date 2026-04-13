/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class CSVTemplateAPI extends BaseAPI {
  getCSVTemplate(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CSVTemplate' })
  }

  postCSVTemplate({
    cSVTemplateList,
  }: {
    cSVTemplateList: Array<CSVTemplate>
  }): Promise<CSVTemplate> {
    return this.request({ method: 'post', data: cSVTemplateList, path: '/CSVTemplate' })
  }

  /**
   * @summary Get one CSVTemplate
   * @description Use this to return a single instance of CSVTemplate. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCSVTemplateById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<CSVTemplate> {
    return this.request({ method: 'get', path: `/CSVTemplate/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteCSVTemplateById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CSVTemplate/${id}` })
  }
}
