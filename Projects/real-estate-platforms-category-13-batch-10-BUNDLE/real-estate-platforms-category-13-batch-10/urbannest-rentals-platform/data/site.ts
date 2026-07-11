export const site = {
  "name": "UrbanNest Rentals Platform",
  "slug": "urbannest-rentals-platform",
  "positioning": "Fast rental search platform for apartments, studios, and managed rentals.",
  "target": "Rental marketplaces and property management startups",
  "usecase": "Help tenants filter rental units and request viewings quickly.",
  "style": "map-first rental UX",
  "accent": "#2563eb",
  "soft": "#eff6ff",
  "market": "Residential Rentals",
  "layout": "Search-first hero with availability cards and tenant workflow",
  "areas": [
    "Maadi",
    "Nasr City",
    "Heliopolis",
    "Dokki"
  ],
  "propertyType": "Rental apartment",
  "cta": "Find available rentals",
  "index": 2,
  "templatesCount": 20,
  "properties": [
    {
      "slug": "urbannest-rentals-platform-property-1",
      "title": "Maadi Rental apartment 1",
      "area": "Maadi",
      "price": 4200000,
      "beds": 2,
      "size": 118,
      "status": "Off-plan",
      "yield": 6.4,
      "image": "/property-1.svg",
      "tags": [
        "Verified",
        "Residential Rentals",
        "Map-First Rental Ux"
      ]
    },
    {
      "slug": "urbannest-rentals-platform-property-2",
      "title": "Nasr City Rental apartment 2",
      "area": "Nasr City",
      "price": 7800000,
      "beds": 3,
      "size": 165,
      "status": "Hot deal",
      "yield": 7.1,
      "image": "/property-2.svg",
      "tags": [
        "Verified",
        "Residential Rentals",
        "Map-First Rental Ux"
      ]
    },
    {
      "slug": "urbannest-rentals-platform-property-3",
      "title": "Heliopolis Rental apartment 3",
      "area": "Heliopolis",
      "price": 12500000,
      "beds": 4,
      "size": 240,
      "status": "Exclusive",
      "yield": 8.2,
      "image": "/property-3.svg",
      "tags": [
        "Verified",
        "Residential Rentals",
        "Map-First Rental Ux"
      ]
    },
    {
      "slug": "urbannest-rentals-platform-property-4",
      "title": "Dokki Rental apartment 4",
      "area": "Dokki",
      "price": 18500000,
      "beds": 5,
      "size": 360,
      "status": "Ready",
      "yield": 5.8,
      "image": "/property-4.svg",
      "tags": [
        "Verified",
        "Residential Rentals",
        "Map-First Rental Ux"
      ]
    }
  ],
  "agents": [
    {
      "name": "Mariam Adel",
      "role": "Senior Property Consultant",
      "metric": "94% closing confidence",
      "focus": "Maadi"
    },
    {
      "name": "Omar Nabil",
      "role": "Viewing Operations Lead",
      "metric": "38 active viewings",
      "focus": "Nasr City"
    },
    {
      "name": "Nadine Karim",
      "role": "Client Advisory Manager",
      "metric": "EGP 218M pipeline",
      "focus": "Heliopolis"
    }
  ],
  "stats": [
    {
      "label": "Active listings",
      "value": "48"
    },
    {
      "label": "Qualified leads",
      "value": "182"
    },
    {
      "label": "Avg. match score",
      "value": "84%"
    },
    {
      "label": "Viewing slots",
      "value": "26"
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
