import path from 'node:path'
import assert from 'node:assert'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'

import { HaloAPI } from '../dist/index.js'
import { assertMatchesSchema } from './_schema.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

dotenv.config({ path: path.join(__dirname, '.env') })

const { HALO_API_CLIENT_ID, HALO_API_CLIENT_SECRET, HALO_API_SCOPE, HALO_API_URL } = process.env

describe('HaloAPI (read-only e2e)', function () {
  this.timeout(20000)

  let halo

  before(function () {
    if (!HALO_API_CLIENT_ID || !HALO_API_CLIENT_SECRET || !HALO_API_URL) {
      this.skip()
    }
    halo = new HaloAPI({
      clientId: HALO_API_CLIENT_ID,
      clientSecret: HALO_API_CLIENT_SECRET,
      scope: HALO_API_SCOPE || 'all',
      companyUrl: HALO_API_URL,
    })
  })

  it('exposes section clients as lazy getters', function () {
    assert.ok(halo.TicketsAPI)
    assert.ok(halo.ClientAPI)
    // same reference on re-access proves the getter caches
    assert.strictEqual(halo.TicketsAPI, halo.TicketsAPI)
  })

  // Wrap a live read so a 401/403 (scope doesn't grant this endpoint on
  // the tenant) skips the test instead of failing the suite. Other errors
  // surface as real failures.
  async function read(ctx, fn) {
    try {
      return await fn()
    } catch (e) {
      if (e?.status === 401 || e?.status === 403) {
        ctx.skip()
        return
      }
      throw e
    }
  }

  let firstTicketId

  it('lists tickets (GET /Tickets) and matches Faults_View schema', async function () {
    const result = await halo.TicketsAPI.getTickets({ count: 1 })
    assert.ok(result, 'expected a response')
    assertMatchesSchema('Faults_View', result)
    firstTicketId = result.tickets?.[0]?.id
  })

  it('fetches a single ticket (GET /Tickets/{id}) and matches Faults schema', async function () {
    if (!firstTicketId) {
      this.skip()
    }
    const ticket = await halo.TicketsAPI.getTicketsById({ id: firstTicketId })
    assert.ok(ticket, 'expected a ticket object')
    assertMatchesSchema('Faults', ticket)
    assert.strictEqual(ticket.id, firstTicketId)
  })

  it('lists actions for the first ticket (GET /Actions) and matches Actions_View schema', async function () {
    if (!firstTicketId) {
      this.skip()
    }
    const result = await read(this, () =>
      halo.ActionsAPI.getActions({ ticket_id: firstTicketId, count: 5 }),
    )
    assert.ok(result, 'expected a response')
    assertMatchesSchema('Actions_View', result)
  })

  it('lists agents (GET /Agent)', async function () {
    const result = await read(this, () => halo.AgentAPI.getAgent({ count: 1 }))
    assert.ok(Array.isArray(result) || Array.isArray(result?.agents), 'expected an agent list')
  })

  it('returns the current agent (GET /Agent/me)', async function () {
    const me = await read(this, () => halo.AgentAPI.getAgentMe())
    assert.ok(me && typeof me === 'object', 'expected an agent object')
  })

  it('lists teams (GET /Team)', async function () {
    const result = await read(this, () => halo.TeamAPI.getTeam({}))
    assert.ok(Array.isArray(result) || Array.isArray(result?.teams), 'expected a team list')
  })

  it('lists priorities (GET /Priority)', async function () {
    const result = await read(this, () => halo.PriorityAPI.getPriority({}))
    assert.ok(
      Array.isArray(result) || Array.isArray(result?.priorities),
      'expected a priority list',
    )
  })

  it('lists ticket types (GET /TicketType)', async function () {
    const result = await read(this, () => halo.TicketTypeAPI.getTicketType({}))
    assert.ok(
      Array.isArray(result) || Array.isArray(result?.tickettypes),
      'expected a tickettype list',
    )
  })

  it('lists ticket statuses (GET /Status)', async function () {
    const result = await read(this, () => halo.StatusAPI.getStatus({}))
    assert.ok(Array.isArray(result) || Array.isArray(result?.statuses), 'expected a status list')
  })

  it('lists sites (GET /Site)', async function () {
    const result = await read(this, () => halo.SiteAPI.getSite({ count: 1 }))
    assert.ok(result, 'expected a response')
  })

  it('lists assets (GET /Asset)', async function () {
    const result = await read(this, () => halo.AssetAPI.getAsset({ count: 1 }))
    assert.ok(result, 'expected a response')
  })

  it('lists CRM notes (GET /CRMNote)', async function () {
    const result = await read(this, () => halo.CRMNoteAPI.getCRMNote({ count: 1 }))
    assert.ok(result, 'expected a response')
  })

  it('lists holidays (GET /Holiday)', async function () {
    const result = await read(this, () => halo.HolidayAPI.getHoliday({}))
    assert.ok(result, 'expected a response')
  })

  it('uploads and downloads an attachment roundtrip', async function () {
    if (!firstTicketId) {
      this.skip()
    }
    // 1x1 transparent PNG
    const PNG = Buffer.from(
      '89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000d49444154789c63f8cfc0500f0000040001ffaefd870000000049454e44ae426082',
      'hex',
    )

    const uploaded = await read(this, () =>
      halo.AttachmentAPI.postAttachment({
        attachmentList: [
          {
            ticket_id: firstTicketId,
            filename: `halopsa-test-${Date.now()}.png`,
            desc: 'halopsa lib e2e upload',
            isimage: true,
            data: PNG.toString('base64'),
            type: 1,
          },
        ],
      }),
    )
    if (!uploaded) {
      return
    }

    assert.ok(uploaded.id, 'expected created attachment to have an id')
    assert.strictEqual(uploaded.filesize, PNG.length, 'filesize should match uploaded bytes')

    const bytes = await read(this, () =>
      halo.AttachmentAPI.getAttachmentById({ id: uploaded.id }),
    )
    if (!bytes) {
      return
    }
    assert.ok(Buffer.isBuffer(bytes), 'download should return a Node Buffer')
    assert.strictEqual(bytes.length, PNG.length, 'downloaded length should match')
    assert.strictEqual(
      bytes.subarray(0, 8).toString('hex'),
      '89504e470d0a1a0a',
      'downloaded bytes should start with the PNG magic header',
    )
  })
})
