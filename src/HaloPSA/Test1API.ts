/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module Test1API
 */

/**
 * Test1 module
 * @public
 */
export class Test1API extends BaseAPI {
  getTest1(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Test1' })
  }
}
