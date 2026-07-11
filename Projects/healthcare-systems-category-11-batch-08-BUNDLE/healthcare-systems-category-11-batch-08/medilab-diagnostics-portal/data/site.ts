export const site = {
  "templateName": "MediLab Diagnostics Portal",
  "sector": "Diagnostics and laboratories",
  "audience": "Labs, imaging centers, blood test providers",
  "useCase": "test orders, sample tracking, reports",
  "vibe": "data-heavy lab workflow",
  "gradient": "from-purple-700 to-fuchsia-500",
  "chip": "bg-purple-50 text-purple-700 ring-purple-200",
  "border": "border-purple-200",
  "departments": [
    "Hematology",
    "Imaging",
    "Chemistry",
    "Pathology"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "39",
      "trend": "+8%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1215",
      "trend": "+7%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "16m",
      "trend": "-1m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "17",
      "trend": "1 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Hematology Lead",
      "slots": "08:30 - 14:30",
      "load": "76%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Imaging Consultant",
      "slots": "10:00 - 18:00",
      "load": "63%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Chemistry Specialist",
      "slots": "12:00 - 20:00",
      "load": "69%"
    }
  ],
  "patients": [
    {
      "id": "PT-2450",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2451",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2452",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2453",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2454",
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
