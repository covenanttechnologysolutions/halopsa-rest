/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ItemSupplier} */
export type ItemSupplier = schemas['ItemSupplier']

/**
 * @module ItemsupplierAPI
 */

/**
 * Itemsupplier module
 * @public
 */
export class ItemsupplierAPI extends BaseAPI {
  getItemsupplier(): Promise<unknown> {
    return this.request({ method: 'get', path: '/itemsupplier' })
  }

  postItemsupplier({
    itemSupplierList,
  }: {
    itemSupplierList: Array<ItemSupplier>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: itemSupplierList, path: '/itemsupplier' })
  }

  /**
   * @summary Get one ItemSupplier
   * @description Use this to return a single instance of ItemSupplier. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getItemsupplierById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/itemsupplier/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteItemsupplierById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/itemsupplier/${id}` })
  }
}
