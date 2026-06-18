# Graza Batch/Wave Confirmation — 2026-05-29

Customer: DRUPLEY INC / DBA GRAZA (ORG-747717)  
Assignee: molvera (userId 4419)  
Order filter: Outbound orders, statuses IMPORTED/OPEN/COMMITTED, order type DS/dropship, Euromarket designs excluded.

## Confirmed WISE Creation

Created 8 Order Plans in WISE with `defaultAssigneeUserId=4419` and `defaultReplenishmentTaskAssigneeUserId=4419`.

### Waves — 6
- PLAN-5069227 — 2 orders: DN-5186797, DN-5186744
- PLAN-5069228 — 29 orders: DN-5186795, DN-5186792, DN-5186789, DN-5186786, DN-5186784, DN-5186781, DN-5186780, DN-5186779, DN-5186771, DN-5186770, DN-5186767, DN-5186761, DN-5186760, DN-5186758, DN-5186757, DN-5186752, DN-5186751, DN-5186749, DN-5186748, DN-5186747, DN-5186746, DN-5186743, DN-5186742, DN-5186735, DN-5186734, DN-5186732, DN-5186731, DN-5186730, DN-5186729
- PLAN-5069229 — 4 orders: DN-5186785, DN-5186762, DN-5186759, DN-5186750
- PLAN-5069230 — 3 orders: DN-5186783, DN-5186774, DN-5186728
- PLAN-5069231 — 3 orders: DN-5186775, DN-5186756, DN-5186741
- PLAN-5069232 — 2 orders: DN-5186769, DN-5186768

### Batches — 2
- PLAN-5069233 — label-note batch — 3 orders: DN-5186766, DN-5186765, DN-5186764
- PLAN-5069234 — remaining batch — 4 orders: DN-5186794, DN-5186793, DN-5186745, DN-5186733

## Verification

Each plan was verified via WISE order-plan info API. All 8 plans returned successfully with status `BUILDING`, the expected order IDs, and `defaultAssigneeUserId=4419`.

## Operational Note

Pick task creation/release was attempted but WISE rejected it because these order plans are still in `BUILDING` status. WISE requires the order plan to reach `PICK_SUGGESTED` before pick tasks can be created and `TASK_CREATED` before release. No pick tasks were created by this run.
