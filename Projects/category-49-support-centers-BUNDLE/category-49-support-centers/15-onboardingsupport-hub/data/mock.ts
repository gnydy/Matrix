export const templateMeta = {
  "templateName": "OnboardingSupport Hub",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search"
  ],
  "accent": "rose"
} as const;

export const records = [
  {
    "id": "49-15-1",
    "name": "OnboardingSupport Hub Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,905"
  },
  {
    "id": "49-15-2",
    "name": "OnboardingSupport Hub Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,042"
  },
  {
    "id": "49-15-3",
    "name": "OnboardingSupport Hub Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,179"
  },
  {
    "id": "49-15-4",
    "name": "OnboardingSupport Hub Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,316"
  },
  {
    "id": "49-15-5",
    "name": "OnboardingSupport Hub Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,453"
  },
  {
    "id": "49-15-6",
    "name": "OnboardingSupport Hub Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,590"
  }
] as const;
