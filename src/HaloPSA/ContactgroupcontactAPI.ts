/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Contactgroupcontacts} */
export type Contactgroupcontacts = schemas['Contactgroupcontacts']

/**
 * @module ContactgroupcontactAPI
 */

/**
 * Contactgroupcontact module
 * @public
 */
export class ContactgroupcontactAPI extends BaseAPI {
  getContactgroupcontact(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Contactgroupcontact' })
  }

  postContactgroupcontact({
    contactgroupcontactsList,
  }: {
    contactgroupcontactsList: Array<Contactgroupcontacts>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: contactgroupcontactsList,
      path: '/Contactgroupcontact',
    })
  }

  /**
   * @param {number} id
   */
  getContactgroupcontactById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Contactgroupcontact/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteContactgroupcontactById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Contactgroupcontact/${id}` })
  }
}
