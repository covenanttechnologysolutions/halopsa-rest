/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link PowerShellScriptProcessing} */
export type PowerShellScriptProcessing = schemas['PowerShellScriptProcessing']

/**
 * @module PowerShellScriptProcessingAPI
 */

/**
 * PowerShellScriptProcessing module
 * @public
 */
export class PowerShellScriptProcessingAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of PowerShellScriptProcessing
   * @description Use this to return multiple PowerShellScriptProcessing.<br>
				Requires authentication.
   * @param {number} [count] 
   * @param {boolean} [includeparameters] 
   * @param {string} [order] 
   * @param {string} [order2] 
   * @param {string} [order3] 
   * @param {string} [order4] 
   * @param {string} [order5] 
   * @param {boolean} [orderdesc] 
   * @param {boolean} [orderdesc2] 
   * @param {boolean} [orderdesc3] 
   * @param {boolean} [orderdesc4] 
   * @param {boolean} [orderdesc5] 
   * @param {boolean} [outstandingonly] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   * @param {number} [script_id] 
   * @param {number} [ticket_id] 
   */
  getPowerShellScriptProcessing({
    count,
    includeparameters,
    order,
    order2,
    order3,
    order4,
    order5,
    orderdesc,
    orderdesc2,
    orderdesc3,
    orderdesc4,
    orderdesc5,
    outstandingonly,
    page_no,
    page_size,
    pageinate,
    script_id,
    ticket_id,
  }: {
    count?: number
    includeparameters?: boolean
    order?: string
    order2?: string
    order3?: string
    order4?: string
    order5?: string
    orderdesc?: boolean
    orderdesc2?: boolean
    orderdesc3?: boolean
    orderdesc4?: boolean
    orderdesc5?: boolean
    outstandingonly?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
    script_id?: number
    ticket_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/PowerShellScriptProcessing',
      params: {
        count,
        includeparameters,
        order,
        order2,
        order3,
        order4,
        order5,
        orderdesc,
        orderdesc2,
        orderdesc3,
        orderdesc4,
        orderdesc5,
        outstandingonly,
        page_no,
        page_size,
        pageinate,
        script_id,
        ticket_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postPowerShellScriptProcessing({
    powerShellScriptProcessing,
  }: {
    powerShellScriptProcessing: Array<PowerShellScriptProcessing>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/PowerShellScriptProcessing',
      data: powerShellScriptProcessing,
    })
  }

  /**
   * @summary Get one PowerShellScriptProcessing
   * @description Use this to return a single instance of PowerShellScriptProcessing.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getPowerShellScriptProcessingById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/PowerShellScriptProcessing/${id}`,
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
  deletePowerShellScriptProcessingById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/PowerShellScriptProcessing/${id}`,
    })
  }
}
