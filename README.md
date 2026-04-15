# halopsa

Typed Node.js client for the [HaloPSA](https://halopsa.com) REST API. Generated directly from HaloPSA's OpenAPI 3 spec, so every section, endpoint, request param, and (where the spec provides one) response shape comes from the source.

- One axios instance per client, shared across 396 section APIs via lazy getters
- OAuth client-credentials flow with automatic token refresh
- Optional retry on transient network errors (`ECONNRESET`, `ETIMEDOUT`, `ESOCKETTIMEDOUT`)
- Per-operation request types from the spec; response types where the spec defines them, with conservative inference for the rest

## Install

```sh
npm install halopsa
```

## Quick start

```ts
import { HaloAPI } from 'halopsa'

const halo = new HaloAPI({
  companyUrl: 'https://yourcompany.halopsa.com',
  clientId: process.env.HALO_API_CLIENT_ID,
  clientSecret: process.env.HALO_API_CLIENT_SECRET,
  scope: 'all', // or whatever scope is granted to your application
})

const result = await halo.TicketsAPI.getTickets({ count: 10 })
console.log(result.record_count, result.tickets)

const ticket = await halo.TicketsAPI.getTicketsById({ id: 12345 })
console.log(ticket.summary)
```

## HaloPSA application setup

To use this library you need an Application registered in HaloPSA configured for the **Client Credentials** grant.

In the Halo UI: `Config -> Integrations -> Halo PSA API -> Applications -> New`. Set:

- **Authentication Method**: `Client ID and Secret`
- **Login Type**: `Agent`
- **Agent to log in as**: a real, active agent account
- **Permissions**: pick a scope (`all`, `all:standard`, etc.) that covers the endpoints you will call

Copy the Client ID and Client Secret into your env. The Client Secret is shown once; rotate from the same screen if you lose it.

If `/auth/token` returns a 500 with an HTML error page, the most common cause is a missing or disabled "Agent to log in as".

## Constructor options

```ts
new HaloAPI({
  companyUrl,    // required: e.g. "https://yourcompany.halopsa.com" (no trailing slash, no /api)
  clientId,      // required
  clientSecret,  // required
  scope,         // optional, default "all"; must match a scope granted to the Application
  timeout,       // optional, axios request timeout in ms (default 20000)
  retry,         // optional boolean, default false; retries on transient network errors
  retryOptions,  // optional, see below
  logger,        // optional (level, message, meta?) => void
  debug,         // optional boolean; also reads HALO_PSA_DEBUG env var
})
```

`retryOptions` is forwarded to [`promise-retry`](https://www.npmjs.com/package/promise-retry):

```ts
{
  retries: 4,         // attempts after the first failure
  minTimeout: 50,     // ms
  maxTimeout: 20000,  // ms
  randomize: true,
  factor: 2,          // optional exponential backoff factor
}
```

## How calls are organized

The OpenAPI spec groups every endpoint by its first URL segment. Each group becomes a section client exposed on `HaloAPI` as a property named `<Section>API`. Method names within a section follow `<verb><PathSegments>`:

| URL                    | Method                                   |
| ---------------------- | ---------------------------------------- |
| `GET    /Tickets`      | `halo.TicketsAPI.getTickets({...})`      |
| `GET    /Tickets/{id}` | `halo.TicketsAPI.getTicketsById({ id })` |
| `POST   /Tickets`      | `halo.TicketsAPI.postTickets({...})`     |
| `DELETE /Tickets/{id}` | `halo.TicketsAPI.deleteTicketsById({ id })` |
| `GET    /Actions`      | `halo.ActionsAPI.getActions({...})`      |
| `GET    /Actions/{id}` | `halo.ActionsAPI.getActionsById({ id })` |
| `POST   /Actions/Review` | `halo.ActionsAPI.postActionsReview({...})` |

Section clients are lazy: `halo.TicketsAPI` instantiates the section the first time you touch it and caches it on the instance. You only pay for sections you use, but they all share one axios client and one OAuth token.

Every method takes a single object argument containing path params, query params, and (for write methods) the request body — keeps call sites readable when an endpoint has 30+ optional flags.

## Response types

HaloPSA's spec defines response types for ~6% of operations directly. For the rest, the library infers a return type from a per-section schema hint when an obvious pattern matches:

| Pattern                        | Inferred response                            |
| ------------------------------ | -------------------------------------------- |
| `GET /<Section>`               | `<Section>_View` (Halo's list-wrapper schema)|
| `GET /<Section>/{id}`          | `<Section>` (single resource)                |
| `POST /<Section>`              | `<Section>` (created resource)               |
| `PUT/PATCH /<Section>/{id}`    | `<Section>` (updated resource)               |
| Anything else                  | `unknown`                                    |

Hints come from two sources, in order:

1. Operations elsewhere in the same section that *do* have spec-typed responses.
2. Schema name match: if the spec defines `components.schemas.<Section>` or `<Section>_View`, those are used.

When neither produces a hint, the return type is `unknown`. Cast or narrow at the call site if you have out-of-band knowledge of the shape.

## Uploading and downloading files

Attachments are uploaded as an array of `Attachment` objects with the file contents base64-encoded in the `data` field. The server returns the created record, including an `id` you can use for downloads.

```ts
import fs from 'node:fs'

const bytes = fs.readFileSync('report.pdf')
const created = await halo.AttachmentAPI.postAttachment({
  attachmentList: [{
    ticket_id: 123,
    filename: 'report.pdf',
    data: bytes.toString('base64'),
  }],
})

console.log(`uploaded id=${created.id}, size=${created.filesize}`)
```

Download the raw bytes back with `getAttachmentById`. The return type is a Node `Buffer`, ready to write to disk or pipe wherever you need.

```ts
const buf = await halo.AttachmentAPI.getAttachmentById({ id: created.id })
fs.writeFileSync('report.pdf', buf)
```

`POST /Attachment/document` accepts the same body shape and behaves identically to `POST /Attachment`. Use whichever you prefer.

The `/Attachment/image` endpoint is a separate staging flow for rich-text editor inline images. It returns a token URL rather than persisting an attachment to a ticket, and the spec declares ~100 query-string parameters that most callers will not need. The generated method is included for completeness but most library users should reach for `postAttachment` instead.

## Schema types

Every section file re-exports the schemas it references. Import them by name:

```ts
import type { Faults, Faults_View } from 'halopsa/dist/HaloPSA/TicketsAPI'

function summarize(view: Faults_View) {
  return view.tickets?.map((t) => `${t.id}: ${t.summary}`)
}
```

The full set lives in `dist/HaloPSATypes.ts`, generated by [`openapi-typescript`](https://www.npmjs.com/package/openapi-typescript). You can also reach any schema by name through the `components` map:

```ts
import type { components } from 'halopsa/dist/types'

type Ticket = components['schemas']['Faults']
```

## Error handling

Errors are thrown as a plain object, not an axios error:

```ts
try {
  await halo.TicketsAPI.getTicketsById({ id: 999999 })
} catch (err) {
  // err.status   number | string  (HTTP status)
  // err.data     response body (parsed JSON if Halo returned JSON)
  // err.message  axios error message
}
```

Network-level failures that don't have an HTTP response (DNS, ECONNREFUSED, etc.) are re-thrown as the underlying error.

## Logging

The default logger writes `error` to `console.error` always; `warn` and `info` only when `debug: true` is passed (or `HALO_PSA_DEBUG` env is set). Pass your own to integrate with pino, winston, etc.:

```ts
const halo = new HaloAPI({
  // ...
  logger: (level, message, meta) => log[level]({ msg: message, ...meta }),
})
```

## Retries

Disabled by default. Pass `retry: true` to retry only on connection-level errors (`ECONNRESET`, `ETIMEDOUT`, `ESOCKETTIMEDOUT`). HTTP error responses (4xx, 5xx) are *not* retried; they throw immediately.

```ts
const halo = new HaloAPI({
  // ...
  retry: true,
  retryOptions: { retries: 6, minTimeout: 100, maxTimeout: 5000 },
})
```

## Caveats

- Some operations have parameter names with dots (e.g. `file_stream.CanRead` on `/Attachment/image`). These are aliased to safe identifiers in the TypeScript signature and re-mapped to their original key on the wire, but you should mostly avoid them.
- Halo permission scopes vary by tenant. Even with `scope: 'all'`, individual endpoints may return 401 if the linked agent lacks permission.
- `halopsa.HaloPSATypes` is large (~1.4 MB on disk). Treat it as a type-only import; tree-shaking won't help if you accidentally `require()` it at runtime.

## Regenerating from a new spec

The library is regenerated from `generator/spec/halo-psa-api.json`. To refresh after Halo updates the spec:

```sh
npm run generate
```

This wipes `src/HaloPSA/`, `src/HaloAPI.ts`, and `src/HaloPSATypes.ts`, then re-emits all section files, the barrel, and the schema types.

## License

MIT.
