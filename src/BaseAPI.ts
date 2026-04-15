import { RequestOptions } from './types'
import promiseRetry from 'promise-retry'
import HaloPSA, { HaloConfig } from './HaloPSA'

/**
 * Base class for generated API sections. Holds a shared HaloPSA instance
 * and exposes `request` so subclasses share a single axios client + token cache.
 * @public
 */
export class BaseAPI {
  readonly #halo: HaloPSA

  constructor(halo: HaloPSA) {
    this.#halo = halo
  }

  protected request<T = unknown>(args: RequestOptions): Promise<T> {
    return this.#halo.request(args) as Promise<T>
  }
}

/**
 * curried request function
 * @internal
 */
export const makeRequest =
  ({
    config,
    api,
    thisObj,
  }: {
    config: HaloConfig
    api: (args: RequestOptions) => Promise<unknown>
    thisObj: InstanceType<typeof HaloPSA>
  }): ((args: RequestOptions) => Promise<unknown>) =>
  ({ path, method = 'get', params, data, responseType }: RequestOptions): Promise<unknown> => {
    const retryCodes = ['ECONNRESET', 'ETIMEDOUT', 'ESOCKETTIMEDOUT']
    const boundApi = api.bind(thisObj)

    if (!path) {
      throw new Error('path must be defined.')
    }

    let startTime = Date.now()
    const { retry, retryOptions, logger } = config

    if (!retry) {
      return boundApi({ path, method, params, data, responseType })
        .then((result: any) => {
          logger(
            'info',
            `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`,
          )
          return result
        })
        .catch((error: Record<string, unknown> | undefined) => {
          logger(
            'error',
            `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`,
            error,
          )
          throw error
        })
    } else {
      return promiseRetry(retryOptions, (retry, number) => {
        return boundApi({ path, method, params, data, responseType }).catch((error) => {
          logger(
            'warn',
            `${method} ${path} ${Date.now() - startTime}ms error occurred: ${
              error.code
            }, retry=${number}, params=${JSON.stringify(params)}`,
          )
          startTime = Date.now()
          if (retryCodes.includes(error.code)) {
            return retry(error)
          }
          throw error
        })
      })
        .then((result) => {
          logger(
            'info',
            `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`,
          )

          return result
        })
        .catch((error) => {
          logger(
            'error',
            `${method} ${path} ${Date.now() - startTime}ms error occurred: ${
              error.code
            }, params=${JSON.stringify(params)}`,
            error,
          )
          throw error
        })
    }
  }
