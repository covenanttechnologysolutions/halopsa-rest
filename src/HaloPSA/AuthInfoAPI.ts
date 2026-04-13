/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module AuthInfoAPI
 */

/**
 * AuthInfo module
 * @public
 */
export class AuthInfoAPI extends BaseAPI {
  getAuthInfo(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AuthInfo' })
  }
}
