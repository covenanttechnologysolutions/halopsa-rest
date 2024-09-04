/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link NPR_Result} */
export type NPR_Result = schemas['NPR_Result']

/**
 * @module SecurityQuestionValidateAPI
 */

/**
 * SecurityQuestionValidate module
 * @public
 */
export class SecurityQuestionValidateAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getSecurityQuestionValidate(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SecurityQuestionValidate',
    })
  }

  /**
   * 
   * 
   
   */
  postSecurityQuestionValidate(nPR_Result: Array<NPR_Result>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SecurityQuestionValidate',
      data: nPR_Result,
    })
  }
}
