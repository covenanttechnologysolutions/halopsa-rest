/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module VorbossAPI
 */

/**
 * Vorboss module
 * @public
 */
export class VorbossAPI extends BaseAPI {
  getVorbossGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Vorboss/Get' })
  }
}
