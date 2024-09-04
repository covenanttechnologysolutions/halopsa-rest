/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link LDAPConnection} */
export type LDAPConnection = schemas['LDAPConnection']

/**
 * @module LDAPConnectionAPI
 */

/**
 * LDAPConnection module
 * @public
 */
export class LDAPConnectionAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of LDAPConnection
   * @description Use this to return multiple LDAPConnection.<br>
				Requires authentication.
   * @param {string} clientidoverride 
   */
  getLDAPConnection(clientidoverride: string): Promise<any> {
    return this.request({
      method: 'get',
      path: '/LDAPConnection',
      params: {
        clientidoverride,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postLDAPConnection(lDAPConnection: Array<LDAPConnection>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/LDAPConnection',
      data: lDAPConnection,
    })
  }

  /**
   * @summary Get one LDAPConnection
   * @description Use this to return a single instance of LDAPConnection.<br>
				Requires authentication.
   * @param {number} id 
   * @param {string} clientidoverride 
   * @param {boolean} includedetails 
   */
  getLDAPConnectionById(
    id: number,
    clientidoverride: string,
    includedetails: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/LDAPConnection/${id}`,
      params: {
        clientidoverride,
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteLDAPConnectionById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/LDAPConnection/${id}`,
    })
  }
}
