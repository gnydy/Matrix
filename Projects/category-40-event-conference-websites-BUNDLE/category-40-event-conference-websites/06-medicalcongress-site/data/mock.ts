export const templateMeta = {
  "templateName": "MedicalCongress Site",
  "category": "Event & Conference Websites",
  "categoryNumber": 40,
  "description": "Speakers, agenda, tickets, sponsors, venues, and registration",
  "audience": "Event & Conference Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "40-6-1",
    "name": "MedicalCongress Site Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,439"
  },
  {
    "id": "40-6-2",
    "name": "MedicalCongress Site Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,576"
  },
  {
    "id": "40-6-3",
    "name": "MedicalCongress Site Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,713"
  },
  {
    "id": "40-6-4",
    "name": "MedicalCongress Site Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,850"
  },
  {
    "id": "40-6-5",
    "name": "MedicalCongress Site Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,987"
  },
  {
    "id": "40-6-6",
    "name": "MedicalCongress Site Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,124"
  }
] as const;
