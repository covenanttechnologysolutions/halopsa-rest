import type * as HaloPSATypes from './HaloPSATypes'

export enum StatusCode {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  MovedPermanently = 301,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  TooManyRequests = 429,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

export type Methods = 'get' | 'put' | 'delete' | 'post' | 'patch'

export type RetryOptions = {
  minTimeout: number
  retries: number
  maxTimeout: number
  randomize: boolean
  factor?: number
}

export type RequestOptions = {
  path: string
  method?: Methods
  params?: Record<string, unknown>
  data?:
    | Record<string, unknown>
    | Record<string, unknown>[]
    | null
    | string
    | number
    | undefined
    | object
  // optional axios responseType, set to 'arraybuffer' for binary endpoints
  // so raw bytes come back as a Buffer instead of getting JSON-parsed
  responseType?: 'json' | 'arraybuffer' | 'text' | 'stream'
}

export type LoggingLevels = 'error' | 'warn' | 'info' | 'debug'
export type Logger = (level: LoggingLevels, text: string, meta?: Record<string, unknown>) => void

export type DataResponse =
  | Record<string, unknown>
  | Record<string, unknown>[]
  | string
  | number
  | null
  | undefined

export type ErrorResponse = {
  status: number | string
  data: DataResponse
  message: string
}

// missing types from api spec
export type NoContentResponse = undefined
export type OctetStreamResponse = Buffer
// PDF endpoints return raw bytes; this is a Node-only client, so Buffer
// is the ergonomic return type (vs browser-only Blob).
export type PDFResponse = Buffer
export type HTMLResponse = string
export type components = HaloPSATypes.components
