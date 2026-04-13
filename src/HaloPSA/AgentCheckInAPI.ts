/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class AgentCheckInAPI extends BaseAPI {
  /**
   * @summary List of AgentCheckIn
   * @description Use this to return multiple AgentCheckIn. Requires authentication.
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
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/AgentCheckIn',
      params: { agent_id, end_date, start_date },
    })
  }

  postAgentCheckIn({
    agentCheckInList,
  }: {
    agentCheckInList: Array<AgentCheckIn>
  }): Promise<AgentCheckIn> {
    return this.request({ method: 'post', data: agentCheckInList, path: '/AgentCheckIn' })
  }

  /**
   * @summary Get one AgentCheckIn
   * @description Use this to return a single instance of AgentCheckIn. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getAgentCheckInById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<AgentCheckIn> {
    return this.request({ method: 'get', path: `/AgentCheckIn/${id}`, params: { includedetails } })
  }
}
