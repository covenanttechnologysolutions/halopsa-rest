/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link IntegrationFieldData} */
export type IntegrationFieldData = schemas['IntegrationFieldData']

/**
 * @module IntegrationFieldDataAPI
 */

/**
 * IntegrationFieldData module
 * @public
 */
export class IntegrationFieldDataAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getIntegrationFieldData(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationFieldData',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationFieldData(integrationFieldData: Array<IntegrationFieldData>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationFieldData',
      data: integrationFieldData,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getIntegrationFieldDataById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/IntegrationFieldData/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteIntegrationFieldDataById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/IntegrationFieldData/${id}`,
    })
  }
}
