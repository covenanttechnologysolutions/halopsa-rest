/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Control} */
export type Control = schemas['Control']

/**
 * @module ControlAPI
 */

/**
 * Control module
 * @public
 */
export class ControlAPI extends BaseAPI {
  getControl(): Promise<Control> {
    return this.request({ method: 'get', path: '/Control' })
  }

  postControl({ controlList }: { controlList: Array<Control> }): Promise<Control> {
    return this.request({ method: 'post', data: controlList, path: '/Control' })
  }

  postControlSetup(): Promise<unknown> {
    return this.request({ method: 'post', path: '/Control/setup' })
  }

  postControlClearCache(): Promise<unknown> {
    return this.request({ method: 'post', path: '/Control/ClearCache' })
  }

  postControlUpdateEnc(): Promise<unknown> {
    return this.request({ method: 'post', path: '/Control/UpdateEnc' })
  }

  getControlTeams(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Control/Teams' })
  }
}
