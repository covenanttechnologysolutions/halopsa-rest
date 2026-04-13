/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ManageEngineAPI
 */

/**
 * ManageEngine module
 * @public
 */
export class ManageEngineAPI extends BaseAPI {
  getManageEngineGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ManageEngine/Get' })
  }
}
