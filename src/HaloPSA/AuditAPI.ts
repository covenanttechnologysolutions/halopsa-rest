/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Audit} */
export type Audit = schemas['Audit']

/**
 * @module AuditAPI
 */

/**
 * Audit module
 * @public
 */
export class AuditAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAudit(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Audit',
    })
  }

  /**
   * 
   * 
   
   */
  postAudit(audit: Array<Audit>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Audit',
      data: audit,
    })
  }

  /**
   * @summary Get one Audit
   * @description Use this to return a single instance of Audit.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getAuditById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Audit/${id}`,
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
  deleteAuditById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Audit/${id}`,
    })
  }
}
