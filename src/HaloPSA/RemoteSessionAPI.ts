/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link RemoteSessionData} */
export type RemoteSessionData = schemas['RemoteSessionData']

/**
 * @module RemoteSessionAPI
 */

/**
 * RemoteSession module
 * @public
 */
export class RemoteSessionAPI extends BaseAPI {
  /**
   * @summary List of RemoteSessionData
   * @description Use this to return multiple RemoteSessionData. Requires authentication.
   * @param {string} [agent]
   * @param {number} [agent_id]
   * @param {number} [client_id]
   * @param {number} [count]
   * @param {boolean} [includelinked]
   * @param {string} [order]
   * @param {string} [order2]
   * @param {string} [order3]
   * @param {string} [order4]
   * @param {string} [order5]
   * @param {boolean} [orderdesc]
   * @param {boolean} [orderdesc2]
   * @param {boolean} [orderdesc3]
   * @param {boolean} [orderdesc4]
   * @param {boolean} [orderdesc5]
   * @param {number} [page_no]
   * @param {number} [page_size]
   * @param {boolean} [pageinate]
   * @param {string} [search]
   * @param {number} [site_id]
   * @param {string} [username]
   */
  getRemoteSession({
    agent,
    agent_id,
    client_id,
    count,
    includelinked,
    order,
    order2,
    order3,
    order4,
    order5,
    orderdesc,
    orderdesc2,
    orderdesc3,
    orderdesc4,
    orderdesc5,
    page_no,
    page_size,
    pageinate,
    search,
    site_id,
    username,
  }: {
    agent?: string
    agent_id?: number
    client_id?: number
    count?: number
    includelinked?: boolean
    order?: string
    order2?: string
    order3?: string
    order4?: string
    order5?: string
    orderdesc?: boolean
    orderdesc2?: boolean
    orderdesc3?: boolean
    orderdesc4?: boolean
    orderdesc5?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
    search?: string
    site_id?: number
    username?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/RemoteSession',
      params: {
        agent,
        agent_id,
        client_id,
        count,
        includelinked,
        order,
        order2,
        order3,
        order4,
        order5,
        orderdesc,
        orderdesc2,
        orderdesc3,
        orderdesc4,
        orderdesc5,
        page_no,
        page_size,
        pageinate,
        search,
        site_id,
        username,
      },
    })
  }

  postRemoteSession({
    remoteSessionDataList,
  }: {
    remoteSessionDataList: Array<RemoteSessionData>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: remoteSessionDataList, path: '/RemoteSession' })
  }

  /**
   * @summary Get one RemoteSessionData
   * @description Use this to return a single instance of RemoteSessionData. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getRemoteSessionById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/RemoteSession/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteRemoteSessionById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/RemoteSession/${id}` })
  }
}
