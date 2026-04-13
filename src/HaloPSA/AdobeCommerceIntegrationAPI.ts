/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module AdobeCommerceIntegrationAPI
 */

/**
 * AdobeCommerceIntegration module
 * @public
 */
export class AdobeCommerceIntegrationAPI extends BaseAPI {
  getAdobeCommerceIntegration(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AdobeCommerceIntegration' })
  }

  postAdobeCommerceIntegrationAuth({ file }: { file: File }): Promise<unknown> {
    return this.request({ method: 'post', data: file, path: '/AdobeCommerceIntegration/auth' })
  }
}
