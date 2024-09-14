/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module CABMemberAPI
 */

/**
 * CABMember module
 * @public
 */
export class CABMemberAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getCABMember({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CABMember',
    })
  }
}
