/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Instance} */
export type Instance = schemas['Instance']

/**
 * @module InstanceAPI
 */

/**
 * Instance module
 * @public
 */
export class InstanceAPI extends BaseAPI {
  /**
   * @summary List of Instance
   * @description Use this to return multiple Instance. Requires authentication.
   * @param {number} [comparewith]
   */
  getInstance({ comparewith }: { comparewith?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Instance', params: { comparewith } })
  }

  postInstance({ instanceList }: { instanceList: Array<Instance> }): Promise<Instance> {
    return this.request({ method: 'post', data: instanceList, path: '/Instance' })
  }

  /**
   * @param {number} id
   */
  getInstanceById({ id }: { id: number }): Promise<Instance> {
    return this.request({ method: 'get', path: `/Instance/${id}` })
  }
}
