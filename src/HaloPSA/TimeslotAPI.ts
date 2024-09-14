/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module TimeslotAPI
 */

/**
 * Timeslot module
 * @public
 */
export class TimeslotAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Timeslot
   * @description Use this to return multiple Timeslot.<br>
				Requires authentication.
   * @param {number} [agent_id] 
   * @param {number} [workday_id] 
   */
  getTimeslot({ agent_id, workday_id }: { agent_id?: number; workday_id?: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Timeslot',
      params: {
        agent_id,
        workday_id,
      },
    })
  }
}
