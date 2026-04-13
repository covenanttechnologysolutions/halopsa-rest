/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ModuleSetup} */
export type ModuleSetup = schemas['ModuleSetup']

/**
 * @module FeaturesAPI
 */

/**
 * Features module
 * @public
 */
export class FeaturesAPI extends BaseAPI {
  /**
   * @summary List of ModuleSetup
   * @description Use this to return multiple ModuleSetup. Requires authentication.
   * @param {boolean} [isconfig]
   * @param {boolean} [showdisabled]
   * @param {boolean} [showenabled]
   */
  getFeatures({
    isconfig,
    showdisabled,
    showenabled,
  }: {
    isconfig?: boolean
    showdisabled?: boolean
    showenabled?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Features',
      params: { isconfig, showdisabled, showenabled },
    })
  }

  postFeatures({ moduleSetupList }: { moduleSetupList: Array<ModuleSetup> }): Promise<unknown> {
    return this.request({ method: 'post', data: moduleSetupList, path: '/Features' })
  }

  /**
   * @summary Get one ModuleSetup
   * @description Use this to return a single instance of ModuleSetup. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getFeaturesById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Features/${id}`, params: { includedetails } })
  }
}
