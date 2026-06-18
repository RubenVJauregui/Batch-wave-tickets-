# Graza Issue Review — 2026-06-18 — 18.xlsx

Source: `18.xlsx` report from Ruben / Martha feedback.

## Reported Issues

- Orders dropped but stayed in `PLANNING` until manually released.
- Several plans/orders did not get assigned to `molvera`.
- Wave labels printed **1 label per item** instead of **1 label per customer/order recipient**.
- Label notes could not be printed for some label-note orders.

## WISE Findings

Reviewed LT_F1 Graza plans from the report:

- `PLAN-5072874`
- `PLAN-5072875`
- `PLAN-5072876`
- `PLAN-5072877`
- `PLAN-5072914`

Root cause identified by WMS review:

1. The affected plans were created with a direct order-plan flow rather than the full Graza dispatch/release workflow.
2. Direct plan creation left plans without completed pick strategy/task/release steps until manual handling.
3. Some plans had missing assignment or incorrect assignment representation.
4. `PLAN-5072914` used text `molvera` instead of WMS userId `4419`, and remained stuck in `BUILDING` with no task IDs.
5. Wave settings were not fully applied; `skipPackingScanForItem` was not confirmed ON, which caused item-level label behavior.
6. True label-note orders, such as `DN-5195222`, were not handled through the label-note-specific workflow.

## Corrected Recurring Task Rules

The active Graza scheduled task was updated to require:

- Use the full Graza dispatch/release workflow/settings that creates:
  - pick strategy
  - task
  - release
- Do **not** use direct `/order-plan/create` alone.
- Assign using WMS userId `4419` / `MARTHA OLVERA (molvera)`, not username text.
- Verify every created plan/task is assigned to `4419` and reaches `RELEASED` or `COMPLETED` with task IDs.
- Do not leave plans in `BUILDING`, `PLANNING`, or `PICK_SUGGESTED`.
- For waves:
  - group by exact complete item/SKU set and exact quantity per item
  - item order does not matter
  - use `Wave Pick By Item`
  - turn ON `Skip Packing Scan For Item`
  - configure labels as 1 label per customer/order recipient, not 1 label per item
  - waves are not limited to 22 orders
- For label/gift notes:
  - separate true `labelNote` / gift-note orders into their own label-note batch workflow
  - verify the label note is printable
  - if printing fails, report exact order IDs and WISE error
- For batches:
  - only non-wave and non-label-note orders
  - max 22 orders per batch
  - oldest create date first

## Safe Correction Status

- `PLAN-5072874/75/76/77`: not safe to alter after manual release/completion.
- `PLAN-5072914`: identified as stuck; correction requires rollback/cancel and recreation through the proper dispatch workflow with userId `4419` and wave settings. Mutation was not performed without explicit approval.

## Active Automation

Active task: `4ohR10kY6NbMAlFd1_D1l`  
Schedule: every 15 minutes  
Assignee: `MARTHA OLVERA (molvera)` / WMS userId `4419`
