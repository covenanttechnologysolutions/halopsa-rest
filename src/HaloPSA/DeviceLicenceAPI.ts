/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module DeviceLicenceAPI
 */

/**
 * DeviceLicence module
 * @public
 */
export class DeviceLicenceAPI extends BaseAPI {
  getDeviceLicence(): Promise<unknown> {
    return this.request({ method: 'get', path: '/DeviceLicence' })
  }
}
