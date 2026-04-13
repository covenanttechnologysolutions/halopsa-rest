/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link FieldInfo} */
export type FieldInfo = schemas['FieldInfo']

/**
 * @module FieldInfoAPI
 */

/**
 * FieldInfo module
 * @public
 */
export class FieldInfoAPI extends BaseAPI {
  /**
   * @summary List of FieldInfo
   * @description Use this to return multiple FieldInfo. Requires authentication.
   * @param {number} [access_control_level]
   * @param {string} [domain]
   * @param {boolean} [excluderanges]
   * @param {boolean} [excludetables]
   * @param {boolean} [excludetableself]
   * @param {number} [extratype]
   * @param {number} [fieldtype]
   * @param {string} [fieldtypemultiple]
   * @param {boolean} [includecategories]
   * @param {boolean} [includedatefields]
   * @param {boolean} [includejirafields]
   * @param {boolean} [includeremotefields]
   * @param {boolean} [includevalues]
   * @param {number} [inputtype]
   * @param {boolean} [isapprovalstep]
   * @param {boolean} [isconfig]
   * @param {boolean} [iscustomfieldsetup]
   * @param {number} [systemid]
   * @param {number} [typeid]
   */
  getFieldInfo({
    access_control_level,
    domain,
    excluderanges,
    excludetables,
    excludetableself,
    extratype,
    fieldtype,
    fieldtypemultiple,
    includecategories,
    includedatefields,
    includejirafields,
    includeremotefields,
    includevalues,
    inputtype,
    isapprovalstep,
    isconfig,
    iscustomfieldsetup,
    systemid,
    typeid,
  }: {
    access_control_level?: number
    domain?: string
    excluderanges?: boolean
    excludetables?: boolean
    excludetableself?: boolean
    extratype?: number
    fieldtype?: number
    fieldtypemultiple?: string
    includecategories?: boolean
    includedatefields?: boolean
    includejirafields?: boolean
    includeremotefields?: boolean
    includevalues?: boolean
    inputtype?: number
    isapprovalstep?: boolean
    isconfig?: boolean
    iscustomfieldsetup?: boolean
    systemid?: number
    typeid?: number
  }): Promise<Array<FieldInfo>> {
    return this.request({
      method: 'get',
      path: '/FieldInfo',
      params: {
        access_control_level,
        domain,
        excluderanges,
        excludetables,
        excludetableself,
        extratype,
        fieldtype,
        fieldtypemultiple,
        includecategories,
        includedatefields,
        includejirafields,
        includeremotefields,
        includevalues,
        inputtype,
        isapprovalstep,
        isconfig,
        iscustomfieldsetup,
        systemid,
        typeid,
      },
    })
  }

  postFieldInfo({ fieldInfoList }: { fieldInfoList: Array<FieldInfo> }): Promise<FieldInfo> {
    return this.request({ method: 'post', data: fieldInfoList, path: '/FieldInfo' })
  }

  /**
   * @summary Get one FieldInfo
   * @description Use this to return a single instance of FieldInfo. Requires authentication.
   * @param {number} id
   * @param {number} [entityid]
   * @param {boolean} [getlookupvalues]
   * @param {boolean} [includedetails]
   * @param {string} [livecustomfields]
   * @param {number} [userid]
   */
  getFieldInfoById({
    id,
    entityid,
    getlookupvalues,
    includedetails,
    livecustomfields,
    userid,
  }: {
    id: number
    entityid?: number
    getlookupvalues?: boolean
    includedetails?: boolean
    livecustomfields?: string
    userid?: number
  }): Promise<FieldInfo> {
    return this.request({
      method: 'get',
      path: `/FieldInfo/${id}`,
      params: { entityid, getlookupvalues, includedetails, livecustomfields, userid },
    })
  }

  /**
   * @param {number} id
   */
  deleteFieldInfoById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/FieldInfo/${id}` })
  }
}
