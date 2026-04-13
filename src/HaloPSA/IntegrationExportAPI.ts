/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link IntegrationExport} */
export type IntegrationExport = schemas['IntegrationExport']

/**
 * @module IntegrationExportAPI
 */

/**
 * IntegrationExport module
 * @public
 */
export class IntegrationExportAPI extends BaseAPI {
  /**
   * @summary List of IntegrationExport
   * @description Use this to return multiple IntegrationExport. Requires authentication.
   * @param {number} [moduleId]
   * @param {boolean} [readyForImport]
   */
  getIntegrationExport({
    moduleId,
    readyForImport,
  }: {
    moduleId?: number
    readyForImport?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationExport',
      params: { moduleId, readyForImport },
    })
  }

  postIntegrationExport({
    integrationExportList,
  }: {
    integrationExportList: Array<IntegrationExport>
  }): Promise<IntegrationExport> {
    return this.request({ method: 'post', data: integrationExportList, path: '/IntegrationExport' })
  }

  /**
   * @param {number} id
   */
  deleteIntegrationExportById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/IntegrationExport/${id}` })
  }
}
