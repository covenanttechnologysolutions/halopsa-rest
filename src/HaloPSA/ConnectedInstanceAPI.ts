/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ConnectedInstance} */
export type ConnectedInstance = schemas['ConnectedInstance']

/**
 * @module ConnectedInstanceAPI
 */

/**
 * ConnectedInstance module
 * @public
 */
export class ConnectedInstanceAPI extends BaseAPI {
  getConnectedInstance(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ConnectedInstance' })
  }

  postConnectedInstance({
    connectedInstanceList,
  }: {
    connectedInstanceList: Array<ConnectedInstance>
  }): Promise<ConnectedInstance> {
    return this.request({ method: 'post', data: connectedInstanceList, path: '/ConnectedInstance' })
  }

  /**
   * @summary Get one ConnectedInstance
   * @description Use this to return a single instance of ConnectedInstance. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getConnectedInstanceById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ConnectedInstance> {
    return this.request({
      method: 'get',
      path: `/ConnectedInstance/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteConnectedInstanceById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ConnectedInstance/${id}` })
  }
}
