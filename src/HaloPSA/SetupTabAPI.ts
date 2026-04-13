/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SetupTab} */
export type SetupTab = schemas['SetupTab']

/**
 * @module SetupTabAPI
 */

/**
 * SetupTab module
 * @public
 */
export class SetupTabAPI extends BaseAPI {
  getSetupTab(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SetupTab' })
  }

  postSetupTab({ setupTabList }: { setupTabList: Array<SetupTab> }): Promise<SetupTab> {
    return this.request({ method: 'post', data: setupTabList, path: '/SetupTab' })
  }

  /**
   * @summary Get one SetupTab
   * @description Use this to return a single instance of SetupTab. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getSetupTabById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<SetupTab> {
    return this.request({ method: 'get', path: `/SetupTab/${id}`, params: { includedetails } })
  }
}
