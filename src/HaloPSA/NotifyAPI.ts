/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AddigyAlert} */
export type AddigyAlert = schemas['AddigyAlert']
/** {@link AdobeAcrobatWebhook} */
export type AdobeAcrobatWebhook = schemas['AdobeAcrobatWebhook']
/** {@link AteraAlert} */
export type AteraAlert = schemas['AteraAlert']
/** {@link AutomateAlert} */
export type AutomateAlert = schemas['AutomateAlert']
/** {@link AuvikAlert} */
export type AuvikAlert = schemas['AuvikAlert']
/** {@link AzureMonitorWebhook} */
export type AzureMonitorWebhook = schemas['AzureMonitorWebhook']
/** {@link DattoRMMWebhook} */
export type DattoRMMWebhook = schemas['DattoRMMWebhook']
/** {@link DevOpsWebhook} */
export type DevOpsWebhook = schemas['DevOpsWebhook']
/** {@link Device42Webhook} */
export type Device42Webhook = schemas['Device42Webhook']
/** {@link DynatraceWebhook} */
export type DynatraceWebhook = schemas['DynatraceWebhook']
/** {@link FacebookWebhook} */
export type FacebookWebhook = schemas['FacebookWebhook']
/** {@link IMRWebhook} */
export type IMRWebhook = schemas['IMRWebhook']
/** {@link LogicMonitorWebhook} */
export type LogicMonitorWebhook = schemas['LogicMonitorWebhook']
/** {@link MerakiWebhook} */
export type MerakiWebhook = schemas['MerakiWebhook']
/** {@link NCentralAlert} */
export type NCentralAlert = schemas['NCentralAlert']
/** {@link NinjaAlert} */
export type NinjaAlert = schemas['NinjaAlert']
/** {@link NinjaWebhook} */
export type NinjaWebhook = schemas['NinjaWebhook']
/** {@link OrionAlert} */
export type OrionAlert = schemas['OrionAlert']
/** {@link ProcessStreetWebhook} */
export type ProcessStreetWebhook = schemas['ProcessStreetWebhook']
/** {@link QBOWebhookEventEntity} */
export type QBOWebhookEventEntity = schemas['QBOWebhookEventEntity']
/** {@link SOCWebhook} */
export type SOCWebhook = schemas['SOCWebhook']
/** {@link ServiceNowAction} */
export type ServiceNowAction = schemas['ServiceNowAction']
/** {@link SlackEventWebhook} */
export type SlackEventWebhook = schemas['SlackEventWebhook']
/** {@link SlackInteractivity} */
export type SlackInteractivity = schemas['SlackInteractivity']
/** {@link SnelStartWebhook} */
export type SnelStartWebhook = schemas['SnelStartWebhook']
/** {@link SyncroAlert} */
export type SyncroAlert = schemas['SyncroAlert']
/** {@link TwitterWebhookContent} */
export type TwitterWebhookContent = schemas['TwitterWebhookContent']
/** {@link XeroWebhookEvent} */
export type XeroWebhookEvent = schemas['XeroWebhookEvent']
/** {@link ZabbixWebhook} */
export type ZabbixWebhook = schemas['ZabbixWebhook']

/**
 * @module NotifyAPI
 */

/**
 * Notify module
 * @public
 */
