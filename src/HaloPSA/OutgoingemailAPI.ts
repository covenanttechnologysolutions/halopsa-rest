/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Outgoingemail} */
export type Outgoingemail = schemas['Outgoingemail']

/**
 * @module OutgoingemailAPI
 */

/**
 * Outgoingemail module
 * @public
 */
export class OutgoingemailAPI extends BaseAPI {
  /**
   * @summary List of Outgoingemail
   * @description Use this to return multiple Outgoingemail. Requires authentication.
   * @param {boolean} [errorsonly]
   */
  getOutgoingemail({ errorsonly }: { errorsonly?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Outgoingemail', params: { errorsonly } })
  }

  postOutgoingemail({
    outgoingemailList,
  }: {
    outgoingemailList: Array<Outgoingemail>
  }): Promise<Outgoingemail> {
    return this.request({ method: 'post', data: outgoingemailList, path: '/Outgoingemail' })
  }

  /**
   * @param {number} id
   */
  deleteOutgoingemailById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Outgoingemail/${id}` })
  }
}
