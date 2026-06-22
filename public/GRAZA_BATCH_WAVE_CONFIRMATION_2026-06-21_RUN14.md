# Graza DS Batch Run — 2026-06-21 ~19:52 PDT (2026-06-22 02:52 UTC)

## Run Summary

| Metric | Value |
|--------|-------|
| Run Time | 2026-06-21 ~19:52 PDT |
| Facility | Valley View (LT_F1) |
| Customer | DRUPLEY INC / DBA GRAZA (ORG-747717) |
| Channel | Cin7_Omni |
| Filters | status=OPEN,COMMITTED; orderType=DS |
| Orders Found | 1 (COMMITTED) |
| Assignee | MARTHA OLVERA (userId: 4419) |

## Order Breakdown

### Batch — Single Order (unique item combo)
DN-5197117 has a unique 4-item combination that does not match any other pending Graza DS order.

| Order ID | Recipient | Items |
|----------|-----------|-------|
| [DN-5197117](https://unis.item.com/wms/order/order/edit/DN-5197117) | Kaitlyn Frieling, Brooklyn NY | C1-DRZ-500×1, C1-SZL-750×1, S1-FZL142×1, S1-SZL142×1 |

### Wave Groups
None — only 1 order pending, no matching item+quantity sets.

### Label Notes
None — DN-5197117 has labelNote=null.

## Dispatch Result

| Field | Value |
|-------|-------|
| Setting | 1246 "Graza DS Batch" |
| Plan ID | [PLAN-5073368](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5073368) |
| Plan Status | **RELEASED** ✅ |
| Pick Method | BATCH_ORDER_PICK / PIECE_PICK |
| Task ID | [TASK-5297025](https://unis.item.com/wms/task/general-task/edit/TASK-5297025) |
| Task Status | NEW ✅ |
| Assignee | **4419 / MARTHA OLVERA** ✅ |
| skipPackingScanForItem | **true** ✅ |
| Task Tags | Graza DS Batch |
| Exception Orders | 0 |
| Failed Commitments | 0 |
| Release Date | 2026-06-22T02:52:45 |

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
- Only 1 new Graza DS order arrived between the previous run (RUN13) and this run.
- 1246 "Graza DS Batch" setting used: BATCH_ORDER_PICK, PIECE_PICK, min=1, max=22, assignee=4419, skipPackingScanForItem=true, needAutoRelease=true.
- Order items include C1- prefixed refill cans (new SKU prefix not seen in prior runs — prior waves used D1- and S1- prefixes).
- No Martha Olvera 18.xlsx found in workspace.
