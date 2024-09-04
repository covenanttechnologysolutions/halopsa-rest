/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class AddressAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of AddressStore
   * @description Use this to return multiple AddressStore.<br>
				Requires authentication.
   * @param {number} count 
   * @param {string} postcode 
   * @param {number} site_id 
   * @param {number} type_id 
   * @param {number} user_id 
   * @param {} openedafter (bool) Only return tickets opened within the last 30 days.
   * @param {} onholdonly (bool) Only return tickets that are on SLA hold.
   * @param {} overrideclientid (int) Filter tickets to a client id.
   * @param {} overridesiteid (int) Filter tickets to a site id.
   * @param {} overrideuserid (int) Filter tickets to a user id.
   */
  getAddress(
    count: number,
    postcode: string,
    site_id: number,
    type_id: number,
    user_id: number,
    openedafter: any,
    onholdonly: any,
    overrideclientid: any,
    overridesiteid: any,
    overrideuserid: any,
  ): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postAddress(addressStore: Array<AddressStore>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Address',
      data: addressStore,
    })
  }

  /**
   * @summary Get one AddressStore
   * @description Use this to return a single instance of AddressStore.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getAddressById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Address/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAddressById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Address/${id}`,
    })
  }
}
