export const site = {
  "title": "PortfolioManager PMO",
  "slug": "18-portfoliomanager-pmo",
  "category": "Project Management Systems",
  "description": "PMO dashboard across many projects. Includes frontend screens and backend mock API routes.",
  "layout": "desktop",
  "layoutDescription": "Desktop shell with window chrome and module launcher.",
  "dark": "#022c22",
  "accent": "#84cc16",
  "soft": "#ecfccb",
  "modules": [
    {
      "slug": "tasks",
      "title": "Tasks",
      "description": "Tasks module designed for PortfolioManager PMO."
    },
    {
      "slug": "kanban",
      "title": "Kanban",
      "description": "Kanban module designed for PortfolioManager PMO."
    },
    {
      "slug": "timeline",
      "title": "Timeline",
      "description": "Timeline module designed for PortfolioManager PMO."
    },
    {
      "slug": "milestones",
      "title": "Milestones",
      "description": "Milestones module designed for PortfolioManager PMO."
    },
    {
      "slug": "teams",
      "title": "Teams",
      "description": "Teams module designed for PortfolioManager PMO."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for PortfolioManager PMO."
    },
    {
      "slug": "files",
      "title": "Files",
      "description": "Files module designed for PortfolioManager PMO."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for PortfolioManager PMO."
    },
    {
      "slug": "portfoliomanager",
      "title": "Portfoliomanager",
      "description": "Portfoliomanager module designed for PortfolioManager PMO."
    },
    {
      "slug": "pmo",
      "title": "Pmo",
      "description": "Pmo module designed for PortfolioManager PMO."
    }
  ],
  "stats": [
    {
      "label": "Projects",
      "value": "378",
      "trend": "+10% this week"
    },
    {
      "label": "Tasks",
      "value": "84%",
      "trend": "+2% this week"
    },
    {
      "label": "Milestones",
      "value": "630",
      "trend": "+3% this week"
    },
    {
      "label": "Risks",
      "value": "756",
      "trend": "+4% this week"
    }
  ],
  "records": [
    {
      "id": "PR-18-001",
      "title": "Portfoliomanager record 1",
      "meta": "Project Management Systems workflow \u00b7 owner A",
      "status": "Active",
      "amount": "2,250"
    },
    {
      "id": "PR-18-002",
      "title": "Pmo record 2",
      "meta": "Project Management Systems workflow \u00b7 owner B",
      "status": "Pending",
      "amount": "4,500"
    },
    {
      "id": "PR-18-003",
      "title": "Tasks record 3",
      "meta": "Project Management Systems workflow \u00b7 owner C",
      "status": "Review",
      "amount": "6,750"
    },
    {
      "id": "PR-18-004",
      "title": "Kanban record 4",
      "meta": "Project Management Systems workflow \u00b7 owner D",
      "status": "Approved",
      "amount": "9,000"
    },
    {
      "id": "PR-18-005",
      "title": "Timeline record 5",
      "meta": "Project Management Systems workflow \u00b7 owner E",
      "status": "Blocked",
      "amount": "11,250"
    },
    {
      "id": "PR-18-006",
      "title": "Milestones record 6",
      "meta": "Project Management Systems workflow \u00b7 owner F",
      "status": "Synced",
      "amount": "13,500"
    },
    {
      "id": "PR-18-007",
      "title": "Teams record 7",
      "meta": "Project Management Systems workflow \u00b7 owner G",
      "status": "Active",
      "amount": "15,750"
    },
    {
      "id": "PR-18-008",
      "title": "Reports record 8",
      "meta": "Project Management Systems workflow \u00b7 owner H",
      "status": "Pending",
      "amount": "18,000"
    }
  ]
} as const;
