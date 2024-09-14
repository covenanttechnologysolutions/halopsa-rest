/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Release} */
export type Release = schemas['Release']

/**
 * @module ReleaseAPI
 */

/**
 * Release module
 * @public
 */
export class ReleaseAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {number} [count] 
   * @param {boolean} [include_devops_project] 
   * @param {boolean} [includenotecount] 
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
   * @param {number} [product_id] 
   * @param {boolean} [restrictmyversion] 
   * @param {string} [search] 
   * @param {number} [compare_version_seq] 
   * @param {number} [exclude_releasenote_group_id] 
   * @param {boolean} [includedetails] 
   * @param {number} [releasenote_group_id] 
   */
  getRelease({
    count,
    include_devops_project,
    includenotecount,
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
    product_id,
    restrictmyversion,
    search,
    compare_version_seq,
    exclude_releasenote_group_id,
    includedetails,
    releasenote_group_id,
  }: {
    count?: number
    include_devops_project?: boolean
    includenotecount?: boolean
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
    product_id?: number
    restrictmyversion?: boolean
    search?: string
    compare_version_seq?: number
    exclude_releasenote_group_id?: number
    includedetails?: boolean
    releasenote_group_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Release',
      params: {
        count,
        include_devops_project,
        includenotecount,
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
        product_id,
        restrictmyversion,
        search,
        compare_version_seq,
        exclude_releasenote_group_id,
        includedetails,
        releasenote_group_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postRelease({ release }: { release: Array<Release> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Release',
      data: release,
    })
  }

  /**
   * @summary Get one Release
   * @description Use this to return a single instance of Release.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getReleaseById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Release/${id}`,
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
  deleteReleaseById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Release/${id}`,
    })
  }
}
