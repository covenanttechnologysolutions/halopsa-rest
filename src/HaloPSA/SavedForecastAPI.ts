/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SavedForecast} */
export type SavedForecast = schemas['SavedForecast']

/**
 * @module SavedForecastAPI
 */

/**
 * SavedForecast module
 * @public
 */
export class SavedForecastAPI extends BaseAPI {
  getSavedForecast(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SavedForecast' })
  }

  postSavedForecast({
    savedForecastList,
  }: {
    savedForecastList: Array<SavedForecast>
  }): Promise<SavedForecast> {
    return this.request({ method: 'post', data: savedForecastList, path: '/SavedForecast' })
  }

  /**
   * @param {number} id
   */
  getSavedForecastById({ id }: { id: number }): Promise<SavedForecast> {
    return this.request({ method: 'get', path: `/SavedForecast/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteSavedForecastById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SavedForecast/${id}` })
  }
}
