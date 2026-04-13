/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Actions} */
export type Actions = schemas['Actions']
/** {@link Area} */
export type Area = schemas['Area']
/** {@link AzureDevOpsDetails} */
export type AzureDevOpsDetails = schemas['AzureDevOpsDetails']
/** {@link BusinessCentralDetails} */
export type BusinessCentralDetails = schemas['BusinessCentralDetails']
/** {@link ConfluenceWebhookEndpoint} */
export type ConfluenceWebhookEndpoint = schemas['ConfluenceWebhookEndpoint']
/** {@link EWSAppointmentChange} */
export type EWSAppointmentChange = schemas['EWSAppointmentChange']
/** {@link ExactDetails} */
export type ExactDetails = schemas['ExactDetails']
/** {@link FortnoxDetails} */
export type FortnoxDetails = schemas['FortnoxDetails']
/** {@link InvoiceHeader} */
export type InvoiceHeader = schemas['InvoiceHeader']
/** {@link JiraDetails} */
export type JiraDetails = schemas['JiraDetails']
/** {@link KashflowDetails} */
export type KashflowDetails = schemas['KashflowDetails']
/** {@link KeyPair2} */
export type KeyPair2 = schemas['KeyPair2']
/** {@link LansweeperStartExport} */
export type LansweeperStartExport = schemas['LansweeperStartExport']
/** {@link Licence_List} */
export type Licence_List = schemas['Licence_List']
/** {@link LinkIssue} */
export type LinkIssue = schemas['LinkIssue']
/** {@link LinkWorkItem} */
export type LinkWorkItem = schemas['LinkWorkItem']
/** {@link MYOBDetails} */
export type MYOBDetails = schemas['MYOBDetails']
/** {@link MattermostWebhook} */
export type MattermostWebhook = schemas['MattermostWebhook']
/** {@link MattermostWebhookContent} */
export type MattermostWebhookContent = schemas['MattermostWebhookContent']
/** {@link MoveMailRequest} */
export type MoveMailRequest = schemas['MoveMailRequest']
/** {@link QuickBooksDetails} */
export type QuickBooksDetails = schemas['QuickBooksDetails']
/** {@link SOCCreateIncident} */
export type SOCCreateIncident = schemas['SOCCreateIncident']
/** {@link SageBusinessCloudDetails} */
export type SageBusinessCloudDetails = schemas['SageBusinessCloudDetails']
/** {@link StripeCreatePortalSession} */
export type StripeCreatePortalSession = schemas['StripeCreatePortalSession']
/** {@link StripePaymentIntentCreateRequest} */
export type StripePaymentIntentCreateRequest = schemas['StripePaymentIntentCreateRequest']
/** {@link StripeUpdateInvoicePaymentRequest} */
export type StripeUpdateInvoicePaymentRequest = schemas['StripeUpdateInvoicePaymentRequest']
/** {@link StripeWebhookEndpoint} */
export type StripeWebhookEndpoint = schemas['StripeWebhookEndpoint']
/** {@link SubscriptionQuantityChange} */
export type SubscriptionQuantityChange = schemas['SubscriptionQuantityChange']
/** {@link TeamsManifestCreate} */
export type TeamsManifestCreate = schemas['TeamsManifestCreate']
/** {@link Uname} */
export type Uname = schemas['Uname']
/** {@link XeroDetails} */
export type XeroDetails = schemas['XeroDetails']

/**
 * @module IntegrationDataAPI
 */

/**
 * IntegrationData module
 * @public
 */
