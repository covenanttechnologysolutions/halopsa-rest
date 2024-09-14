/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ImportCSVAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ImportCsv
   * @description Use this to return multiple ImportCsv.<br>
				Requires authentication.
   * @param {boolean} [includedetails] 
   * @param {number} [type_id] 
   */
  getImportCSV({
    includedetails,
    type_id,
  }: {
    includedetails?: boolean
    type_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ImportCSV',
      params: {
        includedetails,
        type_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postImportCSV({ importCsv }: { importCsv: Array<ImportCsv> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ImportCSV',
      data: importCsv,
    })
  }

  /**
   * @summary Get one ImportCsv
   * @description Use this to return a single instance of ImportCsv.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getImportCSVById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ImportCSV/${id}`,
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
  deleteImportCSVById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ImportCSV/${id}`,
    })
  }
}
