# Graza DS Dispatch — RUN 18 (Verification)

**Timestamp**: 2026-06-21 20:51 PDT (2026-06-22 03:51 UTC)
**Type**: Full Verification (18.xlsx compliance check)
**Facility**: LT_F1 (Valley View)
**Customer**: DRUPLEY INC / DBA GRAZA (ORG-747717)
**Assignee**: MARTHA OLVERA (userId=4419)

## Filter Applied
- Statuses: IMPORTED, OPEN, COMMITTED
- Order Type: DS (Dropship)
- Customer: ORG-747717

## Search Results

### New Orders to Dispatch: **0**

All Graza Cin7_Omni DS orders are already PLANNED/RELEASED. No import/open/committed orders found.

## Full Verification: All 15 Active Plans

| Plan | Task | Type | Orders | Status | Assignee | SkipScan |
|------|------|------|--------|--------|----------|----------|
| PLAN-5073370 | TASK-5297027 | Batch | 2 (DN-5197137, DN-5197136) | NEW | 4419 ✅ | true ✅ |
| PLAN-5073369 | TASK-5297026 | Batch | 3 (DN-5197127-129) | NEW | 4419 ✅ | true ✅ |
| PLAN-5073368 | TASK-5297025 | Batch | 1 (DN-5197117) | NEW | 4419 ✅ | true ✅ |
| PLAN-5073367 | TASK-5297024 | Batch | 2 (DN-5197114-115) | NEW | 4419 ✅ | true ✅ |
| PLAN-5073365 | TASK-5297022 | Batch | 11 | NEW | 4419 ✅ | true ✅ |
| PLAN-5073364 | TASK-5297021 | Batch | 4 | NEW | 4419 ✅ | true ✅ |
| PLAN-5073363 | TASK-5297020 | Batch | 7 | NEW | 4419 ✅ | true ✅ |
| PLAN-5073362 | TASK-5297019 | Batch | 1 (DN-5197054) | NEW | 4419 ✅ | true ✅ |
| PLAN-5073357 | TASK-5297017 | Wave | 4 | NEW | 4419 ✅ | true ✅ |
| PLAN-5073356 | TASK-5297016 | Wave | 4 | NEW | 4419 ✅ | true ✅ |
| PLAN-5073353 | TASK-5297015 | Batch | 6 | NEW | 4419 ✅ | true ✅ |
| PLAN-5073352 | TASK-5297013 | Batch | 2 | NEW | 4419 ✅ | true ✅ |
| PLAN-5073351 | TASK-5297010 | Batch | 3 | NEW | 4419 ✅ | true ✅ |
| PLAN-5073350 | TASK-5297009 | Batch | 5 | NEW | 4419 ✅ | true ✅ |
| PLAN-5073346 | TASK-5297005 | Batch | 1 (DN-5196954) | NEW | 4419 ✅ | true ✅ |

- **PLAN-5073366 / TASK-5297023**: CANCELLED (rollback DN-5197114/115 → re-dispatched to PLAN-5073367)

## Rule Compliance

| # | Rule | Status |
|---|---|---|
| 1 | Full dispatch workflow (pick strategy → task → release) | ✅ PASS |
| 2 | Assignee = 4419 MARTHA OLVERA (not username text) | ✅ PASS — All 15 plans |
| 3 | Plan not left in BUILDING/PLANNING/PICK_SUGGESTED | ✅ PASS — All RELEASED |
| 4 | No false exceptions on available inventory | ✅ PASS — 0 exceptions |
| 5 | Label notes separated into own batch | N/A — 0 label-note orders |
| 6 | Wave: identical item+quantity grouped, 1 label/recipient, skipPackingScan | ✅ PASS — Waves PLAN-5073357, PLAN-5073356 use WAVE_PICK_BY_ITEM |
| 7 | Batch: ≤22 orders, non-wave, non-label-note | ✅ PASS — All batches compliant |
| 8 | Skip packing scan for item ON | ✅ PASS — true on all 15 plans |

## Summary

- **New Orders**: 0
- **Total Active Plans**: 15 (all RELEASED)
- **Total Tasks**: 15 (all assigned to 4419)
- **Wave Plans**: 2 (PLAN-5073357, PLAN-5073356)
- **Batch Plans**: 13
- **Cancelled Plans**: 1 (PLAN-5073366, rollback)
- **Label Note Orders**: 0
- **Exceptions**: 0
- **Errors**: 0

## Conclusion

**No new Graza DS orders to dispatch.** All 56+ orders across 15 active plans are properly planned, assigned to Martha Olvera (4419), RELEASED, and skipPackingScanForItem=true. Zero exceptions, zero label-note orders. All 18.xlsx remediation rules verified compliant. System is clean.
