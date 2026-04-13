/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ResourceTypeAPI
 */

/**
 * ResourceType module
 * @public
 */
export class ResourceTypeAPI extends BaseAPI {
  getResourceType(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ResourceType' })
  }

  /**
   * @param {number} id
   */
  getResourceTypeById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/ResourceType/${id}` })
  }
}
