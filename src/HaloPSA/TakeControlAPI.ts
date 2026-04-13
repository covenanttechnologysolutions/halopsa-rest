/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Control} */
export type Control = schemas['Control']

/**
 * @module TakeControlAPI
 */

/**
 * TakeControl module
 * @public
 */
export class TakeControlAPI extends BaseAPI {
  getTakeControlGetUrl({ controlList }: { controlList: Array<Control> }): Promise<unknown> {
    return this.request({ method: 'get', data: controlList, path: '/TakeControl/GetUrl' })
  }
}
