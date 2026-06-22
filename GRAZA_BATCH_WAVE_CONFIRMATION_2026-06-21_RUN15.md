# Graza DS Batch Run — 2026-06-21 ~20:08 PDT (2026-06-22 03:08 UTC)

## Run Summary

| Metric | Value |
|--------|-------|
| Run Time | 2026-06-21 ~20:08 PDT |
| Facility | Valley View (LT_F1) |
| Customer | DRUPLEY INC / DBA GRAZA (ORG-747717) |
| Channel | Cin7_Omni |
| Filters | status=IMPORT,OPEN,COMMITTED; orderType=DS |
| Orders Found | 3 (COMMITTED) |
| Assignee | MARTHA OLVERA (userId: 4419) |

## Order Breakdown

### Batch — 3 Non-Wave Orders
All 3 orders have different item+quantity combos — no wave groups formed.

| Order ID | Recipient | Items |
|----------|-----------|-------|
| [DN-5197129](https://unis.item.com/wms/outbound/order/edit/DN-5197129) | Ashley Vanderbosch | D1-SZL750×1, D1-FZL750×1, S1-FZL142×1, D1-DRZ500×1 |
| [DN-5197128](https://unis.item.com/wms/outbound/order/edit/DN-5197128) | Michael Finger | D1-SZL750×2, GL1-DRZ500×1 |
| [DN-5197127](https://unis.item.com/wms/outbound/order/edit/DN-5197127) | Ankit Etha | J1-FZL2000×1, C1-DRZ-500×1 |

### Wave Groups
None — all 3 orders have unique item+quantity sets. No matching combos.

### Label Notes
None — all 3 orders have labelNote=null.

## Dispatch Result

| Field | Value |
|-------|-------|
| Setting | 1246 "Graza DS Batch" |
| Plan ID | [PLAN-5073369](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5073369) |
| Plan Status | **RELEASED** ✅ |
| Pick Method | BATCH_ORDER_PICK / PIECE_PICK |
| Task ID | [TASK-5297026](https://unis.item.com/wms/task/general-task/edit/TASK-5297026) |
| Task Status | NEW ✅ |
| Assignee | **4419 / MARTHA OLVERA** ✅ |
| skipPackingScanForItem | **true** ✅ |
| needAutoRelease | true ✅ |
| Task Tags | Graza DS Batch |
| Exception Orders | 0 |
| Failed Commitments | 0 |
| Release Date | 2026-06-22T03:08:33 |

## Order Status

| Order | Previous | Current | Plan |
|---|---|---|---|
| [DN-5197129](https://unis.item.com/wms/outbound/order/edit/DN-5197129) | COMMITTED | PLANNED | PLAN-5073369 |
| [DN-5197128](https://unis.item.com/wms/outbound/order/edit/DN-5197128) | COMMITTED | PLANNED | PLAN-5073369 |
| [DN-5197127](https://unis.item.com/wms/outbound/order/edit/DN-5197127) | COMMITTED | PLANNED | PLAN-5073369 |

## Rule Compliance

| # | Rule | Status |
|---|------|--------|
| 1 | Full dispatch workflow (pick strategy → task → release) | ✅ PASS |
| 2 | Assignee = 4419 MARTHA OLVERA (userId, not username) | ✅ PASS |
| 3 | Plan not left in BUILDING/PLANNING/PICK_SUGGESTED | ✅ PASS |
| 4 | No false exceptions on available inventory | ✅ PASS |
| 5 | Label notes separated into own batch | N/A (no label notes) |
| 6 | Wave: identical item+quantity grouped, 1 label/recipient | N/A (no waves) |
| 7 | Batch: ≤22 orders, non-wave, non-label-note, oldest first | ✅ PASS |
| 8 | Skip packing scan for item ON | ✅ PASS |

## Notes
- RUN15: 3 orders found (up from 1 in RUN14). All committed, no label notes, no wave groups.
- Setting 1246 "Graza DS Batch": BATCH_ORDER_PICK, PIECE_PICK, min=1, max=22, assignee=4419, skipPackingScanForItem=true, needAutoRelease=true.
- Plan auto-released via needAutoRelease — no manual intervention required.
- DN-5197128 has GL1-DRZ500 (new GL1- prefix not seen in prior runs).
- DN-5197127 has J1-FZL2000 (new J1- prefix not seen in prior runs).
- No exceptions, no blockers.
