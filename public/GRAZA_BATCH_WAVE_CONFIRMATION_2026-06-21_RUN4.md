# Graza Batch Wave Confirmation — 2026-06-21 RUN4

**Time**: 2026-06-21 17:38 PDT (2026-06-22 00:38 UTC)
**Dispatched by**: rjauregui (via WMS API)
**Assignee**: MARTHA OLVERA — userId 4419

## Search Summary
| Status | Count |
|--------|-------|
| COMMITTED (new) | 1 |
| IMPORTED | 0 |
| OPEN | 0 |
| Already PLANNED (prior runs) | 45,790 |
| **Total Graza DS Orders** | **45,791** |

## Dispatch Results

### Single Order — DN-5197054
| Field | Value |
|---|---|
| **Order ID** | [DN-5197054](https://unis.item.com/wms/order/order/edit/DN-5197054) |
| **Customer** | Susan Haven, Bryan TX |
| **Channel** | Cin7_Omni |
| **Items** | D1-SZL750 (Sizzle) x1, D1-DRZ500 (Drizzle) x1 |
| **Item IDs** | ITEM-2352257, ITEM-2352258 |
| **Classification** | **Batch** (unique item combo, no label note, not in any existing wave group) |

### Plan & Task
| Field | Value |
|---|---|
| **Plan ID** | [PLAN-5073362](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5073362) |
| **Plan Status** | **RELEASED** ✅ |
| **Pick Method** | BATCH_ORDER_PICK / PIECE_PICK |
| **Task ID** | [TASK-5297019](https://unis.item.com/wms/task/general-task/edit/TASK-5297019) |
| **Assignee** | **4419 — MARTHA OLVERA** ✅ |
| **Skip Packing Scan** | **true** ✅ |
| **Dispatch Setting** | 1273 (Graza DS Batch) |
| **Release Date** | 2026-06-22T00:38:43 |

## Rule Compliance
| # | Rule | Status |
|---|------|--------|
| 1 | Full dispatch workflow (pick strategy → task → release) | ✅ PASS |
| 2 | Assignee = 4419 (not username text) | ✅ PASS |
| 3 | Plan RELEASED with task IDs | ✅ PASS |
| 4 | No false exceptions | ✅ PASS |
| 5 | Label notes separated | N/A |
| 6 | Wave: identical item/qty grouped, 1 label/recipient | N/A |
| 7 | Batch: ≤22, non-wave, non-label-note | ✅ PASS |
| 8 | Skip packing scan ON | ✅ PASS |

## Exceptions
**None.** Zero exceptions, zero failures, zero stuck PLANNING orders.

## Notes
- Only 1 new COMMITTED Graza DS order since prior run (RUN3).
- All 45,790 other Graza DS orders already dispatched in prior runs.
- No Martha Olvera `18.xlsx` found in workspace.
- Settings 1273 (Batch) and 1282 (Wave) pre-configured by rjauregui 2026-06-20.
