/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ServiceCategory} */
export type ServiceCategory = schemas['ServiceCategory']

/**
 * @module ServiceCategoryAPI
 */

/**
 * ServiceCategory module
 * @public
 */
export class ServiceCategoryAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ServiceCategory
   * @description Use this to return multiple ServiceCategory.<br>
				Requires authentication.
   * @param {number} [access_control_level] 
   * @param {boolean} [include_parent_name] 
   * @param {number} [itil_ticket_type] 
   * @param {number} [user_id] 
   */
  getServiceCategory({
    access_control_level,
    include_parent_name,
    itil_ticket_type,
    user_id,
  }: {
    access_control_level?: number
    include_parent_name?: boolean
    itil_ticket_type?: number
    user_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ServiceCategory',
      params: {
        access_control_level,
        include_parent_name,
        itil_ticket_type,
        user_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postServiceCategory({
    serviceCategory,
  }: {
    serviceCategory: Array<ServiceCategory>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ServiceCategory',
      data: serviceCategory,
    })
  }

  /**
   * @summary Get one ServiceCategory
   * @description Use this to return a single instance of ServiceCategory.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getServiceCategoryById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ServiceCategory/${id}`,
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
  deleteServiceCategoryById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ServiceCategory/${id}`,
    })
  }
}
