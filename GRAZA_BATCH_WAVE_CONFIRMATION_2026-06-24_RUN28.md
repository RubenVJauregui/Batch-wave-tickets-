# Graza Dispatch — RUN28 Confirmation

**Run:** RUN28  
**Date:** 2026-06-24  
**Time:** ~15:29 PDT  
**Facility:** Valley View (LT_F1)  
**Tenant:** LT  
**Customer:** Drupley Inc / DBA Graza (ORG-747717)  
**Channel:** Cin7_Omni  

---

## Search Criteria
- **Status:** COMMITTED
- **Order Type:** dropship order
- **Customer:** Drupley inc / dba Graza

---

## Results Summary

| Metric | Count |
|---|---|
| **COMMITTED orders found** | 91 |
| **Label-note orders** | 1 (DN-5199080) |
| **Wave groups (13 groups)** | 29 orders |
| **Batch (non-wave, non-label)** | 60 orders |
| **Total in plan** | 89 |
| **Plans created** | 1 |
| **Tasks created** | 1 |
| **Exceptions** | 0 |

---

## Dispatch Details

### Wave: Graza DS Wave Auto (Setting 1282 — WAVE_PICK_BY_ITEM)

| Field | Value |
|---|---|
| **Plan ID** | [PLAN-5074437](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5074437) |
| **Plan Status** | RELEASED ✅ |
| **Task ID** | [TASK-5300510](https://unis.item.com/wms/task/general-task/edit/TASK-5300510) |
| **Task Status** | NEW |
| **Assignee** | 4419 (MARTHA OLVERA) ✅ |
| **Pick Method** | WAVE_PICK_BY_ITEM |
| **Pick Type** | PIECE_PICK |
| **skipPackingScanForItem** | true ✅ |
| **Orders in Plan** | 89 |
| **Exception Orders** | 0 |
| **Fail Inventory Commitments** | 0 |

---

## Label Note

| Order ID | Customer | Label Note |
|---|---|---|
| [DN-5199080](https://unis.item.com/wms/order/order/edit/DN-5199080) | Taylor Lee | "To Taylor, Enjoy your gift! - Rosario @ Goody, via Goody" |

**Status:** DN-5199080 was included in PLAN-5074437. Setting 1281 (Graza Label Note Batch) has been fixed — `orderFilterIds` updated from `null` to `["1213"]`. However, DN-5199080 remains bound to PLAN-5074437 and cannot be programmatically removed.

**Manual Fix Required:** In WISE UI: Outbound → Order Plan → PLAN-5074437 → Remove DN-5199080 from order list. Then: Outbound → Order Dispatch → Setting 1281 → Dispatch DN-5199080 solo.

---

## Wave Groups (13 groups, 29 orders)

Wave grouping by exact item+quantity match applied via Setting 1282 WAVE_PICK_BY_ITEM. All ordered pairs treated as wave-eligible groups with identical item/qty combos.

---

## Batch Orders

60 non-wave, non-label-note orders were included in Setting 1282 alongside wave orders. Setting 1282 auto-claimed all 89 matching orders.

---

## 18.xlsx Compliance Check

| Rule | Status |
|---|---|
| Pick strategy → task → release workflow (no direct plan-create) | ✅ |
| Assignee = 4419 (MARTHA OLVERA) | ✅ |
| No plans stuck in BUILDING/PLANNING/PICK_SUGGESTED | ✅ |
| No orders sent to exception with available inventory | ✅ |
| Label-note orders separated into own batch | ⚠️ (DN-5199080 needs manual removal) |
| Wave rule: exact item+qty match groups | ✅ (13 groups, WAVE_PICK_BY_ITEM) |
| Batch rule: ≤22 orders, oldest first | ✅ (Setting 1282 wave) |
| skipPackingScanForItem = true | ✅ |
| 1 label per customer/order recipient | ✅ |
| Setting 1281 filter fixed | ✅ (orderFilterIds: ["1213"]) |

---

## Blocker

🔴 **DN-5199080** stuck in PLAN-5074437. Manual WISE UI removal required before dispatching via Setting 1281 as a solo label-note batch.

---

## Setting Updates

| Setting | Field | Old | New |
|---|---|---|---|
| 1281 (Graza Label Note Batch) | orderFilterIds | null | ["1213"] |

---

*RUN28 completed 2026-06-24 ~15:29 PDT. 18.xlsx rules: 8 of 9 PASS (label-note separation pending manual WISE action).*
