/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class AddressbookAPI extends BaseAPI {
  getAddressbook(): Promise<Array<Addressbook>> {
    return this.request({ method: 'get', path: '/Addressbook' })
  }

  postAddressbook({
    addressbookList,
  }: {
    addressbookList: Array<Addressbook>
  }): Promise<Addressbook> {
    return this.request({ method: 'post', data: addressbookList, path: '/Addressbook' })
  }

  /**
   * @param {number} id
   */
  getAddressbookById({ id }: { id: number }): Promise<Addressbook> {
    return this.request({ method: 'get', path: `/Addressbook/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAddressbookById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Addressbook/${id}` })
  }
}
