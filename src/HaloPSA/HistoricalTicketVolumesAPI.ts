/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link HistoricalTicketVolumes} */
export type HistoricalTicketVolumes = schemas['HistoricalTicketVolumes']

/**
 * @module HistoricalTicketVolumesAPI
 */

/**
 * HistoricalTicketVolumes module
 * @public
 */
export class HistoricalTicketVolumesAPI extends BaseAPI {
  getHistoricalTicketVolumes(): Promise<unknown> {
    return this.request({ method: 'get', path: '/HistoricalTicketVolumes' })
  }

  postHistoricalTicketVolumes({
    historicalTicketVolumesList,
  }: {
    historicalTicketVolumesList: Array<HistoricalTicketVolumes>
  }): Promise<HistoricalTicketVolumes> {
    return this.request({
      method: 'post',
      data: historicalTicketVolumesList,
      path: '/HistoricalTicketVolumes',
    })
  }

  /**
   * @param {number} id
   */
  getHistoricalTicketVolumesById({ id }: { id: number }): Promise<HistoricalTicketVolumes> {
    return this.request({ method: 'get', path: `/HistoricalTicketVolumes/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteHistoricalTicketVolumesById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/HistoricalTicketVolumes/${id}` })
  }
}
