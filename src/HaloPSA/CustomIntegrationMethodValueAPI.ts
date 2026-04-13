/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module CustomIntegrationMethodValueAPI
 */

/**
 * CustomIntegrationMethodValue module
 * @public
 */
export class CustomIntegrationMethodValueAPI extends BaseAPI {
  getCustomIntegrationMethodValue(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CustomIntegrationMethodValue' })
  }
}
