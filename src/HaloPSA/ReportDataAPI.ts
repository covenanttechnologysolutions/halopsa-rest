/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ReportDataAPI
 */

/**
 * ReportData module
 * @public
 */
export class ReportDataAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   *
   *
   * @param {string} publishedid
   */
  getReportDatapublishedid({ publishedid }: { publishedid: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ReportData/${publishedid}`,
    })
  }
}
