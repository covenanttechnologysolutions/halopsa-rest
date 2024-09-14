/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module AgentImageAPI
 */

/**
 * AgentImage module
 * @public
 */
export class AgentImageAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary Get one Uname
   * @description Use this to return a single instance of Uname.<br>
				Requires authentication.
   * @param {string} id 
   * @param {string} [clientidoverride] 
   * @param {boolean} [get_htmldesigner_signature] 
   * @param {boolean} [getholidayallowance] 
   * @param {boolean} [includedetails] (bool) Include extra objects in the response.
   * @param {boolean} [isagentconfig] 
   * @param {boolean} [loadcache] 
   */
  getAgentImageById({
    id,
    clientidoverride,
    get_htmldesigner_signature,
    getholidayallowance,
    includedetails,
    isagentconfig,
    loadcache,
  }: {
    id: string
    clientidoverride?: string
    get_htmldesigner_signature?: boolean
    getholidayallowance?: boolean
    includedetails?: boolean
    isagentconfig?: boolean
    loadcache?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AgentImage/${id}`,
      params: {
        clientidoverride,
        get_htmldesigner_signature,
        getholidayallowance,
        includedetails,
        isagentconfig,
        loadcache,
      },
    })
  }
}
