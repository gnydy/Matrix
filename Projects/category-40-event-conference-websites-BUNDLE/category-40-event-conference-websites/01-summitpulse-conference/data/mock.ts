export const templateMeta = {
  "templateName": "SummitPulse Conference",
  "category": "Event & Conference Websites",
  "categoryNumber": 40,
  "description": "Speakers, agenda, tickets, sponsors, venues, and registration",
  "audience": "Event & Conference Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
  "modules": [
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "40-1-1",
    "name": "SummitPulse Conference Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,754"
  },
  {
    "id": "40-1-2",
    "name": "SummitPulse Conference Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,891"
  },
  {
    "id": "40-1-3",
    "name": "SummitPulse Conference Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,028"
  },
  {
    "id": "40-1-4",
    "name": "SummitPulse Conference Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,165"
  },
  {
    "id": "40-1-5",
    "name": "SummitPulse Conference Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,302"
  },
  {
    "id": "40-1-6",
    "name": "SummitPulse Conference Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,439"
  }
] as const;
