/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ItemAccountsLink} */
export type ItemAccountsLink = schemas['ItemAccountsLink']
/** {@link ItemAccountsLinkMigration} */
export type ItemAccountsLinkMigration = schemas['ItemAccountsLinkMigration']

/**
 * @module ItemAccountsLinkAPI
 */

/**
 * ItemAccountsLink module
 * @public
 */
export class ItemAccountsLinkAPI extends BaseAPI {
  getItemAccountsLink(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ItemAccountsLink' })
  }

  postItemAccountsLink({
    itemAccountsLinkList,
  }: {
    itemAccountsLinkList: Array<ItemAccountsLink>
  }): Promise<ItemAccountsLink> {
    return this.request({ method: 'post', data: itemAccountsLinkList, path: '/ItemAccountsLink' })
  }

  /**
   * @param {number} id
   */
  getItemAccountsLinkById({ id }: { id: number }): Promise<ItemAccountsLink> {
    return this.request({ method: 'get', path: `/ItemAccountsLink/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteItemAccountsLinkById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ItemAccountsLink/${id}` })
  }

  postItemAccountsLinkMigrate({
    itemAccountsLinkMigrationList,
  }: {
    itemAccountsLinkMigrationList: Array<ItemAccountsLinkMigration>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: itemAccountsLinkMigrationList,
      path: '/ItemAccountsLink/Migrate',
    })
  }
}
