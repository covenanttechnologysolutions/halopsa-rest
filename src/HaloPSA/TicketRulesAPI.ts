/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Autoassign} */
export type Autoassign = schemas['Autoassign']

/**
 * @module TicketRulesAPI
 */

/**
 * TicketRules module
 * @public
 */
export class TicketRulesAPI extends BaseAPI {
  /**
   * @summary List of Autoassign
   * @description Use this to return multiple Autoassign. Requires authentication.
   * @param {number} [access_control_level]
   * @param {boolean} [excludeworkflow]
   * @param {boolean} [includecriteriainfo]
   * @param {boolean} [isconfig]
   * @param {number} [rule_use]
   */
  getTicketRules({
    access_control_level,
    excludeworkflow,
    includecriteriainfo,
    isconfig,
    rule_use,
  }: {
    access_control_level?: number
    excludeworkflow?: boolean
    includecriteriainfo?: boolean
    isconfig?: boolean
    rule_use?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/TicketRules',
      params: { access_control_level, excludeworkflow, includecriteriainfo, isconfig, rule_use },
    })
  }

  postTicketRules({ autoassignList }: { autoassignList: Array<Autoassign> }): Promise<unknown> {
    return this.request({ method: 'post', data: autoassignList, path: '/TicketRules' })
  }

  /**
   * @summary Get one Autoassign
   * @description Use this to return a single instance of Autoassign. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getTicketRulesById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/TicketRules/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteTicketRulesById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TicketRules/${id}` })
  }
}
