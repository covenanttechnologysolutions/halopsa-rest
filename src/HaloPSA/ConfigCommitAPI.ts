/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ConfigCommit} */
export type ConfigCommit = schemas['ConfigCommit']

/**
 * @module ConfigCommitAPI
 */

/**
 * ConfigCommit module
 * @public
 */
export class ConfigCommitAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ConfigCommit
   * @description Use this to return multiple ConfigCommit.<br>
				Requires authentication.
   * @param {string} [advanced_search] 
   * @param {boolean} [idonly] 
   * @param {number} [instance_id] 
   * @param {number} [notin_instance_id] 
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
   * @param {string} [rollback_commit] 
   * @param {string} [search] 
   */
  getConfigCommit({
    advanced_search,
    idonly,
    instance_id,
    notin_instance_id,
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
    rollback_commit,
    search,
  }: {
    advanced_search?: string
    idonly?: boolean
    instance_id?: number
    notin_instance_id?: number
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
    rollback_commit?: string
    search?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ConfigCommit',
      params: {
        advanced_search,
        idonly,
        instance_id,
        notin_instance_id,
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
        rollback_commit,
        search,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postConfigCommit({ configCommit }: { configCommit: Array<ConfigCommit> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ConfigCommit',
      data: configCommit,
    })
  }

  /**
   * @summary Get one ConfigCommit
   * @description Use this to return a single instance of ConfigCommit.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   * @param {number} [instance_id] 
   */
  getConfigCommitById({
    id,
    includedetails,
    instance_id,
  }: {
    id: number
    includedetails?: boolean
    instance_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ConfigCommit/${id}`,
      params: {
        includedetails,
        instance_id,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteConfigCommitById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ConfigCommit/${id}`,
    })
  }
}
