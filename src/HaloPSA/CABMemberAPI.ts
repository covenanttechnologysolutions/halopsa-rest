/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module CABMemberAPI
 */

/**
 * CABMember module
 * @public
 */
export class CABMemberAPI extends BaseAPI {
  getCABMember(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CABMember' })
  }
}
