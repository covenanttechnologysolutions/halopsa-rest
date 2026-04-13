/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class AzureadconnectionAPI extends BaseAPI {
  /**
   * @summary List of AzureADConnection
   * @description Use this to return multiple AzureADConnection. Requires authentication.
   * @param {boolean} [authorized]
   * @param {boolean} [isintune]
   * @param {number} [type]
   * @param {string} [types]
   */
  getAzureadconnection({
    authorized,
    isintune,
    type,
    types,
  }: {
    authorized?: boolean
    isintune?: boolean
    type?: number
    types?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/azureadconnection',
      params: { authorized, isintune, type, types },
    })
  }

  postAzureadconnection({
    azureADConnectionList,
  }: {
    azureADConnectionList: Array<AzureADConnection>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: azureADConnectionList, path: '/azureadconnection' })
  }

  /**
   * @summary Get one AzureADConnection
   * @description Use this to return a single instance of AzureADConnection. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {boolean} [includetenants]
   */
  getAzureadconnectionById({
    id,
    includedetails,
    includetenants,
  }: {
    id: number
    includedetails?: boolean
    includetenants?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/azureadconnection/${id}`,
      params: { includedetails, includetenants },
    })
  }

  /**
   * @param {number} id
   */
  deleteAzureadconnectionById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/azureadconnection/${id}` })
  }
}
