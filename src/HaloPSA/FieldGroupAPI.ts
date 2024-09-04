/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link FieldGroup} */
export type FieldGroup = schemas['FieldGroup']

/**
 * @module FieldGroupAPI
 */

/**
 * FieldGroup module
 * @public
 */
export class FieldGroupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of FieldGroup
   * @description Use this to return multiple FieldGroup.<br>
				Requires authentication.
   * @param {number} access_control_level 
   * @param {boolean} includefields 
   * @param {boolean} isconfig 
   */
  getFieldGroup(
    access_control_level: number,
    includefields: boolean,
    isconfig: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/FieldGroup',
      params: {
        access_control_level,
        includefields,
        isconfig,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postFieldGroup(fieldGroup: Array<FieldGroup>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/FieldGroup',
      data: fieldGroup,
    })
  }

  /**
   * @summary Get one FieldGroup
   * @description Use this to return a single instance of FieldGroup.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getFieldGroupById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/FieldGroup/${id}`,
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
  deleteFieldGroupById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/FieldGroup/${id}`,
    })
  }
}
