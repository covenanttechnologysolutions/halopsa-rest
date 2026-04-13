/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module SoftwareLicenceRoleAPI
 */

/**
 * SoftwareLicenceRole module
 * @public
 */
export class SoftwareLicenceRoleAPI extends BaseAPI {
  /**
   * @summary List of LicenceRole
   * @description Use this to return multiple LicenceRole. Requires authentication.
   * @param {number} [softwarelicence_id]
   */
  getSoftwareLicenceRole({
    softwarelicence_id,
  }: {
    softwarelicence_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/SoftwareLicenceRole',
      params: { softwarelicence_id },
    })
  }
}
