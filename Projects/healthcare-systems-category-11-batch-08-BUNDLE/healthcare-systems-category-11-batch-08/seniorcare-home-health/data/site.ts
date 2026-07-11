export const site = {
  "templateName": "SeniorCare Home Health",
  "sector": "Home healthcare",
  "audience": "Home care companies and elder-care providers",
  "useCase": "visits, caregivers, medication schedules",
  "vibe": "care logistics portal",
  "gradient": "from-stone-700 to-amber-500",
  "chip": "bg-stone-100 text-stone-700 ring-stone-200",
  "border": "border-stone-200",
  "departments": [
    "Home Visits",
    "Medication",
    "Caregivers",
    "Reports"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "51",
      "trend": "+11%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1779",
      "trend": "+7%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "14m",
      "trend": "-3m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "18",
      "trend": "1 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Home Visits Lead",
      "slots": "08:30 - 14:30",
      "load": "88%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Medication Consultant",
      "slots": "10:00 - 18:00",
      "load": "75%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Caregivers Specialist",
      "slots": "12:00 - 20:00",
      "load": "81%"
    }
  ],
  "patients": [
    {
      "id": "PT-2570",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2571",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2572",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2573",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2574",
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
