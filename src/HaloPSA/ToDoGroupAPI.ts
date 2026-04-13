/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ToDoGroup} */
export type ToDoGroup = schemas['ToDoGroup']

/**
 * @module ToDoGroupAPI
 */

/**
 * ToDoGroup module
 * @public
 */
export class ToDoGroupAPI extends BaseAPI {
  getToDoGroup(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ToDoGroup' })
  }

  postToDoGroup({ toDoGroupList }: { toDoGroupList: Array<ToDoGroup> }): Promise<ToDoGroup> {
    return this.request({ method: 'post', data: toDoGroupList, path: '/ToDoGroup' })
  }

  /**
   * @param {number} id
   */
  getToDoGroupById({ id }: { id: number }): Promise<ToDoGroup> {
    return this.request({ method: 'get', path: `/ToDoGroup/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteToDoGroupById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ToDoGroup/${id}` })
  }
}
