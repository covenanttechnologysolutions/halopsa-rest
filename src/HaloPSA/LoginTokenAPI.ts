/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link LoginToken} */
export type LoginToken = schemas['LoginToken']

/**
 * @module LoginTokenAPI
 */

/**
 * LoginToken module
 * @public
 */
export class LoginTokenAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  postLoginToken(loginToken: LoginToken): Promise<any> {
    return this.request({
      method: 'post',
      path: '/LoginToken',
      data: loginToken,
    })
  }
}
