/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ScreenLayout} */
export type ScreenLayout = schemas['ScreenLayout']

/**
 * @module ScreenLayoutAPI
 */

/**
 * ScreenLayout module
 * @public
 */
export class ScreenLayoutAPI extends BaseAPI {
  /**
   * @summary List of ScreenLayout
   * @description Use this to return multiple ScreenLayout. Requires authentication.
   * @param {number} [typeid]
   */
  getScreenLayout({ typeid }: { typeid?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/ScreenLayout', params: { typeid } })
  }

  postScreenLayout({
    screenLayoutList,
  }: {
    screenLayoutList: Array<ScreenLayout>
  }): Promise<ScreenLayout> {
    return this.request({ method: 'post', data: screenLayoutList, path: '/ScreenLayout' })
  }

  /**
   * @summary Get one ScreenLayout
   * @description Use this to return a single instance of ScreenLayout. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getScreenLayoutById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ScreenLayout> {
    return this.request({ method: 'get', path: `/ScreenLayout/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteScreenLayoutById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ScreenLayout/${id}` })
  }
}
