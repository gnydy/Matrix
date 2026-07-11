export const dashboard = {
  name: "Commerce Backoffice Pro",
  slug: "commerce-backoffice-pro",
  desc: "A retail operations dashboard designed for product, order, customer, and fulfillment teams managing serious online stores.",
  client: "Online stores and retail teams",
  use: "Control orders, products, inventory, returns and customer operations",
  industry: "E-Commerce",
  layout: "split",
  metrics: [
  {
    "label": "Orders Today",
    "value": "1,284",
    "change": "+21%"
  },
  {
    "label": "Gross Sales",
    "value": "EGP 642K",
    "change": "+16%"
  },
  {
    "label": "Returns",
    "value": "34",
    "change": "-8"
  },
  {
    "label": "Low Stock",
    "value": "19",
    "change": "+6"
  }
],
  modules: [
  "Order Queue",
  "Product Catalog",
  "Returns Desk",
  "Inventory Alerts",
  "Customer Accounts",
  "Campaign Performance"
],
  records: [
  "Chrono Luxe Order",
  "GiftLane Return",
  "ByteCart Shipment",
  "Moda Atelier Cart",
  "Oud House VIP"
],
  roles: [
  "Store Admin",
  "Order Manager",
  "Inventory Lead",
  "Marketing Ops"
],
  states: [
  "Paid",
  "Packed",
  "Refund review",
  "Low stock"
],
  chart: [131, 154, 177, 80, 103, 126, 149, 172],
} as const;
