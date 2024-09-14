/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class PowerShellScriptCriteriaAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of PowerShellScriptCriteria
   * @description Use this to return multiple PowerShellScriptCriteria.<br>
				Requires authentication.
   * @param {string} [script_id] 
   */
  getPowerShellScriptCriteria({ script_id }: { script_id?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/PowerShellScriptCriteria',
      params: {
        script_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postPowerShellScriptCriteria({
    powerShellScriptCriteria,
  }: {
    powerShellScriptCriteria: Array<PowerShellScriptCriteria>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/PowerShellScriptCriteria',
      data: powerShellScriptCriteria,
    })
  }

  /**
   * @summary Get one PowerShellScriptCriteria
   * @description Use this to return a single instance of PowerShellScriptCriteria.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getPowerShellScriptCriteriaById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/PowerShellScriptCriteria/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deletePowerShellScriptCriteriaById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/PowerShellScriptCriteria/${id}`,
    })
  }
}
