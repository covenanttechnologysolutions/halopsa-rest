/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Contactgroup} */
export type Contactgroup = schemas['Contactgroup']

/**
 * @module ContactgroupAPI
 */

/**
 * Contactgroup module
 * @public
 */
export class ContactgroupAPI extends BaseAPI {
  getContactgroup(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Contactgroup' })
  }

  postContactgroup({
    contactgroupList,
  }: {
    contactgroupList: Array<Contactgroup>
  }): Promise<Contactgroup> {
    return this.request({ method: 'post', data: contactgroupList, path: '/Contactgroup' })
  }

  /**
   * @param {number} id
   */
  getContactgroupById({ id }: { id: number }): Promise<Contactgroup> {
    return this.request({ method: 'get', path: `/Contactgroup/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteContactgroupById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Contactgroup/${id}` })
  }
}
