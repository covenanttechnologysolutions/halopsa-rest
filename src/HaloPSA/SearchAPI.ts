/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module SearchAPI
 */

/**
 * Search module
 * @public
 */
export class SearchAPI extends BaseAPI {
  /**
   * @summary List of Search
   * @description Use this to return multiple Search. Requires authentication.
   * @param {number} [count_per_entity]
   * @param {string} [search]
   */
  getSearch({
    count_per_entity,
    search,
  }: {
    count_per_entity?: number
    search?: string
  }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Search', params: { count_per_entity, search } })
  }
}