export class IntegrationDataAPI extends BaseAPI {
  postIntegrationDataImportXero({
    xeroDetailsList,
  }: {
    xeroDetailsList: Array<XeroDetails>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: xeroDetailsList,
      path: '/IntegrationData/Import/Xero',
    })
  }

  getIntegrationDataGetXero(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Xero' })
  }

  postIntegrationDataSendXero({
    invoiceHeader,
  }: {
    invoiceHeader: InvoiceHeader
  }): Promise<unknown> {
    return this.request({ method: 'post', data: invoiceHeader, path: '/IntegrationData/Send/Xero' })
  }

  /**
   * @description . Requires authentication.
   * @param {boolean} [testOnly]
   */
  getIntegrationDataGetPRTG({ testOnly }: { testOnly?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/PRTG', params: { testOnly } })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [dataType]
   * @param {boolean} [fetchSites]
   * @param {boolean} [keyPair]
   */
  getIntegrationDataGetDatto({
    dataType,
    fetchSites,
    keyPair,
  }: {
    dataType?: string
    fetchSites?: boolean
    keyPair?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Datto',
      params: { dataType, fetchSites, keyPair },
    })
  }

  getIntegrationDataGetServiceNow(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/ServiceNow' })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [alternate_sys_id]
   * @param {number} [customer_id]
   * @param {string} [datatype]
   * @param {number} [offset]
   * @param {string} [search]
   * @param {string} [updateddate]
   */
  getIntegrationDataGetServiceNowIntegration({
    alternate_sys_id,
    customer_id,
    datatype,
    offset,
    search,
    updateddate,
  }: {
    alternate_sys_id?: string
    customer_id?: number
    datatype?: string
    offset?: number
    search?: string
    updateddate?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ServiceNowIntegration',
      params: { alternate_sys_id, customer_id, datatype, offset, search, updateddate },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   */
  getIntegrationDataGetSplunkOnCall({ datatype }: { datatype?: string }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/SplunkOnCall',
      params: { datatype },
    })
  }

  postIntegrationDataCreateIncidentSplunkOnCall({
    sOCCreateIncident,
  }: {
    sOCCreateIncident: SOCCreateIncident
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: sOCCreateIncident,
      path: '/IntegrationData/CreateIncident/SplunkOnCall',
    })
  }

  postIntegrationDataImportQuickBooksOnline({
    quickBooksDetailsList,
  }: {
    quickBooksDetailsList: Array<QuickBooksDetails>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: quickBooksDetailsList,
      path: '/IntegrationData/Import/QuickBooksOnline',
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [account_classification]
   * @param {string} [account_subtype]
   * @param {string} [account_type]
   * @param {string} [companyid]
   * @param {number} [connectionid]
   * @param {string} [datatype]
   */
  getIntegrationDataGetQuickBooksOnline({
    account_classification,
    account_subtype,
    account_type,
    companyid,
    connectionid,
    datatype,
  }: {
    account_classification?: string
    account_subtype?: string
    account_type?: string
    companyid?: string
    connectionid?: number
    datatype?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/QuickBooksOnline',
      params: {
        account_classification,
        account_subtype,
        account_type,
        companyid,
        connectionid,
        datatype,
      },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {boolean} [keyPair]
   */
  getIntegrationDataGetDevice42({
    datatype,
    keyPair,
  }: {
    datatype?: string
    keyPair?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Device42',
      params: { datatype, keyPair },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {number} [page]
   */
  getIntegrationDataGetConnectWise({
    datatype,
    page,
  }: {
    datatype?: string
    page?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ConnectWise',
      params: { datatype, page },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [azuretenants]
   * @param {string} [continuationToken]
   * @param {string} [datatype]
   * @param {number} [detailsId]
   * @param {boolean} [doPaginate]
   * @param {boolean} [isLookup]
   * @param {boolean} [keyPair]
   * @param {string} [nextLink]
   * @param {string} [search]
   */
  getIntegrationDataGetMicrosoftCSP({
    azuretenants,
    continuationToken,
    datatype,
    detailsId,
    doPaginate,
    isLookup,
    keyPair,
    nextLink,
    search,
  }: {
    azuretenants?: string
    continuationToken?: string
    datatype?: string
    detailsId?: number
    doPaginate?: boolean
    isLookup?: boolean
    keyPair?: boolean
    nextLink?: string
    search?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/MicrosoftCSP',
      params: {
        azuretenants,
        continuationToken,
        datatype,
        detailsId,
        doPaginate,
        isLookup,
        keyPair,
        nextLink,
        search,
      },
    })
  }

  postIntegrationDataAdjustQtyMicrosoftCSP({
    subscriptionQuantityChange,
  }: {
    subscriptionQuantityChange: SubscriptionQuantityChange
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: subscriptionQuantityChange,
      path: '/IntegrationData/AdjustQty/MicrosoftCSP',
    })
  }

  postIntegrationDataClearLicenceKeyCacheMicrosoftCSP(): Promise<unknown> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/ClearLicenceKeyCache/MicrosoftCSP',
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {string} [nexturl]
   */
  getIntegrationDataGetAutotask({
    datatype,
    nexturl,
  }: {
    datatype?: string
    nexturl?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Autotask',
      params: { datatype, nexturl },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {boolean} [keyPair]
   * @param {number} [page]
   */
  getIntegrationDataGetAtera({
    datatype,
    keyPair,
    page,
  }: {
    datatype?: string
    keyPair?: boolean
    page?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Atera',
      params: { datatype, keyPair, page },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {string} [masterid]
   * @param {string} [nexturl]
   * @param {string} [overrideenddate]
   * @param {string} [overridestartdate]
   * @param {string} [userprincipalname]
   */
  getIntegrationDataGetExchangeCalendars({
    datatype,
    masterid,
    nexturl,
    overrideenddate,
    overridestartdate,
    userprincipalname,
  }: {
    datatype?: string
    masterid?: string
    nexturl?: string
    overrideenddate?: string
    overridestartdate?: string
    userprincipalname?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ExchangeCalendars',
      params: {
        datatype,
        masterid,
        nexturl,
        overrideenddate,
        overridestartdate,
        userprincipalname,
      },
    })
  }

  getIntegrationDataGetExchangeCalendarsEWS(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/ExchangeCalendars/EWS' })
  }

  postIntegrationDataImportExchangeCalendarsEWS({
    eWSAppointmentChange,
  }: {
    eWSAppointmentChange: EWSAppointmentChange
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: eWSAppointmentChange,
      path: '/IntegrationData/Import/ExchangeCalendars/EWS',
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {number} [override_mapping_id]
   * @param {boolean} [validate]
   */
  getIntegrationDataGetOkta({
    datatype,
    override_mapping_id,
    validate,
  }: {
    datatype?: string
    override_mapping_id?: number
    validate?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Okta',
      params: { datatype, override_mapping_id, validate },
    })
  }

  postIntegrationDataImportKashflow({
    kashflowDetailsList,
  }: {
    kashflowDetailsList: Array<KashflowDetails>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: kashflowDetailsList,
      path: '/IntegrationData/Import/Kashflow',
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {number} [tenantid]
   */
  getIntegrationDataGetKashflow({
    datatype,
    tenantid,
  }: {
    datatype?: string
    tenantid?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Kashflow',
      params: { datatype, tenantid },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [callbackurl]
   * @param {string} [datatype]
   */
  getIntegrationDataGetTwitter({
    callbackurl,
    datatype,
  }: {
    callbackurl?: string
    datatype?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Twitter',
      params: { callbackurl, datatype },
    })
  }

  postIntegrationDataExportLansweeper({
    lansweeperStartExport,
  }: {
    lansweeperStartExport: LansweeperStartExport
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: lansweeperStartExport,
      path: '/IntegrationData/Export/Lansweeper',
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {string} [exportid]
   * @param {string} [exportUrl]
   * @param {number} [halositeid]
   * @param {string} [siteid]
   */
  getIntegrationDataGetLansweeper({
    datatype,
    exportid,
    exportUrl,
    halositeid,
    siteid,
  }: {
    datatype?: string
    exportid?: string
    exportUrl?: string
    halositeid?: number
    siteid?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Lansweeper',
      params: { datatype, exportid, exportUrl, halositeid, siteid },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [searchString]
   * @param {boolean} [testOnly]
   */
  getIntegrationDataGetInteract({
    searchString,
    testOnly,
  }: {
    searchString?: string
    testOnly?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Interact',
      params: { searchString, testOnly },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [accountid]
   * @param {string} [datatype]
   */
  getIntegrationDataGetDynamicsCRM({
    accountid,
    datatype,
  }: {
    accountid?: string
    datatype?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/DynamicsCRM',
      params: { accountid, datatype },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [connectionid]
   * @param {string} [datatype]
   * @param {number} [mappingid]
   * @param {string} [tenantid]
   */
  getIntegrationDataGetAzureAD({
    connectionid,
    datatype,
    mappingid,
    tenantid,
  }: {
    connectionid?: number
    datatype?: string
    mappingid?: number
    tenantid?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/AzureAD',
      params: { connectionid, datatype, mappingid, tenantid },
    })
  }

  getIntegrationDataGetAzureADDelta(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/AzureAD/Delta' })
  }

  postIntegrationDataImportBusinessCentral({
    businessCentralDetailsList,
  }: {
    businessCentralDetailsList: Array<BusinessCentralDetails>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: businessCentralDetailsList,
      path: '/IntegrationData/Import/BusinessCentral',
    })
  }

  getIntegrationDataGetBusinessCentral(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/BusinessCentral' })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {number} [organizationid]
   * @param {number} [page]
   */
  getIntegrationDataGetNinjaRMM({
    datatype,
    organizationid,
    page,
  }: {
    datatype?: string
    organizationid?: number
    page?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/NinjaRMM',
      params: { datatype, organizationid, page },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {number} [gfisiteid]
   */
  getIntegrationDataGetSolarWindsRMM({
    datatype,
    gfisiteid,
  }: {
    datatype?: string
    gfisiteid?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/SolarWindsRMM',
      params: { datatype, gfisiteid },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [areaAzureTenant]
   * @param {number} [connectionid]
   * @param {string} [datatype]
   * @param {boolean} [doPaginate]
   * @param {string} [nextLink]
   */
  getIntegrationDataGetIntune({
    areaAzureTenant,
    connectionid,
    datatype,
    doPaginate,
    nextLink,
  }: {
    areaAzureTenant?: number
    connectionid?: number
    datatype?: string
    doPaginate?: boolean
    nextLink?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Intune',
      params: { areaAzureTenant, connectionid, datatype, doPaginate, nextLink },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [apikeyoverride]
   * @param {boolean} [dataOnly]
   * @param {string} [datatype]
   */
  getIntegrationDataGetPagerDuty({
    apikeyoverride,
    dataOnly,
    datatype,
  }: {
    apikeyoverride?: string
    dataOnly?: boolean
    datatype?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/PagerDuty',
      params: { apikeyoverride, dataOnly, datatype },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [connectionid]
   * @param {string} [datatype]
   * @param {string} [mailboxname]
   * @param {number} [mappingid]
   */
  getIntegrationDataGetSalesMailbox({
    connectionid,
    datatype,
    mailboxname,
    mappingid,
  }: {
    connectionid?: number
    datatype?: string
    mailboxname?: string
    mappingid?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/SalesMailbox',
      params: { connectionid, datatype, mailboxname, mappingid },
    })
  }

  /**
   * @param {string} id
   */
  getIntegrationDataGetSalesMailboxById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'get', path: `/IntegrationData/Get/SalesMailbox/${id}` })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   */
  getIntegrationDataGetLogMeIn({ datatype }: { datatype?: string }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/LogMeIn',
      params: { datatype },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   */
  getIntegrationDataGetGoogleCalendars({ datatype }: { datatype?: string }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/GoogleCalendars',
      params: { datatype },
    })
  }

  postIntegrationDataPostGoogleCalendars({
    unameList,
  }: {
    unameList: Array<Uname>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: unameList,
      path: '/IntegrationData/Post/GoogleCalendars',
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {number} [mappingid]
   * @param {string} [nexttoken]
   * @param {boolean} [paginate]
   */
  getIntegrationDataGetGoogleWorkplace({
    datatype,
    mappingid,
    nexttoken,
    paginate,
  }: {
    datatype?: string
    mappingid?: number
    nexttoken?: string
    paginate?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/GoogleWorkplace',
      params: { datatype, mappingid, nexttoken, paginate },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [accountid]
   * @param {number} [customerid]
   * @param {boolean} [dataOnly]
   * @param {string} [datatype]
   */
  getIntegrationDataGetNCentral({
    accountid,
    customerid,
    dataOnly,
    datatype,
  }: {
    accountid?: number
    customerid?: number
    dataOnly?: boolean
    datatype?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/NCentral',
      params: { accountid, customerid, dataOnly, datatype },
    })
  }

  postIntegrationDataImportSnelStart(): Promise<unknown> {
    return this.request({ method: 'post', path: '/IntegrationData/Import/SnelStart' })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   */
  getIntegrationDataGetSnelStart({ datatype }: { datatype?: string }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/SnelStart',
      params: { datatype },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {string} [organizationid]
   * @param {string} [returntype]
   * @param {string} [typeid]
   * @param {string} [updateddate]
   */
  getIntegrationDataGetITGlue({
    datatype,
    organizationid,
    returntype,
    typeid,
    updateddate,
  }: {
    datatype?: string
    organizationid?: string
    returntype?: string
    typeid?: string
    updateddate?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ITGlue',
      params: { datatype, organizationid, returntype, typeid, updateddate },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {boolean} [dataOnly]
   * @param {string} [endpoint]
   */
  getIntegrationDataGetJamf({
    dataOnly,
    endpoint,
  }: {
    dataOnly?: boolean
    endpoint?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Jamf',
      params: { dataOnly, endpoint },
    })
  }

  getIntegrationDataValidateJira(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Validate/Jira' })
  }

  /**
   * @description . Requires authentication.
   * @param {boolean} [dataOnly]
   * @param {string} [dataType]
   * @param {number} [haloProduct]
   * @param {string} [issueTypes]
   * @param {number} [productId]
   * @param {string} [search]
   */
  getIntegrationDataGetJira({
    dataOnly,
    dataType,
    haloProduct,
    issueTypes,
    productId,
    search,
  }: {
    dataOnly?: boolean
    dataType?: string
    haloProduct?: number
    issueTypes?: string
    productId?: number
    search?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Jira',
      params: { dataOnly, dataType, haloProduct, issueTypes, productId, search },
    })
  }

  getIntegrationDataSearchJira(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Search/Jira' })
  }

  postIntegrationDataLinkJira({
    linkIssueList,
  }: {
    linkIssueList: Array<LinkIssue>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: linkIssueList, path: '/IntegrationData/Link/Jira' })
  }

  postIntegrationDataUnlinkJira({
    linkIssueList,
  }: {
    linkIssueList: Array<LinkIssue>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: linkIssueList,
      path: '/IntegrationData/Unlink/Jira',
    })
  }

  postIntegrationDataImportJira({
    jiraDetailsList,
  }: {
    jiraDetailsList: Array<JiraDetails>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: jiraDetailsList,
      path: '/IntegrationData/Import/Jira',
    })
  }

  getIntegrationDataGetBeyondTrustCode(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/BeyondTrust/Code' })
  }

  postIntegrationDataImportBeyondTrust(): Promise<unknown> {
    return this.request({ method: 'post', path: '/IntegrationData/Import/BeyondTrust' })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [connectionid]
   * @param {string} [datatype]
   * @param {number} [page]
   */
  getIntegrationDataGetDattoCommerce({
    connectionid,
    datatype,
    page,
  }: {
    connectionid?: number
    datatype?: string
    page?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/DattoCommerce',
      params: { connectionid, datatype, page },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [connectionid]
   * @param {string} [datatype]
   * @param {string} [resourcegroupname]
   * @param {string} [subscriptionid]
   * @param {string} [workspacename]
   */
  getIntegrationDataGetAzureSentinel({
    connectionid,
    datatype,
    resourcegroupname,
    subscriptionid,
    workspacename,
  }: {
    connectionid?: number
    datatype?: string
    resourcegroupname?: string
    subscriptionid?: string
    workspacename?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/AzureSentinel',
      params: { connectionid, datatype, resourcegroupname, subscriptionid, workspacename },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {boolean} [dataOnly]
   * @param {string} [datatype]
   * @param {number} [page]
   */
  getIntegrationDataGetSyncro({
    dataOnly,
    datatype,
    page,
  }: {
    dataOnly?: boolean
    datatype?: string
    page?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Syncro',
      params: { dataOnly, datatype, page },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [endpoint]
   * @param {string} [returntype]
   * @param {boolean} [validate]
   */
  getIntegrationDataGetDomotz({
    endpoint,
    returntype,
    validate,
  }: {
    endpoint?: string
    returntype?: string
    validate?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Domotz',
      params: { endpoint, returntype, validate },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [customeremail]
   * @param {string} [customername]
   * @param {string} [datatype]
   * @param {number} [limit]
   * @param {number} [offset]
   * @param {string} [ticketid]
   */
  getIntegrationDataGetGoToAssist({
    customeremail,
    customername,
    datatype,
    limit,
    offset,
    ticketid,
  }: {
    customeremail?: string
    customername?: string
    datatype?: string
    limit?: number
    offset?: number
    ticketid?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/GoToAssist',
      params: { customeremail, customername, datatype, limit, offset, ticketid },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [dataType]
   * @param {string} [extraFilter]
   * @param {boolean} [keyPair]
   */
  getIntegrationDataGetAutomate({
    dataType,
    extraFilter,
    keyPair,
  }: {
    dataType?: string
    extraFilter?: string
    keyPair?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Automate',
      params: { dataType, extraFilter, keyPair },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [accountid]
   * @param {boolean} [dataOnly]
   * @param {string} [datatype]
   * @param {string} [nextlink]
   * @param {boolean} [paginate]
   */
  getIntegrationDataGetSnow({
    accountid,
    dataOnly,
    datatype,
    nextlink,
    paginate,
  }: {
    accountid?: number
    dataOnly?: boolean
    datatype?: string
    nextlink?: string
    paginate?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Snow',
      params: { accountid, dataOnly, datatype, nextlink, paginate },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {boolean} [data_only]
   * @param {number} [haloProduct]
   * @param {number} [instance_id]
   * @param {number} [product_id]
   * @param {string} [resource]
   * @param {string} [search]
   * @param {string} [workItemTypes]
   */
  getIntegrationDataGetDevOps({
    data_only,
    haloProduct,
    instance_id,
    product_id,
    resource,
    search,
    workItemTypes,
  }: {
    data_only?: boolean
    haloProduct?: number
    instance_id?: number
    product_id?: number
    resource?: string
    search?: string
    workItemTypes?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/DevOps',
      params: { data_only, haloProduct, instance_id, product_id, resource, search, workItemTypes },
    })
  }

  getIntegrationDataSearchDevOps(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Search/DevOps' })
  }

  postIntegrationDataImportDevOps({
    azureDevOpsDetailsList,
  }: {
    azureDevOpsDetailsList: Array<AzureDevOpsDetails>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: azureDevOpsDetailsList,
      path: '/IntegrationData/Import/DevOps',
    })
  }

  postIntegrationDataLinkDevOps({
    linkWorkItemList,
  }: {
    linkWorkItemList: Array<LinkWorkItem>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: linkWorkItemList,
      path: '/IntegrationData/Link/DevOps',
    })
  }

  postIntegrationDataUnlinkDevOps({
    linkWorkItemList,
  }: {
    linkWorkItemList: Array<LinkWorkItem>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: linkWorkItemList,
      path: '/IntegrationData/Unlink/DevOps',
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [alsoInclude]
   * @param {string} [dataType]
   * @param {boolean} [excludeMapped]
   * @param {string} [extraFilter]
   * @param {boolean} [mappedOnly]
   * @param {string} [next_url]
   * @param {boolean} [paginate]
   * @param {string} [parentId]
   * @param {string} [subDataType]
   */
  getIntegrationDataGetAuvik({
    alsoInclude,
    dataType,
    excludeMapped,
    extraFilter,
    mappedOnly,
    next_url,
    paginate,
    parentId,
    subDataType,
  }: {
    alsoInclude?: string
    dataType?: string
    excludeMapped?: boolean
    extraFilter?: string
    mappedOnly?: boolean
    next_url?: string
    paginate?: boolean
    parentId?: string
    subDataType?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Auvik',
      params: {
        alsoInclude,
        dataType,
        excludeMapped,
        extraFilter,
        mappedOnly,
        next_url,
        paginate,
        parentId,
        subDataType,
      },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {boolean} [keypair]
   * @param {string} [nextlink]
   * @param {string} [objecttype]
   * @param {boolean} [paginate]
   * @param {string} [resource]
   * @param {string} [search]
   */
  getIntegrationDataGetHubSpot({
    keypair,
    nextlink,
    objecttype,
    paginate,
    resource,
    search,
  }: {
    keypair?: boolean
    nextlink?: string
    objecttype?: string
    paginate?: boolean
    resource?: string
    search?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/HubSpot',
      params: { keypair, nextlink, objecttype, paginate, resource, search },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [mappingid]
   * @param {number} [offset]
   * @param {boolean} [paginate]
   * @param {string} [resource]
   */
  getIntegrationDataGetQualys({
    mappingid,
    offset,
    paginate,
    resource,
  }: {
    mappingid?: number
    offset?: number
    paginate?: boolean
    resource?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Qualys',
      params: { mappingid, offset, paginate, resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [clientid]
   * @param {string} [documenttype]
   * @param {string} [endpoint]
   * @param {number} [pagenum]
   * @param {string} [returntype]
   * @param {boolean} [validate]
   */
  getIntegrationDataGetPassportal({
    clientid,
    documenttype,
    endpoint,
    pagenum,
    returntype,
    validate,
  }: {
    clientid?: number
    documenttype?: string
    endpoint?: string
    pagenum?: number
    returntype?: string
    validate?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Passportal',
      params: { clientid, documenttype, endpoint, pagenum, returntype, validate },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {string} [locid]
   */
  postIntegrationDataImportIntacct({
    datatype,
    locid,
  }: {
    datatype?: string
    locid?: string
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/Intacct',
      params: { datatype, locid },
    })
  }

  getIntegrationDataGetIntacct(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Intacct' })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {boolean} [keyPair]
   * @param {number} [page]
   */
  getIntegrationDataGetLiongard({
    datatype,
    keyPair,
    page,
  }: {
    datatype?: string
    keyPair?: boolean
    page?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Liongard',
      params: { datatype, keyPair, page },
    })
  }

  postIntegrationDataPostLiongardCustomer({ area }: { area: Area }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: area,
      path: '/IntegrationData/Post/Liongard/Customer',
    })
  }

  postIntegrationDataPostLiongardMetrics(): Promise<unknown> {
    return this.request({ method: 'post', path: '/IntegrationData/Post/Liongard/Metrics' })
  }

  postIntegrationDataPostStripeCreatewebhook({
    stripeWebhookEndpoint,
  }: {
    stripeWebhookEndpoint: StripeWebhookEndpoint
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: stripeWebhookEndpoint,
      path: '/IntegrationData/Post/Stripe/create-webhook',
    })
  }

  postIntegrationDataPostStripeCreatesetupintent({
    stripePaymentIntentCreateRequest,
  }: {
    stripePaymentIntentCreateRequest: StripePaymentIntentCreateRequest
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: stripePaymentIntentCreateRequest,
      path: '/IntegrationData/Post/Stripe/create-setup-intent',
    })
  }

  postIntegrationDataPostStripeCreatepaymentintent({
    stripePaymentIntentCreateRequest,
  }: {
    stripePaymentIntentCreateRequest: StripePaymentIntentCreateRequest
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: stripePaymentIntentCreateRequest,
      path: '/IntegrationData/Post/Stripe/create-payment-intent',
    })
  }

  postIntegrationDataPostStripeUpdateinvoicepayment({
    stripeUpdateInvoicePaymentRequest,
  }: {
    stripeUpdateInvoicePaymentRequest: StripeUpdateInvoicePaymentRequest
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: stripeUpdateInvoicePaymentRequest,
      path: '/IntegrationData/Post/Stripe/update-invoice-payment',
    })
  }

  getIntegrationDataGetStripe(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Stripe' })
  }

  postIntegrationDataPostStripeCreateportalsession({
    stripeCreatePortalSession,
  }: {
    stripeCreatePortalSession: StripeCreatePortalSession
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: stripeCreatePortalSession,
      path: '/IntegrationData/Post/Stripe/create-portal-session',
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {number} [page]
   * @param {string} [parent_id]
   */
  getIntegrationDataGetFreshdesk({
    datatype,
    page,
    parent_id,
  }: {
    datatype?: string
    page?: number
    parent_id?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Freshdesk',
      params: { datatype, page, parent_id },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [include_this_id]
   * @param {number} [page]
   * @param {boolean} [paginate]
   * @param {boolean} [remove_existing]
   * @param {string} [resource]
   * @param {string} [third_party_id]
   */
  getIntegrationDataGetPax8({
    include_this_id,
    page,
    paginate,
    remove_existing,
    resource,
    third_party_id,
  }: {
    include_this_id?: string
    page?: number
    paginate?: boolean
    remove_existing?: boolean
    resource?: string
    third_party_id?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Pax8',
      params: { include_this_id, page, paginate, remove_existing, resource, third_party_id },
    })
  }

  postIntegrationDataAdjustQtyPax8({
    subscriptionQuantityChange,
  }: {
    subscriptionQuantityChange: SubscriptionQuantityChange
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: subscriptionQuantityChange,
      path: '/IntegrationData/AdjustQty/Pax8',
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [include_this_id]
   * @param {number} [offset]
   * @param {boolean} [paginate]
   * @param {boolean} [remove_existing]
   * @param {string} [resource]
   * @param {number} [tenant]
   * @param {string} [third_party_id]
   */
  getIntegrationDataGetIngramMicro({
    include_this_id,
    offset,
    paginate,
    remove_existing,
    resource,
    tenant,
    third_party_id,
  }: {
    include_this_id?: string
    offset?: number
    paginate?: boolean
    remove_existing?: boolean
    resource?: string
    tenant?: number
    third_party_id?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/IngramMicro',
      params: {
        include_this_id,
        offset,
        paginate,
        remove_existing,
        resource,
        tenant,
        third_party_id,
      },
    })
  }

  postIntegrationDataImportIngramMicroSubscriptions({
    licence_ListList,
  }: {
    licence_ListList: Array<Licence_List>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: licence_ListList,
      path: '/IntegrationData/Import/IngramMicro/Subscriptions',
    })
  }

  getIntegrationDataGetStreamOneIon(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/StreamOneIon' })
  }

  getIntegrationDataGetSynnex(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Synnex' })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [endpoint]
   * @param {boolean} [keypair]
   * @param {string} [nextlink]
   * @param {string} [resource]
   */
  getIntegrationDataGetSalesforce({
    endpoint,
    keypair,
    nextlink,
    resource,
  }: {
    endpoint?: string
    keypair?: boolean
    nextlink?: string
    resource?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Salesforce',
      params: { endpoint, keypair, nextlink, resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   */
  getIntegrationDataGetNewRelic({ datatype }: { datatype?: string }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/NewRelic',
      params: { datatype },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {string} [extrafilter]
   * @param {boolean} [keyPair]
   * @param {number} [page]
   */
  getIntegrationDataGetKaseyaVSA({
    datatype,
    extrafilter,
    keyPair,
    page,
  }: {
    datatype?: string
    extrafilter?: string
    keyPair?: boolean
    page?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/KaseyaVSA',
      params: { datatype, extrafilter, keyPair, page },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [method]
   */
  getIntegrationDataGetZabbix({ method }: { method?: string }): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Zabbix', params: { method } })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [include_this_id]
   * @param {boolean} [remove_existing]
   * @param {string} [resource]
   * @param {string} [sub_resource]
   */
  getIntegrationDataGetGiacom({
    include_this_id,
    remove_existing,
    resource,
    sub_resource,
  }: {
    include_this_id?: string
    remove_existing?: boolean
    resource?: string
    sub_resource?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Giacom',
      params: { include_this_id, remove_existing, resource, sub_resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [include_this_id]
   * @param {boolean} [remove_existing]
   * @param {string} [resource]
   */
  getIntegrationDataGetRhipe({
    include_this_id,
    remove_existing,
    resource,
  }: {
    include_this_id?: string
    remove_existing?: boolean
    resource?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Rhipe',
      params: { include_this_id, remove_existing, resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [include_this_id]
   * @param {boolean} [remove_existing]
   * @param {string} [resource]
   */
  getIntegrationDataGetTechData({
    include_this_id,
    remove_existing,
    resource,
  }: {
    include_this_id?: string
    remove_existing?: boolean
    resource?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/TechData',
      params: { include_this_id, remove_existing, resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [include_this_id]
   * @param {boolean} [remove_existing]
   * @param {string} [resource]
   */
  getIntegrationDataGetIntY({
    include_this_id,
    remove_existing,
    resource,
  }: {
    include_this_id?: string
    remove_existing?: boolean
    resource?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/intY',
      params: { include_this_id, remove_existing, resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [account_id]
   * @param {string} [include_this_id]
   * @param {number} [module_id]
   * @param {boolean} [remove_existing]
   * @param {boolean} [reset_token]
   * @param {string} [resource]
   */
  getIntegrationDataGetCloudMarketplace({
    account_id,
    include_this_id,
    module_id,
    remove_existing,
    reset_token,
    resource,
  }: {
    account_id?: string
    include_this_id?: string
    module_id?: number
    remove_existing?: boolean
    reset_token?: boolean
    resource?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/CloudMarketplace',
      params: { account_id, include_this_id, module_id, remove_existing, reset_token, resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [customer_id]
   * @param {string} [include_this_id]
   * @param {boolean} [remove_existing]
   * @param {boolean} [reset_token]
   * @param {string} [resource]
   */
  getIntegrationDataGetSherweb({
    customer_id,
    include_this_id,
    remove_existing,
    reset_token,
    resource,
  }: {
    customer_id?: string
    include_this_id?: string
    remove_existing?: boolean
    reset_token?: boolean
    resource?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Sherweb',
      params: { customer_id, include_this_id, remove_existing, reset_token, resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [include_this_id]
   * @param {string} [next_url]
   * @param {boolean} [paginate]
   * @param {boolean} [remove_existing]
   * @param {string} [resource]
   */
  getIntegrationDataGetArrowSphere({
    include_this_id,
    next_url,
    paginate,
    remove_existing,
    resource,
  }: {
    include_this_id?: string
    next_url?: string
    paginate?: boolean
    remove_existing?: boolean
    resource?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ArrowSphere',
      params: { include_this_id, next_url, paginate, remove_existing, resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [include_this_id]
   * @param {boolean} [remove_existing]
   * @param {string} [resource]
   * @param {string} [tenant_id]
   */
  getIntegrationDataGetDickerData({
    include_this_id,
    remove_existing,
    resource,
    tenant_id,
  }: {
    include_this_id?: string
    remove_existing?: boolean
    resource?: string
    tenant_id?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/DickerData',
      params: { include_this_id, remove_existing, resource, tenant_id },
    })
  }

  postIntegrationDataImportSageBusinessCloud({
    sageBusinessCloudDetailsList,
  }: {
    sageBusinessCloudDetailsList: Array<SageBusinessCloudDetails>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: sageBusinessCloudDetailsList,
      path: '/IntegrationData/Import/SageBusinessCloud',
    })
  }

  getIntegrationDataGetSageBusinessCloud(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/SageBusinessCloud' })
  }

  postIntegrationDataImportExactOnline({
    exactDetailsList,
  }: {
    exactDetailsList: Array<ExactDetails>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: exactDetailsList,
      path: '/IntegrationData/Import/ExactOnline',
    })
  }

  getIntegrationDataGetExactOnline(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/ExactOnline' })
  }

  postIntegrationDataFormatJsonArray(): Promise<unknown> {
    return this.request({ method: 'post', path: '/IntegrationData/FormatJsonArray' })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [resource]
   */
  getIntegrationDataGetQuoter({ resource }: { resource?: string }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Quoter',
      params: { resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [resource]
   * @param {string} [uriparams]
   */
  getIntegrationDataGetHaloLink({
    resource,
    uriparams,
  }: {
    resource?: string
    uriparams?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/HaloLink',
      params: { resource, uriparams },
    })
  }

  postIntegrationDataUnlinkHaloLink({ items }: { items: Array<number> }): Promise<unknown> {
    return this.request({ method: 'post', data: items, path: '/IntegrationData/Unlink/HaloLink' })
  }

  postIntegrationDataSAMLIdPMetadata({ keyPair2 }: { keyPair2: KeyPair2 }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: keyPair2,
      path: '/IntegrationData/SAML/IdP/Metadata',
    })
  }

  getIntegrationDataSAMLSPMetadata(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/SAML/SP/Metadata' })
  }

  /**
   * @description . Requires authentication.
   * @param {number} [facebook_details_id]
   * @param {string} [resource]
   */
  getIntegrationDataGetFacebook({
    facebook_details_id,
    resource,
  }: {
    facebook_details_id?: number
    resource?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Facebook',
      params: { facebook_details_id, resource },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {boolean} [keyPair]
   * @param {string} [secondarydatatype]
   */
  getIntegrationDataGetConnectwiseControl({
    datatype,
    keyPair,
    secondarydatatype,
  }: {
    datatype?: string
    keyPair?: boolean
    secondarydatatype?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ConnectwiseControl',
      params: { datatype, keyPair, secondarydatatype },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [catalog]
   * @param {string} [datatype]
   * @param {string} [locale]
   * @param {number} [page_size]
   * @param {number} [pageno]
   * @param {string} [search]
   */
  getIntegrationDataGetEtilize({
    catalog,
    datatype,
    locale,
    page_size,
    pageno,
    search,
  }: {
    catalog?: string
    datatype?: string
    locale?: string
    page_size?: number
    pageno?: number
    search?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Etilize',
      params: { catalog, datatype, locale, page_size, pageno, search },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [alternate_sys_id]
   * @param {number} [customer_id]
   * @param {string} [datatype]
   * @param {number} [offset]
   * @param {string} [search]
   * @param {number} [supplier_id]
   */
  getIntegrationDataGetJiraServiceManagement({
    alternate_sys_id,
    customer_id,
    datatype,
    offset,
    search,
    supplier_id,
  }: {
    alternate_sys_id?: string
    customer_id?: number
    datatype?: string
    offset?: number
    search?: string
    supplier_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/JiraServiceManagement',
      params: { alternate_sys_id, customer_id, datatype, offset, search, supplier_id },
    })
  }

  postIntegrationDataMicrosoftTeamsManifest({
    teamsManifestCreate,
  }: {
    teamsManifestCreate: TeamsManifestCreate
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: teamsManifestCreate,
      path: '/IntegrationData/MicrosoftTeams/Manifest',
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [datatype]
   * @param {number} [offset]
   */
  getIntegrationDataGetLogicMonitor({
    datatype,
    offset,
  }: {
    datatype?: string
    offset?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/LogicMonitor',
      params: { datatype, offset },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [after]
   * @param {string} [datatype]
   * @param {boolean} [keypair]
   * @param {boolean} [pageinapi]
   * @param {string} [varname]
   */
  getIntegrationDataGetBarracuda({
    after,
    datatype,
    keypair,
    pageinapi,
    varname,
  }: {
    after?: string
    datatype?: string
    keypair?: boolean
    pageinapi?: boolean
    varname?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Barracuda',
      params: { after, datatype, keypair, pageinapi, varname },
    })
  }

  /**
   * @description . Requires authentication.
   * @param {string} [country]
   * @param {boolean} [dataOnly]
   * @param {string} [endpoint]
   * @param {number} [year]
   */
  getIntegrationDataGetHolidayAPI({
    country,
    dataOnly,
    endpoint,
    year,
  }: {
    country?: string
    dataOnly?: boolean
    endpoint?: string
    year?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/HolidayAPI',
      params: { country, dataOnly, endpoint, year },
    })
  }

  getIntegrationDataGetIcinga(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Icinga' })
  }

  getIntegrationDataGetConnectwiseRmm(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/ConnectwiseRmm' })
  }

  getIntegrationDataGetShopify(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Shopify' })
  }

  getIntegrationDataGetShopifyVerify(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/ShopifyVerify' })
  }

  getIntegrationDataGetXensam(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Xensam' })
  }

  getIntegrationDataGetDatagate(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Datagate' })
  }

  getIntegrationDataGetConfluence(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Confluence' })
  }

  postIntegrationDataPostConfluenceCreatewebhook({
    confluenceWebhookEndpoint,
  }: {
    confluenceWebhookEndpoint: ConfluenceWebhookEndpoint
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: confluenceWebhookEndpoint,
      path: '/IntegrationData/Post/Confluence/create-webhook',
    })
  }

  getIntegrationDataGetMail(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Mail' })
  }

  getIntegrationDataGetDeletedMail(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/DeletedMail' })
  }

  postIntegrationDataMoveMail({
    moveMailRequestList,
  }: {
    moveMailRequestList: Array<MoveMailRequest>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: moveMailRequestList,
      path: '/IntegrationData/Move/Mail',
    })
  }

  postIntegrationDataPostOpenAi({ actions }: { actions: Actions }): Promise<unknown> {
    return this.request({ method: 'post', data: actions, path: '/IntegrationData/Post/OpenAi' })
  }

  getIntegrationDataGetAmazonSeller(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/AmazonSeller' })
  }

  getIntegrationDataGetSnipeIT(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/SnipeIT' })
  }

  getIntegrationDataGetPrometheus(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Prometheus' })
  }

  postIntegrationDataImportFortnox({
    fortnoxDetailsList,
  }: {
    fortnoxDetailsList: Array<FortnoxDetails>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: fortnoxDetailsList,
      path: '/IntegrationData/Import/Fortnox',
    })
  }

  getIntegrationDataGetFortnox(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Fortnox' })
  }

  getIntegrationDataGetMattermost(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Mattermost' })
  }

  postIntegrationDataPostMattermostCreatewebhook({
    mattermostWebhook,
  }: {
    mattermostWebhook: MattermostWebhook
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: mattermostWebhook,
      path: '/IntegrationData/Post/Mattermost/create-webhook',
    })
  }

  postIntegrationDataPostMattermostDeletewebhook({ body }: { body: string }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: body,
      path: '/IntegrationData/Post/Mattermost/delete-webhook',
    })
  }

  postIntegrationDataPostMattermostSendwebhook({
    mattermostWebhookContent,
  }: {
    mattermostWebhookContent: MattermostWebhookContent
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: mattermostWebhookContent,
      path: '/IntegrationData/Post/Mattermost/send-webhook',
    })
  }

  getIntegrationDataGetWordpressCom(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/WordpressCom' })
  }

  getIntegrationDataGetWordpressOrg(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/WordpressOrg' })
  }

  getIntegrationDataGetDynatrace(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Dynatrace' })
  }

  postIntegrationDataImportMyob({
    mYOBDetailsList,
  }: {
    mYOBDetailsList: Array<MYOBDetails>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: mYOBDetailsList,
      path: '/IntegrationData/Import/Myob',
    })
  }

  getIntegrationDataGetMyob(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Myob' })
  }

  getIntegrationDataGetGoogleBusiness(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/GoogleBusiness' })
  }

  getIntegrationDataGetVMWorkspace(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/VMWorkspace' })
  }

  getIntegrationDataBigPandaGetDeviceList(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/BigPanda/GetDeviceList' })
  }

  getIntegrationDataGetTanium(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Tanium' })
  }

  getIntegrationDataGetSplashtop(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Splashtop' })
  }

  getIntegrationDataGetSlack(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Slack' })
  }

  getIntegrationDataGetGoCardless(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/GoCardless' })
  }

  getIntegrationDataGetGoCardlessPayments(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/GoCardless/Payments' })
  }

  getIntegrationDataGetAvalara(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Avalara' })
  }

  getIntegrationDataGetMeraki(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/Meraki' })
  }

  getIntegrationDataGetMicrosoftSkus(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationData/Get/MicrosoftSkus' })
  }
}
