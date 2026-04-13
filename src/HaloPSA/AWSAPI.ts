/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module AWSAPI
 */

/**
 * AWS module
 * @public
 */
export class AWSAPI extends BaseAPI {
  getAWSGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AWS/Get' })
  }
}
