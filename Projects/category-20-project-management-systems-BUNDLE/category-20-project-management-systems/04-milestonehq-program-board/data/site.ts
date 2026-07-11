export const site = {
  "title": "MilestoneHQ Program Board",
  "slug": "04-milestonehq-program-board",
  "category": "Project Management Systems",
  "description": "Milestones, owners and executive summary. Includes frontend screens and backend mock API routes.",
  "layout": "dense",
  "layoutDescription": "Data-heavy table cockpit with filters and status chips.",
  "dark": "#18181b",
  "accent": "#f59e0b",
  "soft": "#fef3c7",
  "modules": [
    {
      "slug": "tasks",
      "title": "Tasks",
      "description": "Tasks module designed for MilestoneHQ Program Board."
    },
    {
      "slug": "kanban",
      "title": "Kanban",
      "description": "Kanban module designed for MilestoneHQ Program Board."
    },
    {
      "slug": "timeline",
      "title": "Timeline",
      "description": "Timeline module designed for MilestoneHQ Program Board."
    },
    {
      "slug": "milestones",
      "title": "Milestones",
      "description": "Milestones module designed for MilestoneHQ Program Board."
    },
    {
      "slug": "teams",
      "title": "Teams",
      "description": "Teams module designed for MilestoneHQ Program Board."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for MilestoneHQ Program Board."
    },
    {
      "slug": "files",
      "title": "Files",
      "description": "Files module designed for MilestoneHQ Program Board."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for MilestoneHQ Program Board."
    },
    {
      "slug": "milestonehq",
      "title": "Milestonehq",
      "description": "Milestonehq module designed for MilestoneHQ Program Board."
    },
    {
      "slug": "program",
      "title": "Program",
      "description": "Program module designed for MilestoneHQ Program Board."
    }
  ],
  "stats": [
    {
      "label": "Projects",
      "value": "84",
      "trend": "+5% this week"
    },
    {
      "label": "Tasks",
      "value": "85%",
      "trend": "+6% this week"
    },
    {
      "label": "Milestones",
      "value": "140",
      "trend": "+7% this week"
    },
    {
      "label": "Risks",
      "value": "168",
      "trend": "+8% this week"
    }
  ],
  "records": [
    {
      "id": "PR-04-001",
      "title": "Teams record 1",
      "meta": "Project Management Systems workflow \u00b7 owner A",
      "status": "Blocked",
      "amount": "500"
    },
    {
      "id": "PR-04-002",
      "title": "Reports record 2",
      "meta": "Project Management Systems workflow \u00b7 owner B",
      "status": "Synced",
      "amount": "1,000"
    },
    {
      "id": "PR-04-003",
      "title": "Files record 3",
      "meta": "Project Management Systems workflow \u00b7 owner C",
      "status": "Active",
      "amount": "1,500"
    },
    {
      "id": "PR-04-004",
      "title": "Settings record 4",
      "meta": "Project Management Systems workflow \u00b7 owner D",
      "status": "Pending",
      "amount": "2,000"
    },
    {
      "id": "PR-04-005",
      "title": "Milestonehq record 5",
      "meta": "Project Management Systems workflow \u00b7 owner E",
      "status": "Review",
      "amount": "2,500"
    },
    {
      "id": "PR-04-006",
      "title": "Program record 6",
      "meta": "Project Management Systems workflow \u00b7 owner F",
      "status": "Approved",
      "amount": "3,000"
    },
    {
      "id": "PR-04-007",
      "title": "Tasks record 7",
      "meta": "Project Management Systems workflow \u00b7 owner G",
      "status": "Blocked",
      "amount": "3,500"
    },
    {
      "id": "PR-04-008",
      "title": "Kanban record 8",
      "meta": "Project Management Systems workflow \u00b7 owner H",
      "status": "Synced",
      "amount": "4,000"
    }
  ]
} as const;
