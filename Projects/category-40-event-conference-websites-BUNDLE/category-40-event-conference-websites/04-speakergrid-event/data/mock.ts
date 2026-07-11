export const templateMeta = {
  "templateName": "SpeakerGrid Event",
  "category": "Event & Conference Websites",
  "categoryNumber": 40,
  "description": "Speakers, agenda, tickets, sponsors, venues, and registration",
  "audience": "Event & Conference Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
  "modules": [
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "40-4-1",
    "name": "SpeakerGrid Event Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,165"
  },
  {
    "id": "40-4-2",
    "name": "SpeakerGrid Event Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,302"
  },
  {
    "id": "40-4-3",
    "name": "SpeakerGrid Event Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,439"
  },
  {
    "id": "40-4-4",
    "name": "SpeakerGrid Event Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,576"
  },
  {
    "id": "40-4-5",
    "name": "SpeakerGrid Event Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,713"
  },
  {
    "id": "40-4-6",
    "name": "SpeakerGrid Event Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,850"
  }
] as const;
