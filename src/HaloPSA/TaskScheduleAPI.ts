/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module TaskScheduleAPI
 */

/**
 * TaskSchedule module
 * @public
 */
export class TaskScheduleAPI extends BaseAPI {
  getTaskSchedule(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TaskSchedule' })
  }

  postTaskSchedule(): Promise<unknown> {
    return this.request({ method: 'post', path: '/TaskSchedule' })
  }
}
