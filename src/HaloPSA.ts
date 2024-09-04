import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { makeRequest } from './BaseAPI'
import { Logger, DataResponse, ErrorResponse, RequestOptions, RetryOptions } from './types'

const DEBUG = !!process.env.HALO_PSA_DEBUG
let EXPIRES_AT = 0

/**
 * DEFAULTS variable.
 * @type {Object}
 * @property {RetryOptions} retryOptions - Retry options for API requests.
 * @property {(debug: boolean) => Logger} logger - Logger function that takes a boolean flag to enable debug mode.
 */
export const DEFAULTS: {
  retryOptions: RetryOptions
  logger: (debug: boolean) => Logger
} = {
  retryOptions: {
    retries: 4,
    minTimeout: 50,
    maxTimeout: 20000,
    randomize: true,
  },
  logger:
    (debug = false) =>
    (level, text, meta) => {
      switch (level) {
        case 'error':
          console.error(`${level}: ${text}`, meta)
          return
        case 'warn':
          if (debug) {
            console.log(`${level}: ${text}`, meta)
          }
          return
        case 'info': {
          if (debug) {
            console.info(`${level}: ${text}`, meta)
          }
          return
        }
        default:
          console.log(`${level}: ${text}`, meta)
          return
      }
    },
}

interface HaloToken {
  access_token: string
  data: {
    expires_in: number
  }
}

export interface HaloOptions {
  /**
   * Oauth client secret
   */
  clientSecret: string
  /**
   * Oauth client id
   */
  clientId: string
  /**
   * Your Halo PSA URL
   * e.g. https://company.halopsa.com
   */
  companyUrl: string
  /**
   * Oauth scope, defaults to all
   */
  scope: string
  /**
   * Default timeout in milliseconds
   */
  timeout?: number
  /**
   * Enable automatic retry.  Defaults to false.
   */
  retry?: boolean
  /**
   * @see {@link RetryOptions} type
   */
  retryOptions?: RetryOptions
  /**
   * Pass in a custom logger function, otherwise the default
   * will be used
   * @example
   * ```js
   * const logger = (level, text, meta) => console.log(level, text, meta)
   * ```
   */
  logger?: Logger

  /**
   * Enable debug output.  Defaults to false.
   */
  debug?: boolean
}

/**
 * Represents a class for managing configuration options.
 *
 * @interface
 * @extends HaloOptions
 */
export interface HaloConfig extends HaloOptions {
  clientSecret: string
  clientId: string
  companyUrl: string
  timeout: number
  retry: boolean
  retryOptions: RetryOptions
  logger: Logger
  debug: boolean
  token?: HaloToken
}

/**
 * @internal
 */
export default class HaloPSA {
  config: HaloConfig
  private instance: AxiosInstance

  /**
   * @public
   */
  request: (args: RequestOptions) => Promise<any>

  constructor({
    clientSecret,
    companyUrl,
    clientId,
    scope = 'all',
    timeout = 20000,
    retry = false,
    retryOptions = DEFAULTS.retryOptions,
    logger,
    debug = false,
  }: HaloOptions) {
    if (!companyUrl || !clientId || !clientSecret) {
      throw new Error('Missing options [companyUrl, clientId, clientSecret]')
    }

    this.config = {
      clientSecret,
      companyUrl,
      clientId,
      scope,
      retry,
      timeout,
      logger: logger ? logger : DEFAULTS.logger(debug || DEBUG),
      debug: debug || DEBUG,
      retryOptions: {
        ...DEFAULTS.retryOptions,
        ...retryOptions,
      },
    }

    this.instance = axios.create({
      timeout,
      baseURL: companyUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.config.token?.access_token}`,
      },
    })

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | any => {
        // update token if expired
        if (Date.now() > EXPIRES_AT) {
          return this.getToken().then((token) => {
            return {
              ...config,
              headers: {
                ...config.headers,
                Authorization: `Bearer ${token.access_token}`,
              },
            }
          })
        }

        return config
      },
    )

    this.request = makeRequest({ config: this.config, api: this.api, thisObj: this })
  }

  /**
   * @internal
   */
  private async api({
    path,
    method,
    params,
    data,
  }: RequestOptions): Promise<ErrorResponse | DataResponse> {
    try {
      const result = await this.instance({
        url: path,
        method,
        params,
        data,
      })

      return result?.data
    } catch (error: any) {
      if (error.isAxiosError) {
        throw {
          status: error.response?.status,
          data: error.response?.data,
          message: error?.message,
        }
      }

      // something else catastrophic went wrong
      throw error
    }
  }

  private async getToken() {
    const params = new URLSearchParams()
    params.append('client_id', this.config.clientId)
    params.append('client_secret', this.config.clientSecret)
    params.append('grant_type', 'client_credentials')
    params.append('scope', this.config.scope)

    const token = await axios.request({
      method: 'post',
      url: this.config.companyUrl + '/auth/token',
      data: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    EXPIRES_AT = Date.now() + token.data.expires_in * 1000

    return token.data
  }
}
