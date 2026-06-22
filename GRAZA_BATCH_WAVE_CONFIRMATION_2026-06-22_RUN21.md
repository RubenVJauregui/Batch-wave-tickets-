# Graza DS Dispatch — RUN 21

**Timestamp**: 2026-06-21 23:03 PDT (2026-06-22 06:03 UTC)
**Type**: Dispatch (1 new COMMITTED order)
**Facility**: LT_F1 (Valley View)
**Customer**: DRUPLEY INC / DBA GRAZA (ORG-747717)
**Assignee**: MARTHA OLVERA (userId=4419)

## Filter Applied
- Statuses: IMPORTED, OPEN, COMMITTED
- Order Type: DS (Dropship)
- Customer: ORG-747717

## Search Results

### New Orders to Dispatch: 1

| Order ID | Recipient | Created | Status |
|----------|-----------|---------|--------|
| DN-5197179 | Katie Gallagher | — | COMMITTED |

## Order Details — DN-5197179

| Field | Value |
|---|---|
| Recipient | Katie Gallagher (Bethlehem, PA) |
| Items | Sizzle Glass Bottle 750ml (ITEM-2352268) ×1 + Drizzle Glass Bottle 500ml (ITEM-2352269) ×1 |
| Channel | Cin7_Omni |
| Ship Method | SP |
| Carrier | ECON |
| Label Note | null |

## Classification

| Category | Count | Details |
|---|---|---|
| Label/Gift Notes | 0 | DN-5197179 has labelNote: null |
| Wave Groups | 0 | Only 1 order — cannot form a wave group |
| Batch | 1 | Single order batch (under 22 limit) |

## Dispatch Execution — Setting 1246 "Graza DS Batch"

| Field | Value |
|---|---|
| **Plan ID** | [PLAN-5073373](https://unis.item.com/wms/plan/order-plan/edit/PLAN-5073373) |
| **Plan Status** | **RELEASED** ✅ |
| **Pick Method** | BATCH_ORDER_PICK |
| **Task ID** | [TASK-5297030](https://unis.item.com/wms/task/general-task/edit/TASK-5297030) |
| **Task Status** | NEW |
| **Assignee** | MARTHA OLVERA (userId 4419) ✅ |
| **skipPackingScanForItem** | true ✅ |
| **Orders** | DN-5197179 (Katie Gallagher) |
| **Exceptions** | 0 |
| **Fail Inventory** | 0 |
| **Order Status** | PLANNED (from COMMITTED), released 2026-06-22T06:02:45 |

## Rule Compliance

| # | Rule | Status |
|---|---|---|
| 1 | Full dispatch workflow (pick strategy → task → release) | ✅ PASS — Setting 1246 workflow |
| 2 | Assignee = 4419 MARTHA OLVERA (not username text) | ✅ PASS — Both plan and task verified |
| 3 | Plan not left in BUILDING/PLANNING/PICK_SUGGESTED | ✅ PASS — RELEASED |
| 4 | No false exceptions on available inventory | ✅ PASS — 0 exceptions |
| 5 | Label notes separated into own batch | N/A — 0 label-note orders |
| 6 | Wave: identical item+quantity grouped, 1 label/recipient, skipPackingScan | N/A — No wave groups (1 order) |
| 7 | Batch: ≤22 orders, non-wave, non-label-note, oldest first | ✅ PASS — 1 order batch |
| 8 | Skip packing scan for item ON | ✅ PASS — true |

## Summary

- **New Orders**: 1 (DN-5197179)
- **Total Active Plans**: 17 (15 batch + 2 wave)
- **New Plan**: PLAN-5073373 → RELEASED
- **New Task**: TASK-5297030 → NEW, assigned 4419
- **Wave Plans**: 2 (PLAN-5073357, PLAN-5073356)
- **Batch Plans**: 15
- **Label Note Orders**: 0
- **Exceptions**: 0
- **Errors**: 0

## All 17 Active Plans

| Plan | Task | Type | Orders | Status | Assignee | SkipScan |
|------|------|------|--------|--------|----------|----------|
| PLAN-5073373 | TASK-5297030 | Batch | 1 (DN-5197179) | RELEASED | 4419 | true |
| PLAN-5073371 | TASK-5297028 | Batch | 2 | RELEASED | 4419 | true |
| PLAN-5073370 | TASK-5297027 | Batch | 2 | RELEASED | 4419 | true |
| PLAN-5073369 | TASK-5297026 | Batch | 3 | RELEASED | 4419 | true |
| PLAN-5073368 | TASK-5297025 | Batch | 1 | RELEASED | 4419 | true |
| PLAN-5073367 | TASK-5297024 | Batch | 2 | RELEASED | 4419 | true |
| PLAN-5073365 | TASK-5297022 | Batch | 11 | RELEASED | 4419 | true |
| PLAN-5073364 | TASK-5297021 | Batch | 4 | RELEASED | 4419 | true |
| PLAN-5073363 | TASK-5297020 | Batch | 7 | RELEASED | 4419 | true |
| PLAN-5073362 | TASK-5297019 | Batch | 1 | RELEASED | 4419 | true |
| PLAN-5073357 | TASK-5297017 | **Wave** | 4 | RELEASED | 4419 | true |
| PLAN-5073356 | TASK-5297016 | **Wave** | 4 | RELEASED | 4419 | true |
| PLAN-5073353 | TASK-5297015 | Batch | 6 | RELEASED | 4419 | true |
| PLAN-5073352 | TASK-5297013 | Batch | 2 | RELEASED | 4419 | true |
| PLAN-5073351 | TASK-5297010 | Batch | 3 | RELEASED | 4419 | true |
| PLAN-5073350 | TASK-5297009 | Batch | 5 | RELEASED | 4419 | true |
| PLAN-5073346 | TASK-5297005 | Batch | 1 | RELEASED | 4419 | true |

## Martha Olvera 18.xlsx
- Issue report: GRAZA_ISSUE_REVIEW_2026-06-18_18XLSX.md
- All dispatch rules active and compliant
- PLAN-5072874/75/76/77: previously resolved
- PLAN-5072914: previously identified as stuck (text "molvera" instead of userId 4419)

## Conclusion

**1 new COMMITTED Graza DS order dispatched.** DN-5197179 (Katie Gallagher) batched under PLAN-5073373, RELEASED, assigned to Martha Olvera (4419), skipPackingScanForItem=true. Zero exceptions, zero label-note orders. All 18.xlsx rules compliant. Total active plans now 17.
