/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ToDoGroupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getToDoGroup({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ToDoGroup',
    })
  }

  /**
   * 
   * 
   
   */
  postToDoGroup({ toDoGroup }: { toDoGroup: Array<ToDoGroup> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ToDoGroup',
      data: toDoGroup,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getToDoGroupById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ToDoGroup/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteToDoGroupById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ToDoGroup/${id}`,
    })
  }
}
