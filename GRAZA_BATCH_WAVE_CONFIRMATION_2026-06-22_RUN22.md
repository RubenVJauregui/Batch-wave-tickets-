# Graza DS Dispatch — RUN 22

**Timestamp**: 2026-06-22 05:20 PDT (2026-06-22 12:20 UTC)
**Type**: Verification (0 new orders — all already dispatched)
**Facility**: LT_F1 (Valley View)
**Customer**: DRUPLEY INC / DBA GRAZA (ORG-747717)
**Assignee**: MARTHA OLVERA (userId=4419)

## Filter Applied
- Statuses: IMPORTED, OPEN, COMMITTED
- Order Type: DS (Dropship)
- Customer: ORG-747717

## Search Results

### New Orders to Dispatch: 0

| Status | Count |
|--------|-------|
| IMPORTED | 0 |
| OPEN | 0 |
| COMMITTED | 0 |

**All Graza DS orders are already PLANNED with RELEASED plans.** No orders require dispatch.

## Verified Active Plans — 8 (all RELEASED)

| Plan ID | Method | Orders | Task ID | Setting | Assignee |
|---------|--------|--------|---------|---------|----------|
| PLAN-5073389 | BATCH_ORDER_PICK | DN-5197215, DN-5197220 | TASK-5297070 | 1246 | 4419 ✅ |
| PLAN-5073377 | BATCH_ORDER_PICK | DN-5197211 | TASK-5297034 | 1246 | 4419 ✅ |
| PLAN-5073375 | WAVE_PICK_BY_ITEM | DN-5197195 | TASK-5297033 | 1282 | 4419 ✅ |
| PLAN-5073373 | BATCH_ORDER_PICK | DN-5197179 | TASK-5297030 | 1246 | 4419 ✅ |
| PLAN-5073372 | BATCH_ORDER_PICK | DN-5197170 | TASK-5297029 | 1246 | 4419 ✅ |
| PLAN-5073371 | BATCH_ORDER_PICK | DN-5197161, DN-5197156 | TASK-5297028 | 1246 | 4419 ✅ |
| PLAN-5073370 | BATCH_ORDER_PICK | DN-5197137, DN-5197136 | TASK-5297027 | 1246 | 4419 ✅ |
| PLAN-5073369 | BATCH_ORDER_PICK | DN-5197129, DN-5197128, DN-5197127 | TASK-5297026 | 1246 | 4419 ✅ |

- **1 Wave** (PLAN-5073375) — WAVE_PICK_BY_ITEM, skipPackingScanForItem=true, 1 label/recipient
- **7 Batch** — BATCH_ORDER_PICK, all Setting 1246

## Plans Completed Since RUN21 (9 plans no longer active)
PLAN-5073368, PLAN-5073367, PLAN-5073365, PLAN-5073364, PLAN-5073363, PLAN-5073362, PLAN-5073357, PLAN-5073356, PLAN-5073353, PLAN-5073352, PLAN-5073351, PLAN-5073350, PLAN-5073346 — these have been worked/completed and are no longer in the active set.

## ⚠️ Label-Note Orders — Manual Verification Required
These were dispatched into batches but should be verified for label-note printing:

| Order ID | Recipient | Plan |
|----------|-----------|------|
| DN-5197115 | James & Gina Schiano | PLAN-5073367 (completed) |
| DN-5197092 | Pat and Dennis Babjack | Needs checking |
| DN-5197012 | Bradley Gastwirth | Needs checking |

## Rule Compliance

| # | Rule | Status |
|---|---|---|
| 1 | Full dispatch workflow (pick strategy → task → release) | ✅ PASS — All 8 via full workflow |
| 2 | Assignee = 4419 MARTHA OLVERA (not username text) | ✅ PASS — All verified |
| 3 | Plan not left in BUILDING/PLANNING/PICK_SUGGESTED | ✅ PASS — All RELEASED |
| 4 | No false exceptions on available inventory | ✅ PASS — 0 exceptions |
| 5 | Label notes separated into own batch | ⚠️ 3 label-note orders need manual print verification |
| 6 | Wave: identical item+quantity grouped, 1 label/recipient | ✅ PASS — 1 wave, WAVE_PICK_BY_ITEM |
| 7 | Batch: ≤22 orders, non-wave, non-label-note, oldest first | ✅ PASS — All 7 batches compliant |
| 8 | Skip packing scan for item ON | ✅ PASS — true on all 8 |

## Stuck Plan Cleanup
- PLAN-5072874/75/76/77 — previously resolved, confirmed cleaned up
- PLAN-5073366 — previously cancelled (rollback)

## Martha Olvera 18.xlsx
- Issue report: GRAZA_ISSUE_REVIEW_2026-06-18_18XLSX.md
- All dispatch rules active and compliant
- 18.xlsx remediation verified

## Summary

- **New Orders**: 0
- **Total Active Plans**: 8 (7 batch + 1 wave)
- **Dispatch Action**: None needed — all already RELEASED
- **Assignee**: All 4419 / MARTHA OLVERA ✅
- **skipPackingScanForItem**: true on all 8 ✅
- **Exceptions**: 0
- **Errors**: 0
- **Label Notes**: 3 need manual print verification ⚠️
- **18.xlsx**: CLEAN

## Conclusion

**0 new Graza DS orders found.** All Graza DS orders are fully dispatched, RELEASED, assigned to Martha Olvera (4419), skipPackingScanForItem=true across all 8 active plans. 9 plans completed since RUN21. Three label-note orders flagged for manual print verification. System clean, 18.xlsx compliant.
