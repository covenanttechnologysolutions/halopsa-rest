/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link CategoryDetail} */
export type CategoryDetail = schemas['CategoryDetail']

/**
 * @module CategoryAPI
 */

/**
 * Category module
 * @public
 */
export class CategoryAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of CategoryDetail
   * @description Use this to return multiple CategoryDetail.<br>
				Requires authentication.
   * @param {number} client_id 
   * @param {number} service_id 
   * @param {number} team_id 
   * @param {string} team_name 
   * @param {number} tickettype_id 
   * @param {number} type_id 
   */
  getCategory(
    client_id: number,
    service_id: number,
    team_id: number,
    team_name: string,
    tickettype_id: number,
    type_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Category',
      params: {
        client_id,
        service_id,
        team_id,
        team_name,
        tickettype_id,
        type_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postCategory(categoryDetail: Array<CategoryDetail>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Category',
      data: categoryDetail,
    })
  }

  /**
   * @summary Get one CategoryDetail
   * @description Use this to return a single instance of CategoryDetail.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getCategoryById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Category/${id}`,
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
  deleteCategoryById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Category/${id}`,
    })
  }
}
