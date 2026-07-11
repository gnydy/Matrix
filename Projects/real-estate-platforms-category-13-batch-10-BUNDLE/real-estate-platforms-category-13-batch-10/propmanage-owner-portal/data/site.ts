export const site = {
  "name": "PropManage Owner Portal",
  "slug": "propmanage-owner-portal",
  "positioning": "Owner portal for property portfolios, revenue, maintenance, and tenants.",
  "target": "Property managers and landlord service companies",
  "usecase": "Show owner dashboards, unit performance, maintenance requests, and occupancy.",
  "style": "owner dashboard portal",
  "accent": "#0f766e",
  "soft": "#f0fdfa",
  "market": "Owner Portfolios",
  "layout": "Dashboard hero with occupancy, maintenance, revenue, and portfolio cards",
  "areas": [
    "Portfolio A",
    "Portfolio B",
    "Vacant Units",
    "Maintenance Queue"
  ],
  "propertyType": "Managed property",
  "cta": "Monitor owner portfolio",
  "index": 17,
  "templatesCount": 20,
  "properties": [
    {
      "slug": "propmanage-owner-portal-property-1",
      "title": "Portfolio A Managed property 1",
      "area": "Portfolio A",
      "price": 4200000,
      "beds": 2,
      "size": 118,
      "status": "Off-plan",
      "yield": 6.4,
      "image": "/property-1.svg",
      "tags": [
        "Verified",
        "Owner Portfolios",
        "Owner Dashboard Portal"
      ]
    },
    {
      "slug": "propmanage-owner-portal-property-2",
      "title": "Portfolio B Managed property 2",
      "area": "Portfolio B",
      "price": 7800000,
      "beds": 3,
      "size": 165,
      "status": "Hot deal",
      "yield": 7.1,
      "image": "/property-2.svg",
      "tags": [
        "Verified",
        "Owner Portfolios",
        "Owner Dashboard Portal"
      ]
    },
    {
      "slug": "propmanage-owner-portal-property-3",
      "title": "Vacant Units Managed property 3",
      "area": "Vacant Units",
      "price": 12500000,
      "beds": 4,
      "size": 240,
      "status": "Exclusive",
      "yield": 8.2,
      "image": "/property-3.svg",
      "tags": [
        "Verified",
        "Owner Portfolios",
        "Owner Dashboard Portal"
      ]
    },
    {
      "slug": "propmanage-owner-portal-property-4",
      "title": "Maintenance Queue Managed property 4",
      "area": "Maintenance Queue",
      "price": 18500000,
      "beds": 5,
      "size": 360,
      "status": "Ready",
      "yield": 5.8,
      "image": "/property-4.svg",
      "tags": [
        "Verified",
        "Owner Portfolios",
        "Owner Dashboard Portal"
      ]
    }
  ],
  "agents": [
    {
      "name": "Mariam Adel",
      "role": "Senior Property Consultant",
      "metric": "94% closing confidence",
      "focus": "Portfolio A"
    },
    {
      "name": "Omar Nabil",
      "role": "Viewing Operations Lead",
      "metric": "38 active viewings",
      "focus": "Portfolio B"
    },
    {
      "name": "Nadine Karim",
      "role": "Client Advisory Manager",
      "metric": "EGP 218M pipeline",
      "focus": "Vacant Units"
    }
  ],
  "stats": [
    {
      "label": "Active listings",
      "value": "93"
    },
    {
      "label": "Qualified leads",
      "value": "347"
    },
    {
      "label": "Avg. match score",
      "value": "87%"
    },
    {
      "label": "Viewing slots",
      "value": "41"
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
