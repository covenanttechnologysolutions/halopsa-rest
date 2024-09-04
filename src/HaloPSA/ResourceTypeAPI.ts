/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ResourceTypeAPI
 */

/**
 * ResourceType module
 * @public
 */
export class ResourceTypeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getResourceType(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ResourceType',
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getResourceTypeById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ResourceType/${id}`,
    })
  }
}
