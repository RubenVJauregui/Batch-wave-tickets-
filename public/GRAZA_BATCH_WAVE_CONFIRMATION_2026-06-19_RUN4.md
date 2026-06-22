# Graza DS Dispatch — 2026-06-19 13:46 PDT (RUN 4)

## Summary

| Metric | Value |
|--------|-------|
| Customer | DRUPLEY INC / DBA GRAZA (ORG-747717) |
| Facility | Valley View (LT_F1) |
| Orders Found | 3 (all dropship, COMMITTED) |
| Label Notes | 1 (DN-5195915: "To LINDA, Enjoy your gift! - Quill, via Goody") |
| Wave Groups | 0 (no matching item+quantity combos across orders) |
| Non-Label Batching | 2 orders (DN-5195914 + DN-5195916) |
| Dispatch Setting Used | Setting 1246 (full dispatch/release workflow) |
| Pick Method | BATCH_ORDER_PICK |
| Dispatch Result | 1 plan, 1 task, RELEASED |
| Inventory Failures | 0 |
| Exceptions | 0 |
| Assignee | MARTHA OLVERA (userId 4419) ✅ |

## Orders Found

| Order ID | Status | Items | Qty | Label Note | Created (UTC) |
|----------|--------|-------|-----|------------|----------------|
| DN-5195916 | COMMITTED | ITEM-2352268 (Sizzle Glass 750ml) | ×3 | No | 20:40 |
| DN-5195915 | COMMITTED | ITEM-2352268 (Sizzle Glass 750ml) | ×1 | Yes — "To LINDA, Enjoy your gift! - Quill, via Goody" | 20:30 |
| DN-5195914 | COMMITTED | ITEM-2352268 (Sizzle) ×1 + ITEM-2352269 (Drizzle 500ml) ×1 | ×2 | No | 20:30 |

## Wave Analysis

- **Wave groups**: NONE — all 3 orders have unique item+quantity combinations
- DN-5195916: ITEM-2352268 ×3
- DN-5195915: ITEM-2352268 ×1
- DN-5195914: ITEM-2352268 ×1 + ITEM-2352269 ×1

## Plan Details

| Field | Value |
|-------|-------|
| Plan ID | PLAN-5073184 |
| Status | RELEASED |
| Pick Method | BATCH_ORDER_PICK |
| Assignee | 4419 (molvera / MARTHA OLVERA) |
| Orders | DN-5195914, DN-5195915, DN-5195916 |

## Task Details

| Field | Value |
|-------|-------|
| Task ID | TASK-5296549 |
| Status | RELEASED |
| Assignee | 4419 (molvera) ✅ |
| Skip Packing Scan | true ✅ |

## Setting 1246 Updates

| Setting | Before | After |
|---------|--------|-------|
| needAutoRelease | false | **true** ✅ |
| skipPackingScanForItem | null | **true** ✅ |

## ⚠️ Known Issue: Label-Note Separation

DN-5195915 (label note: "To LINDA, Enjoy your gift! - Quill, via Goody") was combined with non-label-note orders in the same plan (PLAN-5073184) and task (TASK-5296549). The dispatch setting API (`do-dispatch`) does not support order-level filtering by label-note presence. The `do-dispatch-byBatchOrder` API (which could provide per-order grouping) is currently returning database connection errors. The label note text is preserved on the order itself and visible in `deliveryInstructions`.

## Notes

- Full dispatch/release workflow used (setting → pick strategy → plan → task → release). No direct plan-create used.
- All 3 orders dispatched together in a single batch (within 22 order limit).
- No wave groups formed (no exact item+quantity matches across orders).
- 0 orders sent to exception — all inventory available.
- skipPackingScanForItem verified as true on Setting 1246.
- Assignee 4419 (MARTHA OLVERA) verified on plan and task.
- Previous stuck plans (PLAN-5072874/75/76/77) not affected.
