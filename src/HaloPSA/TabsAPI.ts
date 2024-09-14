/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Tabname} */
export type Tabname = schemas['Tabname']

/**
 * @module TabsAPI
 */

/**
 * Tabs module
 * @public
 */
export class TabsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Tabname
   * @description Use this to return multiple Tabname.<br>
				Requires authentication.
   * @param {number} [type] 
   * @param {number} [typeid] 
   */
  getTabs({ type, typeid }: { type?: number; typeid?: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Tabs',
      params: {
        type,
        typeid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postTabs({ tabname }: { tabname: Array<Tabname> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tabs',
      data: tabname,
    })
  }

  /**
   * @summary Get one Tabname
   * @description Use this to return a single instance of Tabname.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getTabsById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Tabs/${id}`,
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
  deleteTabsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Tabs/${id}`,
    })
  }
}
