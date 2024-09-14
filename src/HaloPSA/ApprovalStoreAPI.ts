/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ApprovalStoreAPI
 */

/**
 * ApprovalStore module
 * @public
 */
export class ApprovalStoreAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  postApprovalStore({ listNumber }: { listNumber: number }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ApprovalStore',
      data: listNumber,
    })
  }
}
