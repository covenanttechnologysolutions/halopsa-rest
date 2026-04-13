/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module TicketTypeFieldAPI
 */

/**
 * TicketTypeField module
 * @public
 */
export class TicketTypeFieldAPI extends BaseAPI {
  /**
   * @summary List of RequestTypeField
   * @description Use this to return multiple RequestTypeField. Requires authentication.
   * @param {boolean} [buildcache]
   * @param {boolean} [debug]
   * @param {boolean} [isrtconfig]
   */
  getTicketTypeField({
    buildcache,
    debug,
    isrtconfig,
  }: {
    buildcache?: boolean
    debug?: boolean
    isrtconfig?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/TicketTypeField',
      params: { buildcache, debug, isrtconfig },
    })
  }
}
