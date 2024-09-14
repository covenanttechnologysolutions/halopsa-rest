/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module TicketTypeFieldAPI
 */

/**
 * TicketTypeField module
 * @public
 */
export class TicketTypeFieldAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of RequestTypeField
   * @description Use this to return multiple RequestTypeField.<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TicketTypeField',
      params: {
        buildcache,
        debug,
        isrtconfig,
      },
    })
  }
}
