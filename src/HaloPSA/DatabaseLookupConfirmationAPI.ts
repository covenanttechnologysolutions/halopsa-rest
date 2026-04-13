/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link PartsLookupConfirmation} */
export type PartsLookupConfirmation = schemas['PartsLookupConfirmation']

/**
 * @module DatabaseLookupConfirmationAPI
 */

/**
 * DatabaseLookupConfirmation module
 * @public
 */
export class DatabaseLookupConfirmationAPI extends BaseAPI {
  /**
   * @param {number} id
   */
  getDatabaseLookupConfirmationById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/DatabaseLookupConfirmation/${id}` })
  }

  postDatabaseLookupConfirmation({
    partsLookupConfirmationList,
  }: {
    partsLookupConfirmationList: Array<PartsLookupConfirmation>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: partsLookupConfirmationList,
      path: '/DatabaseLookupConfirmation',
    })
  }
}
