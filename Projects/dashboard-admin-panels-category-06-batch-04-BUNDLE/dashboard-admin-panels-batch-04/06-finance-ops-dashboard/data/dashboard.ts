export const dashboard = {
  name: "Finance Ops Dashboard",
  slug: "finance-ops-dashboard",
  desc: "A serious financial admin panel for accounting operations, invoice approval, expense control, cash flow and audit visibility.",
  client: "Finance departments and accounting teams",
  use: "Monitor invoices, expenses, approvals, cash flow and finance controls",
  industry: "Finance / Accounting",
  layout: "dense",
  metrics: [
  {
    "label": "Cash Position",
    "value": "EGP 5.8M",
    "change": "+9%"
  },
  {
    "label": "Unpaid Invoices",
    "value": "128",
    "change": "-14"
  },
  {
    "label": "Expenses",
    "value": "EGP 910K",
    "change": "+3%"
  },
  {
    "label": "Approval SLA",
    "value": "89%",
    "change": "+6%"
  }
],
  modules: [
  "Invoice Control",
  "Expense Review",
  "Cash Flow",
  "Tax Calendar",
  "Approval Matrix",
  "Audit Trail"
],
  records: [
  "INV-2048",
  "Payroll Batch",
  "Tax Filing",
  "Vendor Payment",
  "Expense Claim"
],
  roles: [
  "CFO",
  "Accountant",
  "Auditor",
  "Finance Admin"
],
  states: [
  "Approved",
  "Pending",
  "Rejected",
  "Needs evidence"
],
  chart: [182, 85, 108, 131, 154, 177, 80, 103],
} as const;
