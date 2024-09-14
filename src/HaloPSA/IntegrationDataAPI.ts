/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
/** {@link XeroDetails} */
export type XeroDetails = schemas['XeroDetails']

/**
 * @module IntegrationDataAPI
 */

/**
 * IntegrationData module
 * @public
 */
export class IntegrationDataAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   */
  getIntegrationDataGetNewRelic({ datatype }: { datatype?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/NewRelic',
      params: {
        datatype,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/KaseyaVSA',
      params: {
        datatype,
        extrafilter,
        keyPair,
        page,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [method] 
   */
  getIntegrationDataGetZabbix({ method }: { method?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Zabbix',
      params: {
        method,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Giacom',
      params: {
        include_this_id,
        remove_existing,
        resource,
        sub_resource,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Rhipe',
      params: {
        include_this_id,
        remove_existing,
        resource,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/TechData',
      params: {
        include_this_id,
        remove_existing,
        resource,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/intY',
      params: {
        include_this_id,
        remove_existing,
        resource,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/CloudMarketplace',
      params: {
        account_id,
        include_this_id,
        module_id,
        remove_existing,
        reset_token,
        resource,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Sherweb',
      params: {
        customer_id,
        include_this_id,
        remove_existing,
        reset_token,
        resource,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ArrowSphere',
      params: {
        include_this_id,
        next_url,
        paginate,
        remove_existing,
        resource,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/DickerData',
      params: {
        include_this_id,
        remove_existing,
        resource,
        tenant_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportSageBusinessCloud({
    sageBusinessCloudDetails,
  }: {
    sageBusinessCloudDetails: Array<SageBusinessCloudDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/SageBusinessCloud',
      data: sageBusinessCloudDetails,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetSageBusinessCloud({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/SageBusinessCloud',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportExactOnline({
    exactDetails,
  }: {
    exactDetails: Array<ExactDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/ExactOnline',
      data: exactDetails,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetExactOnline({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ExactOnline',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataFormatJsonArray({}: {}): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/FormatJsonArray',
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [resource] 
   */
  getIntegrationDataGetQuoter({ resource }: { resource?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Quoter',
      params: {
        resource,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [resource] 
   * @param {string} [uriparams] 
   */
  getIntegrationDataGetHaloLink({
    resource,
    uriparams,
  }: {
    resource?: string
    uriparams?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/HaloLink',
      params: {
        resource,
        uriparams,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataUnlinkHaloLink({ listNumber }: { listNumber: number }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Unlink/HaloLink',
      data: listNumber,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataSAMLIdPMetadata({ keyPair2 }: { keyPair2: KeyPair2 }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/SAML/IdP/Metadata',
      data: keyPair2,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataSAMLSPMetadata({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/SAML/SP/Metadata',
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {number} [facebook_details_id] 
   * @param {string} [resource] 
   */
  getIntegrationDataGetFacebook({
    facebook_details_id,
    resource,
  }: {
    facebook_details_id?: number
    resource?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Facebook',
      params: {
        facebook_details_id,
        resource,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ConnectwiseControl',
      params: {
        datatype,
        keyPair,
        secondarydatatype,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Etilize',
      params: {
        catalog,
        datatype,
        locale,
        page_size,
        pageno,
        search,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/JiraServiceManagement',
      params: {
        alternate_sys_id,
        customer_id,
        datatype,
        offset,
        search,
        supplier_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataMicrosoftTeamsManifest({
    teamsManifestCreate,
  }: {
    teamsManifestCreate: TeamsManifestCreate
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/MicrosoftTeams/Manifest',
      data: teamsManifestCreate,
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   * @param {number} [offset] 
   */
  getIntegrationDataGetLogicMonitor({
    datatype,
    offset,
  }: {
    datatype?: string
    offset?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/LogicMonitor',
      params: {
        datatype,
        offset,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Barracuda',
      params: {
        after,
        datatype,
        keypair,
        pageinapi,
        varname,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/HolidayAPI',
      params: {
        country,
        dataOnly,
        endpoint,
        year,
      },
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetIcinga({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Icinga',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetConnectwiseRmm({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ConnectwiseRmm',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetShopify({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Shopify',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetShopifyVerify({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ShopifyVerify',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetXensam({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Xensam',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetDatagate({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Datagate',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetConfluence({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Confluence',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostConfluenceCreatewebhook({
    confluenceWebhookEndpoint,
  }: {
    confluenceWebhookEndpoint: ConfluenceWebhookEndpoint
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/Confluence/create-webhook',
      data: confluenceWebhookEndpoint,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetMail({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Mail',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetDeletedMail({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/DeletedMail',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataMoveMail({
    moveMailRequest,
  }: {
    moveMailRequest: Array<MoveMailRequest>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Move/Mail',
      data: moveMailRequest,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostOpenAi({ actions }: { actions: Actions }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/OpenAi',
      data: actions,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetAmazonSeller({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/AmazonSeller',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetSnipeIT({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/SnipeIT',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetPrometheus({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Prometheus',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportFortnox({
    fortnoxDetails,
  }: {
    fortnoxDetails: Array<FortnoxDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/Fortnox',
      data: fortnoxDetails,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetFortnox({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Fortnox',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetMattermost({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Mattermost',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostMattermostCreatewebhook({
    mattermostWebhook,
  }: {
    mattermostWebhook: MattermostWebhook
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/Mattermost/create-webhook',
      data: mattermostWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostMattermostDeletewebhook({ string }: { string: string }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/Mattermost/delete-webhook',
      data: string,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostMattermostSendwebhook({
    mattermostWebhookContent,
  }: {
    mattermostWebhookContent: MattermostWebhookContent
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/Mattermost/send-webhook',
      data: mattermostWebhookContent,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetWordpressCom({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/WordpressCom',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetWordpressOrg({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/WordpressOrg',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetDynatrace({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Dynatrace',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportMyob({
    mYOBDetails,
  }: {
    mYOBDetails: Array<MYOBDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/Myob',
      data: mYOBDetails,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetMyob({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Myob',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetGoogleBusiness({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/GoogleBusiness',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetVMWorkspace({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/VMWorkspace',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataBigPandaGetDeviceList({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/BigPanda/GetDeviceList',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetTanium({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Tanium',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetSplashtop({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Splashtop',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetSlack({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Slack',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetGoCardless({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/GoCardless',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetGoCardlessPayments({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/GoCardless/Payments',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetAvalara({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Avalara',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetMeraki({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Meraki',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportXero({
    xeroDetails,
  }: {
    xeroDetails: Array<XeroDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/Xero',
      data: xeroDetails,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetXero({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Xero',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataSendXero({ invoiceHeader }: { invoiceHeader: InvoiceHeader }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Send/Xero',
      data: invoiceHeader,
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {boolean} [testOnly] 
   */
  getIntegrationDataGetPRTG({ testOnly }: { testOnly?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/PRTG',
      params: {
        testOnly,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Datto',
      params: {
        dataType,
        fetchSites,
        keyPair,
      },
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetServiceNow({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ServiceNow',
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ServiceNowIntegration',
      params: {
        alternate_sys_id,
        customer_id,
        datatype,
        offset,
        search,
        updateddate,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   */
  getIntegrationDataGetSplunkOnCall({ datatype }: { datatype?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/SplunkOnCall',
      params: {
        datatype,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataCreateIncidentSplunkOnCall({
    sOCCreateIncident,
  }: {
    sOCCreateIncident: SOCCreateIncident
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/CreateIncident/SplunkOnCall',
      data: sOCCreateIncident,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportQuickBooksOnline({
    quickBooksDetails,
  }: {
    quickBooksDetails: Array<QuickBooksDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/QuickBooksOnline',
      data: quickBooksDetails,
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
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
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   * @param {boolean} [keyPair] 
   */
  getIntegrationDataGetDevice42({
    datatype,
    keyPair,
  }: {
    datatype?: string
    keyPair?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Device42',
      params: {
        datatype,
        keyPair,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   * @param {number} [page] 
   */
  getIntegrationDataGetConnectWise({
    datatype,
    page,
  }: {
    datatype?: string
    page?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ConnectWise',
      params: {
        datatype,
        page,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postIntegrationDataAdjustQtyMicrosoftCSP({
    subscriptionQuantityChange,
  }: {
    subscriptionQuantityChange: SubscriptionQuantityChange
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/AdjustQty/MicrosoftCSP',
      data: subscriptionQuantityChange,
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   * @param {string} [nexturl] 
   */
  getIntegrationDataGetAutotask({
    datatype,
    nexturl,
  }: {
    datatype?: string
    nexturl?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Autotask',
      params: {
        datatype,
        nexturl,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Atera',
      params: {
        datatype,
        keyPair,
        page,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
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

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Okta',
      params: {
        datatype,
        override_mapping_id,
        validate,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportKashflow({
    kashflowDetails,
  }: {
    kashflowDetails: Array<KashflowDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/Kashflow',
      data: kashflowDetails,
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   * @param {number} [tenantid] 
   */
  getIntegrationDataGetKashflow({
    datatype,
    tenantid,
  }: {
    datatype?: string
    tenantid?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Kashflow',
      params: {
        datatype,
        tenantid,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [callbackurl] 
   * @param {string} [datatype] 
   */
  getIntegrationDataGetTwitter({
    callbackurl,
    datatype,
  }: {
    callbackurl?: string
    datatype?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Twitter',
      params: {
        callbackurl,
        datatype,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataExportLansweeper({
    lansweeperStartExport,
  }: {
    lansweeperStartExport: LansweeperStartExport
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Export/Lansweeper',
      data: lansweeperStartExport,
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Lansweeper',
      params: {
        datatype,
        exportid,
        exportUrl,
        halositeid,
        siteid,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [searchString] 
   * @param {boolean} [testOnly] 
   */
  getIntegrationDataGetInteract({
    searchString,
    testOnly,
  }: {
    searchString?: string
    testOnly?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Interact',
      params: {
        searchString,
        testOnly,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [accountid] 
   * @param {string} [datatype] 
   */
  getIntegrationDataGetDynamicsCRM({
    accountid,
    datatype,
  }: {
    accountid?: string
    datatype?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/DynamicsCRM',
      params: {
        accountid,
        datatype,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/AzureAD',
      params: {
        connectionid,
        datatype,
        mappingid,
        tenantid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportBusinessCentral({
    businessCentralDetails,
  }: {
    businessCentralDetails: Array<BusinessCentralDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/BusinessCentral',
      data: businessCentralDetails,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetBusinessCentral({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/BusinessCentral',
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/NinjaRMM',
      params: {
        datatype,
        organizationid,
        page,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   * @param {number} [gfisiteid] 
   */
  getIntegrationDataGetSolarWindsRMM({
    datatype,
    gfisiteid,
  }: {
    datatype?: string
    gfisiteid?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/SolarWindsRMM',
      params: {
        datatype,
        gfisiteid,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Intune',
      params: {
        areaAzureTenant,
        connectionid,
        datatype,
        doPaginate,
        nextLink,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/PagerDuty',
      params: {
        apikeyoverride,
        dataOnly,
        datatype,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/SalesMailbox',
      params: {
        connectionid,
        datatype,
        mailboxname,
        mappingid,
      },
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  getIntegrationDataGetSalesMailboxById({ id }: { id: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/IntegrationData/Get/SalesMailbox/${id}`,
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   */
  getIntegrationDataGetLogMeIn({ datatype }: { datatype?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/LogMeIn',
      params: {
        datatype,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   */
  getIntegrationDataGetGoogleCalendars({ datatype }: { datatype?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/GoogleCalendars',
      params: {
        datatype,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/GoogleWorkplace',
      params: {
        datatype,
        mappingid,
        nexttoken,
        paginate,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/NCentral',
      params: {
        accountid,
        customerid,
        dataOnly,
        datatype,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportSnelStart({}: {}): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/SnelStart',
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   */
  getIntegrationDataGetSnelStart({ datatype }: { datatype?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/SnelStart',
      params: {
        datatype,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/ITGlue',
      params: {
        datatype,
        organizationid,
        returntype,
        typeid,
        updateddate,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {boolean} [dataOnly] 
   * @param {string} [endpoint] 
   */
  getIntegrationDataGetJamf({
    dataOnly,
    endpoint,
  }: {
    dataOnly?: boolean
    endpoint?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Jamf',
      params: {
        dataOnly,
        endpoint,
      },
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataValidateJira({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Validate/Jira',
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Jira',
      params: {
        dataOnly,
        dataType,
        haloProduct,
        issueTypes,
        productId,
        search,
      },
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataSearchJira({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Search/Jira',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataLinkJira({ linkIssue }: { linkIssue: Array<LinkIssue> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Link/Jira',
      data: linkIssue,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataUnlinkJira({ linkIssue }: { linkIssue: Array<LinkIssue> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Unlink/Jira',
      data: linkIssue,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportJira({
    jiraDetails,
  }: {
    jiraDetails: Array<JiraDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/Jira',
      data: jiraDetails,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportBeyondTrust({}: {}): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/BeyondTrust',
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/DattoCommerce',
      params: {
        connectionid,
        datatype,
        page,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/AzureSentinel',
      params: {
        connectionid,
        datatype,
        resourcegroupname,
        subscriptionid,
        workspacename,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Syncro',
      params: {
        dataOnly,
        datatype,
        page,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Domotz',
      params: {
        endpoint,
        returntype,
        validate,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/GoToAssist',
      params: {
        customeremail,
        customername,
        datatype,
        limit,
        offset,
        ticketid,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Automate',
      params: {
        dataType,
        extraFilter,
        keyPair,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Snow',
      params: {
        accountid,
        dataOnly,
        datatype,
        nextlink,
        paginate,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/DevOps',
      params: {
        data_only,
        haloProduct,
        instance_id,
        product_id,
        resource,
        search,
        workItemTypes,
      },
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataSearchDevOps({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Search/DevOps',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataImportDevOps({
    azureDevOpsDetails,
  }: {
    azureDevOpsDetails: Array<AzureDevOpsDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/DevOps',
      data: azureDevOpsDetails,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataLinkDevOps({
    linkWorkItem,
  }: {
    linkWorkItem: Array<LinkWorkItem>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Link/DevOps',
      data: linkWorkItem,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataUnlinkDevOps({
    linkWorkItem,
  }: {
    linkWorkItem: Array<LinkWorkItem>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Unlink/DevOps',
      data: linkWorkItem,
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
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
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/HubSpot',
      params: {
        keypair,
        nextlink,
        objecttype,
        paginate,
        resource,
        search,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Qualys',
      params: {
        mappingid,
        offset,
        paginate,
        resource,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Passportal',
      params: {
        clientid,
        documenttype,
        endpoint,
        pagenum,
        returntype,
        validate,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [datatype] 
   * @param {string} [locid] 
   */
  postIntegrationDataImportIntacct({
    datatype,
    locid,
  }: {
    datatype?: string
    locid?: string
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/Intacct',
      params: {
        datatype,
        locid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetIntacct({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Intacct',
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Liongard',
      params: {
        datatype,
        keyPair,
        page,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostLiongard({ area }: { area: Area }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/Liongard',
      data: area,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostStripeCreatewebhook({
    stripeWebhookEndpoint,
  }: {
    stripeWebhookEndpoint: StripeWebhookEndpoint
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/Stripe/create-webhook',
      data: stripeWebhookEndpoint,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostStripeCreatesetupintent({
    stripePaymentIntentCreateRequest,
  }: {
    stripePaymentIntentCreateRequest: StripePaymentIntentCreateRequest
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/Stripe/create-setup-intent',
      data: stripePaymentIntentCreateRequest,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostStripeCreatepaymentintent({
    stripePaymentIntentCreateRequest,
  }: {
    stripePaymentIntentCreateRequest: StripePaymentIntentCreateRequest
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/Stripe/create-payment-intent',
      data: stripePaymentIntentCreateRequest,
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostStripeUpdateinvoicepayment({
    stripeUpdateInvoicePaymentRequest,
  }: {
    stripeUpdateInvoicePaymentRequest: StripeUpdateInvoicePaymentRequest
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/Stripe/update-invoice-payment',
      data: stripeUpdateInvoicePaymentRequest,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetStripe({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Stripe',
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationDataPostStripeCreateportalsession({
    stripeCreatePortalSession,
  }: {
    stripeCreatePortalSession: StripeCreatePortalSession
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Post/Stripe/create-portal-session',
      data: stripeCreatePortalSession,
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
   * @param {string} [endpoint] 
   * @param {string} [returntype] 
   * @param {boolean} [validate] 
   */
  getIntegrationDataGetAddigy({
    endpoint,
    returntype,
    validate,
  }: {
    endpoint?: string
    returntype?: string
    validate?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Addigy',
      params: {
        endpoint,
        returntype,
        validate,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Freshdesk',
      params: {
        datatype,
        page,
        parent_id,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Pax8',
      params: {
        include_this_id,
        page,
        paginate,
        remove_existing,
        resource,
        third_party_id,
      },
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postIntegrationDataImportIngramMicroSubscriptions({
    licence_List,
  }: {
    licence_List: Array<Licence_List>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationData/Import/IngramMicro/Subscriptions',
      data: licence_List,
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetStreamOneIon({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/StreamOneIon',
    })
  }

  /**
   * 
   * 
   
   */
  getIntegrationDataGetSynnex({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Synnex',
    })
  }

  /**
   * 
   * @description .<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationData/Get/Salesforce',
      params: {
        endpoint,
        keypair,
        nextlink,
        resource,
      },
    })
  }
}
