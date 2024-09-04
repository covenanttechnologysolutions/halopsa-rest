/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module DeviceLicenceAPI
 */

/**
 * DeviceLicence module
 * @public
 */
export class DeviceLicenceAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getDeviceLicence(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/DeviceLicence',
    })
  }
}
