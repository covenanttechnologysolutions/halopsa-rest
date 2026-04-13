/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Organisation} */
export type Organisation = schemas['Organisation']

/**
 * @module OrganisationAPI
 */

/**
 * Organisation module
 * @public
 */
export class OrganisationAPI extends BaseAPI {
  getOrganisation(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Organisation' })
  }

  postOrganisation({
    organisationList,
  }: {
    organisationList: Array<Organisation>
  }): Promise<Organisation> {
    return this.request({ method: 'post', data: organisationList, path: '/Organisation' })
  }

  /**
   * @summary Get one Organisation
   * @description Use this to return a single instance of Organisation. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getOrganisationById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<Organisation> {
    return this.request({ method: 'get', path: `/Organisation/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteOrganisationById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Organisation/${id}` })
  }
}
