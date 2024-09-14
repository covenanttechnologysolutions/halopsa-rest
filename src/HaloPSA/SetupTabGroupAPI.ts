/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module SetupTabGroupAPI
 */

/**
 * SetupTabGroup module
 * @public
 */
export class SetupTabGroupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getSetupTabGroup({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SetupTabGroup',
    })
  }

  /**
   * @summary Get one SetupTabGroup
   * @description Use this to return a single instance of SetupTabGroup.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getSetupTabGroupById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SetupTabGroup/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
