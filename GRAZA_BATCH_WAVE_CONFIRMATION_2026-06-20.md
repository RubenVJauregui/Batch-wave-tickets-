# Graza Batch/Wave Confirmation — 2026-06-20

## Run Summary

| Metric | Value |
|---|---|
| **Run Date** | 2026-06-20 |
| **Customer** | DRUPLEY INC / DBA GRAZA (ORG-747717) |
| **Channel** | Cin7_Omni |
| **Dispatch By** | rjauregui (setting 1246) |
| **Assignee** | MARTHA OLVERA (userId 4419 / molvera) |
| **Total Plans** | 5 |
| **Total Orders Dispatched** | 19 |
| **Wave Groups** | 0 (all BATCH_ORDER_PICK) |
| **Batches** | 5 |
| **Status** | All RELEASED ✓ |

## Plan Details

| Plan ID | Orders | Task ID | Status | Assignee | skipPackingScan |
|---|---|---|---|---|---|
| PLAN-5073227 | 1 (DN-5196042) | TASK-5296746 | RELEASED | 4419 ✓ | true |
| PLAN-5073224 | 2 (DN-5196040-41) | TASK-5296745 | RELEASED | 4419 ✓ | true |
| PLAN-5073223 | 1 (DN-5196037) | TASK-5296736 | RELEASED | 4419 ✓ | true |
| PLAN-5073222 | 5 (DN-5196029-31…) | TASK-5296733 | RELEASED | 4419 ✓ | true |
| PLAN-5073221 | 10 (DN-5195982-6013) | TASK-5296725 | RELEASED | 4419 ✓ | true |

## Issues Identified (per Martha Olvera's 18.xlsx Report)

### 🔴 Issue 1: Label-Note Orders NOT Separated
Orders with gift/label notes mixed into regular batch plans instead of isolated in their own label-note batch:

| Order ID | Label Note |
|---|---|
| DN-5196029 | "To: Howie" |
| DN-5196006 | "To William" |
| DN-5196013 | "To: Carl and Chad" |

These orders are in PLAN-5073222 and PLAN-5073221 alongside regular (non-label-note) orders. Per workflow rules, label-note orders must be separated into their own batch(es) so the label note can be preserved and printed.

### 🔴 Issue 2: No Wave Groups Created
All 19 orders were dispatched via BATCH_ORDER_PICK (setting 1246). No WAVE_PICK_BY_ITEM plans were created. If any order groups share the exact same item/SKU set and quantity, they should be separated into wave groups.

### 🔴 Issue 3: skipPackingScanForItem Gaps on Legacy Plans
Older plans from June 19 dispatch transition show `null` instead of `true`:

| Plan ID | skipPackingScanForItem |
|---|---|
| PLAN-5073177 | null |
| PLAN-5073159 | null |
| PLAN-5073147 | null |
| PLAN-5073146 | null |
| PLAN-5073145 | null |
| PLAN-5073144 | null |

### ⚠️ Issue 4: 9 Plans Cancelled Yesterday (June 19)
Cancelled by rtapia:

PLAN-5073121, PLAN-5073122, PLAN-5073123, PLAN-5073124, PLAN-5073093, PLAN-5073097, PLAN-5073098, PLAN-5073099, PLAN-5073064, PLAN-5073060

No orderIds remained after cancellation.

## Search Results

- **Total Graza DS orders scanned**: 45,268 (453 pages)
- **Target status filter**: IMPORTED, OPEN, COMMITTED
- **Result**: ZERO orders in target statuses — all have progressed to PLANNED or beyond
- **No EXCEPTION orders** found for Graza

## Conclusion

The Graza dispatch pipeline is functioning for today's run — all orders auto-dispatched with correct assignee (4419/MARTHA OLVERA) and RELEASED. The operational gaps center on:
1. Label-note isolation missing from dispatch setting 1246
2. Wave group separation not configured
3. Legacy plan skipPackingScanForItem consistency

These are configuration/process-level issues in dispatch settings (1246/1269), not runtime failures.
