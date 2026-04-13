/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class CertificateAPI extends BaseAPI {
  getCertificate(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Certificate' })
  }

  postCertificate({
    certificateList,
  }: {
    certificateList: Array<Certificate>
  }): Promise<Certificate> {
    return this.request({ method: 'post', data: certificateList, path: '/Certificate' })
  }

  /**
   * @summary Get one Certificate
   * @description Use this to return a single instance of Certificate. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCertificateById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<Certificate> {
    return this.request({ method: 'get', path: `/Certificate/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteCertificateById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Certificate/${id}` })
  }
}
