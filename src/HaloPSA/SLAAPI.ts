/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SlaHead} */
export type SlaHead = schemas['SlaHead']

/**
 * @module SLAAPI
 */

/**
 * SLA module
 * @public
 */
export class SLAAPI extends BaseAPI {
  /**
   * @summary List of SlaHead
   * @description Use this to return multiple SlaHead. Requires authentication.
   * @param {number} [access_control_level]
   * @param {boolean} [isconfig]
   * @param {boolean} [showpriorities]
   * @param {boolean} [showworkdays]
   */
  getSLA({
    access_control_level,
    isconfig,
    showpriorities,
    showworkdays,
  }: {
    access_control_level?: number
    isconfig?: boolean
    showpriorities?: boolean
    showworkdays?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/SLA',
      params: { access_control_level, isconfig, showpriorities, showworkdays },
    })
  }

  postSLA({ slaHeadList }: { slaHeadList: Array<SlaHead> }): Promise<unknown> {
    return this.request({ method: 'post', data: slaHeadList, path: '/SLA' })
  }

  /**
   * @summary Get one SlaHead
   * @description Use this to return a single instance of SlaHead. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getSLAById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: `/SLA/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteSLAById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SLA/${id}` })
  }
}
