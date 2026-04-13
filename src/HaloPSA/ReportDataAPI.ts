/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module ReportDataAPI
 */

/**
 * ReportData module
 * @public
 */
export class ReportDataAPI extends BaseAPI {
  /**
   * @param {string} publishedid
   */
  getReportDataPublishedid({ publishedid }: { publishedid: string }): Promise<unknown> {
    return this.request({ method: 'get', path: `/ReportData/${publishedid}` })
  }
}
