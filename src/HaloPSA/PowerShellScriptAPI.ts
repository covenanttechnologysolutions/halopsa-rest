/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class PowerShellScriptAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of PowerShellScript
   * @description Use this to return multiple PowerShellScript.<br>
				Requires authentication.
   * @param {string} clientidoverride 
   * @param {string} type 
   */
  getPowerShellScript(clientidoverride: string, type: string): Promise<any> {
    return this.request({
      method: 'get',
      path: '/PowerShellScript',
      params: {
        clientidoverride,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postPowerShellScript(powerShellScript: Array<PowerShellScript>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/PowerShellScript',
      data: powerShellScript,
    })
  }

  /**
   * @summary Get one PowerShellScript
   * @description Use this to return a single instance of PowerShellScript.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getPowerShellScriptById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/PowerShellScript/${id}`,
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
  deletePowerShellScriptById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/PowerShellScript/${id}`,
    })
  }
}
