/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link KeyVault} */
export type KeyVault = schemas['KeyVault']

/**
 * @module KeyVaultAPI
 */

/**
 * KeyVault module
 * @public
 */
export class KeyVaultAPI extends BaseAPI {
  getKeyVault(): Promise<unknown> {
    return this.request({ method: 'get', path: '/KeyVault' })
  }

  postKeyVault({ keyVaultList }: { keyVaultList: Array<KeyVault> }): Promise<KeyVault> {
    return this.request({ method: 'post', data: keyVaultList, path: '/KeyVault' })
  }

  /**
   * @param {number} id
   */
  getKeyVaultById({ id }: { id: number }): Promise<KeyVault> {
    return this.request({ method: 'get', path: `/KeyVault/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteKeyVaultById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/KeyVault/${id}` })
  }
}
