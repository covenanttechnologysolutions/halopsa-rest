/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link TenableDetails} */
export type TenableDetails = schemas['TenableDetails']

/**
 * @module TenableDetailsAPI
 */

/**
 * TenableDetails module
 * @public
 */
export class TenableDetailsAPI extends BaseAPI {
  getTenableDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TenableDetails' })
  }

  postTenableDetails({
    tenableDetailsList,
  }: {
    tenableDetailsList: Array<TenableDetails>
  }): Promise<TenableDetails> {
    return this.request({ method: 'post', data: tenableDetailsList, path: '/TenableDetails' })
  }

  /**
   * @param {number} id
   */
  getTenableDetailsById({ id }: { id: number }): Promise<TenableDetails> {
    return this.request({ method: 'get', path: `/TenableDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteTenableDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TenableDetails/${id}` })
  }
}
