/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module FaultViewLogAPI
 */

/**
 * FaultViewLog module
 * @public
 */
export class FaultViewLogAPI extends BaseAPI {
  getFaultViewLog(): Promise<unknown> {
    return this.request({ method: 'get', path: '/FaultViewLog' })
  }
}
