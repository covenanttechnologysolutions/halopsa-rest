/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module TestErrorAPI
 */

/**
 * TestError module
 * @public
 */
export class TestErrorAPI extends BaseAPI {
  getTestError(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TestError' })
  }
}
