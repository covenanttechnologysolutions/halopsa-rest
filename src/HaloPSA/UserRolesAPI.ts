/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class UserRolesAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getUserRoles({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/UserRoles',
    })
  }

  /**
   * 
   * 
   
   */
  postUserRoles({ userRoles }: { userRoles: Array<UserRoles> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/UserRoles',
      data: userRoles,
    })
  }

  /**
   * @summary Get one UserRoles
   * @description Use this to return a single instance of UserRoles.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getUserRolesById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/UserRoles/${id}`,
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
  deleteUserRolesById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/UserRoles/${id}`,
    })
  }
}
