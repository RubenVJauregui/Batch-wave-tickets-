# Graza DS Dispatch — 2026-06-19 14:53 PDT (RUN 5)

## Summary

| Metric | Value |
|--------|-------|
| Customer | DRUPLEY INC / DBA GRAZA (ORG-747717) |
| Facility | Valley View (LT_F1) |
| Orders Found | 7 (all dropship, COMMITTED) |
| Label Notes | 2 (DN-5195934 + DN-5195932 — Goody gift notes) |
| Wave Groups | 0 (all orders have unique item×qty combos) |
| Non-Label Batching | 7 orders (all in one batch) |
| Dispatch Setting Used | Setting 1246 "Graza DS Batch" (full dispatch/release workflow) |
| Pick Method | BATCH_ORDER_PICK |
| Dispatch Result | 1 plan, 1 task, RELEASED |
| Inventory Failures | 0 |
| Exceptions | 0 |
| Assignee | MARTHA OLVERA (userId 4419) ✅ |

## Plan Details

| Field | Value |
|-------|-------|
| Plan ID | [PLAN-5073203](https://unis.item.com/wms/order-plan/order-plan-detail/edit/PLAN-5073203) |
| Status | RELEASED |
| Pick Method | BATCH_ORDER_PICK |
| Assignee | 4419 (molvera / MARTHA OLVERA) |

## Task Details

| Field | Value |
|-------|-------|
| Task ID | [TASK-5296636](https://unis.item.com/wms/task/general-task/edit/TASK-5296636) |
| Status | RELEASED |
| Assignee | 4419 (molvera) ✅ |
| Skip Packing Scan | true ✅ |

## Orders Dispatched (7)

| # | Order ID | Reference | Items | Label Note |
|---|----------|-----------|-------|------------|
| 1 | DN-5195931 | 743221 | ITEM-2352257×1, ITEM-2352258×1, ITEM-2352267×1 | — |
| 2 | DN-5195932 | 743223 | ITEM-2352258×1, ITEM-2352257×1 | ⚠️ Goody gift |
| 3 | DN-5195933 | 743224 | ITEM-2352262×1 | — |
| 4 | DN-5195934 | 743234 | ITEM-2352257×1 | ⚠️ Goody gift |
| 5 | DN-5195936 | 743238 | ITEM-2352258×1, ITEM-2352257×2 | — |
| 6 | DN-5195937 | 743235 | ITEM-2352263×1, ITEM-2352262×6 | — |
| 7 | DN-5195943 | 743241 | ITEM-2352262×1, ITEM-2352263×1 | — |

## ⚠️ Known Issue: Label-Note Separation

DN-5195934 (label note: "To Jack, Enjoy your gift! - Aaron and the Wealth Management Solutions Team, via Goody") and DN-5195932 (label note: "To Dick, Enjoy your gift! - Dropbox Champions, via Goody") were combined with non-label-note orders in the same plan (PLAN-5073203) and task (TASK-5296636).

Setting 1258 "Graza DS Label Note Batch" (filter 1223) returned "no order matches" — the filter does not currently pick up these orders. Setting 1246's filter (1213) captures all DS orders indiscriminately. The label-note filter configuration may need adjustment in WISE.

## Notes

- Full dispatch/release workflow used (setting → pick strategy → plan → task → release). No direct plan-create used.
- All 7 orders dispatched together in a single batch (within 22 order limit).
- No wave groups formed (all 7 orders have unique item×qty combinations).
- 0 orders sent to exception — all inventory available.
- skipPackingScanForItem verified as true on Setting 1246.
- Assignee 4419 (MARTHA OLVERA) verified on plan and task.
- 1 new order arrived mid-run (DN-5195943) — successfully included.
