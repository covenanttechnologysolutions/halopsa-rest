/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module RoadmapAPI
 */

/**
 * Roadmap module
 * @public
 */
export class RoadmapAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {boolean} halocrm 
   * @param {boolean} haloitsm 
   * @param {boolean} halopsa 
   * @param {boolean} haloservicedesk 
   * @param {string} order 
   * @param {boolean} orderdesc 
   * @param {number} product_id 
   * @param {boolean} roadmapcolumnview 
   */
  getRoadmap(
    halocrm: boolean,
    haloitsm: boolean,
    halopsa: boolean,
    haloservicedesk: boolean,
    order: string,
    orderdesc: boolean,
    product_id: number,
    roadmapcolumnview: boolean,
  ): Promise<any> {
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
