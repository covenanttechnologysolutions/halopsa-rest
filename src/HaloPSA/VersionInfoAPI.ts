/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module VersionInfoAPI
 */

/**
 * VersionInfo module
 * @public
 */
export class VersionInfoAPI extends BaseAPI {
  /**
   * @description . Requires authentication.
   * @param {number} [product_id]
   */
  getVersionInfo({ product_id }: { product_id?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/VersionInfo', params: { product_id } })
  }

  /**
   * @summary Get one Release
   * @description Use this to return a single instance of Release. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getVersionInfoById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/VersionInfo/${id}`, params: { includedetails } })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [count]
   * @param {boolean} [dontshownotes]
   * @param {number} [product_id]
   * @param {string} [search]
   */
  getVersionInfoSearchVersionInfo({
    count,
    dontshownotes,
    product_id,
    search,
  }: {
    count?: number
    dontshownotes?: boolean
    product_id?: number
    search?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/VersionInfo/SearchVersionInfo',
      params: { count, dontshownotes, product_id, search },
    })
  }

  /**
   * @param {number} id
   */
  getVersionInfoGetOneSpotlightById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/VersionInfo/GetOneSpotlight/${id}` })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [count]
   * @param {boolean} [dontshownotes]
   * @param {number} [product_id]
   */
  getVersionInfoSpotlight({
    count,
    dontshownotes,
    product_id,
  }: {
    count?: number
    dontshownotes?: boolean
    product_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/VersionInfo/Spotlight',
      params: { count, dontshownotes, product_id },
    })
  }

  getVersionInfoIntegratorHash(): Promise<unknown> {
    return this.request({ method: 'get', path: '/VersionInfo/IntegratorHash' })
  }
}
