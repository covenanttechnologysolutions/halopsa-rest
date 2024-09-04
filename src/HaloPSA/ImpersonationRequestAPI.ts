/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ImpersonationRequest} */
export type ImpersonationRequest = schemas['ImpersonationRequest']

/**
 * @module ImpersonationRequestAPI
 */

/**
 * ImpersonationRequest module
 * @public
 */
export class ImpersonationRequestAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  postImpersonationRequest(impersonationRequest: ImpersonationRequest): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ImpersonationRequest',
      data: impersonationRequest,
    })
  }
}
