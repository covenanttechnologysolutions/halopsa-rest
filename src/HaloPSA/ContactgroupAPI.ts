/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ContactgroupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getContactgroup({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Contactgroup',
    })
  }

  /**
   * 
   * 
   
   */
  postContactgroup({ contactgroup }: { contactgroup: Array<Contactgroup> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Contactgroup',
      data: contactgroup,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getContactgroupById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Contactgroup/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteContactgroupById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Contactgroup/${id}`,
    })
  }
}
