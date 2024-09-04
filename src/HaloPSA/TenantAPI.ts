/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module TenantAPI
 */

/**
 * Tenant module
 * @public
 */
export class TenantAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTenant(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Tenant',
    })
  }

  /**
   * 
   * 
   
   */
  postTenant(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tenant',
    })
  }
}
