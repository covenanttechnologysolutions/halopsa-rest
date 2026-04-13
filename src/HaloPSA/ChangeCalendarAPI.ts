/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ChangeCalendarAPI
 */

/**
 * ChangeCalendar module
 * @public
 */
export class ChangeCalendarAPI extends BaseAPI {
  getChangeCalendar(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ChangeCalendar' })
  }
}
