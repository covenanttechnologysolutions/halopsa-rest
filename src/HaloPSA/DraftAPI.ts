/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link FaultDraft} */
export type FaultDraft = schemas['FaultDraft']

/**
 * @module DraftAPI
 */

/**
 * Draft module
 * @public
 */
export class DraftAPI extends BaseAPI {
  postDraft({ faultDraftList }: { faultDraftList: Array<FaultDraft> }): Promise<unknown> {
    return this.request({ method: 'post', data: faultDraftList, path: '/Draft' })
  }
}
