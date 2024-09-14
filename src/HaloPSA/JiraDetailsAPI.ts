/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class JiraDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getJiraDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/JiraDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postJiraDetails({ jiraDetails }: { jiraDetails: Array<JiraDetails> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/JiraDetails',
      data: jiraDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getJiraDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/JiraDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteJiraDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/JiraDetails/${id}`,
    })
  }
}
