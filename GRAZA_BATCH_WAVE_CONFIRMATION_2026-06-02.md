# Graza DS Night Shift Batch Run — 2026-06-02 02:36 AM PDT

## Run Summary

| Metric | Value |
|--------|-------|
| Run Time | 2026-06-02 02:36 AM PDT |
| Facility | Valley View (LT_F1) |
| Customer | DRUPLEY INC / DBA GRAZA (ORG-747717) |
| Excluded | Euromarket Designs (ORG-730898, ORG-359565) |
| Filters | status=IMPORTED,OPEN,COMMITTED; orderType=DS |
| Orders Found | 1 |
| Assignee | molvera (userId: 4419) |

## Order Breakdown

### Label Note Orders → Separate Batch
- **Count: 0** — No orders had label notes.

### Wave Tickets (Same Product + Quantity)
- **Count: 0** — Only 1 order total; no matching product+quantity pairs across orders.

### Batch (Everything Else, max 22)
- **Batch created: 1**

## Confirmed Creators

### Order Filter
- **ID**: 1214
- **Name**: Graza DS Night Shift Batch
- **Filter**: customerId=ORG-747717, orderType=DS, statuses=IMPORTED,OPEN,COMMITTED

### Dispatch Setting
- **ID**: 1248
- **Name**: Graza DS Night Shift Batch
- **Pick Method**: BATCH_ORDER_PICK
- **Max Orders Per Plan**: 22
- **Pre-Assignee**: 4419 (molvera)

### Order Plan (VERIFIED)
- **ID**: [PLAN-5069572](https://unis.item.com/wms/order-plan/general/edit/PLAN-5069572)
- **Status**: RELEASED
- **Pick Method**: BATCH_ORDER_PICK
- **Default Assignee User ID**: 4419 (molvera)
- **Orders**: [DN-5188445](https://unis.item.com/wms/order/general/edit/DN-5188445)

### Pick Task (VERIFIED)
- **ID**: [TASK-5281227](https://unis.item.com/wms/task/general-task/edit/TASK-5281227)
- **Associated Order Plan**: PLAN-5069572
- **Order**: DN-5188445

### Order Status Change
- **DN-5188445**: COMMITTED → PLANNED
- **Order Plan ID**: PLAN-5069572
- **Pick Task IDs**: TASK-5281227
- **Order Plan Release Date**: 2026-06-02T09:36:50

## Verification

✅ Order DN-5188445 verified in WISE: status=PLANNED, pickTaskIds=["TASK-5281227"], orderPlanId="PLAN-5069572"
✅ Order Plan PLAN-5069572: status=RELEASED, defaultAssigneeUserId=4419 (molvera)
✅ Pick Task TASK-5281227 created and linked to order plan

## Confirmed Counts

| Type | Created | Assigned to molvera |
|------|---------|---------------------|
| Batches (Order Plans) | 1 | 1 |
| Wave Tickets | 0 | 0 |
| Pick Tasks | 1 | 1 |

## Order Details

### DN-5188445
- OMS ID: SO01997408-1
- Reference: 734914
- Channel: Cin7_Omni
- Items:
  1. D1-SZL750 (ITEM-2352257) — Sizzle Bottle 750ml — qty 1
  2. D1-DRZ500 (ITEM-2352258) — Drizzle Bottle 500ml — qty 1
  3. S1-FZL142 (ITEM-2352266) — Frizzle Spray Can 5oz — qty 1
  4. D1-FZL750 (ITEM-2352265) — Frizzle Bottle 750ml — qty 1
