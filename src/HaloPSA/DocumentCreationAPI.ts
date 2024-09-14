/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module DocumentCreationAPI
 */

/**
 * DocumentCreation module
 * @public
 */
export class DocumentCreationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  postDocumentCreation({}: {}): Promise<any> {
    return this.request({
      method: 'post',
      path: '/DocumentCreation',
    })
  }
}
