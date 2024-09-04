/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Licence_List} */
export type Licence_List = schemas['Licence_List']

/**
 * @module SoftwareLicenceAPI
 */

/**
 * SoftwareLicence module
 * @public
 */
export class SoftwareLicenceAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Licence
   * @description Use this to return multiple Licence.<br>
				Requires authentication.
   * @param {number} client_id 
   * @param {number} count 
   * @param {boolean} includeinactive 
   * @param {number} licence_type 
   * @param {string} order 
   * @param {string} order2 
   * @param {string} order3 
   * @param {string} order4 
   * @param {string} order5 
   * @param {boolean} orderdesc 
   * @param {boolean} orderdesc2 
   * @param {boolean} orderdesc3 
   * @param {boolean} orderdesc4 
   * @param {boolean} orderdesc5 
   * @param {number} page_no 
   * @param {number} page_size 
   * @param {boolean} pageinate 
   * @param {string} search 
   * @param {number} site_id 
   * @param {string} tenant_id 
   * @param {number} toplevelid 
   */
  getSoftwareLicence(
    client_id: number,
    count: number,
    includeinactive: boolean,
    licence_type: number,
    order: string,
    order2: string,
    order3: string,
    order4: string,
    order5: string,
    orderdesc: boolean,
    orderdesc2: boolean,
    orderdesc3: boolean,
    orderdesc4: boolean,
    orderdesc5: boolean,
    page_no: number,
    page_size: number,
    pageinate: boolean,
    search: string,
    site_id: number,
    tenant_id: string,
    toplevelid: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SoftwareLicence',
      params: {
        client_id,
        count,
        includeinactive,
        licence_type,
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
        search,
        site_id,
        tenant_id,
        toplevelid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postSoftwareLicence(licence_List: Array<Licence_List>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SoftwareLicence',
      data: licence_List,
    })
  }

  /**
   * @summary Get one Licence
   * @description Use this to return a single instance of Licence.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getSoftwareLicenceById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SoftwareLicence/${id}`,
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
  deleteSoftwareLicenceById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SoftwareLicence/${id}`,
    })
  }
}
