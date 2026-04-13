/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SingleSignOnApplication} */
export type SingleSignOnApplication = schemas['SingleSignOnApplication']

/**
 * @module SingleSignOnApplicationAPI
 */

/**
 * SingleSignOnApplication module
 * @public
 */
export class SingleSignOnApplicationAPI extends BaseAPI {
  getSingleSignOnApplication(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SingleSignOnApplication' })
  }

  postSingleSignOnApplication({
    singleSignOnApplicationList,
  }: {
    singleSignOnApplicationList: Array<SingleSignOnApplication>
  }): Promise<SingleSignOnApplication> {
    return this.request({
      method: 'post',
      data: singleSignOnApplicationList,
      path: '/SingleSignOnApplication',
    })
  }

  /**
   * @param {number} id
   */
  getSingleSignOnApplicationById({ id }: { id: number }): Promise<SingleSignOnApplication> {
    return this.request({ method: 'get', path: `/SingleSignOnApplication/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteSingleSignOnApplicationById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SingleSignOnApplication/${id}` })
  }
}
