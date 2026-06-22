# Graza Dispatch — RUN23 Confirmation

**Run:** RUN23  
**Date:** 2026-06-22  
**Time:** ~06:26 AM PDT  
**Facility:** Valley View (LT_F1)  
**Tenant:** LT  
**Customer:** Drupley Inc / DBA Graza (ORG-747717)  
**Channel:** Cin7_Omni  

---

## Search Criteria
- **Status:** import, open, committed
- **Order Type:** dropship order
- **Customer:** Drupley inc / dba Graza

---

## Results Summary

| Metric | Count |
|---|---|
| **New COMMITTED orders found** | 1 |
| **Label-note orders** | 0 |
| **Wave groups** | 0 (single order) |
| **Batch groups** | 1 |
| **Plans created** | 1 |
| **Tasks created** | 1 |
| **Exceptions** | 0 |

---

## Dispatch Details

### Batch: Graza DS Batch (Setting 1246 — BATCH_ORDER_PICK)

| Field | Value |
|---|---|
| **Plan ID** | [PLAN-5073438](https://unis.item.com/wms/plan/order-plan/edit/PLAN-5073438) |
| **Plan Status** | RELEASED ✅ |
| **Task ID** | [TASK-5297115](https://unis.item.com/wms/task/general-task/edit/TASK-5297115) |
| **Assignee** | 4419 (MARTHA OLVERA) ✅ |
| **skipPackingScanForItem** | true ✅ |
| **Exception Orders** | 0 |
| **Fail Inventory Commitments** | 0 |

### Orders

| Order ID | Customer | Destination | Status |
|---|---|---|---|
| [DN-5197236](https://unis.item.com/wms/order/order/edit/DN-5197236) | Jordan Becker | Ridgefield, CT | PLANNED |

---

## 18.xlsx Compliance Check

| Rule | Status |
|---|---|
| Pick strategy → task → release workflow (no direct plan-create) | ✅ |
| Assignee = 4419 (MARTHA OLVERA) | ✅ |
| No plans stuck in BUILDING/PLANNING/PICK_SUGGESTED | ✅ |
| No orders sent to exception with available inventory | ✅ |
| Label-note orders separated | N/A (0 found) |
| Wave rule: exact item+qty match groups | N/A (0 groups) |
| Batch rule: ≤22 orders, oldest first | ✅ (1 order) |
| skipPackingScanForItem = true | ✅ |
| 1 label per customer/order recipient | ✅ |

---

## Notes
- **Minimal run**: Only 1 new COMMITTED order since RUN22 (~7 hours prior).
- ~50 Graza DS orders from RUN21/RUN22 remain in PLANNED state (dispatched by rtapia, some with preStatus=PLANNING — these were not stuck by our process).
- 18.xlsx CLEAN — all remediation rules verified compliant.
