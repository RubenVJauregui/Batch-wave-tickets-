# Graza DS Batch Run — 2026-06-21 ~18:23 PDT (2026-06-22 01:23 UTC)

## Run Summary

| Metric | Value |
|--------|-------|
| Run Time | 2026-06-21 ~18:23 PDT |
| Facility | Valley View (LT_F1) |
| Customer | DRUPLEY INC / DBA GRAZA (ORG-747717) |
| Channel | Cin7_Omni |
| Filters | status=IMPORTED,OPEN,COMMITTED; orderType=DS |
| Orders Found | 7 (all COMMITTED) |
| Assignee | MARTHA OLVERA (userId: 4419) |

## Order Breakdown

### Wave A — Identical Item+Qty Set
**Item Set:** D1-DRZ500×1, D1-SZL750×1, D1-FZL750×1, S1-FZL142×1
| Order ID | Recipient |
|----------|-----------|
| DN-5197083 | — |
| DN-5197062 | — |

### Batch (Non-Wave, Non-Label-Note) — 5 orders
| Order ID |
|----------|
| DN-5197070 |
| DN-5197068 |
| DN-5197069 |
| DN-5197063 |
| DN-5197064 |

### Label Note Orders → Separate Batch
- **Count: 0** — No orders had label notes.

## Confirmed Dispatch

| Field | Value |
|-------|-------|
| **Dispatch Setting** | 1246 "Graza DS Batch" |
| **Plan ID** | [PLAN-5073363](https://unis.item.com/wms/order-plan/view/edit/PLAN-5073363) |
| **Plan Status** | **RELEASED** ✅ |
| **Task ID** | [TASK-5297020](https://unis.item.com/wms/task/general-task/edit/TASK-5297020) |
| **Task Status** | NEW |
| **Assignee** | **MARTHA OLVERA (userId 4419)** ✅ |
| **Pick Method** | BATCH_ORDER_PICK |
| **Skip Packing Scan** | true ✅ |
| **Pick Type** | PIECE_PICK |

## Verification

✅ Setting 1246 "Graza DS Batch" auto-processed all 7 orders in one plan
✅ Plan PLAN-5073363: status=RELEASED ✅
✅ Task TASK-5297020 created and linked to plan
✅ Assignee verified as userId 4419 / MARTHA OLVERA
✅ No orders stuck in BUILDING/PLANNING/PICK_SUGGESTED
✅ No orders sent to exception
✅ No inventory/product failures
✅ skipPackingScanForItem=true
✅ 0 label-note / gift-note orders
✅ Wave pair DN-5197062, DN-5197083 included in single batch plan

## Confirmed Counts

| Type | Count | Details |
|------|-------|---------|
| Orders processed | 7 | All COMMITTED → PLANNED |
| Wave groups | 1 | Wave A (2 orders, identical item/qty set) |
| Label-note orders | 0 | — |
| Batch plans | 1 | PLAN-5073363 |
| Wave plans | 0 | Wave A merged into batch plan |
| Pick tasks | 1 | TASK-5297020 |
| Exceptions | 0 | — |
| Inventory failures | 0 | — |

## Full Order List

| Order ID | Status | Group |
|----------|--------|-------|
| DN-5197083 | COMMITTED → PLANNED | Wave A |
| DN-5197062 | COMMITTED → PLANNED | Wave A |
| DN-5197070 | COMMITTED → PLANNED | Batch |
| DN-5197068 | COMMITTED → PLANNED | Batch |
| DN-5197069 | COMMITTED → PLANNED | Batch |
| DN-5197063 | COMMITTED → PLANNED | Batch |
| DN-5197064 | COMMITTED → PLANNED | Batch |

## Notes

- Martha Olvera 18.xlsx issue report not found in workspace — could not reference
- All 7 orders progressed from COMMITTED → PLANNED in a single plan via dispatch setting 1246
- Wave dispatch via setting 1247 was not separately executed — the batch setting 1246 auto-included all 7 orders (including Wave A pair), producing a clean RELEASED plan with correct assignee
