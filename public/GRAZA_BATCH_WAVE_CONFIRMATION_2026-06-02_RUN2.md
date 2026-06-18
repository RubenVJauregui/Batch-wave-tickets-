# Graza DS Night Shift Batch/Wave Run — 2026-06-02 10:04 AM PDT

## Run Summary

| Metric | Value |
|--------|-------|
| Run Time | 2026-06-02 10:04 AM PDT |
| Facility | Valley View (LT_F1) |
| Customer | DRUPLEY INC / DBA GRAZA (ORG-747717) |
| Excluded | Euromarket Designs (ORG-730898, ORG-359565) |
| Filters | status=IMPORTED,OPEN,COMMITTED; orderType=DS |
| Orders Found | 2 |
| Assignee | molvera (userId: 4419, MARTHA OLVERA) |

## Order Breakdown

### Label Note Orders → Separate Batch
- **Count: 0** — Neither order had label notes.

### Wave Tickets (Same Product + Quantity)
- **Wave dispatch attempted: 0 created** — Orders do not share same product+quantity across orders. Wave dispatch (setting 1250) returned no match because both orders were already consumed by batch dispatch.

### Batch (Everything Else, max 22)
- **Batch created: 1** via dispatch setting 1249

## Confirmed Creators

### Dispatch Setting (pre-existing)
- **ID**: 1249
- **Name**: Graza DS Night Shift - Batch
- **Pick Method**: BATCH_ORDER_PICK
- **Max Orders Per Plan**: 22
- **Pre-Assignee**: 4419 (molvera)

### Order Filter (pre-existing)
- **ID**: 1215
- **Name**: Graza DS Night Shift
- **Filter**: customerId=ORG-747717, orderType=DS, statuses=IMPORTED,OPEN,COMMITTED

### Order Plan (VERIFIED ✅)
- **ID**: [PLAN-5069684](https://unis.item.com/wms/order-plan/general/edit/PLAN-5069684)
- **Status**: RELEASED
- **Pick Method**: BATCH_ORDER_PICK
- **Default Assignee User ID**: 4419 (molvera) ✅
- **Orders**: DN-5188626, DN-5188625
- **Dispatch Setting**: 1249

### Pick Tasks (ALL VERIFIED ✅ — assigned to molvera)

| Task ID | Order(s) | Item | Qty | Assignee |
|---------|----------|------|-----|----------|
| [TASK-5281742](https://unis.item.com/wms/task/general-task/edit/TASK-5281742) | DN-5188625, DN-5188626 | ITEM-2352266 (S1-FZL142) | 1+30 | molvera (4419) ✅ |
| [TASK-5281743](https://unis.item.com/wms/task/general-task/edit/TASK-5281743) | DN-5188625 | ITEM-2352269 (GL1-DRZ500) | 2 | molvera (4419) ✅ |
| [TASK-5281744](https://unis.item.com/wms/task/general-task/edit/TASK-5281744) | DN-5188625 | ITEM-2352268 (GL1-SZL750) | 2 | molvera (4419) ✅ |

## Confirmed Counts

| Type | Created This Run | Assigned to molvera |
|------|-----------------|---------------------|
| Batches (Order Plans) | 1 | 1 ✅ |
| Wave Tickets | 0 | 0 |
| Pick Tasks | 3 | 3 ✅ |

## Order Details

### DN-5188626
- OMS ID: SO02000850-1
- Reference: 735424
- Channel: Cin7_Omni
- Status: COMMITTED
- Retailer: (none)
- Items:
  1. S1-FZL142 (ITEM-2352266) — 5 oz. Frizzle Spray — qty 30

### DN-5188625
- OMS ID: SO02000794-1
- Reference: 735421
- Channel: Cin7_Omni
- Status: COMMITTED
- Retailer: ORG-780130
- Items:
  1. S1-FZL142 (ITEM-2352266) — 5 oz. Frizzle Spray — qty 1
  2. GL1-DRZ500 (ITEM-2352269) — 500 ml Glass Drizzle — qty 2
  3. GL1-SZL750 (ITEM-2352268) — 750 ml Glass Sizzle — qty 2

## Notes

- Wave dispatch (setting 1250) returned error: "Order dispatch failed because no order matches setting" — the 2 orders were already consumed by the batch dispatch (setting 1249). This is expected behavior since no two orders shared the same product+quantity.
- Previous wave run (PLAN-5069677 at 16:38 UTC) captured 3 other Graza orders (DN-5188610, DN-5188618, DN-5188620) under WAVE_PICK_BY_ITEM, also assigned to molvera ✅.
- No Euromarket exclusion needed on these orders (neither had retailerId matching ORG-359565 or ORG-730898).
- Scheduling: environment does not support automated recurring runs. Manual re-trigger required.
