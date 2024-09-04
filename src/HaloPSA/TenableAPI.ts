/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link TenableCreateExport} */
export type TenableCreateExport = schemas['TenableCreateExport']

/**
 * @module TenableAPI
 */

/**
 * Tenable module
 * @public
 */
export class TenableAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTenableGet(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Tenable/Get',
    })
  }

  /**
   * 
   * 
   
   */
  postTenableExport(tenableCreateExport: TenableCreateExport): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tenable/Export',
      data: tenableCreateExport,
    })
  }

  /**
   * 
   * 
   
   */
  getTenableStatus(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Tenable/Status',
    })
  }

  /**
   * 
   * 
   
   */
  postTenableCancel(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tenable/Cancel',
    })
  }
}
