/**
 * Type-level tests for the published library surface.
 *
 * These assertions are checked at compile-time via `tsc --noEmit -p test`.
 * They fail the build if the shape of `dist/index.d.ts` regresses, e.g.
 * inferred response types collapse back to `unknown`, the lazy `*API` getters
 * lose their type, or section schema re-exports disappear.
 *
 * Nothing in this file runs at test time; only the type checker reads it.
 */
import { expectTypeOf } from 'expect-type'

// Import from the compiled output, exactly as a downstream consumer would.
import { HaloAPI } from '../dist'
import type { TicketsAPI, Faults, Faults_View } from '../dist/HaloPSA/TicketsAPI'
import type { ActionsAPI, Actions, Actions_View } from '../dist/HaloPSA/ActionsAPI'

declare const halo: HaloAPI

// Lazy getters return the section client (not unknown / any).
expectTypeOf(halo.TicketsAPI).toEqualTypeOf<TicketsAPI>()
expectTypeOf(halo.ActionsAPI).toEqualTypeOf<ActionsAPI>()

// Spec-typed responses are inferred correctly.
// GET /Tickets -> Faults_View (Halo's list wrapper).
expectTypeOf(halo.TicketsAPI.getTickets({})).resolves.toEqualTypeOf<Faults_View>()
// GET /Tickets/{id} -> Faults.
expectTypeOf(halo.TicketsAPI.getTicketsById({ id: 1 })).resolves.toEqualTypeOf<Faults>()

// Heuristically-inferred responses survive the build.
// GET /Actions -> Actions_View (inferred via spec observation on the Actions section).
expectTypeOf(halo.ActionsAPI.getActions({})).resolves.toEqualTypeOf<Actions_View>()
// GET /Actions/{id} -> Actions.
expectTypeOf(halo.ActionsAPI.getActionsById({ id: 1 })).resolves.toEqualTypeOf<Actions>()

// Required path params are enforced at the type level.
// @ts-expect-error - `id` is required
halo.TicketsAPI.getTicketsById({})
