/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link PowerShellScriptCriteria} */
export type PowerShellScriptCriteria = schemas['PowerShellScriptCriteria']

/**
 * @module PowerShellScriptCriteriaAPI
 */

/**
 * PowerShellScriptCriteria module
 * @public
 */
export class PowerShellScriptCriteriaAPI extends BaseAPI {
  /**
   * @summary List of PowerShellScriptCriteria
   * @description Use this to return multiple PowerShellScriptCriteria. Requires authentication.
   * @param {string} [script_id]
   */
  getPowerShellScriptCriteria({ script_id }: { script_id?: string }): Promise<unknown> {
    return this.request({ method: 'get', path: '/PowerShellScriptCriteria', params: { script_id } })
  }

  postPowerShellScriptCriteria({
    powerShellScriptCriteriaList,
  }: {
    powerShellScriptCriteriaList: Array<PowerShellScriptCriteria>
  }): Promise<PowerShellScriptCriteria> {
    return this.request({
      method: 'post',
      data: powerShellScriptCriteriaList,
      path: '/PowerShellScriptCriteria',
    })
  }

  /**
   * @summary Get one PowerShellScriptCriteria
   * @description Use this to return a single instance of PowerShellScriptCriteria. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getPowerShellScriptCriteriaById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<PowerShellScriptCriteria> {
    return this.request({
      method: 'get',
      path: `/PowerShellScriptCriteria/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deletePowerShellScriptCriteriaById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/PowerShellScriptCriteria/${id}` })
  }
}
