/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Downtime} */
export type Downtime = schemas['Downtime']

/**
 * @module DowntimeAPI
 */

/**
 * Downtime module
 * @public
 */
export class DowntimeAPI extends BaseAPI {
  getDowntime(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Downtime' })
  }

  postDowntime({ downtimeList }: { downtimeList: Array<Downtime> }): Promise<Downtime> {
    return this.request({ method: 'post', data: downtimeList, path: '/Downtime' })
  }

  /**
   * @param {number} id
   */
  getDowntimeById({ id }: { id: number }): Promise<Downtime> {
    return this.request({ method: 'get', path: `/Downtime/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteDowntimeById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Downtime/${id}` })
  }

  getDowntimeDowntimeCalendar(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Downtime/DowntimeCalendar' })
  }
}
