/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link FAQListHead} */
export type FAQListHead = schemas['FAQListHead']

/**
 * @module FAQListsAPI
 */

/**
 * FAQLists module
 * @public
 */
export class FAQListsAPI extends BaseAPI {
  /**
   * @summary List of FAQListHead
   * @description Use this to return multiple FAQListHead. Requires authentication.
   * @param {boolean} [allgroups]
   * @param {boolean} [endoftreeonly]
   * @param {number} [level]
   * @param {number} [organisation_id]
   * @param {number} [parent_id]
   * @param {boolean} [showcounts]
   * @param {number} [type]
   */
  getFAQLists({
    allgroups,
    endoftreeonly,
    level,
    organisation_id,
    parent_id,
    showcounts,
    type,
  }: {
    allgroups?: boolean
    endoftreeonly?: boolean
    level?: number
    organisation_id?: number
    parent_id?: number
    showcounts?: boolean
    type?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/FAQLists',
      params: { allgroups, endoftreeonly, level, organisation_id, parent_id, showcounts, type },
    })
  }

  postFAQLists({ fAQListHeadList }: { fAQListHeadList: Array<FAQListHead> }): Promise<unknown> {
    return this.request({ method: 'post', data: fAQListHeadList, path: '/FAQLists' })
  }

  /**
   * @summary Get one FAQListHead
   * @description Use this to return a single instance of FAQListHead. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {number} [organisation_id]
   */
  getFAQListsById({
    id,
    includedetails,
    organisation_id,
  }: {
    id: number
    includedetails?: boolean
    organisation_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/FAQLists/${id}`,
      params: { includedetails, organisation_id },
    })
  }

  /**
   * @param {number} id
   */
  deleteFAQListsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/FAQLists/${id}` })
  }
}
