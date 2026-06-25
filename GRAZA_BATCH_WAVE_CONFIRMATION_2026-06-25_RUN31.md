# Graza DS Batch Dispatch — 2026-06-25 RUN31 (Maintenance/Fix)

**Date/Time**: 2026-06-25 ~23:30 PT
**Dispatcher**: rjauregui (via API)
**Setting**: 1282 "Graza DS Wave Auto" (BATCH_ORDER_PICK fallback)

## Order Search Results
- Customer: Drupley Inc / dba Graza (ORG-747717)
- Statuses searched: IMPORTED, OPEN, COMMITTED
- Order Type: DS (Dropship)
- **Total found: 0 active DS orders** (all either SHIPPED or already PLANNED/RELEASED)

## Today's Graza Plans — Full Audit (12 plans, all RELEASED)
| Plan ID | Order(s) | Task ID | Assignee | Method | skipPacking | Status |
|---|---|---|---|---|---|---|
| PLAN-5074488 | DN-5199266 | TASK-5300676 | 4419 ✅ | BATCH | true | RELEASED |
| PLAN-5074487 | DN-5199254 | TASK-5300671 | 4419 ✅ | BATCH | true | RELEASED |
| PLAN-5074486 | DN-5199240 | TASK-5300662 | 4419 ✅ 🔧 | BATCH | true | RELEASED |
| PLAN-5074485 | DN-5199249 | TASK-5300661 | 4419 ✅ 🔧 | BATCH | true | RELEASED |
| PLAN-5074472 | DN-5199231 | TASK-5300648 | 4419 ✅ | BATCH | true | RELEASED |
| PLAN-5074471 | 5 orders | TASK-5300645 | 4419 ✅ | BATCH | true | RELEASED |
| PLAN-5074469 | DN-5199188, DN-5199193 | TASK-5300672 | 4419 ✅ | BATCH | true | RELEASED |
| PLAN-5074468 | 3 orders | TASK-5300636 | 4419 ✅ | BATCH | true | RELEASED |
| PLAN-5074465 | 5 orders | TASK-5300621 | 4419 ✅ | BATCH | true | RELEASED |
| PLAN-5074463 | DN-5199143 | TASK-5300638 | 4419 ✅ | ORDER | — | RELEASED |
| PLAN-5074460 | 3 orders | TASK-5300639 | 4419 ✅ | BATCH | — | RELEASED |
| PLAN-5074451 | DN-5199119 | TASK-5300673 | 4419 ✅ | WAVE | true | RELEASED |

🔧 = Fixed this run (was null, now 4419)

## Fix Applied — RUN31
### PLAN-5074486 (DN-5199240 → TASK-5300662)
- **Before**: defaultAssigneeUserId = null
- **After**: assignee = 4419 (MARTHA OLVERA) ✅
- **Method**: POST /wms/outbound/pick-task/batch-assignment

### PLAN-5074485 (DN-5199249 → TASK-5300661)
- **Before**: defaultAssigneeUserId = null
- **After**: assignee = 4419 (MARTHA OLVERA) ✅
- **Method**: POST /wms/outbound/pick-task/batch-assignment

## Verification
- ✅ All 12 plans: RELEASED
- ✅ All 12 tasks: assigned to 4419 (MARTHA OLVERA)
- ✅ 0 stuck in BUILDING/PLANNING/PICK_SUGGESTED
- ✅ 0 label-note/gift-note orders
- ✅ 0 exceptions
- ✅ 0 false inventory exceptions
- ✅ No PLAN-5072874/75/76/77 remnants (all resolved)
- ✅ 18.xlsx rules compliance

## Summary
| Metric | Count |
|---|---|
| Active Orders Found | 0 |
| New Plans Created | 0 |
| Plans Audited | 12 |
| Assignee Fixes Applied | 2 |
| Stuck Plans | 0 |
| Exceptions | 0 |
| Label Notes | 0 |
| Wave Groups | 0 |
