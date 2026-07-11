export const site = {
  "templateName": "MentalCare Therapy Portal",
  "sector": "Mental health",
  "audience": "Therapy clinics and counseling platforms",
  "useCase": "sessions, therapist matching, care plans mock",
  "vibe": "calm private wellness interface",
  "gradient": "from-violet-700 to-indigo-500",
  "chip": "bg-violet-50 text-violet-700 ring-violet-200",
  "border": "border-violet-200",
  "departments": [
    "Therapy",
    "Assessment",
    "Care Plans",
    "Journals"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "42",
      "trend": "+11%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1356",
      "trend": "+4%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "12m",
      "trend": "-4m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "20",
      "trend": "0 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Therapy Lead",
      "slots": "08:30 - 14:30",
      "load": "79%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Assessment Consultant",
      "slots": "10:00 - 18:00",
      "load": "66%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Care Plans Specialist",
      "slots": "12:00 - 20:00",
      "load": "72%"
    }
  ],
  "patients": [
    {
      "id": "PT-2480",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2481",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2482",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2483",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2484",
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
