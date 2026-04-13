/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link UnameEventSubscription} */
export type UnameEventSubscription = schemas['UnameEventSubscription']

/**
 * @module AgentEventSubscriptionAPI
 */

/**
 * AgentEventSubscription module
 * @public
 */
export class AgentEventSubscriptionAPI extends BaseAPI {
  getAgentEventSubscription(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AgentEventSubscription' })
  }

  postAgentEventSubscription({
    unameEventSubscriptionList,
  }: {
    unameEventSubscriptionList: Array<UnameEventSubscription>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: unameEventSubscriptionList,
      path: '/AgentEventSubscription',
    })
  }

  /**
   * @param {number} id
   */
  getAgentEventSubscriptionById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/AgentEventSubscription/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAgentEventSubscriptionById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AgentEventSubscription/${id}` })
  }
}
