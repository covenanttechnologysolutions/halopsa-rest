/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link DashboardLinks} */
export type DashboardLinks = schemas['DashboardLinks']

/**
 * @module DashboardLinksAPI
 */

/**
 * DashboardLinks module
 * @public
 */
export class DashboardLinksAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of DashboardLinks
   * @description Use this to return multiple DashboardLinks.<br>
				Requires authentication.
   * @param {number} [access_control_level] 
   * @param {number} [count] 
   * @param {boolean} [in_app] 
   * @param {string} [order] 
   * @param {string} [order2] 
   * @param {string} [order3] 
   * @param {string} [order4] 
   * @param {string} [order5] 
   * @param {boolean} [orderdesc] 
   * @param {boolean} [orderdesc2] 
   * @param {boolean} [orderdesc3] 
   * @param {boolean} [orderdesc4] 
   * @param {boolean} [orderdesc5] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   * @param {boolean} [showall] 
   * @param {number} [userid] 
   */
  getDashboardLinks({
    access_control_level,
    count,
    in_app,
    order,
    order2,
    order3,
    order4,
    order5,
    orderdesc,
    orderdesc2,
    orderdesc3,
    orderdesc4,
    orderdesc5,
    page_no,
    page_size,
    pageinate,
    showall,
    userid,
  }: {
    access_control_level?: number
    count?: number
    in_app?: boolean
    order?: string
    order2?: string
    order3?: string
    order4?: string
    order5?: string
    orderdesc?: boolean
    orderdesc2?: boolean
    orderdesc3?: boolean
    orderdesc4?: boolean
    orderdesc5?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
    showall?: boolean
    userid?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/DashboardLinks',
      params: {
        access_control_level,
        count,
        in_app,
        order,
        order2,
        order3,
        order4,
        order5,
        orderdesc,
        orderdesc2,
        orderdesc3,
        orderdesc4,
        orderdesc5,
        page_no,
        page_size,
        pageinate,
        showall,
        userid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postDashboardLinks({ dashboardLinks }: { dashboardLinks: Array<DashboardLinks> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/DashboardLinks',
      data: dashboardLinks,
    })
  }

  /**
   * @summary Get one DashboardLinks
   * @description Use this to return a single instance of DashboardLinks.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [getreporttoken] 
   * @param {boolean} [includedetails] 
   * @param {boolean} [showall] 
   * @param {number} [userid] 
   */
  getDashboardLinksById({
    id,
    getreporttoken,
    includedetails,
    showall,
    userid,
  }: {
    id: number
    getreporttoken?: boolean
    includedetails?: boolean
    showall?: boolean
    userid?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/DashboardLinks/${id}`,
      params: {
        getreporttoken,
        includedetails,
        showall,
        userid,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteDashboardLinksById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/DashboardLinks/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  getDashboardLinksFilterValues({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/DashboardLinks/FilterValues',
    })
  }
}
