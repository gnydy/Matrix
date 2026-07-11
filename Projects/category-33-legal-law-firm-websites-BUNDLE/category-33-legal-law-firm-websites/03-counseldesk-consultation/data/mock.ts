export const templateMeta = {
  "templateName": "CounselDesk Consultation",
  "category": "Legal & Law Firm Websites",
  "categoryNumber": 33,
  "description": "Law firm sites, consultation booking, legal articles, cases, and teams",
  "audience": "Legal & Law Firm Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "33-3-1",
    "name": "CounselDesk Consultation Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,069"
  },
  {
    "id": "33-3-2",
    "name": "CounselDesk Consultation Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,206"
  },
  {
    "id": "33-3-3",
    "name": "CounselDesk Consultation Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,343"
  },
  {
    "id": "33-3-4",
    "name": "CounselDesk Consultation Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,480"
  },
  {
    "id": "33-3-5",
    "name": "CounselDesk Consultation Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,617"
  },
  {
    "id": "33-3-6",
    "name": "CounselDesk Consultation Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,754"
  }
] as const;
