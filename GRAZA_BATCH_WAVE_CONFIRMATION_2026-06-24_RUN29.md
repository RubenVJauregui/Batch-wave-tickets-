# Graza DS Batch Dispatch — 2026-06-24 RUN29

**Date/Time**: 2026-06-24 18:48 PDT (2026-06-25 01:48 UTC)
**Dispatcher**: rjauregui (via API)
**Setting**: 1246 "Graza DS Batch"

## Order Search Results
- Customer: Drupley Inc / dba Graza (ORG-747717)
- Statuses searched: OPEN, COMMITTED
- Order Type: DS (Dropship)
- **Total found: 3 COMMITTED orders** (0 OPEN, 0 IMPORTED)

## Wave/Batch Classification
| Category | Count | Notes |
|---|---|---|
| Wave Groups (same item+quantity) | 0 | All 3 orders have unique item+quantity combinations |
| Label Notes | 0 | All 3 orders have labelNote=null |
| Regular Batch | 3 | All 3 into 1 batch |

## Order Details
| Order ID | Ref | Items | Status |
|---|---|---|---|
| DN-5199173 | 745477 | ITEM-2352263 qty=4 (Sizzle Refill Can) | COMMITTED |
| DN-5199174 | 745478 | ITEM-2352258 qty=2 (Drizzle), ITEM-2352257 qty=2 (Sizzle) | COMMITTED |
| DN-5199180 | 745480 | ITEM-2352266 qty=1 (Frizzle Spray), ITEM-2352257 qty=1, ITEM-2352265 qty=1 (Frizzle), ITEM-2352258 qty=1 (Drizzle) | COMMITTED |

## Dispatch Result
| Field | Value |
|---|---|
| **Plan ID** | [PLAN-5074468](https://unis.item.com/wms/order-plan/general-order-plan/edit/PLAN-5074468) |
| **Task ID** | [TASK-5300636](https://unis.item.com/wms/task/general-task/edit/TASK-5300636) |
| **Status** | RELEASED |
| **Assignee** | MARTHA OLVERA (userId 4419) ✅ |
| **Pick Method** | BATCH_ORDER_PICK |
| **Pick Type** | PIECE_PICK |
| **skipPackingScanForItem** | true ✅ |
| **Setting** | 1246 "Graza DS Batch" |

## Verification
- ✅ Plan status: RELEASED
- ✅ Task status: NEW
- ✅ Assignee: 4419 (MARTHA OLVERA)
- ✅ skipPackingScanForItem: true
- ✅ All 3 orders in plan
- ✅ No exceptions
- ✅ No failed inventory commitments
- ✅ No label notes (all null)

## Summary
| Metric | Count |
|---|---|
| Orders Processed | 3 |
| Plans Created | 1 |
| Tasks Created | 1 |
| Waves (same item+quantity) | 0 |
| Label Note Batches | 0 |
| Regular Batches | 1 (3 orders) |
| Failures | 0 |
| Exceptions | 0 |
| Inventory Commitment Failures | 0 |
