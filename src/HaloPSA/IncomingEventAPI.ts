/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link IncomingEvent} */
export type IncomingEvent = schemas['IncomingEvent']

/**
 * @module IncomingEventAPI
 */

/**
 * IncomingEvent module
 * @public
 */
export class IncomingEventAPI extends BaseAPI {
  getIncomingEvent(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IncomingEvent' })
  }

  postIncomingEvent({
    incomingEventList,
  }: {
    incomingEventList: Array<IncomingEvent>
  }): Promise<IncomingEvent> {
    return this.request({ method: 'post', data: incomingEventList, path: '/IncomingEvent' })
  }

  /**
   * @param {number} id
   */
  getIncomingEventById({ id }: { id: number }): Promise<IncomingEvent> {
    return this.request({ method: 'get', path: `/IncomingEvent/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteIncomingEventById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/IncomingEvent/${id}` })
  }

  postIncomingEventProcess(): Promise<unknown> {
    return this.request({ method: 'post', path: '/IncomingEvent/Process' })
  }
}
