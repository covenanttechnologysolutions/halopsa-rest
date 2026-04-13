/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link UnamePresenceSubscription} */
export type UnamePresenceSubscription = schemas['UnamePresenceSubscription']

/**
 * @module AgentPresenceSubscriptionAPI
 */

/**
 * AgentPresenceSubscription module
 * @public
 */
export class AgentPresenceSubscriptionAPI extends BaseAPI {
  getAgentPresenceSubscription(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AgentPresenceSubscription' })
  }

  postAgentPresenceSubscription({
    unamePresenceSubscriptionList,
  }: {
    unamePresenceSubscriptionList: Array<UnamePresenceSubscription>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: unamePresenceSubscriptionList,
      path: '/AgentPresenceSubscription',
    })
  }

  /**
   * @param {number} id
   */
  getAgentPresenceSubscriptionById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/AgentPresenceSubscription/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAgentPresenceSubscriptionById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AgentPresenceSubscription/${id}` })
  }
}