export class NotifyAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  postNotifyPagerDuty(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/PagerDuty',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyTwilio(file: File): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Twilio',
      data: file,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyJiraServiceManagement(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/JiraServiceManagement',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyProcessStreet(processStreetWebhook: ProcessStreetWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/ProcessStreet',
      data: processStreetWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyWhatsApp(file: File): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/WhatsApp',
      data: file,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyGithub(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/github',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyLogicMonitor(logicMonitorWebhook: LogicMonitorWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/LogicMonitor',
      data: logicMonitorWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifySite24x7(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/site24x7',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyIcinga(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/icinga',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyConfluence(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Confluence',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyTrustpilot(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/trustpilot',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyDattoRMMAlerts(dattoRMMWebhook: DattoRMMWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/DattoRMM/Alerts',
      data: dattoRMMWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyZabbix(zabbixWebhook: ZabbixWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Zabbix',
      data: zabbixWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  getNotifyConnectwiseRmm(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Notify/ConnectwiseRmm',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyPrometheus(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/prometheus',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyServicenowticket(object: object): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/servicenowticket',
      data: object,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyServicenowaction(serviceNowAction: ServiceNowAction): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/servicenowaction',
      data: serviceNowAction,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyDynatrace(dynatraceWebhook: DynatraceWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Dynatrace',
      data: dynatraceWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyTeamsChatMessage(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Teams/chatMessage',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyTeamsLifecycleNotification(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Teams/lifecycleNotification',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyLapSafe(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/LapSafe',
    })
  }

  /**
   *
   *
   * @param {number} tenant
   * @param {string} secret
   */
  getNotifyAdobeAcrobattenantsecret(tenant: number, secret: string): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Notify/AdobeAcrobat/${tenant}/${secret}`,
    })
  }

  /**
   *
   *
   * @param {number} tenant
   * @param {string} secret
   */
  postNotifyAdobeAcrobattenantsecret(
    adobeAcrobatWebhook: AdobeAcrobatWebhook,
    tenant: number,
    secret: string,
  ): Promise<any> {
    return this.request({
      method: 'post',
      data: adobeAcrobatWebhook,
      path: `/Notify/AdobeAcrobat/${tenant}/${secret}`,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyGotoresolve(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/gotoresolve',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyIngrammicroreseller(iMRWebhook: IMRWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/ingrammicroreseller',
      data: iMRWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotify(object: object): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify',
      data: object,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyProcess(file: File): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/process',
      data: file,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifySolarWindsOrion(orionAlert: OrionAlert): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/SolarWindsOrion',
      data: orionAlert,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyDevice42(device42Webhook: Device42Webhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Device42',
      data: device42Webhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifySplunkOnCall(sOCWebhook: SOCWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/SplunkOnCall',
      data: sOCWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyAtera(ateraAlert: AteraAlert): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Atera',
      data: ateraAlert,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyAteraIntegrator(ateraAlert: AteraAlert): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Atera/Integrator',
      data: ateraAlert,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyMeraki(merakiWebhook: MerakiWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Meraki',
      data: merakiWebhook,
    })
  }

  /**
   *
   *
   * @param {boolean} ignoreAuth
   */
  postNotifyNinja(ninjaAlert: NinjaAlert, ignoreAuth: boolean): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Ninja',
      data: ninjaAlert,
      params: {
        ignoreAuth,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyNinjaAlerts(ninjaWebhook: NinjaWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Ninja/Alerts',
      data: ninjaWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifySnelStart(snelStartWebhook: SnelStartWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/SnelStart',
      data: snelStartWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyAzureMonitor(azureMonitorWebhook: AzureMonitorWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/AzureMonitor',
      data: azureMonitorWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifySyncro(syncroAlert: SyncroAlert): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Syncro',
      data: syncroAlert,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyAutomate(automateAlert: AutomateAlert): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Automate',
      data: automateAlert,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyAutomateIntegrator(automateAlert: AutomateAlert): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Automate/Integrator',
      data: automateAlert,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyJira(object: object): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Jira',
      data: object,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyAzureDevOps(devOpsWebhook: DevOpsWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/AzureDevOps',
      data: devOpsWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyAzureDevOpsIntegrator(devOpsWebhook: DevOpsWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/AzureDevOps/Integrator',
      data: devOpsWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyAuvik(auvikAlert: AuvikAlert): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Auvik',
      data: auvikAlert,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyXeroVerify(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Xero/Verify',
    })
  }

  /**
   *
   *
   * @param {boolean} ignoreEventCheck
   */
  postNotifyXero(xeroWebhookEvent: XeroWebhookEvent, ignoreEventCheck: boolean): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Xero',
      data: xeroWebhookEvent,
      params: {
        ignoreEventCheck,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyStripe(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Stripe',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyQuickbooksOnlineVerify(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/QuickbooksOnline/Verify',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyQuickBooksOnline(qBOWebhookEventEntity: QBOWebhookEventEntity): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/QuickBooksOnline',
      data: qBOWebhookEventEntity,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyAddigy(addigyAlert: AddigyAlert): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Addigy',
      data: addigyAlert,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyAddigyIntegrator(addigyAlert: AddigyAlert): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Addigy/Integrator',
      data: addigyAlert,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyPartnercenter(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/partner-center',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyHalowebhook(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/halo-webhook',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyUatrestore(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/uat-restore',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyNCentral(nCentralAlert: NCentralAlert): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/N-Central',
      data: nCentralAlert,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifySlackEvents(slackEventWebhook: SlackEventWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Slack/Events',
      data: slackEventWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifySlack(slackInteractivity: SlackInteractivity): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Slack',
      data: slackInteractivity,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyQuoter(file: File): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Quoter',
      data: file,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyNagios(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Nagios',
    })
  }

  /**
   * 
   * 
   
   */
  getNotifyFacebook(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Notify/Facebook',
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyFacebook(facebookWebhook: FacebookWebhook): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Facebook',
      data: facebookWebhook,
    })
  }

  /**
   * 
   * 
   
   */
  postNotifyTwitter(twitterWebhookContent: TwitterWebhookContent): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notify/Twitter',
      data: twitterWebhookContent,
    })
  }
}
