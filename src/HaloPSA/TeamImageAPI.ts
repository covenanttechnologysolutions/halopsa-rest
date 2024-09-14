/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module TeamImageAPI
 */

/**
 * TeamImage module
 * @public
 */
export class TeamImageAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   *
   *
   * @param {string} id
   */
  getTeamImageById({ id }: { id: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TeamImage/${id}`,
    })
  }
}
