/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link FederatedCredential} */
export type FederatedCredential = schemas['FederatedCredential']
/** {@link NHD_Identity_Application} */
export type NHD_Identity_Application = schemas['NHD_Identity_Application']

/**
 * @module ApplicationAPI
 */

/**
 * Application module
 * @public
 */
export class ApplicationAPI extends BaseAPI {
  getApplication(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Application' })
  }

  postApplication({
    nHD_Identity_ApplicationList,
  }: {
    nHD_Identity_ApplicationList: Array<NHD_Identity_Application>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: nHD_Identity_ApplicationList,
      path: '/Application',
    })
  }

  /**
   * @summary Get one NHD_Identity_Application
   * @description Use this to return a single instance of NHD_Identity_Application. Requires authentication.
   * @param {string} id
   * @param {boolean} [includedetails]
   */
  getApplicationById({
    id,
    includedetails,
  }: {
    id: string
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Application/${id}`, params: { includedetails } })
  }

  /**
   * @param {string} id
   */
  deleteApplicationById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Application/${id}` })
  }

  postApplicationFederatedcredentials({
    federatedCredentialList,
  }: {
    federatedCredentialList: Array<FederatedCredential>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: federatedCredentialList,
      path: '/Application/federatedcredentials',
    })
  }
}
