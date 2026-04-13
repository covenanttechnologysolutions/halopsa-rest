/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link JiraDetails} */
export type JiraDetails = schemas['JiraDetails']

/**
 * @module JiraDetailsAPI
 */

/**
 * JiraDetails module
 * @public
 */
export class JiraDetailsAPI extends BaseAPI {
  getJiraDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/JiraDetails' })
  }

  postJiraDetails({
    jiraDetailsList,
  }: {
    jiraDetailsList: Array<JiraDetails>
  }): Promise<JiraDetails> {
    return this.request({ method: 'post', data: jiraDetailsList, path: '/JiraDetails' })
  }

  /**
   * @param {number} id
   */
  getJiraDetailsById({ id }: { id: number }): Promise<JiraDetails> {
    return this.request({ method: 'get', path: `/JiraDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteJiraDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/JiraDetails/${id}` })
  }
}
