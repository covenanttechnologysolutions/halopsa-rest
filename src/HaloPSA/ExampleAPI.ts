/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ExampleAPI
 */

/**
 * Example module
 * @public
 */
export class ExampleAPI extends BaseAPI {
  getExampleGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Example/Get' })
  }
}
