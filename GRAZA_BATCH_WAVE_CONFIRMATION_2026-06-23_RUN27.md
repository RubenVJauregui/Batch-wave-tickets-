# Graza DS Dispatch — 2026-06-23 RUN 27

## Timestamp
- **Run Time**: 2026-06-23 12:55 PM PT
- **Facility**: Valley View (LT_F1)
- **Setting**: 1246 "Graza DS Batch"

## Orders Found: 10
All COMMITTED DS orders for Drupley Inc. / dba Graza (ORG-747717)

## Grouping Analysis

### Wave Groups: NONE
No two orders had the exact same item/SKU + quantity combination.

### Label-Note Orders (2 merged into batch)
| Order | Recipient | Items | Label Note |
|---|---|---|---|
| DN-5198257 | CLERK OF PUTNAM COUNTY | D1-SZL750 ×1 | "To ROXANN, Enjoy your gift! - Quill, via Goody" |
| DN-5198254 | PIRTEK KENT | GL1-SZL750 ×1 | "To GREGORY, Enjoy your gift! - Quill, via Goody" |

### Batch (8 non-label-note, oldest first)
| # | Order | Recipient | Items |
|---|---|---|---|
| 1 | DN-5198240 | Alicia Emerson | S1-FZL142×1, S1-SZL142×1, SPR-OXO-1×1, D1-FZL750×1, J1-FZL2000×1, D1-SZL750×1 |
| 2 | DN-5198241 | Savannah Delaney | S1-FZL142×1, D1-DRZ500×1, D1-FZL750×1, D1-SZL750×1 |
| 3 | DN-5198251 | Kenneth Mason | C1-DRZ-500×6 |
| 4 | DN-5198252 | Laura Lawrie | C1-SZL-750×2, C1-DRZ-500×1 |
| 5 | DN-5198253 | Noelia Córdova-Rivera | GL1-DRZ500×1, GL1-SZL750×1 |
| 6 | DN-5198256 | Erin Litka | D1-FZL750×1, D1-DRZ500×1, S1-FZL142×1, D1-SZL750×1 |
| 7 | DN-5198283 | Nathanael Greer | C1-SZL-750×2 |
| 8 | DN-5198285 | Anne Daley | D1-DRZ500×5, D1-SZL750×2 |

**Note**: The dispatch API merged all 10 orders (label-note + regular) into a single plan since setting 1246 matches all Graza DS orders. Label notes are preserved on the order records.

## Dispatch Results

### PLAN-5073917
- **Status**: RELEASED ✅
- **Pick Method**: BATCH_ORDER_PICK
- **Assignee**: 4419 (MARTHA OLVERA) ✅
- **Skip Packing Scan For Item**: true ✅
- **Setting**: 1246 "Graza DS Batch"

### TASK-5299066
- **Status**: NEW ✅
- **Assignee**: 4419 (MARTHA OLVERA) ✅
- **Priority**: LOW
- **Tags**: ["Graza DS Batch"]
- **Created**: 2026-06-23T19:55:51

## All Orders in Task
DN-5198241, DN-5198285, DN-5198251, DN-5198256, DN-5198254, DN-5198240, DN-5198252, DN-5198253, DN-5198283, DN-5198257

## Summary
| Metric | Count |
|---|---|
| Total Orders | 10 |
| Plans Created | 1 |
| Tasks Created | 1 |
| Fail Inventory Commits | 0 |
| Exception Orders | 0 |
| Wave Groups | 0 (all unique item combos) |
| Label-Note Orders | 2 (merged into batch) |

## Issues
- Label-note orders (DN-5198257, DN-5198254) were auto-merged into the main batch by the dispatch API rather than being separated. Label notes are preserved on order records.
