# Graza DS Dispatch — 2026-06-23 — RUN26 (Manual Full Dispatch)

**Time:** 2026-06-23 09:15 PDT
**Type:** Manual Full Dispatch
**Tenant:** LT | **Facility:** LT_F1 (Valley View)
**Customer:** Drupley Inc / DBA Graza (ORG-747717)
**Channel:** Cin7_Omni

## Search Results
- **103 Graza DS orders** found (status: COMMITTED)
- **0 orders with label notes** — all `labelNote: null`

## Dispatch
- Setting: **1246 "Graza DS Batch"**
- Pick Method: **BATCH_ORDER_PICK / PIECE_PICK**
- Assignee: **4419 / MARTHA OLVERA (molvera)**

### Plans & Tasks

| # | Plan | Orders | Task | Status | Skip Scan |
|---|------|--------|------|--------|-----------|
| 1 | PLAN-5073837 | 22 | TASK-5298597 | RELEASED | true |
| 2 | PLAN-5073838 | 22 | TASK-5298599 | RELEASED | true |
| 3 | PLAN-5073839 | 22 | TASK-5298600 | RELEASED | true |
| 4 | PLAN-5073840 | 22 | TASK-5298602 | RELEASED | true |
| 5 | PLAN-5073841 | 15 | TASK-5298603 | RELEASED | true |

**Totals:** 103 orders | 5 plans | 5 tasks

## Rule Compliance

| Rule | Status |
|------|--------|
| 1. Full dispatch workflow | ✅ PASS |
| 2. Assignee = 4419 | ✅ PASS |
| 3. Not stuck in BUILDING/PLANNING | ✅ PASS |
| 4. No false exceptions | ✅ PASS |
| 5. Label notes | ✅ N/A |
| 6. Wave grouping | ⚠️ DEFERRED |
| 7. Batch ≤22, oldest first | ✅ PASS |
| 8. Skip Packing Scan | ✅ PASS |

⚠️ Rule 6 deferred: batch grouping used for all 103 orders. Line-item retrieval for wave matching not feasible.
