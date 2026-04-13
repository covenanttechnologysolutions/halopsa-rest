/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link AddressStore} */
export type AddressStore = schemas['AddressStore']

/**
 * @module AddressAPI
 */

/**
 * Address module
 * @public
 */
export class AddressAPI extends BaseAPI {
  /**
   * @summary List of AddressStore
   * @description Use this to return multiple AddressStore. Requires authentication.
   * @param {number} [count]
   * @param {string} [postcode]
   * @param {number} [site_id]
   * @param {number} [type_id]
   * @param {number} [user_id]
   * @param {boolean} [openedafter] Only return tickets opened within the last 30 days.
   * @param {boolean} [onholdonly] Only return tickets that are on SLA hold.
   * @param {number} [overrideclientid] Filter tickets to a client id.
   * @param {number} [overridesiteid] Filter tickets to a site id.
   * @param {number} [overrideuserid] Filter tickets to a user id.
   */
  getAddress({
    count,
    postcode,
    site_id,
    type_id,
    user_id,
    openedafter,
    onholdonly,
    overrideclientid,
    overridesiteid,
    overrideuserid,
  }: {
    count?: number
    postcode?: string
    site_id?: number
    type_id?: number
    user_id?: number
    openedafter?: boolean
    onholdonly?: boolean
    overrideclientid?: number
    overridesiteid?: number
    overrideuserid?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Address',
      params: {
        count,
        postcode,
        site_id,
        type_id,
        user_id,
        openedafter,
        onholdonly,
        overrideclientid,
        overridesiteid,
        overrideuserid,
      },
    })
  }

  postAddress({ addressStoreList }: { addressStoreList: Array<AddressStore> }): Promise<unknown> {
    return this.request({ method: 'post', data: addressStoreList, path: '/Address' })
  }

  /**
   * @summary Get one AddressStore
   * @description Use this to return a single instance of AddressStore. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getAddressById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Address/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteAddressById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Address/${id}` })
  }
}
