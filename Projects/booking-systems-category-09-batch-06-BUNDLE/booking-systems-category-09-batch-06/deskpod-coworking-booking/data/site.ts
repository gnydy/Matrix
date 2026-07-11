export const site = {
  "slug": "deskpod-coworking-booking",
  "name": "DeskPod Coworking Booking",
  "domain": "Coworking & Meeting Room Booking",
  "target": "Coworking spaces, business centers, shared offices",
  "useCase": "Book desks, meeting rooms, private offices, memberships, and visitor access.",
  "positioning": "A workspace booking system focused on occupancy, memberships, and room utilization.",
  "visual": "Modern workspace UI with availability cards, membership panels, and meeting-room schedule.",
  "bookingEntity": "Workspace Reservation",
  "audience": "Coworking space operators",
  "tone": "Modern, productive, clean",
  "layout": "workspace",
  "accent": "from-cyan-600 to-slate-900",
  "surface": "bg-cyan-50",
  "statLabels": [
    "Desks",
    "Rooms",
    "Occupancy",
    "Members"
  ],
  "stats": [
    "168",
    "12",
    "81%",
    "740"
  ],
  "features": [
    "Room availability",
    "Desk booking",
    "Membership access",
    "Visitor pass tracking"
  ],
  "steps": [
    "Choose workspace",
    "Pick date",
    "Select duration",
    "Confirm access"
  ],
  "roles": [
    "Member",
    "Visitor",
    "Space Admin"
  ],
  "slots": [
    "Hot Desk",
    "Meeting 4p",
    "Boardroom",
    "Private Office",
    "Day Pass",
    "Podcast Room"
  ],
  "records": [
    [
      "Omar",
      "Hot Desk",
      "Today",
      "Checked in"
    ],
    [
      "Team X",
      "Boardroom",
      "15:00",
      "Confirmed"
    ],
    [
      "Visitor Y",
      "Day Pass",
      "Tomorrow",
      "Paid"
    ]
  ],
  "dashboardCards": [
    "Occupancy rate",
    "Room revenue",
    "Member activity",
    "Access exceptions"
  ],
  "templateNumber": 18
} as const;

export type SiteConfig = typeof site;
