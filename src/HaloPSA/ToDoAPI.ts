/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link FaultToDo} */
export type FaultToDo = schemas['FaultToDo']

/**
 * @module ToDoAPI
 */

/**
 * ToDo module
 * @public
 */
export class ToDoAPI extends BaseAPI {
  /**
   * @summary List of FaultToDo
   * @description Use this to return multiple FaultToDo. Requires authentication.
   * @param {number} [ticket_id]
   */
  getToDo({ ticket_id }: { ticket_id?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/ToDo', params: { ticket_id } })
  }

  postToDo({ faultToDoList }: { faultToDoList: Array<FaultToDo> }): Promise<unknown> {
    return this.request({ method: 'post', data: faultToDoList, path: '/ToDo' })
  }
}
