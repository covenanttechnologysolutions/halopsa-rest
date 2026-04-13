/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module EracentAPI
 */

/**
 * Eracent module
 * @public
 */
export class EracentAPI extends BaseAPI {
  getEracentGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Eracent/Get' })
  }
}
