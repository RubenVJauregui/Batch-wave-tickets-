# Graza DS Dispatch Run — 2026-06-05

**Run Time:** 2026-06-05 ~06:32 UTC (2026-06-04 ~23:32 PDT)

## Parameters
- **Customer:** DRUPLEY INC / DBA GRAZA (ORG-747717)
- **Facility:** Valley View (LT_F1)
- **Order Types:** DS (Dropship)
- **Statuses:** IMPORTED, OPEN, COMMITTED
- **Assignee:** molvera (userId: 4419)

## Orders Found: 2
| Order ID | Status | Items |
|---|---|---|
| DN-5189848 | COMMITTED | D1-DRZ500×1, D1-SZL750×1, S1-FZL142×1, D1-FZL750×1 |
| DN-5189847 | COMMITTED | D1-DRZ500×1, D1-SZL750×1, S1-FZL142×1, D1-FZL750×1 |

## Label Notes
**None detected** — both orders have `labelNote: null`

## Wave Rule Analysis
Both orders have the **exact same item+quantity signature** (4 items, qty 1 each). They qualify as a wave group.

## Dispatch Results
- **Dispatch Setting:** id=1247 "Graza DS Wave" (WAVE_PICK_BY_ITEM)
- **Plan ID:** [PLAN-5070542](https://unis.item.com/wms/order-plan/order-plan/edit/PLAN-5070542)
- **Pick Task:** [TASK-5285260](https://unis.item.com/wms/task/general-task/edit/TASK-5285260)
- **Status:** RELEASED
- **Assignees:** molvera (4419)
- **Orders:** DN-5189848, DN-5189847

## Batches Created: 0
All orders covered by wave (identical signature). No remaining orders for batch processing.

## Errors: None

## Summary
| Metric | Count |
|---|---|
| Orders processed | 2 |
| Label-note orders | 0 |
| Wave groups | 1 |
| Waves created | 1 (PLAN-5070542) |
| Batches created | 0 |
| Tasks created | 1 (TASK-5285260) |
| Errors | 0 |
| Assignee | molvera (4419) |
