# Graza Dispatch — RUN25 Confirmation

**Run:** RUN25  
**Date:** 2026-06-23  
**Time:** ~05:50 AM PDT  
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
| **New COMMITTED/DROPSHIP orders found** | 5 |
| **Successfully dispatched** | 4 |
| **Exceptions** | 1 |
| **Label-note orders** | 0 |
| **Wave groups** | 0 (all unique item×qty combos) |
| **Batch groups** | 1 |
| **Plans created** | 1 |
| **Tasks created** | 1 |

---

## Dispatch Details

### Batch: Graza DS Batch (Setting 1246 — BATCH_ORDER_PICK, PIECE_PICK)

| Field | Value |
|---|---|
| **Plan ID** | [PLAN-5073740](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5073740) |
| **Plan Status** | RELEASED ✅ |
| **Task ID** | [TASK-5298205](https://unis.item.com/wms/task/general-task/edit/TASK-5298205) |
| **Assignee** | 4419 (MARTHA OLVERA) ✅ |
| **skipPackingScanForItem** | true ✅ |
| **Auto Release** | Yes (needAutoRelease=true) |
| **Exception Orders** | 1 |
| **Fail Inventory Commitments** | 0 |

### Orders Dispatched

| Order ID | Recipient | Items | Status |
|---|---|---|---|
| [DN-5197922](https://unis.item.com/wms/order/outbound-order/edit/DN-5197922) | Stephanie Dunn, ME | 5 items (5 SKUs) | PLANNED |
| [DN-5197923](https://unis.item.com/wms/order/outbound-order/edit/DN-5197923) | Steven Griffin, MD | Sizzle Refill ×3 + Spray | PLANNED |
| [DN-5197924](https://unis.item.com/wms/order/outbound-order/edit/DN-5197924) | Richard Rose, GA | 6 items (6 SKUs) | PLANNED |
| [DN-5197925](https://unis.item.com/wms/order/outbound-order/edit/DN-5197925) | James Miller, RI | Drizzle Refill + Sizzle Refill ×2 | PLANNED |

### Exception Orders

| Order ID | Reason |
|---|---|
| [DN-5197692](https://unis.item.com/wms/order/outbound-order/edit/DN-5197692) | Retailer "U.S. Naval Institute" not found in WISE. Valid exception — cannot dispatch. |

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
| Batch rule: ≤22 orders, oldest first | ✅ (4 orders) |
| skipPackingScanForItem = true | ✅ |
| 1 label per customer/order recipient | ✅ |

---

## Notes
- 4 orders dispatched through full workflow: Order Dispatch → Pick Strategy → Plan Create → Task Create → Auto Release.
- Plan status is RELEASED, task ready for Martha Olvera (4419).
- DN-5197692 in exception — "Retailer(U.S. Naval Institute) not found" — valid WISE exception, not an inventory/product issue.
- All unique item×qty combinations — no waves possible, all batched together.
- No label notes or gift messages on any order.
- 18.xlsx CLEAN — all remediation rules verified compliant.
