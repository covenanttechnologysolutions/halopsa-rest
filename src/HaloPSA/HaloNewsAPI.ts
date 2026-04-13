/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link HaloNews} */
export type HaloNews = schemas['HaloNews']

/**
 * @module HaloNewsAPI
 */

/**
 * HaloNews module
 * @public
 */
export class HaloNewsAPI extends BaseAPI {
  getHaloNews(): Promise<unknown> {
    return this.request({ method: 'get', path: '/HaloNews' })
  }

  postHaloNews({ haloNewsList }: { haloNewsList: Array<HaloNews> }): Promise<HaloNews> {
    return this.request({ method: 'post', data: haloNewsList, path: '/HaloNews' })
  }

  /**
   * @summary Get one HaloNews
   * @description Use this to return a single instance of HaloNews. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getHaloNewsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<HaloNews> {
    return this.request({ method: 'get', path: `/HaloNews/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteHaloNewsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/HaloNews/${id}` })
  }

  postHaloNewsRead({ items }: { items: Array<number> }): Promise<unknown> {
    return this.request({ method: 'post', data: items, path: '/HaloNews/read' })
  }
}
