# Graza DS Dispatch — 2026-06-19 08:15 PDT

## Summary

| Metric | Value |
|--------|-------|
| Customer | DRUPLEY INC / DBA GRAZA (ORG-747717) |
| Facility | Valley View (LT_F1) |
| Orders Found | 6 (all COMMITTED, DS) |
| Label Notes | 0 |
| Wave Groups | 3 orders (Drizzle:1 + Sizzle:1 combo) |
| Batch Groups | 3 standalone orders |
| Dispatch Setting Used | Setting 1247 "Graza DS Wave" |
| Pick Method | WAVE_PICK_BY_ITEM |
| Dispatch Result | 1 plan, 1 task, all RELEASED |
| Inventory Failures | 0 |
| Exceptions | 0 |
| Assignee | MARTHA OLVERA (userId 4419) ✅ |

## Plan Details

| Field | Value |
|-------|-------|
| Plan ID | [PLAN-5073064](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5073064) |
| Status | RELEASED |
| Pick Method | WAVE_PICK_BY_ITEM |
| Pick Type | PIECE_PICK |
| skipPackingScanForItem | ✅ true |
| Shipping Rule | FIFO |
| Assignee | 4419 (molvera) |

## Task Details

| Field | Value |
|-------|-------|
| Task ID | [TASK-5296057](https://unis.item.com/wms/task/general-task/edit/TASK-5296057) |
| Status | NEW |
| Assignee | 4419 (molvera) ✅ |
| Priority | LOW |
| Tags | Graza DS Wave |

### Pick Lines
- ITEM-2352257 (Sizzle): qty 10 @ Location 136383
- ITEM-2352258 (Drizzle): qty 4 @ Location 202458

## Order Details

| Order ID | Ref | Customer | Items | Status |
|----------|-----|----------|-------|--------|
| DN-5195623 | 743089 | madison nairne | Sizzle x6 | PLANNED |
| DN-5195624 | 743086 | Beth Protass | Drizzle:1, Sizzle:1 | PLANNED |
| DN-5195625 | 743087 | Dylan Thomas | Sizzle x1 | PLANNED |
| DN-5195626 | 743091 | Julie Bermudez | Drizzle x1 | PLANNED |
| DN-5195627 | 743088 | Ryan Reich | Drizzle:1, Sizzle:1 | PLANNED |
| DN-5195628 | 743090 | Sara Pittman | Drizzle:1, Sizzle:1 | PLANNED |

## Wave/Batch Classification

### Wave (exact match: Drizzle:1 + Sizzle:1)
- DN-5195624 (Beth Protass, #655511)
- DN-5195627 (Ryan Reich, #655509)
- DN-5195628 (Sara Pittman, #655507)

### Standalone (would be batch, ≤22)
- DN-5195623 (madison nairne, Sizzle x6, #655508)
- DN-5195625 (Dylan Thomas, Sizzle x1, #655510)
- DN-5195626 (Julie Bermudez, Drizzle x1, #655506)

## Notes

- Setting 1247 "Graza DS Wave" captured ALL 6 orders because the orderFilter 1213 selects all Graza DS orders regardless of item composition. WISE do-dispatch API does not support specifying individual order IDs.
- No label notes or gift notes found.
- 0 exceptions, 0 inventory commitment failures.
- GitHub repo "Batch-wave-tickets-" not accessible — results saved locally.
- Dashboard repo / Coolify deploy not available in this environment.
