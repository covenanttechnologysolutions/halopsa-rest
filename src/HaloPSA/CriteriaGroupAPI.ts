/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module CriteriaGroupAPI
 */

/**
 * CriteriaGroup module
 * @public
 */
export class CriteriaGroupAPI extends BaseAPI {
  getCriteriaGroup(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CriteriaGroup' })
  }
}
