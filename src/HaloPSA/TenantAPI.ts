/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module TenantAPI
 */

/**
 * Tenant module
 * @public
 */
export class TenantAPI extends BaseAPI {
  getTenant(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Tenant' })
  }

  postTenant({ body }: { body: number }): Promise<unknown> {
    return this.request({ method: 'post', data: body, path: '/Tenant' })
  }
}
