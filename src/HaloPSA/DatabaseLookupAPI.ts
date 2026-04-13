/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link PartsLookup} */
export type PartsLookup = schemas['PartsLookup']

/**
 * @module DatabaseLookupAPI
 */

/**
 * DatabaseLookup module
 * @public
 */
export class DatabaseLookupAPI extends BaseAPI {
  /**
   * @summary List of PartsLookup
   * @description Use this to return multiple PartsLookup. Requires authentication.
   * @param {number} [type]
   */
  getDatabaseLookup({ type }: { type?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/DatabaseLookup', params: { type } })
  }

  postDatabaseLookup({
    partsLookupList,
  }: {
    partsLookupList: Array<PartsLookup>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: partsLookupList, path: '/DatabaseLookup' })
  }

  /**
   * @summary Get one PartsLookup
   * @description Use this to return a single instance of PartsLookup. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {Record<string, unknown>} [lookup_value]
   */
  getDatabaseLookupById({
    id,
    includedetails,
    lookup_value,
  }: {
    id: number
    includedetails?: boolean
    lookup_value?: Record<string, unknown>
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/DatabaseLookup/${id}`,
      params: { includedetails, lookup_value },
    })
  }

  /**
   * @param {number} id
   */
  deleteDatabaseLookupById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/DatabaseLookup/${id}` })
  }

  postDatabaseLookupRun({
    partsLookupList,
  }: {
    partsLookupList: Array<PartsLookup>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: partsLookupList, path: '/DatabaseLookup/run' })
  }
}
