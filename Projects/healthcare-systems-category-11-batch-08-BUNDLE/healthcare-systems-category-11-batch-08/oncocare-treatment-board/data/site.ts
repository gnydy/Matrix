export const site = {
  "templateName": "OncoCare Treatment Board",
  "sector": "Oncology",
  "audience": "Cancer centers and specialty hospitals",
  "useCase": "care pathways, sessions, lab reports mock",
  "vibe": "serious care pathway dashboard",
  "gradient": "from-red-700 to-rose-500",
  "chip": "bg-red-50 text-red-700 ring-red-200",
  "border": "border-red-200",
  "departments": [
    "Chemotherapy",
    "Radiology",
    "Lab Review",
    "Support Care"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "48",
      "trend": "+8%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1638",
      "trend": "+4%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "11m",
      "trend": "-5m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "15",
      "trend": "2 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Chemotherapy Lead",
      "slots": "08:30 - 14:30",
      "load": "85%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Radiology Consultant",
      "slots": "10:00 - 18:00",
      "load": "72%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Lab Review Specialist",
      "slots": "12:00 - 20:00",
      "load": "78%"
    }
  ],
  "patients": [
    {
      "id": "PT-2540",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2541",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2542",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2543",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2544",
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
