/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module SoftwareLicenceRoleAPI
 */

/**
 * SoftwareLicenceRole module
 * @public
 */
export class SoftwareLicenceRoleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of LicenceRole
   * @description Use this to return multiple LicenceRole.<br>
				Requires authentication.
   * @param {number} [softwarelicence_id] 
   */
  getSoftwareLicenceRole({ softwarelicence_id }: { softwarelicence_id?: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SoftwareLicenceRole',
      params: {
        softwarelicence_id,
      },
    })
  }
}
