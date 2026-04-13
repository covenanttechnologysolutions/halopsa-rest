/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link AzureDelta} */
export type AzureDelta = schemas['AzureDelta']

/**
 * @module AzureDeltaAPI
 */

/**
 * AzureDelta module
 * @public
 */
export class AzureDeltaAPI extends BaseAPI {
  getAzureDelta(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AzureDelta' })
  }

  postAzureDelta({ azureDeltaList }: { azureDeltaList: Array<AzureDelta> }): Promise<AzureDelta> {
    return this.request({ method: 'post', data: azureDeltaList, path: '/AzureDelta' })
  }

  /**
   * @param {number} id
   */
  getAzureDeltaById({ id }: { id: number }): Promise<AzureDelta> {
    return this.request({ method: 'get', path: `/AzureDelta/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAzureDeltaById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AzureDelta/${id}` })
  }
}
