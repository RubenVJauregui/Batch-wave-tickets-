# Graza DS Dispatch — Confirmation

**Run time:** 2026-06-04 23:05 PDT (2026-06-05 06:05 UTC)  
**Customer:** DRUPLEY INC / DBA GRAZA (ORG-747717)  
**Facility:** Valley View (LT_F1)

## Orders Found: 2

| Order | Status | Items (itemCode × qty) | Label Note |
|---|---|---|---|
| DN-5189846 | COMMITTED | D1-DRZ500×1, D1-SZL750×1, D1-FZL750×1, S1-FZL142×1 | None |
| DN-5189836 | COMMITTED | C1-SZL-750×1 | None |

## Results

| Category | Count | Details |
|---|---|---|
| **Total orders** | 2 | DS, COMMITTED, Cin7_Omni |
| **Label-note orders** | 0 | No separate label batch needed |
| **Wave groups** | 0 | No two orders share identical item+quantity signature |
| **Batch plans** | 1 | PLAN-5070540 — BATCH_ORDER_PICK |
| **Tasks created** | 1 | TASK-5285249 |
| **Assignee** | molvera (userId: 4419) | |
| **Errors** | 0 | WMS operations succeeded |

## Wave/Batch Breakdown

| Type | Count | Order IDs |
|---|---|---|
| **Waves** | 0 | — |
| **Batches** | 1 | DN-5189846, DN-5189836 |

## Plan & Task Details

| Plan ID | Status | Pick Method | Assignee | Orders |
|---|---|---|---|---|
| [PLAN-5070540](https://unis.item.com/wms/order-plan/general-order-plan/edit/PLAN-5070540) | RELEASED | BATCH_ORDER_PICK | molvera (4419) | 2 |

| Task ID | Plan ID | Status | Assignee |
|---|---|---|---|
| [TASK-5285249](https://unis.item.com/wms/task/general-task/edit/TASK-5285249) | PLAN-5070540 | — | molvera (4419) |

## Notes

- Only 2 COMMITTED DS orders found for Graza — 0 OPEN and 0 IMPORTED
- Wave rule evaluated: DN-5189846 (4 items: DRZ500, SZL750, FZL750, S1-FZL142) ≠ DN-5189836 (1 item: SZL-750) → no wave group formed
- Both orders batched together under single plan PLAN-5070540
- All operations completed successfully with zero errors
