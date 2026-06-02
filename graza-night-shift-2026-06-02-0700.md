# Graza Night Shift Batch/Wave Run — 2026-06-02 07:00 PT

## Summary
- **Run Time**: 2026-06-02T14:03:23Z (07:03 PT)
- **Customer**: DRUPLEY INC / DBA GRAZA (ORG-747717)
- **Excluded**: Euromarket Designs, Inc. (ORG-359565)
- **Tab**: Night Shift
- **Status Filter**: IMPORTED, OPEN, COMMITTED
- **Order Type**: DS (Dropship)

## Orders Found
| Order ID | Status | Item Lines | labelNote |
|---|---|---|---|
| DN-5188470 | COMMITTED | ITEM-2352263 (Sizzle Refill Can) x2, ITEM-2352262 (Drizzle Refill Can) x1 | null |

## Grouping Decision
- **Label Notes**: 0 orders with label notes → no label-note batch
- **Wave (same product+quantity)**: No duplicate product/quantity across orders → no wave tickets
- **Batch (everything else)**: 1 order → standard batch via dispatch setting #1248

## Confirmed Results

### Batch Created
| Field | Value |
|---|---|
| **Order Plan ID** | [PLAN-5069624](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5069624) |
| **Pick Task ID** | [TASK-5281318](https://unis.item.com/wms/task/general-task/edit/TASK-5281318) |
| **Pick Method** | BATCH_ORDER_PICK |
| **Status** | RELEASED |
| **Priority** | MIDDLE |
| **Dispatch Setting** | #1248 "Graza DS Night Shift Batch" |
| **Assignee** | molvera (userId 4419, MARTHA OLVERA) |
| **Orders** | DN-5188470 |
| **Order Count** | 1 |
| **Failures** | 0 |
| **Exceptions** | 0 |

### Assignee Verification
| Check | Task | Plan |
|---|---|---|
| **preAssigneeUserId** | 4419 ✅ | 4419 ✅ |
| **assigneeUserId** | 4419 ✅ | — |
| **defaultAssigneeUserId** | — | 4419 ✅ |

## Wave Tickets Created
- **0** (no orders with matching product+quantity pairs)

## Label Note Batches
- **0** (no orders with label notes)

## Totals
| Metric | Count |
|---|---|
| Orders Processed | 1 |
| Batches Created | 1 |
| Waves Created | 0 |
| Batch IDs | PLAN-5069624 |
| Wave IDs | — |
| Task IDs | TASK-5281318 |

## Dispatch Setting Used
- **#1248** "Graza DS Night Shift Batch"
- pickMethod: BATCH_ORDER_PICK
- maxOrderQtyPerPlan: 22
- preAssigneeUserId: 4419 (molvera)
- needAutoRelease: true
- Created by: rjauregui at 2026-06-02T09:36:45
