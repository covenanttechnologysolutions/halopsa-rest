/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link CustomQuery} */
export type CustomQuery = schemas['CustomQuery']

/**
 * @module CustomQueryAPI
 */

/**
 * CustomQuery module
 * @public
 */
export class CustomQueryAPI extends BaseAPI {
  getCustomQuery(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CustomQuery' })
  }

  postCustomQuery({
    customQueryList,
  }: {
    customQueryList: Array<CustomQuery>
  }): Promise<CustomQuery> {
    return this.request({ method: 'post', data: customQueryList, path: '/CustomQuery' })
  }

  /**
   * @param {number} id
   */
  getCustomQueryById({ id }: { id: number }): Promise<CustomQuery> {
    return this.request({ method: 'get', path: `/CustomQuery/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteCustomQueryById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CustomQuery/${id}` })
  }
}
