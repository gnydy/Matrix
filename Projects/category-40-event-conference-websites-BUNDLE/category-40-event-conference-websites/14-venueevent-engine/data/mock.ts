export const templateMeta = {
  "templateName": "VenueEvent Engine",
  "category": "Event & Conference Websites",
  "categoryNumber": 40,
  "description": "Speakers, agenda, tickets, sponsors, venues, and registration",
  "audience": "Event & Conference Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "40-14-1",
    "name": "VenueEvent Engine Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,535"
  },
  {
    "id": "40-14-2",
    "name": "VenueEvent Engine Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,672"
  },
  {
    "id": "40-14-3",
    "name": "VenueEvent Engine Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,809"
  },
  {
    "id": "40-14-4",
    "name": "VenueEvent Engine Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,946"
  },
  {
    "id": "40-14-5",
    "name": "VenueEvent Engine Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,083"
  },
  {
    "id": "40-14-6",
    "name": "VenueEvent Engine Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,220"
  }
] as const;
