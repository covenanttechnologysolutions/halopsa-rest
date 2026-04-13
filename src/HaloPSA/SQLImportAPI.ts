/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class SQLImportAPI extends BaseAPI {
  /**
   * @summary List of SQLImport
   * @description Use this to return multiple SQLImport. Requires authentication.
   * @param {string} [clientidoverride]
   * @param {boolean} [integratorenabled]
   * @param {boolean} [showpositiveonly]
   */
  getSQLImport({
    clientidoverride,
    integratorenabled,
    showpositiveonly,
  }: {
    clientidoverride?: string
    integratorenabled?: boolean
    showpositiveonly?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/SQLImport',
      params: { clientidoverride, integratorenabled, showpositiveonly },
    })
  }

  postSQLImport({ sQLImportList }: { sQLImportList: Array<SQLImport> }): Promise<SQLImport> {
    return this.request({ method: 'post', data: sQLImportList, path: '/SQLImport' })
  }

  /**
   * @summary Get one SQLImport
   * @description Use this to return a single instance of SQLImport. Requires authentication.
   * @param {number} id
   * @param {string} [clientidoverride]
   * @param {boolean} [includedetails]
   */
  getSQLImportById({
    id,
    clientidoverride,
    includedetails,
  }: {
    id: number
    clientidoverride?: string
    includedetails?: boolean
  }): Promise<SQLImport> {
    return this.request({
      method: 'get',
      path: `/SQLImport/${id}`,
      params: { clientidoverride, includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteSQLImportById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SQLImport/${id}` })
  }
}
