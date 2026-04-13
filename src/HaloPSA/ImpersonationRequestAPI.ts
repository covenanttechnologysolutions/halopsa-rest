/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ImpersonationRequest} */
export type ImpersonationRequest = schemas['ImpersonationRequest']

/**
 * @module ImpersonationRequestAPI
 */

/**
 * ImpersonationRequest module
 * @public
 */
export class ImpersonationRequestAPI extends BaseAPI {
  postImpersonationRequest({
    impersonationRequest,
  }: {
    impersonationRequest: ImpersonationRequest
  }): Promise<ImpersonationRequest> {
    return this.request({
      method: 'post',
      data: impersonationRequest,
      path: '/ImpersonationRequest',
    })
  }
}
