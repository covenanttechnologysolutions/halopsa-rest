/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link SQLImport} */
export type SQLImport = schemas['SQLImport']

/**
 * @module SQLImportAPI
 */

/**
 * SQLImport module
 * @public
 */
export class SQLImportAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of SQLImport
   * @description Use this to return multiple SQLImport.<br>
				Requires authentication.
   * @param {string} clientidoverride 
   * @param {boolean} integratorenabled 
   * @param {boolean} showpositiveonly 
   */
  getSQLImport(
    clientidoverride: string,
    integratorenabled: boolean,
    showpositiveonly: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SQLImport',
      params: {
        clientidoverride,
        integratorenabled,
        showpositiveonly,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postSQLImport(sQLImport: Array<SQLImport>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SQLImport',
      data: sQLImport,
    })
  }

  /**
   * @summary Get one SQLImport
   * @description Use this to return a single instance of SQLImport.<br>
				Requires authentication.
   * @param {number} id 
   * @param {string} clientidoverride 
   * @param {boolean} includedetails 
   */
  getSQLImportById(id: number, clientidoverride: string, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SQLImport/${id}`,
      params: {
        clientidoverride,
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteSQLImportById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SQLImport/${id}`,
    })
  }
}
