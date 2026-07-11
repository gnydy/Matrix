export const site = {
  "title": "TaskForge Project Desk",
  "slug": "01-taskforge-project-desk",
  "category": "Project Management Systems",
  "description": "Task management with project health cards. Includes frontend screens and backend mock API routes.",
  "layout": "command",
  "layoutDescription": "Left command sidebar, KPI rail, dense admin workspace.",
  "dark": "#0f172a",
  "accent": "#38bdf8",
  "soft": "#e0f2fe",
  "modules": [
    {
      "slug": "tasks",
      "title": "Tasks",
      "description": "Tasks module designed for TaskForge Project Desk."
    },
    {
      "slug": "kanban",
      "title": "Kanban",
      "description": "Kanban module designed for TaskForge Project Desk."
    },
    {
      "slug": "timeline",
      "title": "Timeline",
      "description": "Timeline module designed for TaskForge Project Desk."
    },
    {
      "slug": "milestones",
      "title": "Milestones",
      "description": "Milestones module designed for TaskForge Project Desk."
    },
    {
      "slug": "teams",
      "title": "Teams",
      "description": "Teams module designed for TaskForge Project Desk."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for TaskForge Project Desk."
    },
    {
      "slug": "files",
      "title": "Files",
      "description": "Files module designed for TaskForge Project Desk."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for TaskForge Project Desk."
    },
    {
      "slug": "taskforge",
      "title": "Taskforge",
      "description": "Taskforge module designed for TaskForge Project Desk."
    },
    {
      "slug": "project",
      "title": "Project",
      "description": "Project module designed for TaskForge Project Desk."
    }
  ],
  "stats": [
    {
      "label": "Projects",
      "value": "21",
      "trend": "+2% this week"
    },
    {
      "label": "Tasks",
      "value": "82%",
      "trend": "+3% this week"
    },
    {
      "label": "Milestones",
      "value": "35",
      "trend": "+4% this week"
    },
    {
      "label": "Risks",
      "value": "42",
      "trend": "+5% this week"
    }
  ],
  "records": [
    {
      "id": "PR-01-001",
      "title": "Kanban record 1",
      "meta": "Project Management Systems workflow \u00b7 owner A",
      "status": "Pending",
      "amount": "125"
    },
    {
      "id": "PR-01-002",
      "title": "Timeline record 2",
      "meta": "Project Management Systems workflow \u00b7 owner B",
      "status": "Review",
      "amount": "250"
    },
    {
      "id": "PR-01-003",
      "title": "Milestones record 3",
      "meta": "Project Management Systems workflow \u00b7 owner C",
      "status": "Approved",
      "amount": "375"
    },
    {
      "id": "PR-01-004",
      "title": "Teams record 4",
      "meta": "Project Management Systems workflow \u00b7 owner D",
      "status": "Blocked",
      "amount": "500"
    },
    {
      "id": "PR-01-005",
      "title": "Reports record 5",
      "meta": "Project Management Systems workflow \u00b7 owner E",
      "status": "Synced",
      "amount": "625"
    },
    {
      "id": "PR-01-006",
      "title": "Files record 6",
      "meta": "Project Management Systems workflow \u00b7 owner F",
      "status": "Active",
      "amount": "750"
    },
    {
      "id": "PR-01-007",
      "title": "Settings record 7",
      "meta": "Project Management Systems workflow \u00b7 owner G",
      "status": "Pending",
      "amount": "875"
    },
    {
      "id": "PR-01-008",
      "title": "Taskforge record 8",
      "meta": "Project Management Systems workflow \u00b7 owner H",
      "status": "Review",
      "amount": "1,000"
    }
  ]
} as const;
