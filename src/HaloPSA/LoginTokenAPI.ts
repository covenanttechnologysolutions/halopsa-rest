/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link LoginToken} */
export type LoginToken = schemas['LoginToken']

/**
 * @module LoginTokenAPI
 */

/**
 * LoginToken module
 * @public
 */
export class LoginTokenAPI extends BaseAPI {
  postLoginToken({ loginToken }: { loginToken: LoginToken }): Promise<LoginToken> {
    return this.request({ method: 'post', data: loginToken, path: '/LoginToken' })
  }
}
