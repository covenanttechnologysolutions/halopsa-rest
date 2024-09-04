/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class IntegrationExportAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of IntegrationExport
   * @description Use this to return multiple IntegrationExport.<br>
				Requires authentication.
   * @param {number} moduleId 
   * @param {boolean} readyForImport 
   */
  getIntegrationExport(moduleId: number, readyForImport: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationExport',
      params: {
        moduleId,
        readyForImport,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationExport(integrationExport: Array<IntegrationExport>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationExport',
      data: integrationExport,
    })
  }
}
