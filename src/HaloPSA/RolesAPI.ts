/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link NHD_Roles} */
export type NHD_Roles = schemas['NHD_Roles']

/**
 * @module RolesAPI
 */

/**
 * Roles module
 * @public
 */
export class RolesAPI extends BaseAPI {
  /**
   * @summary List of NHD_Roles
   * @description Use this to return multiple NHD_Roles. Requires authentication.
   * @param {number} [access_control_level]
   * @param {number} [agentid]
   * @param {boolean} [isconfig]
   */
  getRoles({
    access_control_level,
    agentid,
    isconfig,
  }: {
    access_control_level?: number
    agentid?: number
    isconfig?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Roles',
      params: { access_control_level, agentid, isconfig },
    })
  }

  postRoles({ nHD_RolesList }: { nHD_RolesList: Array<NHD_Roles> }): Promise<unknown> {
    return this.request({ method: 'post', data: nHD_RolesList, path: '/Roles' })
  }

  /**
   * @summary Get one NHD_Roles
   * @description Use this to return a single instance of NHD_Roles. Requires authentication.
   * @param {string} id
   * @param {boolean} [includedetails]
   * @param {boolean} [isconfig]
   */
  getRolesById({
    id,
    includedetails,
    isconfig,
  }: {
    id: string
    includedetails?: boolean
    isconfig?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/Roles/${id}`,
      params: { includedetails, isconfig },
    })
  }

  /**
   * @param {string} id
   */
  deleteRolesById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Roles/${id}` })
  }
}
