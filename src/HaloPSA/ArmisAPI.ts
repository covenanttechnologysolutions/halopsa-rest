/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ArmisAPI
 */

/**
 * Armis module
 * @public
 */
export class ArmisAPI extends BaseAPI {
  getArmisGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Armis/Get' })
  }
}
