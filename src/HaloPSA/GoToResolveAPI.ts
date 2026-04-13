/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module GoToResolveAPI
 */

/**
 * GoToResolve module
 * @public
 */
export class GoToResolveAPI extends BaseAPI {
  getGoToResolveComplete(): Promise<unknown> {
    return this.request({ method: 'get', path: '/GoToResolve/Complete' })
  }

  getGoToResolveDownload(): Promise<unknown> {
    return this.request({ method: 'get', path: '/GoToResolve/Download' })
  }
}
