/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AzureADConnection} */
export type AzureADConnection = schemas['AzureADConnection']

/**
 * @module AzureadconnectionAPI
 */

/**
 * Azureadconnection module
 * @public
 */
export class AzureadconnectionAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of AzureADConnection
   * @description Use this to return multiple AzureADConnection.<br>
				Requires authentication.
   * @param {boolean} authorized 
   * @param {boolean} isintune 
   * @param {number} type 
   * @param {string} types 
   */
  getAzureadconnection(
    authorized: boolean,
    isintune: boolean,
    type: number,
    types: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/azureadconnection',
      params: {
        authorized,
        isintune,
        type,
        types,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postAzureadconnection(azureADConnection: Array<AzureADConnection>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/azureadconnection',
      data: azureADConnection,
    })
  }

  /**
   * @summary Get one AzureADConnection
   * @description Use this to return a single instance of AzureADConnection.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   * @param {boolean} includetenants 
   */
  getAzureadconnectionById(
    id: number,
    includedetails: boolean,
    includetenants: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/azureadconnection/${id}`,
      params: {
        includedetails,
        includetenants,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAzureadconnectionById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/azureadconnection/${id}`,
    })
  }
}
