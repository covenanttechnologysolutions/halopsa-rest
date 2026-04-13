/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link UserRoles} */
export type UserRoles = schemas['UserRoles']

/**
 * @module UserRolesAPI
 */

/**
 * UserRoles module
 * @public
 */
export class UserRolesAPI extends BaseAPI {
  getUserRoles(): Promise<unknown> {
    return this.request({ method: 'get', path: '/UserRoles' })
  }

  postUserRoles({ userRolesList }: { userRolesList: Array<UserRoles> }): Promise<UserRoles> {
    return this.request({ method: 'post', data: userRolesList, path: '/UserRoles' })
  }

  /**
   * @summary Get one UserRoles
   * @description Use this to return a single instance of UserRoles. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getUserRolesById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<UserRoles> {
    return this.request({ method: 'get', path: `/UserRoles/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteUserRolesById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/UserRoles/${id}` })
  }
}
