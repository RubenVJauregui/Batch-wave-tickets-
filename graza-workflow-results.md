# Graza Dropship Workflow Results
**Run Time:** 2026-06-04 13:30 PDT  
**Facility:** LT_F1 (Valley View)  
**Customer:** DRUPLEY INC / DBA GRAZA (ORG-747717)

## Summary
| Metric | Count |
|---|---|
| Orders Searched | 1 |
| Label Note Orders | 0 |
| Wave Ticket Orders | 1 |
| Batch Orders (remaining) | 0 |
| Total Plans Created | 1 |
| Total Tasks Created | 1 |
| Assignee | molvera (MARTHA OLVERA, userId=4419) |

## Order Details
| Order ID | Status | Order Type | Item | Qty | Reference No | Channel |
|---|---|---|---|---|---|---|
| [DN-5189664](https://unis.item.com/wms/order/order/edit/DN-5189664) | PLANNED | DS | C1-SZL-750 (ITEM-2352263) | 6 EA | 736363 | Cin7_Omni |

## Plan Details
| Plan ID | Status | Pick Method | Assignment Mode | Assignee |
|---|---|---|---|---|
| [PLAN-5070473](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5070473) | RELEASED | BATCH_ORDER_PICK | EQUIPMENT | molvera (task-level) |

## Task Details
| Task ID | Status | Assignee | Pick Location | Item | Qty |
|---|---|---|---|---|---|
| [TASK-5284968](https://unis.item.com/wms/task/general-task/edit/TASK-5284968) | NEW | MARTHA OLVERA (4419) | 115.025.1.2 | C1-SZL-750 | 6 EA |

## Workflow Steps
1. ✅ Searched orders: status=IMPORTED,OPEN,COMMITTED; type=DS; customer=ORG-747717 → 1 order found
2. ✅ Label notes check: DN-5189664 has `labelNote: null` → no label-note batch needed
3. ✅ Created plan via `createAndClaimTaskActionByOrderIds` → PLAN-5070473 (BATCH_ORDER_PICK)
4. ✅ Assigned TASK-5284968 to molvera via `batch-assignment` → assigneeUserId=4419
5. ⚠️ Plan cancel attempt returned success but plan remained RELEASED
6. ⚠️ Plan update blocked in RELEASED status → assigned at task level instead

## Errors / Issues
- **Plan cancel no-op**: `PUT /wms/outbound/order-plan/PLAN-5070473/cancel` returned `{success:true}` but plan stayed RELEASED
- **Plan update blocked**: `PUT /wms/outbound/order-plan/update` returned error 12521 "Not allowed to edit PLAN-5070473 in your submitted status: RELEASED"
- **Dispatch mismatch**: Graza DS Wave (id=1247) found no matching orders because order status changed from COMMITTED to PLANNED after initial plan creation
- **Assignment at task level**: Plan's `defaultAssigneeUserId` remains null; assignee set at task level via `batch-assignment`
