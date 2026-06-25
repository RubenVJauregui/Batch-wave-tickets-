# Graza DS Batch Dispatch — 2026-06-25 RUN30

**Date/Time**: 2026-06-25 ~21:35 PT
**Dispatcher**: rjauregui (via API)
**Setting**: 1282 "Graza DS Wave Auto" (BATCH_ORDER_PICK fallback)

## Order Search Results
- Customer: Drupley Inc / dba Graza (ORG-747717)
- Statuses searched: IMPORTED, OPEN, COMMITTED
- Order Type: DS (Dropship)
- **Total found: 2 COMMITTED orders** (0 OPEN, 0 IMPORTED)

## Wave/Batch Classification
| Category | Count | Notes |
|---|---|---|
| Wave Groups (same item+quantity) | 0 | DN-5199249 (4 items) vs DN-5199240 (3 items) — different item sets |
| Label Notes | 0 | Both orders have labelNote=null, giftMessageByLabel=null |
| Regular Batch | 1 (2 orders) | Both into 1 batch |

## Order Details
| Order ID | Ref | Items | Status |
|---|---|---|---|
| DN-5199249 | 745504 | ITEM-2352265 (Frizzle 750ml) ×1, ITEM-2352258 (Drizzle 500ml) ×1, ITEM-2352266 (Frizzle Spray 5oz) ×1, ITEM-2352257 (Sizzle 750ml) ×1 | COMMITTED |
| DN-5199240 | 745503 | ITEM-2352266 (Frizzle Spray 5oz) ×1, ITEM-2352263 (Sizzle Refill) ×1, ITEM-2352262 (Drizzle Refill) ×1 | COMMITTED |

## Dispatch Results

### Plan: PLAN-5074485
| Field | Value |
|---|---|
| **Plan ID** | [PLAN-5074485](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5074485) |
| **Task ID** | [TASK-5300661](https://unis.item.com/wms/task/general-task/edit/TASK-5300661) |
| **Order** | DN-5199249 |
| **Status** | RELEASED |
| **Assignee** | MARTHA OLVERA (userId 4419) ✅ |
| **Pick Method** | BATCH_ORDER_PICK |
| **skipPackingScanForItem** | true ✅ |

### Plan: PLAN-5074486
| Field | Value |
|---|---|
| **Plan ID** | [PLAN-5074486](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5074486) |
| **Task ID** | [TASK-5300662](https://unis.item.com/wms/task/general-task/edit/TASK-5300662) |
| **Order** | DN-5199240 |
| **Status** | RELEASED |
| **Assignee** | MARTHA OLVERA (userId 4419) ✅ |
| **Pick Method** | BATCH_ORDER_PICK |
| **skipPackingScanForItem** | true ✅ |

## Verification
- ✅ Plan status: RELEASED (both)
- ✅ Task status: NEW (both)
- ✅ Assignee: 4419 (MARTHA OLVERA) — both verified
- ✅ skipPackingScanForItem: true — both verified
- ✅ All 2 orders processed
- ✅ No exceptions
- ✅ No failed inventory commitments
- ✅ No label notes (all null)
- ✅ 18.xlsx rules compliance

## Inventory Verified
- ITEM-2352265: 6 LP records (490+1224+1224 units)
- ITEM-2352258: 4 LP records (1532+1632+1632 units)
- ITEM-2352266: 5 LP records (808+2232+ units)
- ITEM-2352257: 15 LP records (467+612+640+ units)
- ITEM-2352263: 6 LP records (177+1200+1200 units)
- ITEM-2352262: 9 LP records (811+1872+1872 units)

## API Notes
- Prior plans PLAN-5072874/75/76/77 verified as COMPLETED (no rollback needed)
- Task creation: PUT /outbound/order-plan/{id}/doCreatePickTask
- Assignee set post-creation via PUT /pick-task/update (doCreatePickTask doesn't propagate assignee)

## Summary
| Metric | Count |
|---|---|
| Orders Processed | 2 |
| Plans Created | 2 |
| Tasks Created | 2 |
| Waves (same item+quantity) | 0 |
| Label Note Batches | 0 |
| Regular Batches | 1 (2 orders) |
| Failures | 0 |
| Exceptions | 0 |
| Inventory Commitment Failures | 0 |
