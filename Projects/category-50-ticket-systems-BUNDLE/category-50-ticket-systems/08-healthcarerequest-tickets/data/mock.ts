export const templateMeta = {
  "templateName": "HealthcareRequest Tickets",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat"
  ],
  "accent": "zinc"
} as const;

export const records = [
  {
    "id": "50-8-1",
    "name": "HealthcareRequest Tickets Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,083"
  },
  {
    "id": "50-8-2",
    "name": "HealthcareRequest Tickets Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,220"
  },
  {
    "id": "50-8-3",
    "name": "HealthcareRequest Tickets Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,357"
  },
  {
    "id": "50-8-4",
    "name": "HealthcareRequest Tickets Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,494"
  },
  {
    "id": "50-8-5",
    "name": "HealthcareRequest Tickets Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,631"
  },
  {
    "id": "50-8-6",
    "name": "HealthcareRequest Tickets Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,768"
  }
] as const;
