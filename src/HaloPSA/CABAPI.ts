/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link CabHeader} */
export type CabHeader = schemas['CabHeader']

/**
 * @module CABAPI
 */

/**
 * CAB module
 * @public
 */
export class CABAPI extends BaseAPI {
  /**
   * @summary List of CabHeader
   * @description Use this to return multiple CabHeader. Requires authentication.
   * @param {boolean} [includemembers]
   */
  getCAB({ includemembers }: { includemembers?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: '/CAB', params: { includemembers } })
  }

  postCAB({ cabHeaderList }: { cabHeaderList: Array<CabHeader> }): Promise<unknown> {
    return this.request({ method: 'post', data: cabHeaderList, path: '/CAB' })
  }

  /**
   * @summary Get one CabHeader
   * @description Use this to return a single instance of CabHeader. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCABById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: `/CAB/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteCABById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CAB/${id}` })
  }
}
