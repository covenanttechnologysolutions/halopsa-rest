/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ActionReaction} */
export type ActionReaction = schemas['ActionReaction']
/** {@link Actions} */
export type Actions = schemas['Actions']

/**
 * @module ActionsAPI
 */

/**
 * Actions module
 * @public
 */
export class ActionsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Actions
   * @description Use this to return multiple Actions.<br>
				Requires authentication.
   * @param {string} [actoutcome] (string) Filter on the name of the action.
   * @param {number} [actoutcomenum] (int) Filter on the system field ID.
   * @param {boolean} [agentonly] (bool) Only get actions done by Agents.
   * @param {boolean} [conversationonly] (bool) Only get actions relating to the Agent to End User conversation.
   * @param {number} [count] (int) Number of actions to return in the response.
   * @param {string} [datesearch] 
   * @param {string} [enddate] (string) Specifies the search parameter in which actions will have occured before this date.
   * @param {boolean} [excludebilling] (bool) Excludes any actions associated with billing (e.g. Send Invoice by Email).
   * @param {boolean} [excludehiddenfrominternalit] (bool) Excludes any action marked at action level to be hidden from Agents with Client Group set.
   * @param {boolean} [excludeprivate] (bool) Only get public actions.
   * @param {boolean} [excludesys] (bool) Exclude system actions.
   * @param {boolean} [importantonly] (bool) Only get important actions.
   * @param {boolean} [importanttop] (bool) Orders the response by important actions first.
   * @param {boolean} [includeagentdetails] (bool) Include agent details in the response.
   * @param {boolean} [includeattachments] (bool) Include attachment details in the response.
   * @param {boolean} [includefacebookfields] 
   * @param {boolean} [includehtmlemail] (bool) Include the action email HTML as part of the response.
   * @param {boolean} [includehtmlnote] (bool) Include the action note HTML as part of the response.
   * @param {boolean} [includenonactionattachments] 
   * @param {boolean} [includetranslations] (bool) Includes the translation count in the response.
   * @param {boolean} [includetwitterfields] (bool) Include Twitter fields in the response.
   * @param {boolean} [intraticketonly] (bool) Get actions that are part of the .
   * @param {boolean} [ischildnotes] (bool) Only get actions from child tickets.
   * @param {boolean} [isrelatednotes] (bool) Only get actions from related tickets.
   * @param {boolean} [slaonly] (bool) Only get SLA hold and release actions.
   * @param {string} [startdate] (string) Specifies the search parameter in which actions will have occured after this date.
   * @param {boolean} [supplieronly] (bool) Only get actions relating to Suppliers.
   * @param {number} [ticket_id] (int) The ID of the Ticket to get actions for.
   * @param {boolean} [timeentriesonly] 
   */
  getActions({
    actoutcome,
    actoutcomenum,
    agentonly,
    conversationonly,
    count,
    datesearch,
    enddate,
    excludebilling,
    excludehiddenfrominternalit,
    excludeprivate,
    excludesys,
    importantonly,
    importanttop,
    includeagentdetails,
    includeattachments,
    includefacebookfields,
    includehtmlemail,
    includehtmlnote,
    includenonactionattachments,
    includetranslations,
    includetwitterfields,
    intraticketonly,
    ischildnotes,
    isrelatednotes,
    slaonly,
    startdate,
    supplieronly,
    ticket_id,
    timeentriesonly,
  }: {
    actoutcome?: string
    actoutcomenum?: number
    agentonly?: boolean
    conversationonly?: boolean
    count?: number
    datesearch?: string
    enddate?: string
    excludebilling?: boolean
    excludehiddenfrominternalit?: boolean
    excludeprivate?: boolean
    excludesys?: boolean
    importantonly?: boolean
    importanttop?: boolean
    includeagentdetails?: boolean
    includeattachments?: boolean
    includefacebookfields?: boolean
    includehtmlemail?: boolean
    includehtmlnote?: boolean
    includenonactionattachments?: boolean
    includetranslations?: boolean
    includetwitterfields?: boolean
    intraticketonly?: boolean
    ischildnotes?: boolean
    isrelatednotes?: boolean
    slaonly?: boolean
    startdate?: string
    supplieronly?: boolean
    ticket_id?: number
    timeentriesonly?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Actions',
      params: {
        actoutcome,
        actoutcomenum,
        agentonly,
        conversationonly,
        count,
        datesearch,
        enddate,
        excludebilling,
        excludehiddenfrominternalit,
        excludeprivate,
        excludesys,
        importantonly,
        importanttop,
        includeagentdetails,
        includeattachments,
        includefacebookfields,
        includehtmlemail,
        includehtmlnote,
        includenonactionattachments,
        includetranslations,
        includetwitterfields,
        intraticketonly,
        ischildnotes,
        isrelatednotes,
        slaonly,
        startdate,
        supplieronly,
        ticket_id,
        timeentriesonly,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postActions({ actions }: { actions: Array<Actions> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Actions',
      data: actions,
    })
  }

  /**
   * @summary Get one Actions
   * @description Use this to return a single instance of Actions.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [agentonly] (bool) Only get actions done by Agents.
   * @param {boolean} [emailonly] (bool) Only get email actions.
   * @param {boolean} [includedetails] (bool) Include extra objects in the response.
   * @param {boolean} [includeemail] (bool) Include the plain text and HTML email body in the response.
   * @param {boolean} [mostrecent] (bool) Get the most recent action on the ticket.
   * @param {boolean} [nonsystem] (bool) Only get non system actions.
   * @param {boolean} [penultimate] (bool) Only get actions that are not the most recent.
   * @param {number} [ticket_id] (int) The ID of the Ticket to get the action for.
   */
  getActionsById({
    id,
    agentonly,
    emailonly,
    includedetails,
    includeemail,
    mostrecent,
    nonsystem,
    penultimate,
    ticket_id,
  }: {
    id: number
    agentonly?: boolean
    emailonly?: boolean
    includedetails?: boolean
    includeemail?: boolean
    mostrecent?: boolean
    nonsystem?: boolean
    penultimate?: boolean
    ticket_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Actions/${id}`,
      params: {
        agentonly,
        emailonly,
        includedetails,
        includeemail,
        mostrecent,
        nonsystem,
        penultimate,
        ticket_id,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteActionsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Actions/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postActionsReaction({ actionReaction }: { actionReaction: ActionReaction }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Actions/reaction',
      data: actionReaction,
    })
  }

  /**
   * 
   * 
   
   */
  postActionsReview({ actions }: { actions: Array<Actions> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Actions/Review',
      data: actions,
    })
  }
}
