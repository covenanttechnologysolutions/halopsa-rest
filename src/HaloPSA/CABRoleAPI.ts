/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module CABRoleAPI
 */

/**
 * CABRole module
 * @public
 */
export class CABRoleAPI extends BaseAPI {
  getCABRole(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CABRole' })
  }
}
