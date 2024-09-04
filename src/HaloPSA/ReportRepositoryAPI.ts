/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ReportRepositoryAPI
 */

/**
 * ReportRepository module
 * @public
 */
export class ReportRepositoryAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of AnalyzerProfile
   * @description Use this to return multiple AnalyzerProfile.<br>
				Requires authentication.
   * @param {number} agentrestriction 
   * @param {boolean} chartonly 
   * @param {string} clientname 
   * @param {number} count 
   * @param {boolean} includepublished 
   * @param {string} order 
   * @param {string} order2 
   * @param {string} order3 
   * @param {string} order4 
   * @param {string} order5 
   * @param {boolean} orderdesc 
   * @param {boolean} orderdesc2 
   * @param {boolean} orderdesc3 
   * @param {boolean} orderdesc4 
   * @param {boolean} orderdesc5 
   * @param {number} page_no 
   * @param {number} page_size 
   * @param {boolean} pageinate 
   * @param {number} reportgroup_id 
   * @param {string} search 
   * @param {number} type 
   */
  getReportRepository(
    agentrestriction: number,
    chartonly: boolean,
    clientname: string,
    count: number,
    includepublished: boolean,
    order: string,
    order2: string,
    order3: string,
    order4: string,
    order5: string,
    orderdesc: boolean,
    orderdesc2: boolean,
    orderdesc3: boolean,
    orderdesc4: boolean,
    orderdesc5: boolean,
    page_no: number,
    page_size: number,
    pageinate: boolean,
    reportgroup_id: number,
    search: string,
    type: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ReportRepository',
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
   * @summary Get one AnalyzerProfile
   * @description Use this to return a single instance of AnalyzerProfile.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} client_id 
   * @param {string} clientname 
   * @param {number} dashboard_id 
   * @param {string} dashboard_published_id 
   * @param {boolean} dontloadsystemreport 
   * @param {boolean} getcompositetoken 
   * @param {boolean} includedetails 
   * @param {number} invoice_id 
   * @param {boolean} loadreport 
   * @param {string} report_access_token 
   * @param {number} reportingperiod 
   * @param {string} reportingperiodenddate 
   * @param {string} reportingperiodstartdate 
   */
  getReportRepositoryById(
    id: number,
    client_id: number,
    clientname: string,
    dashboard_id: number,
    dashboard_published_id: string,
    dontloadsystemreport: boolean,
    getcompositetoken: boolean,
    includedetails: boolean,
    invoice_id: number,
    loadreport: boolean,
    report_access_token: string,
    reportingperiod: number,
    reportingperiodenddate: string,
    reportingperiodstartdate: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ReportRepository/${id}`,
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
   * @summary List of Lookup
   * @description Use this to return multiple Lookup.<br>
				Requires authentication.
   * @param {number} access_control_level 
   * @param {number} assettype_id 
   * @param {number} client_id 
   * @param {string} clientname 
   * @param {number} contract_id 
   * @param {number} country_code_id 
   * @param {string} dbc_company_id 
   * @param {string} domain 
   * @param {boolean} exclude_nocharge 
   * @param {boolean} exclude_nolinkedtypes 
   * @param {boolean} exclude_zero 
   * @param {boolean} iscustomfield 
   * @param {boolean} istree 
   * @param {number} lookupid 
   * @param {number} ordervaluetype 
   * @param {number} outcome_id 
   * @param {boolean} showallcodes 
   * @param {number} ticket_id 
   * @param {boolean} unameaprestriction 
   * @param {number} use 
   * @param {number} use2 
   */
  getReportRepositoryReportCategories(
    access_control_level: number,
    assettype_id: number,
    client_id: number,
    clientname: string,
    contract_id: number,
    country_code_id: number,
    dbc_company_id: string,
    domain: string,
    exclude_nocharge: boolean,
    exclude_nolinkedtypes: boolean,
    exclude_zero: boolean,
    iscustomfield: boolean,
    istree: boolean,
    lookupid: number,
    ordervaluetype: number,
    outcome_id: number,
    showallcodes: boolean,
    ticket_id: number,
    unameaprestriction: boolean,
    use: number,
    use2: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ReportRepository/ReportCategories',
      params: {
        access_control_level,
        assettype_id,
        client_id,
        clientname,
        contract_id,
        country_code_id,
        dbc_company_id,
        domain,
        exclude_nocharge,
        exclude_nolinkedtypes,
        exclude_zero,
        iscustomfield,
        istree,
        lookupid,
        ordervaluetype,
        outcome_id,
        showallcodes,
        ticket_id,
        unameaprestriction,
        use,
        use2,
      },
    })
  }
}
