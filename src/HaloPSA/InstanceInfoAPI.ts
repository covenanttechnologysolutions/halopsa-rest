/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module InstanceInfoAPI
 */

/**
 * InstanceInfo module
 * @public
 */
export class InstanceInfoAPI extends BaseAPI {
  getInstanceInfo(): Promise<unknown> {
    return this.request({ method: 'get', path: '/InstanceInfo' })
  }
}
