/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module SetupTabGroupAPI
 */

/**
 * SetupTabGroup module
 * @public
 */
export class SetupTabGroupAPI extends BaseAPI {
  getSetupTabGroup(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SetupTabGroup' })
  }

  /**
   * @summary Get one SetupTabGroup
   * @description Use this to return a single instance of SetupTabGroup. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getSetupTabGroupById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/SetupTabGroup/${id}`, params: { includedetails } })
  }
}
