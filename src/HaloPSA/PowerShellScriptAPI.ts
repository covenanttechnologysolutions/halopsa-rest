/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link PowerShellScript} */
export type PowerShellScript = schemas['PowerShellScript']

/**
 * @module PowerShellScriptAPI
 */

/**
 * PowerShellScript module
 * @public
 */
export class PowerShellScriptAPI extends BaseAPI {
  /**
   * @summary List of PowerShellScript
   * @description Use this to return multiple PowerShellScript. Requires authentication.
   * @param {string} [clientidoverride]
   * @param {string} [type]
   */
  getPowerShellScript({
    clientidoverride,
    type,
  }: {
    clientidoverride?: string
    type?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/PowerShellScript',
      params: { clientidoverride, type },
    })
  }

  postPowerShellScript({
    powerShellScriptList,
  }: {
    powerShellScriptList: Array<PowerShellScript>
  }): Promise<PowerShellScript> {
    return this.request({ method: 'post', data: powerShellScriptList, path: '/PowerShellScript' })
  }

  /**
   * @summary Get one PowerShellScript
   * @description Use this to return a single instance of PowerShellScript. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getPowerShellScriptById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<PowerShellScript> {
    return this.request({
      method: 'get',
      path: `/PowerShellScript/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deletePowerShellScriptById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/PowerShellScript/${id}` })
  }
}
