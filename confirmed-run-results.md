# Confirmed Run Results

Date: 2026-05-29
Repository target: RubenVJauregui/Batch-wave-tickets-
Status: Save to GitHub requested; local results file prepared. Remote push attempted next.

## Request Scope
- WISE > Outbound > Order
- Tab: Night shift
- Status: import, open, committed
- Order type: dropship order
- Customer: Drupley inc / dba Graza
- Exclude customer: Euromarket designs
- Separate label-note orders into their own batch
- Create wave tickets for orders containing the same product and quantity
- Create batches for everything else, max 22 orders per batch
- Assign batches/waves to molvera
- Verify each create/assign mutation in WISE before reporting success

## Confirmed Search Findings
- Confirmed customer: `DRUPLEY INC / DBA GRAZA` = `ORG-747717`
- Confirmed dropship order code for search: `DS`
- Confirmed currently queryable matching Graza dropship orders in backend search: `40` orders in `COMMITTED`
- Confirmed `labelNote` exists as a real order field
- Confirmed matching orders with non-null label notes:
  - `DN-5186860`
  - `DN-5186839`
- Confirmed item-line reads succeeded for grouping feasibility:
  - `DN-5186887`
  - `DN-5186886`

## Confirmed Mutation Results
- Created batches: `0 confirmed`
- Created wave tickets: `0 confirmed`
- Assigned batches/waves to `molvera`: `0 confirmed`

## Exact Blocking Issues
- Missing verified mutation API/contract for batch creation from selected outbound orders
- Missing verified mutation API/contract for wave ticket creation from selected outbound orders
- Missing verified assignment API/contract for assigning created batch/wave records to user `molvera`
- Missing verified user identity for `molvera` because user lookup endpoints timed out
- Missing verified field/semantics for enforcing “exclude customer Euromarket designs” in this exact search
- Missing verified API/field equivalence for the WISE `Night shift` tab
- Timeout errors on user/permission lookups for `molvera`

## Confirmed Identifiers
- None created or assigned
