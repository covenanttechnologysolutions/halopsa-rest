/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Device} */
export type Device = schemas['Device']

/**
 * @module ISLOnlineAPI
 */

/**
 * ISLOnline module
 * @public
 */
export class ISLOnlineAPI extends BaseAPI {
  getISLOnlineGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ISLOnline/Get' })
  }

  postISLOnlineCreateLink({ device }: { device: Device }): Promise<unknown> {
    return this.request({ method: 'post', data: device, path: '/ISLOnline/CreateLink' })
  }
}
