# Graza DS Dispatch — RUN 19

**Timestamp**: 2026-06-21 21:35 PDT (2026-06-22 04:35 UTC)
**Type**: Dispatch (2 new COMMITTED orders)
**Facility**: LT_F1 (Valley View)
**Customer**: DRUPLEY INC / DBA GRAZA (ORG-747717)
**Assignee**: MARTHA OLVERA (userId=4419)

## Filter Applied
- Statuses: IMPORTED, OPEN, COMMITTED
- Order Type: DS (Dropship)
- Customer: ORG-747717

## Search Results

### New Orders to Dispatch: 2

| Order ID | Recipient | Created | Status |
|----------|-----------|---------|--------|
| DN-5197156 | Harsha Chalasani | ~04:20 | COMMITTED |
| DN-5197161 | James campagnone | ~04:30 | COMMITTED |

## Classification

| Category | Count | Details |
|---|---|---|
| Label/Gift Notes | 0 | Both orders have labelNote: null |
| Wave Groups | 0 | Item sets differ: DN-5197161 has D1-DRZ500+D1-SZL750, DN-5197156 has J1-FZL2000 |
| Batch | 2 | Both go into 1 batch (under 22 limit, oldest-first) |

## Dispatch Execution — Setting 1246 "Graza DS Batch"

| Field | Value |
|---|---|
| **Plan ID** | [PLAN-5073371](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5073371) |
| **Plan Status** | **RELEASED** ✅ |
| **Pick Method** | BATCH_ORDER_PICK |
| **Task ID** | [TASK-5297028](https://unis.item.com/wms/task/general-task/edit/TASK-5297028) |
| **Task Status** | NEW |
| **Assignee** | MARTHA OLVERA (userId 4419) ✅ |
| **skipPackingScanForItem** | true ✅ |
| **Orders** | DN-5197161 (James campagnone), DN-5197156 (Harsha Chalasani) |
| **Exceptions** | 0 |
| **Fail Inventory** | 0 |

## Rule Compliance

| # | Rule | Status |
|---|---|---|
| 1 | Full dispatch workflow (pick strategy → task → release) | ✅ PASS — Setting 1246 workflow |
| 2 | Assignee = 4419 MARTHA OLVERA (not username text) | ✅ PASS — Both plan and task verified |
| 3 | Plan not left in BUILDING/PLANNING/PICK_SUGGESTED | ✅ PASS — RELEASED |
| 4 | No false exceptions on available inventory | ✅ PASS — 0 exceptions |
| 5 | Label notes separated into own batch | N/A — 0 label-note orders |
| 6 | Wave: identical item+quantity grouped, 1 label/recipient, skipPackingScan | N/A — No wave groups |
| 7 | Batch: ≤22 orders, non-wave, non-label-note, oldest first | ✅ PASS — 2 orders, oldest-first |
| 8 | Skip packing scan for item ON | ✅ PASS — true |

## Summary

- **New Orders**: 2
- **Total Active Plans**: 16 (15 existing + 1 new PLAN-5073371)
- **New Plan**: PLAN-5073371 → RELEASED
- **New Task**: TASK-5297028 → NEW, assigned 4419
- **Wave Plans**: 2 (PLAN-5073357, PLAN-5073356)
- **Batch Plans**: 14
- **Label Note Orders**: 0
- **Exceptions**: 0
- **Errors**: 0

## Conclusion

**2 new COMMITTED Graza DS orders dispatched.** Both batched together under PLAN-5073371, RELEASED, assigned to Martha Olvera (4419), skipPackingScanForItem=true. Zero exceptions, zero label-note orders. All 18.xlsx rules compliant. Total active plans now 16.
