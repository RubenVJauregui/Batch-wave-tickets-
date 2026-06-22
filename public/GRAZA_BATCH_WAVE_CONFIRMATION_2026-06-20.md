# Graza Batch/Wave Dispatch Confirmation — June 20, 2026 ~19:01 PT

## Run Summary

| Metric | Value |
|---|---|
| **Total Orders Found** | 3 (all COMMITTED) |
| **Orders Dispatched** | 3/3 (100%) |
| **Plan ID** | PLAN-5073267 |
| **Task ID** | TASK-5296849 |
| **Status** | RELEASED |
| **Pick Method** | BATCH_ORDER_PICK |
| **Pick Type** | PIECE_PICK |
| **Assignee** | 4419 / MARTHA OLVERA (molvera) |
| **skipPackingScanForItem** | true |
| **Orders in Batch** | DN-5196562, DN-5196563, DN-5196564 |
| **Waves** | 0 (no matching item+quantity combos) |
| **Label Note Batches** | 0 (no label notes) |
| **Exceptions** | 0 |
| **Failures** | 0 |
| **Plans Stuck** | 0 |

## Order Details

| Order ID | Reference | Items | Label Note |
|---|---|---|---|
| DN-5196562 | 743590 | ITEM-2352264 (Frizzle Jug) qty1, ITEM-2352266 (Frizzle Spray) qty1 | null |
| DN-5196563 | 743592 | ITEM-2352257 (Sizzle) qty1 | null |
| DN-5196564 | 743593 | ITEM-2352257 (Sizzle) qty1, ITEM-2352266 (Frizzle Spray) qty6 | null |

## Wave Analysis

No wave groups formed — all 3 orders have different item+quantity combinations. None share the exact same SKU set with matching quantities.

## Settings Used

Setting **1246 "Graza DS Batch"** — full dispatch/release workflow (pick strategy → task → release).

## Issues / Blockers

None. Clean run.
