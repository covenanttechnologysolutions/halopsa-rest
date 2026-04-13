/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module Test4API
 */

/**
 * Test4 module
 * @public
 */
export class Test4API extends BaseAPI {
  getTest4(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Test4' })
  }
}
