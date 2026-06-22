# Graza Batch Wave Confirmation — 2026-06-22 RUN23

**Timestamp**: 2026-06-22 ~06:17 PDT
**Facility**: Valley View (LT_F1)
**Customer**: Drupley Inc / DBA Graza
**Order Type**: Dropship Order

---

## Search Results

| Status | Count |
|--------|-------|
| IMPORTED | 0 |
| OPEN | 0 |
| COMMITTED (new) | 1 — DN-5197232 |
| COMMITTED (already planned) | 692 |

**1 new COMMITTED order found**: DN-5197232 (Kayla Coppolecchia, Tampa FL, labelNote: null)

---

## Classification

| Category | Orders |
|----------|--------|
| Label-note orders | 0 |
| Wave groups | 1 — DN-5197232 auto-grouped into PLAN-5073409 (73 orders, WAVE_PICK_BY_ITEM) |
| Batch orders | 0 new (all remaining auto-matched into 27 batch plans) |

---

## Dispatch Result

| Field | Value |
|-------|-------|
| Dispatch Setting | 1246 "Graza DS Batch" (BATCH_ORDER_PICK, PIECE_PICK, skipPackingScanForItem=true) |
| New Wave Plan | [PLAN-5073409](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5073409) — WAVE_PICK_BY_ITEM, RELEASED, 73 orders, assignee 4419 |
| New Wave Task | [TASK-5297087](https://unis.item.com/wms/task/general-task/edit/TASK-5297087) |
| New Batch Plans | PLAN-5073410–5073436 (27 batch plans, all RELEASED, assignee 4419) |
| Total Active Plans | **28** (27 batch + 1 wave), all RELEASED |
| Total Active Tasks | **28** |

---

## Verification

- ✅ Assignee = 4419 (MARTHA OLVERA)
- ✅ skipPackingScanForItem = true on all plans
- ✅ Status = RELEASED (not stuck in PLANNING/BUILDING)
- ✅ labelNote = null — no label-note handling needed
- ✅ 0 exceptions
- ✅ 0 fail inventory commitments
- ✅ 18.xlsx rules fully compliant

---

## 8-Rule Compliance

| # | Rule | Status |
|---|------|--------|
| 1 | Full dispatch workflow (pick strategy → task → release) | ✅ PASS |
| 2 | Assignee = 4419 MARTHA OLVERA (userId, not username) | ✅ PASS |
| 3 | Plan not left in BUILDING/PLANNING/PICK_SUGGESTED | ✅ PASS — All RELEASED |
| 4 | No false exceptions on available inventory | ✅ PASS — 0 exceptions |
| 5 | Label notes separated into own batch | ✅ N/A — No label-note orders |
| 6 | Wave: identical item+quantity, 1 label/recipient, WAVE_PICK_BY_ITEM | ✅ PASS |
| 7 | Batch: ≤22 orders, non-wave, non-label-note, oldest first | ✅ PASS |
| 8 | Skip packing scan for item ON | ✅ PASS — true on all |

---

## Label Notes

- DN-5197232: labelNote = null — no label-note handling needed
- Previously flagged (RUN22): DN-5197115, DN-5197092, DN-5197012 still need manual print verification
