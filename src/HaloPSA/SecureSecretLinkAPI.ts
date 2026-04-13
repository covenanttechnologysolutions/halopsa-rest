/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SecureSecretLink} */
export type SecureSecretLink = schemas['SecureSecretLink']

/**
 * @module SecureSecretLinkAPI
 */

/**
 * SecureSecretLink module
 * @public
 */
export class SecureSecretLinkAPI extends BaseAPI {
  getSecureSecretLink(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SecureSecretLink' })
  }

  postSecureSecretLink({
    secureSecretLinkList,
  }: {
    secureSecretLinkList: Array<SecureSecretLink>
  }): Promise<SecureSecretLink> {
    return this.request({ method: 'post', data: secureSecretLinkList, path: '/SecureSecretLink' })
  }

  /**
   * @param {number} id
   */
  getSecureSecretLinkById({ id }: { id: number }): Promise<SecureSecretLink> {
    return this.request({ method: 'get', path: `/SecureSecretLink/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteSecureSecretLinkById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SecureSecretLink/${id}` })
  }

  /**
   * @param {string} [token]
   * @param {string} [passphrase]
   */
  getSecureSecretLinkValidate({
    token,
    passphrase,
  }: {
    token?: string
    passphrase?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/SecureSecretLink/validate',
      params: { token, passphrase },
    })
  }
}
