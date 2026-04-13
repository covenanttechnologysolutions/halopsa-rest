/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class ServiceCategoryAPI extends BaseAPI {
  /**
   * @summary List of ServiceCategory
   * @description Use this to return multiple ServiceCategory. Requires authentication.
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
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/ServiceCategory',
      params: { access_control_level, include_parent_name, itil_ticket_type, user_id },
    })
  }

  postServiceCategory({
    serviceCategoryList,
  }: {
    serviceCategoryList: Array<ServiceCategory>
  }): Promise<ServiceCategory> {
    return this.request({ method: 'post', data: serviceCategoryList, path: '/ServiceCategory' })
  }

  /**
   * @summary Get one ServiceCategory
   * @description Use this to return a single instance of ServiceCategory. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getServiceCategoryById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ServiceCategory> {
    return this.request({
      method: 'get',
      path: `/ServiceCategory/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteServiceCategoryById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ServiceCategory/${id}` })
  }
}
