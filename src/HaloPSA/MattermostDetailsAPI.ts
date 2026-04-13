/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link MattermostDetails} */
export type MattermostDetails = schemas['MattermostDetails']

/**
 * @module MattermostDetailsAPI
 */

/**
 * MattermostDetails module
 * @public
 */
export class MattermostDetailsAPI extends BaseAPI {
  getMattermostDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MattermostDetails' })
  }

  postMattermostDetails({
    mattermostDetailsList,
  }: {
    mattermostDetailsList: Array<MattermostDetails>
  }): Promise<MattermostDetails> {
    return this.request({ method: 'post', data: mattermostDetailsList, path: '/MattermostDetails' })
  }

  /**
   * @param {number} id
   */
  getMattermostDetailsById({ id }: { id: number }): Promise<MattermostDetails> {
    return this.request({ method: 'get', path: `/MattermostDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteMattermostDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/MattermostDetails/${id}` })
  }
}
