# Graza Batch/Wave Dispatch Confirmation — June 21, 2026 ~12:52 PT (RUN 2)

## Run Summary

| Metric | Value |
|---|---|
| **Total Orders Found** | 8 COMMITTED |
| **Orders Dispatched** | 8/8 (100%) |
| **Plan ID** | [PLAN-5073336](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5073336) |
| **Task ID** | [TASK-5296991](https://unis.item.com/wms/task/general-task/edit/TASK-5296991) |
| **Plan Status** | RELEASED |
| **Task Status** | NEW (ready for picking) |
| **Assignee** | 4419 / MARTHA OLVERA (molvera) |
| **Pick Method** | BATCH_ORDER_PICK |
| **Pick Type** | PIECE_PICK |
| **skipPackingScanForItem** | true |
| **Dispatch Setting** | 1273 (Graza DS Batch) |
| **Exceptions** | 0 |
| **Failures** | 0 |
| **Plans Stuck** | 0 |

## Orders Dispatched

| Order ID | Ship To | Items |
|---|---|---|
| DN-5196920 | Lisa Reilly | D1-SZL750(1), D1-DRZ500(1), D1-FZL750(1), S1-FZL142(1) |
| DN-5196909 | Sarah Silverbrand | D1-DRZ500(1), S1-FZL142(1), D1-SZL750(1), D1-FZL750(1) |
| DN-5196919 | Janet Dionne | D1-SZL750(1), D1-DRZ500(1) |
| DN-5196923 | Zoe Favilla | D1-DRZ500(1), PKG-GIFT-B2(1), D1-SZL750(1) |
| DN-5196922 | Annmarie Lucchese | S1-FZL142(2), D1-SZL750(2), D1-DRZ500(2) |
| DN-5196921 | Joanna DeLong | GL1-SZL750(1) |
| DN-5196918 | Jenna Scheub | C1-SZL-750(2), C1-DRZ-500(2) |
| DN-5196910 | Kari Lyle | S1-FZL142(1), C1-SZL-750(1) |

## Wave Analysis

**Wave group identified:** DN-5196920 + DN-5196909 (exact same SKU/qty set: D1-DRZ500=1, D1-FZL750=1, D1-SZL750=1, S1-FZL142=1)

**Wave not separated** — Setting 1273 (batch) claimed all 8 orders before a wave setting could be applied. This is the same WISE behavior as RUN 1 (2026-06-21 ~11:32 PT). A dedicated `WAVE_PICK_BY_ITEM` setting needs to be applied before the batch setting in sequence to separate waves.

## Wave/Batch Breakdown

| Type | Count | Orders |
|---|---|---|
| **Wave** | 1 group (2 orders, not separated) | DN-5196920, DN-5196909 |
| **Batch** | 1 batch (8 orders) | All 8 COMMITTED orders |
| **Label-Note Batch** | 0 | No label notes present |

## Workflow Verification

- ✅ Full dispatch/release workflow used (pick strategy → task → release). Direct order-plan creation NOT used.
- ✅ Assignee: 4419 / MARTHA OLVERA (molvera) — verified
- ✅ Plan status: RELEASED (not stuck in BUILDING/PLANNING/PICK_SUGGESTED)
- ✅ Task created: TASK-5296991, status NEW
- ✅ skipPackingScanForItem: true
- ✅ Label configuration: 1 label per customer/order recipient
- ✅ No exceptions, no inventory commitment failures
- ⚠️ Wave not separated (known WISE batch-first dispatch behavior)

## Issues / Blockers

**Wave separation:** WISE applies batch setting 1273 before a wave setting can fire. The 2-order wave group (DN-5196920 + DN-5196909) was absorbed into the batch plan. A dedicated wave-first dispatch setting or reordering of settings is needed to separate waves from batches in a single dispatch run.

## Prior Issue Resolution

- Prior direct plan-create approach (PLAN-5072874/75/76/77) caused stuck PLANNING state and label/assignee issues. This run used the correct full dispatch/release path.
- The 18.xlsx report issues reviewed per Martha Olvera's reports — no blockers found in this run.
- RUN 1 (2026-06-21 ~11:32 PT) with PLAN-5073330/TASK-5296980 — same wave-not-separated behavior observed.
