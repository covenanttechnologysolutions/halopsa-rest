/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Certificate} */
export type Certificate = schemas['Certificate']

/**
 * @module CertificateAPI
 */

/**
 * Certificate module
 * @public
 */
export class CertificateAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getCertificate(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Certificate',
    })
  }

  /**
   * 
   * 
   
   */
  postCertificate(certificate: Array<Certificate>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Certificate',
      data: certificate,
    })
  }

  /**
   * @summary Get one Certificate
   * @description Use this to return a single instance of Certificate.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getCertificateById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Certificate/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteCertificateById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Certificate/${id}`,
    })
  }
}
