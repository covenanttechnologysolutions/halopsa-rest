/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link BulkEmail} */
export type BulkEmail = schemas['BulkEmail']

/**
 * @module BulkEmailAPI
 */

/**
 * BulkEmail module
 * @public
 */
export class BulkEmailAPI extends BaseAPI {
  getBulkEmail(): Promise<unknown> {
    return this.request({ method: 'get', path: '/BulkEmail' })
  }

  /**
   * @summary Get one BulkEmail
   * @description Use this to return a single instance of BulkEmail. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getBulkEmailById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<BulkEmail> {
    return this.request({ method: 'get', path: `/BulkEmail/${id}`, params: { includedetails } })
  }
}
