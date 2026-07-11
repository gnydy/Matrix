export const dashboard = {
  name: "Inventory Warehouse Admin",
  slug: "inventory-warehouse-admin",
  desc: "A warehouse control panel for stock status, product movement, purchase orders, supplier updates and inventory risks.",
  client: "Warehouses, wholesalers and inventory-heavy businesses",
  use: "Track products, warehouses, stock movement, suppliers, purchase orders and low stock",
  industry: "Inventory",
  layout: "command",
  metrics: [
  {
    "label": "SKUs",
    "value": "14,820",
    "change": "+340"
  },
  {
    "label": "Stock Value",
    "value": "EGP 9.2M",
    "change": "+11%"
  },
  {
    "label": "Low Stock",
    "value": "81",
    "change": "+23"
  },
  {
    "label": "PO Pending",
    "value": "37",
    "change": "-6"
  }
],
  modules: [
  "Stock Movement",
  "Warehouse Map UI",
  "Supplier Board",
  "Purchase Orders",
  "Low Stock Alerts",
  "Cycle Count"
],
  records: [
  "Warehouse A",
  "Supplier Order",
  "Barcode Batch",
  "Low Stock Item",
  "Transfer Request"
],
  roles: [
  "Warehouse Admin",
  "Inventory Manager",
  "Purchasing",
  "Auditor"
],
  states: [
  "In stock",
  "Low",
  "Reserved",
  "Incoming"
],
  chart: [146, 169, 192, 95, 118, 141, 164, 187],
} as const;
