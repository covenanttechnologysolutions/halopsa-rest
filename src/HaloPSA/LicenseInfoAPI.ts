/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link LicenceInfo} */
export type LicenceInfo = schemas['LicenceInfo']

/**
 * @module LicenseInfoAPI
 */

/**
 * LicenseInfo module
 * @public
 */
export class LicenseInfoAPI extends BaseAPI {
  /**
   * @summary List of LicenceInfo
   * @description Use this to return multiple LicenceInfo. Requires authentication.
   * @param {string} [advanced_search]
   * @param {number} [count]
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
   * @param {number} [site_id]
   */
  getLicenseInfo({
    advanced_search,
    count,
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
    site_id,
  }: {
    advanced_search?: string
    count?: number
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
    site_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/LicenseInfo',
      params: {
        advanced_search,
        count,
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
        site_id,
      },
    })
  }

  postLicenseInfo({ licenceInfoList }: { licenceInfoList: Array<LicenceInfo> }): Promise<unknown> {
    return this.request({ method: 'post', data: licenceInfoList, path: '/LicenseInfo' })
  }

  getLicenseInfoPassword(): Promise<unknown> {
    return this.request({ method: 'get', path: '/LicenseInfo/password' })
  }
}
