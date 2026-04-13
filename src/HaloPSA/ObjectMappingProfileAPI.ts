/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ObjectMappingProfileAPI
 */

/**
 * ObjectMappingProfile module
 * @public
 */
export class ObjectMappingProfileAPI extends BaseAPI {
  getObjectMappingProfile(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ObjectMappingProfile' })
  }
}
