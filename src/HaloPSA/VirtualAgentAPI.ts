/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link VirtualAgent} */
export type VirtualAgent = schemas['VirtualAgent']

/**
 * @module VirtualAgentAPI
 */

/**
 * VirtualAgent module
 * @public
 */
export class VirtualAgentAPI extends BaseAPI {
  getVirtualAgent(): Promise<unknown> {
    return this.request({ method: 'get', path: '/VirtualAgent' })
  }

  postVirtualAgent({
    virtualAgentList,
  }: {
    virtualAgentList: Array<VirtualAgent>
  }): Promise<VirtualAgent> {
    return this.request({ method: 'post', data: virtualAgentList, path: '/VirtualAgent' })
  }

  /**
   * @param {string} id
   */
  getVirtualAgentById({ id }: { id: string }): Promise<VirtualAgent> {
    return this.request({ method: 'get', path: `/VirtualAgent/${id}` })
  }

  /**
   * @param {string} id
   */
  deleteVirtualAgentById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/VirtualAgent/${id}` })
  }
}
