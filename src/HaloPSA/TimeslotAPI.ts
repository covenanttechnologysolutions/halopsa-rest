/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module TimeslotAPI
 */

/**
 * Timeslot module
 * @public
 */
export class TimeslotAPI extends BaseAPI {
  /**
   * @summary List of Timeslot
   * @description Use this to return multiple Timeslot. Requires authentication.
   * @param {number} [agent_id]
   * @param {number} [workday_id]
   */
  getTimeslot({
    agent_id,
    workday_id,
  }: {
    agent_id?: number
    workday_id?: number
  }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Timeslot', params: { agent_id, workday_id } })
  }
}
