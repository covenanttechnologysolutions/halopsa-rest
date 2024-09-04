/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link CustomTable} */
export type CustomTable = schemas['CustomTable']

/**
 * @module CustomTableAPI
 */

/**
 * CustomTable module
 * @public
 */
export class CustomTableAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of CustomTable
   * @description Use this to return multiple CustomTable.<br>
				Requires authentication.
   * @param {number} access_control_level 
   * @param {boolean} customonly 
   * @param {boolean} isconfig 
   * @param {boolean} iswebhookmapping 
   * @param {boolean} systemonly 
   * @param {number} usage 
   */
  getCustomTable(
    access_control_level: number,
    customonly: boolean,
    isconfig: boolean,
    iswebhookmapping: boolean,
    systemonly: boolean,
    usage: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CustomTable',
      params: {
        access_control_level,
        customonly,
        isconfig,
        iswebhookmapping,
        systemonly,
        usage,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postCustomTable(customTable: Array<CustomTable>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CustomTable',
      data: customTable,
    })
  }

  /**
   * @summary Get one CustomTable
   * @description Use this to return a single instance of CustomTable.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getCustomTableById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CustomTable/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteCustomTableById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/CustomTable/${id}`,
    })
  }
}
