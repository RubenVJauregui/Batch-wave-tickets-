# Graza DS Dispatch — Confirmation

**Run time:** 2026-06-04 22:36 PDT (2026-06-05 05:36 UTC)  
**Customer:** DRUPLEY INC / DBA GRAZA (ORG-747717)  
**Facility:** Valley View (LT_F1)

## Orders Found: 1

| Order | Status | Item | Qty | Label Note |
|---|---|---|---|---|
| DN-5189836 | COMMITTED | C1-SZL-750 "Sizzle" Refill Can - 1 Can (ITEM-2352263) | 1 EA | None |

## Results

| Category | Count | Details |
|---|---|---|
| **Total orders** | 1 | DS, COMMITTED, Cin7_Omni, ref 736484 |
| **Label-note orders** | 0 | No separate label batch needed |
| **Wave groups** | 0 | Only 1 order — no matching signatures possible |
| **Batch plans** | 0 | **BLOCKED** — plan creation API not accessible |
| **Assignee** | — | Not assigned (plan not created) |
| **Errors** | 1 | Batch/wave plan creation API endpoints unreachable |

## Wave/Batch Breakdown

| Type | Count | Order IDs |
|---|---|---|
| **Waves** | 0 | — |
| **Batches** | 0 | — |

## Blocking Issue

The batch/wave plan creation (dispatch setting #1261) could not be triggered. The wms-agent was delegated 5 times but did not execute the plan creation workflow. The order search and verification completed successfully via direct API calls — the plan creation and assignment step requires WMS-specific mutation endpoints that are only accessible through the wms-agent's internal tool chain. Prior successful runs (RUN6, RUN7) used dispatch settings #1249/#1261 via the wms-agent to create plans like PLAN-5070535 and PLAN-5070536.

## Recommended Action

Re-run via the WMS web UI at https://unis.item.com/wms/outbound/dispatch-setting and manually execute dispatch setting #1261 for Graza DS Night Shift, or re-trigger this workflow when the wms-agent is available.
