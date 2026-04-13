/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link MessageContentVariable} */
export type MessageContentVariable = schemas['MessageContentVariable']

/**
 * @module EmailTemplateVariableAPI
 */

/**
 * EmailTemplateVariable module
 * @public
 */
export class EmailTemplateVariableAPI extends BaseAPI {
  getEmailTemplateVariable(): Promise<unknown> {
    return this.request({ method: 'get', path: '/EmailTemplateVariable' })
  }

  postEmailTemplateVariable({
    messageContentVariableList,
  }: {
    messageContentVariableList: Array<MessageContentVariable>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: messageContentVariableList,
      path: '/EmailTemplateVariable',
    })
  }

  /**
   * @param {number} id
   */
  getEmailTemplateVariableById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/EmailTemplateVariable/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteEmailTemplateVariableById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/EmailTemplateVariable/${id}` })
  }
}
