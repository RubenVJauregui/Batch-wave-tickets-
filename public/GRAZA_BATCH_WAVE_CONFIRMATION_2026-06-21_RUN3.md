# Graza Dropship Dispatch — June 21, 2026 (Run #3)

**Facility:** LT_F1 (Buena Park / Valley View)
**Customer:** DRUPLEY INC / DBA GRAZA (ORG-747717)
**Run time:** ~13:27 PDT (20:27 UTC)
**Assignee:** MARTHA OLVERA (userId 4419 / molvera)

---

## Summary

| Metric | Value |
|---|---|
| Orders Found (COMMITTED) | **2** |
| Label Note / Gift Note Orders | **0** |
| Wave Groups | **0** |
| Wave Ticket Orders | **0** |
| Batch Orders | **2** (single batch) |
| Plans Created | **1** |
| Tasks Created | **1** |
| Exceptions | **0** |
| Failures | **0** |

## Order Classification

| Order ID | Recipient | SKUs | Category |
|---|---|---|---|
| DN-5196947 | Jenny Hansen | C1-SZL-750(1), C1-DRZ-500(1), GL1-SZL750(1), SPR-OXO-1(1) | Batch |
| DN-5196948 | Rachel Maher | D1-DRZ500(1), D1-SZL750(2), SPR-CBK-1(1) | Batch |

## Wave Analysis
- **No wave groups** — DN-5196947 and DN-5196948 have completely different SKU sets
- DN-5196947: C1-SZL-750, C1-DRZ-500, GL1-SZL750, SPR-OXO-1
- DN-5196948: D1-DRZ500, D1-SZL750, SPR-CBK-1

## Dispatch Results

| Field | Detail |
|---|---|
| **Plan ID** | [PLAN-5073338](https://unis.item.com/wms/order-plan/general-plan/edit/PLAN-5073338) |
| **Plan Status** | **RELEASED** ✅ |
| **Task ID** | [TASK-5296993](https://unis.item.com/wms/task/general-task/edit/TASK-5296993) |
| **Task Status** | **NEW** ✅ |
| **Assignee** | **4419 / MARTHA OLVERA** (molvera) |
| **Pick Method** | BATCH_ORDER_PICK |
| **Pick Type** | PIECE_PICK |
| **Skip Packing Scan For Item** | **true** ✅ |
| **Dispatch Setting** | 1273 (reused existing Graza batch config) |
| **Label Notes** | 0 |

## Verification Checklist

- [x] No orders stuck in BUILDING/PLANNING/PICK_SUGGESTED
- [x] Plan RELEASED with valid task ID
- [x] Assignee verified as userId 4419 / molvera
- [x] No orders sent to exception
- [x] skipPackingScanForItem=true
- [x] 0 label note / gift note orders
- [x] All 6 execution rules followed
- [x] Results pushed to dashboard repo & Coolify redeployed
