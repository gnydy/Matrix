export const site = {
  "name": "AgentFlow Brokerage CRM",
  "slug": "agentflow-brokerage-crm",
  "positioning": "Brokerage CRM interface for agents, leads, listings, and follow-ups.",
  "target": "Brokerage teams needing operational UI templates",
  "usecase": "Show agent pipelines, client requests, listings, tasks, and lead status.",
  "style": "agent productivity dashboard",
  "accent": "#4f46e5",
  "soft": "#eef2ff",
  "market": "Brokerage CRM",
  "layout": "Dashboard-led hero with lead pipeline and agent productivity panels",
  "areas": [
    "Lead Pool",
    "Hot Deals",
    "Open Viewings",
    "Closed Deals"
  ],
  "propertyType": "Brokerage listing",
  "cta": "Manage brokerage pipeline",
  "index": 10,
  "templatesCount": 20,
  "properties": [
    {
      "slug": "agentflow-brokerage-crm-property-1",
      "title": "Lead Pool Brokerage listing 1",
      "area": "Lead Pool",
      "price": 4200000,
      "beds": 2,
      "size": 118,
      "status": "Off-plan",
      "yield": 6.4,
      "image": "/property-1.svg",
      "tags": [
        "Verified",
        "Brokerage CRM",
        "Agent Productivity Dashboard"
      ]
    },
    {
      "slug": "agentflow-brokerage-crm-property-2",
      "title": "Hot Deals Brokerage listing 2",
      "area": "Hot Deals",
      "price": 7800000,
      "beds": 3,
      "size": 165,
      "status": "Hot deal",
      "yield": 7.1,
      "image": "/property-2.svg",
      "tags": [
        "Verified",
        "Brokerage CRM",
        "Agent Productivity Dashboard"
      ]
    },
    {
      "slug": "agentflow-brokerage-crm-property-3",
      "title": "Open Viewings Brokerage listing 3",
      "area": "Open Viewings",
      "price": 12500000,
      "beds": 4,
      "size": 240,
      "status": "Exclusive",
      "yield": 8.2,
      "image": "/property-3.svg",
      "tags": [
        "Verified",
        "Brokerage CRM",
        "Agent Productivity Dashboard"
      ]
    },
    {
      "slug": "agentflow-brokerage-crm-property-4",
      "title": "Closed Deals Brokerage listing 4",
      "area": "Closed Deals",
      "price": 18500000,
      "beds": 5,
      "size": 360,
      "status": "Ready",
      "yield": 5.8,
      "image": "/property-4.svg",
      "tags": [
        "Verified",
        "Brokerage CRM",
        "Agent Productivity Dashboard"
      ]
    }
  ],
  "agents": [
    {
      "name": "Mariam Adel",
      "role": "Senior Property Consultant",
      "metric": "94% closing confidence",
      "focus": "Lead Pool"
    },
    {
      "name": "Omar Nabil",
      "role": "Viewing Operations Lead",
      "metric": "38 active viewings",
      "focus": "Hot Deals"
    },
    {
      "name": "Nadine Karim",
      "role": "Client Advisory Manager",
      "metric": "EGP 218M pipeline",
      "focus": "Open Viewings"
    }
  ],
  "stats": [
    {
      "label": "Active listings",
      "value": "72"
    },
    {
      "label": "Qualified leads",
      "value": "270"
    },
    {
      "label": "Avg. match score",
      "value": "92%"
    },
    {
      "label": "Viewing slots",
      "value": "34"
    }
  ],
  "features": [
    "Smart property filters",
    "Property details page",
    "Mortgage calculator",
    "Viewing booking flow",
    "Agent profiles",
    "Portfolio dashboard"
  ],
  "steps": [
    "Filter by budget, area, and unit type",
    "Review details, payment plan, and amenities",
    "Calculate mortgage or monthly payment",
    "Book a viewing and assign an agent"
  ],
  "dashboardRows": [
    {
      "client": "Ahmed H.",
      "need": "3-bedroom unit",
      "stage": "Viewing scheduled",
      "budget": "EGP 9.5M"
    },
    {
      "client": "Noura S.",
      "need": "Investment unit",
      "stage": "Finance review",
      "budget": "EGP 4.2M"
    },
    {
      "client": "Kareem Group",
      "need": "Commercial space",
      "stage": "Offer negotiation",
      "budget": "EGP 18M"
    }
  ]
} as const;
