/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AnalyzerProfile} */
export type AnalyzerProfile = schemas['AnalyzerProfile']

/**
 * @module ReportAPI
 */

/**
 * Report module
 * @public
 */
export class ReportAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of AnalyzerProfile
   * @description Use this to return multiple AnalyzerProfile.<br>
				Requires authentication.
   * @param {number} [agentrestriction] 
   * @param {boolean} [chartonly] 
   * @param {string} [clientname] 
   * @param {number} [count] 
   * @param {boolean} [includepublished] 
   * @param {string} [order] 
   * @param {string} [order2] 
   * @param {string} [order3] 
   * @param {string} [order4] 
   * @param {string} [order5] 
   * @param {boolean} [orderdesc] 
   * @param {boolean} [orderdesc2] 
   * @param {boolean} [orderdesc3] 
   * @param {boolean} [orderdesc4] 
   * @param {boolean} [orderdesc5] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   * @param {number} [reportgroup_id] 
   * @param {string} [search] 
   * @param {number} [type] 
   */
  getReport({
    agentrestriction,
    chartonly,
    clientname,
    count,
    includepublished,
    order,
    order2,
    order3,
    order4,
    order5,
    orderdesc,
    orderdesc2,
    orderdesc3,
    orderdesc4,
    orderdesc5,
    page_no,
    page_size,
    pageinate,
    reportgroup_id,
    search,
    type,
  }: {
    agentrestriction?: number
    chartonly?: boolean
    clientname?: string
    count?: number
    includepublished?: boolean
    order?: string
    order2?: string
    order3?: string
    order4?: string
    order5?: string
    orderdesc?: boolean
    orderdesc2?: boolean
    orderdesc3?: boolean
    orderdesc4?: boolean
    orderdesc5?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
    reportgroup_id?: number
    search?: string
    type?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Report',
      params: {
        agentrestriction,
        chartonly,
        clientname,
        count,
        includepublished,
        order,
        order2,
        order3,
        order4,
        order5,
        orderdesc,
        orderdesc2,
        orderdesc3,
        orderdesc4,
        orderdesc5,
        page_no,
        page_size,
        pageinate,
        reportgroup_id,
        search,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postReport({ analyzerProfile }: { analyzerProfile: Array<AnalyzerProfile> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Report',
      data: analyzerProfile,
    })
  }

  /**
   * @summary Get one AnalyzerProfile
   * @description Use this to return a single instance of AnalyzerProfile.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} [client_id] 
   * @param {string} [clientname] 
   * @param {number} [dashboard_id] 
   * @param {string} [dashboard_published_id] 
   * @param {boolean} [dontloadsystemreport] 
   * @param {boolean} [getcompositetoken] 
   * @param {boolean} [includedetails] 
   * @param {number} [invoice_id] 
   * @param {boolean} [loadreport] 
   * @param {string} [report_access_token] 
   * @param {number} [reportingperiod] 
   * @param {string} [reportingperiodenddate] 
   * @param {string} [reportingperiodstartdate] 
   */
  getReportById({
    id,
    client_id,
    clientname,
    dashboard_id,
    dashboard_published_id,
    dontloadsystemreport,
    getcompositetoken,
    includedetails,
    invoice_id,
    loadreport,
    report_access_token,
    reportingperiod,
    reportingperiodenddate,
    reportingperiodstartdate,
  }: {
    id: number
    client_id?: number
    clientname?: string
    dashboard_id?: number
    dashboard_published_id?: string
    dontloadsystemreport?: boolean
    getcompositetoken?: boolean
    includedetails?: boolean
    invoice_id?: number
    loadreport?: boolean
    report_access_token?: string
    reportingperiod?: number
    reportingperiodenddate?: string
    reportingperiodstartdate?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Report/${id}`,
      params: {
        client_id,
        clientname,
        dashboard_id,
        dashboard_published_id,
        dontloadsystemreport,
        getcompositetoken,
        includedetails,
        invoice_id,
        loadreport,
        report_access_token,
        reportingperiod,
        reportingperiodenddate,
        reportingperiodstartdate,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteReportById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Report/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postReportPrint({ analyzerProfile }: { analyzerProfile: Array<AnalyzerProfile> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Report/print',
      data: analyzerProfile,
    })
  }

  /**
   * 
   * 
   
   */
  postReportCreatepdf({ analyzerProfile }: { analyzerProfile: AnalyzerProfile }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Report/createpdf',
      data: analyzerProfile,
    })
  }

  /**
   * 
   * 
   
   */
  postReportBookmark({ analyzerProfile }: { analyzerProfile: AnalyzerProfile }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Report/Bookmark',
      data: analyzerProfile,
    })
  }
}
