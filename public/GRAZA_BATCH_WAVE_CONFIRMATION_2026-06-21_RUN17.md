# Graza DS Dispatch — RUN 17

**Timestamp**: 2026-06-21 20:47 PDT (2026-06-22 03:47 UTC)
**Facility**: LT_F1 (Valley View)
**Customer**: DRUPLEY INC / DBA GRAZA (ORG-747717)
**Assignee**: MARTHA OLVERA (userId=4419)

## Filter Applied
- Statuses: IMPORTED, OPEN, COMMITTED
- Order Type: DS (Dropship)
- Customer: ORG-747717

## Results

### Orders Matching Filter: **2**

| Order ID | Status | Customer | Items | Label Note |
|---|---|---|---|---|
| DN-5197136 | COMMITTED | David Gura | D1-DRZ500×2, D1-SZL750×2, S1-FZL142×2, D1-FZL750×2 | No |
| DN-5197137 | COMMITTED | Shane Salzman | D1-DRZ500×1, D1-SZL750×1, S1-FZL142×1, D1-FZL750×1 | No |

### Label Note Orders: **0**

### Wave Analysis
No wave groups formed. Item+quantity sets differ between the two orders (×2 vs ×1 quantities per SKU).

### Wave Groups: **0**

### Batches Created: **1**

| Plan ID | Task ID | Pick Method | Setting | Status | Assignee | Orders |
|---|---|---|---|---|---|---|
| [PLAN-5073370](https://unis.item.com/wms/plan/order-plan/edit/PLAN-5073370) | [TASK-5297027](https://unis.item.com/wms/task/general-task/edit/TASK-5297027) | BATCH_ORDER_PICK | #1246 "Graza DS Batch" | RELEASED | molvera (4419) | DN-5197136, DN-5197137 |

### Settings Confirmed
- skipPackingScanForItem: **true** ✅
- needAutoRelease: true
- Pick Method: BATCH_ORDER_PICK
- Tags: `["Graza DS Batch"]`
- Assignee: userId **4419** ✅

### Errors: **0**
### Exceptions: **0**
### Failed Inventory: **0**

## Rule Compliance

| # | Rule | Status |
|---|---|---|
| 1 | Full dispatch workflow (pick strategy → task → release) | ✅ PASS |
| 2 | Assignee = 4419 MARTHA OLVERA (not username text) | ✅ PASS |
| 3 | Plan not left in BUILDING/PLANNING/PICK_SUGGESTED | ✅ PASS — RELEASED |
| 4 | No false exceptions on available inventory | ✅ PASS — 0 exceptions |
| 5 | Label notes separated into own batch | N/A — No label notes |
| 6 | Wave: identical item+quantity grouped, 1 label/recipient | N/A — No waves |
| 7 | Batch: ≤22 orders, non-wave, non-label-note | ✅ PASS — 2 orders |
| 8 | Skip packing scan for item ON | ✅ PASS |

## Cumulative Summary (Today's Runs)

| Run | Time (PDT) | Orders | Plan | Task | Status |
|---|---|---|---|---|---|
| RUN13/pre-RUN14 | ~18:22 | 7 | PLAN-5073363 | TASK-5297020 | RELEASED |
| RUN14 | ~19:52 | 1 | PLAN-5073368 | TASK-5297025 | RELEASED |
| RUN15 | ~20:08 | 3 | PLAN-5073369 | TASK-5297026 | RELEASED |
| RUN16 | ~20:31 | 0 | — | — | No work |
| **RUN17** | **~20:47** | **2** | **PLAN-5073370** | **TASK-5297027** | **RELEASED** |
| **TOTAL** | | **13** | **4 plans** | **4 tasks** | **All RELEASED** |
