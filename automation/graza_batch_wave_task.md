# Graza Batch/Wave Ticket Automation

Scheduled task ID: `hGrtXO0b99Hw9zEq4Izb7`

Schedule: every 30 minutes (`*/30 * * * *`) in `America/Los_Angeles`.

## WISE criteria

- Module: Outbound > Order
- Tab: `Night shift`
- Status: `import`, `open`, `committed`
- Order type: `dropship order`
- Customer: `Drupley inc / dba Graza`
- Exclude customer: `Euromarket designs`

## Processing rules

1. Search eligible orders using the criteria above.
2. If orders have label notes, create separate batches for those orders.
3. Create wave tickets for all orders containing the same product and quantity.
4. Create batches for all remaining orders.
5. Limit each batch to 22 orders maximum.
6. Assign batches/waves to `molvera`.
7. Save run notes/results to this repository when executed.


## Confirmation requirement

Do **not** report success from planned/grouped counts only. After every WISE create/assign action, verify the batch or wave ticket exists and is assigned to `molvera`. Each run result must include confirmed counts plus batch/wave identifiers. If WISE mutation or verification is unavailable, report `0 confirmed` with the exact missing permission, API, field, or error.

## Repository

`RubenVJauregui/Batch-wave-tickets-`
