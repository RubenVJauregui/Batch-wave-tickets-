# Graza DS Dispatch — 2026-06-19 10:11 PDT (RUN 3)

## Summary

| Metric | Value |
|--------|-------|
| Customer | DRUPLEY INC / DBA GRAZA (ORG-747717) |
| Facility | Valley View (LT_F1) |
| Orders Found | 3 (all dropship, COMMITTED/OPEN/IMPORTED) |
| Label Notes | 0 |
| Wave Groups | 0 (no matching item+quantity combos) |
| Batch Groups | 0 (all 3 dispatched via single dispatch setting) |
| Dispatch Setting Used | Setting 1246 (full dispatch/release workflow) |
| Pick Method | PIECE_PICK |
| Dispatch Result | 1 plan, 1 task, RELEASED |
| Inventory Failures | 0 |
| Exceptions | 0 |
| Assignee | MARTHA OLVERA (userId 4419) ✅ |

## Plan Details

| Field | Value |
|-------|-------|
| Plan ID | PLAN-5073109 |
| Status | RELEASED |
| Pick Method | PIECE_PICK |
| Pick Type | PIECE_PICK |
| Shipping Rule | FIFO |
| Assignee | 4419 (molvera / MARTHA OLVERA) |

## Task Details

| Field | Value |
|-------|-------|
| Task ID | TASK-5296259 |
| Status | NEW → linked to RELEASED plan |
| Assignee | 4419 (molvera) ✅ |
| Tags | Graza DS |

## Notes

- Full dispatch/release workflow used (setting → pick strategy → plan → task → release). No direct plan-create used.
- All 3 orders dispatched together. No wave groups formed (no exact item+quantity matches across orders).
- No label notes, gift notes, or exceptions found.
- 0 orders sent to exception — all inventory available.
- skipPackingScanForItem and label behavior verified.
- Assignee 4419 (MARTHA OLVERA) verified on plan and task.
