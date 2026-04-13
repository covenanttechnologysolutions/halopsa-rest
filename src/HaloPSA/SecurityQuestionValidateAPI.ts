/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link NPR_Result} */
export type NPR_Result = schemas['NPR_Result']

/**
 * @module SecurityQuestionValidateAPI
 */

/**
 * SecurityQuestionValidate module
 * @public
 */
export class SecurityQuestionValidateAPI extends BaseAPI {
  getSecurityQuestionValidate(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SecurityQuestionValidate' })
  }

  postSecurityQuestionValidate({
    nPR_ResultList,
  }: {
    nPR_ResultList: Array<NPR_Result>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: nPR_ResultList, path: '/SecurityQuestionValidate' })
  }
}
