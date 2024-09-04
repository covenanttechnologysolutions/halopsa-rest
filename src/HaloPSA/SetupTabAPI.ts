/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link SetupTab} */
export type SetupTab = schemas['SetupTab']

/**
 * @module SetupTabAPI
 */

/**
 * SetupTab module
 * @public
 */
export class SetupTabAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getSetupTab(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SetupTab',
    })
  }

  /**
   * 
   * 
   
   */
  postSetupTab(setupTab: Array<SetupTab>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SetupTab',
      data: setupTab,
    })
  }

  /**
   * @summary Get one SetupTab
   * @description Use this to return a single instance of SetupTab.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getSetupTabById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SetupTab/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
