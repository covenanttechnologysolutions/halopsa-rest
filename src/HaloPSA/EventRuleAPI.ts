/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link EventRule} */
export type EventRule = schemas['EventRule']

/**
 * @module EventRuleAPI
 */

/**
 * EventRule module
 * @public
 */
export class EventRuleAPI extends BaseAPI {
  getEventRule(): Promise<unknown> {
    return this.request({ method: 'get', path: '/EventRule' })
  }

  postEventRule({ eventRuleList }: { eventRuleList: Array<EventRule> }): Promise<EventRule> {
    return this.request({ method: 'post', data: eventRuleList, path: '/EventRule' })
  }

  /**
   * @param {number} id
   */
  getEventRuleById({ id }: { id: number }): Promise<EventRule> {
    return this.request({ method: 'get', path: `/EventRule/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteEventRuleById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/EventRule/${id}` })
  }
}
