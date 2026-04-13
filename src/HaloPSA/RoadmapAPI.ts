/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module RoadmapAPI
 */

/**
 * Roadmap module
 * @public
 */
export class RoadmapAPI extends BaseAPI {
  /**
   * @description . Requires authentication.
   * @param {boolean} [halocrm]
   * @param {boolean} [haloitsm]
   * @param {boolean} [halopsa]
   * @param {boolean} [haloservicedesk]
   * @param {string} [order]
   * @param {boolean} [orderdesc]
   * @param {number} [product_id]
   * @param {boolean} [roadmapcolumnview]
   */
  getRoadmap({
    halocrm,
    haloitsm,
    halopsa,
    haloservicedesk,
    order,
    orderdesc,
    product_id,
    roadmapcolumnview,
  }: {
    halocrm?: boolean
    haloitsm?: boolean
    halopsa?: boolean
    haloservicedesk?: boolean
    order?: string
    orderdesc?: boolean
    product_id?: number
    roadmapcolumnview?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Roadmap',
      params: {
        halocrm,
        haloitsm,
        halopsa,
        haloservicedesk,
        order,
        orderdesc,
        product_id,
        roadmapcolumnview,
      },
    })
  }
}
