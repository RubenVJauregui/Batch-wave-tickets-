# Graza Batch/Wave Dispatch Confirmation — June 21, 2026 ~11:32 PT

## Run Summary

| Metric | Value |
|---|---|
| **Total Orders Found** | 45,749 (all statuses), 5 actionable COMMITTED |
| **Orders Dispatched** | 5/5 (100%) |
| **Plan ID** | [PLAN-5073330](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5073330) |
| **Task ID** | [TASK-5296980](https://unis.item.com/wms/task/general-task/edit/TASK-5296980) |
| **Status** | RELEASED |
| **Assignee** | 4419 / MARTHA OLVERA (molvera) |
| **skipPackingScanForItem** | true |
| **Labels** | 1 per customer/order recipient |
| **Orders in Wave** | 5 (all absorbed into single wave — identical item+quantity sets) |
| **Waves Created** | 1 (Wave Pick By Item) |
| **Batches Created** | 0 (not needed — all orders covered by wave) |
| **Label Note Batches** | 0 (no label notes) |
| **Exceptions** | 0 |
| **Failures** | 0 |
| **Plans Stuck** | 0 |

## Settings Used

Setting **1246 "Graza DS Batch"** — full dispatch/release workflow (pick strategy → task → release). Direct order-plan creation was NOT used, avoiding the stuck PLANNING issue from prior runs (PLAN-5072874/75/76/77).

## Wave Details

- **Pick Method**: Wave Pick By Item
- **Default Pick Task Assignee**: 4419 / MARTHA OLVERA
- **Skip Packing Scan For Item**: true
- **Labels**: 1 per customer/order recipient

## Issues / Blockers

None. Clean run with full dispatch/release workflow.

## Prior Issue Resolution

- Prior direct plan-create approach (PLAN-5072874/75/76/77) caused stuck PLANNING state and label/assignee issues. This run used the correct full dispatch/release path with no stuck plans.
- The 18.xlsx report issues reviewed per Martha Olvera's reports — no blockers found in this run.
