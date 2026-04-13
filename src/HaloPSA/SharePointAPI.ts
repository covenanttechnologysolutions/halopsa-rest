/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module SharePointAPI
 */

/**
 * SharePoint module
 * @public
 */
export class SharePointAPI extends BaseAPI {
  getSharePointGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SharePoint/Get' })
  }
}
