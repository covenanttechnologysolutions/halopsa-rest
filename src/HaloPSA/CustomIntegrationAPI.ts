/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link OutboundIntegration} */
export type OutboundIntegration = schemas['OutboundIntegration']

/**
 * @module CustomIntegrationAPI
 */

/**
 * CustomIntegration module
 * @public
 */
export class CustomIntegrationAPI extends BaseAPI {
  getCustomIntegration(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CustomIntegration' })
  }

  postCustomIntegration({
    outboundIntegrationList,
  }: {
    outboundIntegrationList: Array<OutboundIntegration>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: outboundIntegrationList,
      path: '/CustomIntegration',
    })
  }

  /**
   * @summary Get one OutboundIntegration
   * @description Use this to return a single instance of OutboundIntegration. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {boolean} [includemethods]
   * @param {number} [module_id]
   */
  getCustomIntegrationById({
    id,
    includedetails,
    includemethods,
    module_id,
  }: {
    id: number
    includedetails?: boolean
    includemethods?: boolean
    module_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/CustomIntegration/${id}`,
      params: { includedetails, includemethods, module_id },
    })
  }

  /**
   * @param {number} id
   */
  deleteCustomIntegrationById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CustomIntegration/${id}` })
  }
}
