/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Automation} */
export type Automation = schemas['Automation']
/** {@link Automation_View} */
export type Automation_View = schemas['Automation_View']

/**
 * @module AutomationAPI
 */

/**
 * Automation module
 * @public
 */
export class AutomationAPI extends BaseAPI {
  getAutomation(): Promise<Automation_View> {
    return this.request({ method: 'get', path: '/Automation' })
  }

  postAutomation({ items }: { items: Array<number> }): Promise<Automation> {
    return this.request({ method: 'post', data: items, path: '/Automation' })
  }

  /**
   * @param {number} id
   */
  getAutomationById({ id }: { id: number }): Promise<Automation> {
    return this.request({ method: 'get', path: `/Automation/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAutomationById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Automation/${id}` })
  }

  /**
   * @param {string} runbookId
   */
  postAutomationRunbookId({
    file,
    runbookId,
  }: {
    file: File
    runbookId: string
  }): Promise<unknown> {
    return this.request({ method: 'post', data: file, path: `/Automation/${runbookId}` })
  }
}
