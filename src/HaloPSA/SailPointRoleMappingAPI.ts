/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module SailPointRoleMappingAPI
 */

/**
 * SailPointRoleMapping module
 * @public
 */
export class SailPointRoleMappingAPI extends BaseAPI {
  getSailPointRoleMapping(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SailPointRoleMapping' })
  }
}
