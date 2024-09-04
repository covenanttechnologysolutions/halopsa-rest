/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class RolesAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of NHD_Roles
   * @description Use this to return multiple NHD_Roles.<br>
				Requires authentication.
   * @param {number} access_control_level 
   * @param {number} agentid 
   * @param {boolean} isconfig 
   */
  getRoles(access_control_level: number, agentid: number, isconfig: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Roles',
      params: {
        access_control_level,
        agentid,
        isconfig,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postRoles(nHD_Roles: Array<NHD_Roles>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Roles',
      data: nHD_Roles,
    })
  }

  /**
   * @summary Get one NHD_Roles
   * @description Use this to return a single instance of NHD_Roles.<br>
				Requires authentication.
   * @param {string} id 
   * @param {boolean} includedetails 
   * @param {boolean} isconfig 
   */
  getRolesById(id: string, includedetails: boolean, isconfig: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Roles/${id}`,
      params: {
        includedetails,
        isconfig,
      },
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  deleteRolesById(id: string): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Roles/${id}`,
    })
  }
}
