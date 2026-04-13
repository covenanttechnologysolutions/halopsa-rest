/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ApprovalStoreAPI
 */

/**
 * ApprovalStore module
 * @public
 */
export class ApprovalStoreAPI extends BaseAPI {
  postApprovalStore({ items }: { items: Array<number> }): Promise<unknown> {
    return this.request({ method: 'post', data: items, path: '/ApprovalStore' })
  }
}
