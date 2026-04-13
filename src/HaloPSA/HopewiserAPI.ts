/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module HopewiserAPI
 */

/**
 * Hopewiser module
 * @public
 */
export class HopewiserAPI extends BaseAPI {
  getHopewiserGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Hopewiser/Get' })
  }
}
