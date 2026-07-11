export const site = {
  "templateName": "PharmaCare Patient Portal",
  "sector": "Pharmacy and chronic care",
  "audience": "Pharmacy chains and chronic care programs",
  "useCase": "refills, medication plans, patient dashboard",
  "vibe": "soft health commerce portal",
  "gradient": "from-rose-600 to-pink-500",
  "chip": "bg-rose-50 text-rose-700 ring-rose-200",
  "border": "border-rose-200",
  "departments": [
    "Refills",
    "Counseling",
    "Subscriptions",
    "Delivery"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "40",
      "trend": "+9%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1262",
      "trend": "+2%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "17m",
      "trend": "-2m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "18",
      "trend": "2 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Refills Lead",
      "slots": "08:30 - 14:30",
      "load": "77%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Counseling Consultant",
      "slots": "10:00 - 18:00",
      "load": "64%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Subscriptions Specialist",
      "slots": "12:00 - 20:00",
      "load": "70%"
    }
  ],
  "patients": [
    {
      "id": "PT-2460",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2461",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2462",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2463",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2464",
      "name": "Hana Ibrahim",
      "case": "Insurance approval",
      "status": "Pending",
      "time": "12:10"
    }
  ],
  "appointments": [
    {
      "time": "08:30",
      "patient": "Nour Hassan",
      "type": "Follow-up",
      "room": "Room A",
      "status": "Checked in"
    },
    {
      "time": "09:15",
      "patient": "Mariam Youssef",
      "type": "Diagnostics",
      "room": "Room B",
      "status": "Waiting"
    },
    {
      "time": "10:00",
      "patient": "Omar Adel",
      "type": "Consultation",
      "room": "Room C",
      "status": "Confirmed"
    },
    {
      "time": "11:20",
      "patient": "Hana Ibrahim",
      "type": "Review",
      "room": "Room A",
      "status": "Pending"
    },
    {
      "time": "12:00",
      "patient": "Yassin Maher",
      "type": "Procedure",
      "room": "Room D",
      "status": "Confirmed"
    }
  ],
  "reports": [
    {
      "title": "Daily Operations Report",
      "metric": "Patient flow",
      "status": "Ready"
    },
    {
      "title": "Department Utilization",
      "metric": "Capacity and rooms",
      "status": "Draft"
    },
    {
      "title": "Clinical Quality Snapshot",
      "metric": "Mock quality KPIs",
      "status": "Review"
    },
    {
      "title": "Revenue Cycle Summary",
      "metric": "Payments and claims mock",
      "status": "Ready"
    }
  ],
  "features": [
    "Appointment intake and queue overview",
    "Patient profile mock records",
    "Department workload cards",
    "Report status and admin review",
    "Role-based interface concept",
    "Empty/loading/error state blocks"
  ],
  "notes": "This is a frontend template with mock medical data only. It is not a clinical backend, not EHR certified, and not intended for real medical decisions without proper implementation."
} as const;
