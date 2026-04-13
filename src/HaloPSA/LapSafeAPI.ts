/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module LapSafeAPI
 */

/**
 * LapSafe module
 * @public
 */
export class LapSafeAPI extends BaseAPI {
  getLapSafeGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/LapSafe/Get' })
  }

  getLapSafeCancel(): Promise<unknown> {
    return this.request({ method: 'get', path: '/LapSafe/Cancel' })
  }

  getLapSafeComplete(): Promise<unknown> {
    return this.request({ method: 'get', path: '/LapSafe/Complete' })
  }
}
