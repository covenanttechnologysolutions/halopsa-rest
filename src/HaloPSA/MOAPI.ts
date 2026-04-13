/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link MarketingOpen} */
export type MarketingOpen = schemas['MarketingOpen']

/**
 * @module MOAPI
 */

/**
 * MO module
 * @public
 */
export class MOAPI extends BaseAPI {
  getMO(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MO' })
  }

  postMO({ marketingOpenList }: { marketingOpenList: Array<MarketingOpen> }): Promise<unknown> {
    return this.request({ method: 'post', data: marketingOpenList, path: '/MO' })
  }

  /**
   * @param {number} id
   */
  getMOById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/MO/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteMOById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/MO/${id}` })
  }

  getMOB(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MO/b' })
  }

  getMOR(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MO/r' })
  }
}
