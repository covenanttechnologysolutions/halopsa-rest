/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module AgentPresenceRuleAPI
 */

/**
 * AgentPresenceRule module
 * @public
 */
export class AgentPresenceRuleAPI extends BaseAPI {
  getAgentPresenceRule(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AgentPresenceRule' })
  }
}
