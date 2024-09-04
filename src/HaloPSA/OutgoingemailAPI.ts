/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Outgoingemail} */
export type Outgoingemail = schemas['Outgoingemail']

/**
 * @module OutgoingemailAPI
 */

/**
 * Outgoingemail module
 * @public
 */
export class OutgoingemailAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Outgoingemail
   * @description Use this to return multiple Outgoingemail.<br>
				Requires authentication.
   * @param {boolean} errorsonly 
   */
  getOutgoingemail(errorsonly: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Outgoingemail',
      params: {
        errorsonly,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postOutgoingemail(outgoingemail: Array<Outgoingemail>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Outgoingemail',
      data: outgoingemail,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteOutgoingemailById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Outgoingemail/${id}`,
    })
  }
}
