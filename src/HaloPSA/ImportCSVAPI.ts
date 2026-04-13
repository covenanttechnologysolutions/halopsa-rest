/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ImportCsv} */
export type ImportCsv = schemas['ImportCsv']

/**
 * @module ImportCSVAPI
 */

/**
 * ImportCSV module
 * @public
 */
export class ImportCSVAPI extends BaseAPI {
  /**
   * @summary List of ImportCsv
   * @description Use this to return multiple ImportCsv. Requires authentication.
   * @param {boolean} [includedetails]
   * @param {number} [type_id]
   */
  getImportCSV({
    includedetails,
    type_id,
  }: {
    includedetails?: boolean
    type_id?: number
  }): Promise<unknown> {
    return this.request({ method: 'get', path: '/ImportCSV', params: { includedetails, type_id } })
  }

  postImportCSV({ importCsvList }: { importCsvList: Array<ImportCsv> }): Promise<unknown> {
    return this.request({ method: 'post', data: importCsvList, path: '/ImportCSV' })
  }

  /**
   * @summary Get one ImportCsv
   * @description Use this to return a single instance of ImportCsv. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getImportCSVById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/ImportCSV/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteImportCSVById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ImportCSV/${id}` })
  }
}
