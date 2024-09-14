/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AgentCheckIn} */
export type AgentCheckIn = schemas['AgentCheckIn']

/**
 * @module AgentCheckInAPI
 */

/**
 * AgentCheckIn module
 * @public
 */
export class AgentCheckInAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of AgentCheckIn
   * @description Use this to return multiple AgentCheckIn.<br>
				Requires authentication.
   * @param {number} [agent_id] 
   * @param {string} [end_date] 
   * @param {string} [start_date] 
   */
  getAgentCheckIn({
    agent_id,
    end_date,
    start_date,
  }: {
    agent_id?: number
    end_date?: string
    start_date?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AgentCheckIn',
      params: {
        agent_id,
        end_date,
        start_date,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postAgentCheckIn({ agentCheckIn }: { agentCheckIn: Array<AgentCheckIn> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AgentCheckIn',
      data: agentCheckIn,
    })
  }

  /**
   * @summary Get one AgentCheckIn
   * @description Use this to return a single instance of AgentCheckIn.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getAgentCheckInById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AgentCheckIn/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
