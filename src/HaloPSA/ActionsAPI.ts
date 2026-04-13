/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ActionReaction} */
export type ActionReaction = schemas['ActionReaction']
/** {@link Actions} */
export type Actions = schemas['Actions']
/** {@link Actions_View} */
export type Actions_View = schemas['Actions_View']

/**
 * @module ActionsAPI
 */

/**
 * Actions module
 * @public
 */
export class ActionsAPI extends BaseAPI {
  /**
   * @summary List of Actions
   * @description Use this to return multiple Actions. Requires authentication.
   * @param {string} [actoutcome] Filter on the name of the action.
   * @param {number} [actoutcomenum] Filter on the system field ID.
   * @param {boolean} [agentonly] Only get actions done by Agents.
   * @param {boolean} [conversationonly] Only get actions relating to the Agent to End User conversation.
   * @param {number} [count] Number of actions to return in the response.
   * @param {string} [datesearch]
   * @param {string} [enddate] Specifies the search parameter in which actions will have occured before this date.
   * @param {boolean} [excludebilling] Excludes any actions associated with billing (e.g. Send Invoice by Email).
   * @param {boolean} [excludehiddenfrominternalit] Excludes any action marked at action level to be hidden from Agents with Client Group set.
   * @param {boolean} [excludeprivate] Only get public actions.
   * @param {boolean} [excludesys] Exclude system actions.
   * @param {boolean} [importantonly] Only get important actions.
   * @param {boolean} [importanttop] Orders the response by important actions first.
   * @param {boolean} [includeagentdetails] Include agent details in the response.
   * @param {boolean} [includeattachments] Include attachment details in the response.
   * @param {boolean} [includefacebookfields]
   * @param {boolean} [includehtmlemail] Include the action email HTML as part of the response.
   * @param {boolean} [includehtmlnote] Include the action note HTML as part of the response.
   * @param {boolean} [includenonactionattachments]
   * @param {boolean} [includetranslations] Includes the translation count in the response.
   * @param {boolean} [includetwitterfields] Include Twitter fields in the response.
   * @param {boolean} [intraticketonly] Get actions that are part of the .
   * @param {boolean} [ischildnotes] Only get actions from child tickets.
   * @param {boolean} [isrelatednotes] Only get actions from related tickets.
   * @param {boolean} [slaonly] Only get SLA hold and release actions.
   * @param {string} [startdate] Specifies the search parameter in which actions will have occured after this date.
   * @param {boolean} [supplieronly] Only get actions relating to Suppliers.
   * @param {number} [ticket_id] The ID of the Ticket to get actions for.
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
  }): Promise<Actions_View> {
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

  postActions({ actionsList }: { actionsList: Array<Actions> }): Promise<Actions> {
    return this.request({ method: 'post', data: actionsList, path: '/Actions' })
  }

  /**
   * @summary Get one Actions
   * @description Use this to return a single instance of Actions. Requires authentication.
   * @param {number} id
   * @param {boolean} [agentonly] Only get actions done by Agents.
   * @param {boolean} [emailonly] Only get email actions.
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {boolean} [includeemail] Include the plain text and HTML email body in the response.
   * @param {boolean} [mostrecent] Get the most recent action on the ticket.
   * @param {boolean} [nonsystem] Only get non system actions.
   * @param {boolean} [penultimate] Only get actions that are not the most recent.
   * @param {number} [ticket_id] The ID of the Ticket to get the action for.
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
  }): Promise<Actions> {
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
   * @param {number} id
   */
  deleteActionsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Actions/${id}` })
  }

  postActionsReaction({ actionReaction }: { actionReaction: ActionReaction }): Promise<unknown> {
    return this.request({ method: 'post', data: actionReaction, path: '/Actions/reaction' })
  }

  postActionsReview({ actionsList }: { actionsList: Array<Actions> }): Promise<unknown> {
    return this.request({ method: 'post', data: actionsList, path: '/Actions/Review' })
  }
}
