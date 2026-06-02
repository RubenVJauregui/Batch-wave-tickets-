# Graza Night Shift — Batch/Wave Run
**Date**: 2026-06-02 09:30 PT  
**Run By**: wms-agent (rjauregui)

## Search Criteria
- **Tab**: Night Shift (API: dispatch settings)
- **Statuses**: IMPORTED, OPEN, COMMITTED
- **Order Type**: DS (Dropship)
- **Customer**: ORG-747717 (DRUPLEY INC / DBA GRAZA)
- **Exclude**: Euromarket Designs (ORG-359565, ORG-730898)

## Orders Found
| Order ID | Status | Items | Retailer |
|---|---|---|---|
| DN-5188610 | COMMITTED | Sizzle 750ml (qty 1), Drizzle 500ml (qty 1) | null |
| DN-5188618 | COMMITTED | Sizzle 750ml (qty 1), Drizzle 500ml (qty 1) | null |
| DN-5188620 | COMMITTED | Frizzle Spray 5oz, Sizzle 750ml, Drizzle 500ml, Frizzle 750ml (all qty 1) | ORG-780130 |

## Label Notes
None of the 3 orders had `labelNote`. No label-note batch needed.

## Infrastructure Created
- **Order Filter**: `1215` (Graza DS Night Shift)
- **Dispatch Setting (Batch)**: `1249` (BATCH_ORDER_PICK, max 22, assignee: molvera/4419)
- **Dispatch Setting (Wave)**: `1250` (WAVE_PICK_BY_ITEM, max 500, assignee: molvera/4419)

## Confirmed Results

### Wave — ✅ Verified
| Field | Value |
|---|---|
| Order Plan | **PLAN-5069677** |
| Status | **RELEASED** |
| Assignee | **molvera (4419)** ✅ |
| Dispatch Setting | 1250 |
| Orders | DN-5188610, DN-5188618, DN-5188620 |
| Pick Tasks | TASK-5281651, TASK-5281652, TASK-5281653, TASK-5281654 |

### Batch — ⚠️ No Orders Available
Dispatch setting 1249 returned: "Order dispatch failed because no order matches setting" — all 3 orders were consumed by the wave plan.

## Summary
| Metric | Count |
|---|---|
| Wave Plans Created | 1 |
| Wave Pick Tasks Created | 4 |
| Batch Plans Created | 0 |
| Label Note Batches | 0 |
| Total Orders Processed | 3/3 |
| Confirmed Assigned to molvera | ✅ Yes (PLAN-5069677) |

## Known Limitation
The wave dispatch setting captured all 3 orders instead of only the 2 with identical product sets (DN-5188610 + DN-5188618). The dispatch system cannot distinguish orders by item composition through filter conditions alone. To achieve precise grouping (same product+quantity → wave; everything else → batch), separate order filters differentiated by item count or manual order ID lists would be needed.

## Links
- [Order Plan PLAN-5069677](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5069677)
- [Dispatch Setting 1249 (Batch)](https://unis.item.com/wms/order-dispatch/setting/general-setting/edit/1249)
- [Dispatch Setting 1250 (Wave)](https://unis.item.com/wms/order-dispatch/setting/general-setting/edit/1250)
