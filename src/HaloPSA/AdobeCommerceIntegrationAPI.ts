/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module AdobeCommerceIntegrationAPI
 */

/**
 * AdobeCommerceIntegration module
 * @public
 */
export class AdobeCommerceIntegrationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAdobeCommerceIntegration(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AdobeCommerceIntegration',
    })
  }

  /**
   * 
   * 
   
   */
  postAdobeCommerceIntegrationAuth(file: File): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AdobeCommerceIntegration/auth',
      data: file,
    })
  }
}
