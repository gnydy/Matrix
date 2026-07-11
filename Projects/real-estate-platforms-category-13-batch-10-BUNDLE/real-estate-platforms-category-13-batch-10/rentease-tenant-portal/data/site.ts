export const site = {
  "name": "RentEase Tenant Portal",
  "slug": "rentease-tenant-portal",
  "positioning": "Tenant-facing rental portal with maintenance and lease information.",
  "target": "Property managers and rental operators",
  "usecase": "Let tenants view leases, pay mock invoices, submit maintenance, and book visits.",
  "style": "tenant operations portal",
  "accent": "#db2777",
  "soft": "#fdf2f8",
  "market": "Property Management",
  "layout": "Portal hero with tenant service cards and lease dashboard preview",
  "areas": [
    "Managed Tower A",
    "Family Compound",
    "Central Residence",
    "City Court"
  ],
  "propertyType": "Managed rental",
  "cta": "Open tenant portal",
  "index": 8,
  "templatesCount": 20,
  "properties": [
    {
      "slug": "rentease-tenant-portal-property-1",
      "title": "Managed Tower A Managed rental 1",
      "area": "Managed Tower A",
      "price": 4200000,
      "beds": 2,
      "size": 118,
      "status": "Off-plan",
      "yield": 6.4,
      "image": "/property-1.svg",
      "tags": [
        "Verified",
        "Property Management",
        "Tenant Operations Portal"
      ]
    },
    {
      "slug": "rentease-tenant-portal-property-2",
      "title": "Family Compound Managed rental 2",
      "area": "Family Compound",
      "price": 7800000,
      "beds": 3,
      "size": 165,
      "status": "Hot deal",
      "yield": 7.1,
      "image": "/property-2.svg",
      "tags": [
        "Verified",
        "Property Management",
        "Tenant Operations Portal"
      ]
    },
    {
      "slug": "rentease-tenant-portal-property-3",
      "title": "Central Residence Managed rental 3",
      "area": "Central Residence",
      "price": 12500000,
      "beds": 4,
      "size": 240,
      "status": "Exclusive",
      "yield": 8.2,
      "image": "/property-3.svg",
      "tags": [
        "Verified",
        "Property Management",
        "Tenant Operations Portal"
      ]
    },
    {
      "slug": "rentease-tenant-portal-property-4",
      "title": "City Court Managed rental 4",
      "area": "City Court",
      "price": 18500000,
      "beds": 5,
      "size": 360,
      "status": "Ready",
      "yield": 5.8,
      "image": "/property-4.svg",
      "tags": [
        "Verified",
        "Property Management",
        "Tenant Operations Portal"
      ]
    }
  ],
  "agents": [
    {
      "name": "Mariam Adel",
      "role": "Senior Property Consultant",
      "metric": "94% closing confidence",
      "focus": "Managed Tower A"
    },
    {
      "name": "Omar Nabil",
      "role": "Viewing Operations Lead",
      "metric": "38 active viewings",
      "focus": "Family Compound"
    },
    {
      "name": "Nadine Karim",
      "role": "Client Advisory Manager",
      "metric": "EGP 218M pipeline",
      "focus": "Central Residence"
    }
  ],
  "stats": [
    {
      "label": "Active listings",
      "value": "66"
    },
    {
      "label": "Qualified leads",
      "value": "248"
    },
    {
      "label": "Avg. match score",
      "value": "90%"
    },
    {
      "label": "Viewing slots",
      "value": "32"
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
