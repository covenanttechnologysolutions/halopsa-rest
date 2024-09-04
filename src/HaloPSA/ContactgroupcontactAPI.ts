/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ContactgroupcontactAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getContactgroupcontact(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Contactgroupcontact',
    })
  }

  /**
   * 
   * 
   
   */
  postContactgroupcontact(contactgroupcontacts: Array<Contactgroupcontacts>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Contactgroupcontact',
      data: contactgroupcontacts,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getContactgroupcontactById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Contactgroupcontact/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteContactgroupcontactById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Contactgroupcontact/${id}`,
    })
  }
}
