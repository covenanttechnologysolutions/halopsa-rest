/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module SecurityCheckAPI
 */

/**
 * SecurityCheck module
 * @public
 */
export class SecurityCheckAPI extends BaseAPI {
  getSecurityCheck(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SecurityCheck' })
  }

  getSecurityCheckOldencryption(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SecurityCheck/oldencryption' })
  }
}
