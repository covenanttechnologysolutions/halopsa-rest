/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module XtypeRoleAPI
 */

/**
 * XtypeRole module
 * @public
 */
export class XtypeRoleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of XTypeRole
   * @description Use this to return multiple XTypeRole.<br>
				Requires authentication.
   * @param {number} [xtype_id] 
   * @param {number} [xtyperole_id] 
   */
  getXtypeRole({
    xtype_id,
    xtyperole_id,
  }: {
    xtype_id?: number
    xtyperole_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/XtypeRole',
      params: {
        xtype_id,
        xtyperole_id,
      },
    })
  }
}
