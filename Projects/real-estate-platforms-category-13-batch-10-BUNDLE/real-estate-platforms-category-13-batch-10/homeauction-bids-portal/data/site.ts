export const site = {
  "name": "HomeAuction Bids Portal",
  "slug": "homeauction-bids-portal",
  "positioning": "Auction-style property portal with bids, timers, and offer tracking.",
  "target": "Auction houses and distressed asset brokers",
  "usecase": "Show bid-ready properties, reserve prices, viewing slots, and bid activity mock.",
  "style": "auction urgency UI",
  "accent": "#dc2626",
  "soft": "#fef2f2",
  "market": "Property Auctions",
  "layout": "Urgency hero with bid timers, reserve pricing, and auction pipeline",
  "areas": [
    "Cairo",
    "Giza",
    "Alexandria",
    "Red Sea"
  ],
  "propertyType": "Auction property",
  "cta": "Track live auctions",
  "index": 11,
  "templatesCount": 20,
  "properties": [
    {
      "slug": "homeauction-bids-portal-property-1",
      "title": "Cairo Auction property 1",
      "area": "Cairo",
      "price": 4200000,
      "beds": 2,
      "size": 118,
      "status": "Off-plan",
      "yield": 6.4,
      "image": "/property-1.svg",
      "tags": [
        "Verified",
        "Property Auctions",
        "Auction Urgency Ui"
      ]
    },
    {
      "slug": "homeauction-bids-portal-property-2",
      "title": "Giza Auction property 2",
      "area": "Giza",
      "price": 7800000,
      "beds": 3,
      "size": 165,
      "status": "Hot deal",
      "yield": 7.1,
      "image": "/property-2.svg",
      "tags": [
        "Verified",
        "Property Auctions",
        "Auction Urgency Ui"
      ]
    },
    {
      "slug": "homeauction-bids-portal-property-3",
      "title": "Alexandria Auction property 3",
      "area": "Alexandria",
      "price": 12500000,
      "beds": 4,
      "size": 240,
      "status": "Exclusive",
      "yield": 8.2,
      "image": "/property-3.svg",
      "tags": [
        "Verified",
        "Property Auctions",
        "Auction Urgency Ui"
      ]
    },
    {
      "slug": "homeauction-bids-portal-property-4",
      "title": "Red Sea Auction property 4",
      "area": "Red Sea",
      "price": 18500000,
      "beds": 5,
      "size": 360,
      "status": "Ready",
      "yield": 5.8,
      "image": "/property-4.svg",
      "tags": [
        "Verified",
        "Property Auctions",
        "Auction Urgency Ui"
      ]
    }
  ],
  "agents": [
    {
      "name": "Mariam Adel",
      "role": "Senior Property Consultant",
      "metric": "94% closing confidence",
      "focus": "Cairo"
    },
    {
      "name": "Omar Nabil",
      "role": "Viewing Operations Lead",
      "metric": "38 active viewings",
      "focus": "Giza"
    },
    {
      "name": "Nadine Karim",
      "role": "Client Advisory Manager",
      "metric": "EGP 218M pipeline",
      "focus": "Alexandria"
    }
  ],
  "stats": [
    {
      "label": "Active listings",
      "value": "75"
    },
    {
      "label": "Qualified leads",
      "value": "281"
    },
    {
      "label": "Avg. match score",
      "value": "93%"
    },
    {
      "label": "Viewing slots",
      "value": "35"
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
