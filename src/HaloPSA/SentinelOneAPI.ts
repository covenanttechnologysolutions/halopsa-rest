/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module SentinelOneAPI
 */

/**
 * SentinelOne module
 * @public
 */
export class SentinelOneAPI extends BaseAPI {
  getSentinelOneGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SentinelOne/Get' })
  }
}
