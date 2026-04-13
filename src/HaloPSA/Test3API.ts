/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module Test3API
 */

/**
 * Test3 module
 * @public
 */
export class Test3API extends BaseAPI {
  getTest3(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Test3' })
  }
}
