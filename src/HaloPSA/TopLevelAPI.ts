/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Tree} */
export type Tree = schemas['Tree']

/**
 * @module TopLevelAPI
 */

/**
 * TopLevel module
 * @public
 */
export class TopLevelAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Tree
   * @description Use this to return multiple Tree.<br>
				Requires authentication.
   * @param {boolean} [agent_departments_only] 
   * @param {boolean} [can_edit_only] 
   * @param {number} [count] 
   * @param {boolean} [idonly] 
   * @param {boolean} [include_agents] 
   * @param {boolean} [include_managers] 
   * @param {boolean} [include_teams] 
   * @param {boolean} [isorgchart] 
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
   * @param {number} [org_id] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   * @param {string} [search] 
   * @param {boolean} [show_all] 
   * @param {number} [type] 
   */
  getTopLevel({
    agent_departments_only,
    can_edit_only,
    count,
    idonly,
    include_agents,
    include_managers,
    include_teams,
    isorgchart,
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
    org_id,
    page_no,
    page_size,
    pageinate,
    search,
    show_all,
    type,
  }: {
    agent_departments_only?: boolean
    can_edit_only?: boolean
    count?: number
    idonly?: boolean
    include_agents?: boolean
    include_managers?: boolean
    include_teams?: boolean
    isorgchart?: boolean
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
    org_id?: number
    page_no?: number
    page_size?: number
    pageinate?: boolean
    search?: string
    show_all?: boolean
    type?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TopLevel',
      params: {
        agent_departments_only,
        can_edit_only,
        count,
        idonly,
        include_agents,
        include_managers,
        include_teams,
        isorgchart,
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
        org_id,
        page_no,
        page_size,
        pageinate,
        search,
        show_all,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postTopLevel({ tree }: { tree: Array<Tree> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TopLevel',
      data: tree,
    })
  }

  /**
   * @summary Get one Tree
   * @description Use this to return a single instance of Tree.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [include_agents] 
   * @param {boolean} [include_teams] 
   * @param {boolean} [includedetails] 
   */
  getTopLevelById({
    id,
    include_agents,
    include_teams,
    includedetails,
  }: {
    id: number
    include_agents?: boolean
    include_teams?: boolean
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TopLevel/${id}`,
      params: {
        include_agents,
        include_teams,
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTopLevelById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TopLevel/${id}`,
    })
  }
}
