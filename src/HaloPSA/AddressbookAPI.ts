/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Addressbook} */
export type Addressbook = schemas['Addressbook']

/**
 * @module AddressbookAPI
 */

/**
 * Addressbook module
 * @public
 */
export class AddressbookAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAddressbook({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Addressbook',
    })
  }

  /**
   * 
   * 
   
   */
  postAddressbook({ addressbook }: { addressbook: Array<Addressbook> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Addressbook',
      data: addressbook,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getAddressbookById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Addressbook/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAddressbookById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Addressbook/${id}`,
    })
  }
}
