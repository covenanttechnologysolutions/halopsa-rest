/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module SearchAPI
 */

/**
 * Search module
 * @public
 */
export class SearchAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Search
   * @description Use this to return multiple Search.<br>
				Requires authentication.
   * @param {number} [count_per_entity] 
   * @param {string} [search] 
   */
  getSearch({
    count_per_entity,
    search,
  }: {
    count_per_entity?: number
    search?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Search',
      params: {
        count_per_entity,
        search,
      },
    })
  }
}
