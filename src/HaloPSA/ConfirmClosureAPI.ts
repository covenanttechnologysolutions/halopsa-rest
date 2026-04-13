/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ConfirmClosure} */
export type ConfirmClosure = schemas['ConfirmClosure']

/**
 * @module ConfirmClosureAPI
 */

/**
 * ConfirmClosure module
 * @public
 */
export class ConfirmClosureAPI extends BaseAPI {
  getConfirmClosure(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ConfirmClosure' })
  }

  postConfirmClosure({
    confirmClosureList,
  }: {
    confirmClosureList: Array<ConfirmClosure>
  }): Promise<ConfirmClosure> {
    return this.request({ method: 'post', data: confirmClosureList, path: '/ConfirmClosure' })
  }

  /**
   * @summary Get one ConfirmClosure
   * @description Use this to return a single instance of ConfirmClosure. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getConfirmClosureById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ConfirmClosure> {
    return this.request({
      method: 'get',
      path: `/ConfirmClosure/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteConfirmClosureById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ConfirmClosure/${id}` })
  }
}
