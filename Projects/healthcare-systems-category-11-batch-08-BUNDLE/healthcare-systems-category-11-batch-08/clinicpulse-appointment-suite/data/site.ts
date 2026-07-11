export const site = {
  "templateName": "ClinicPulse Appointment Suite",
  "sector": "Private clinic network",
  "audience": "Clinics, specialty doctors, outpatient centers",
  "useCase": "appointment booking, patient queue, clinic operations",
  "vibe": "clean clinical command center",
  "gradient": "from-emerald-600 to-teal-500",
  "chip": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "border": "border-emerald-200",
  "departments": [
    "Cardiology",
    "Dermatology",
    "Dental",
    "Pediatrics"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "35",
      "trend": "+4%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1027",
      "trend": "+3%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "12m",
      "trend": "-2m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "13",
      "trend": "1 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Cardiology Lead",
      "slots": "08:30 - 14:30",
      "load": "72%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Dermatology Consultant",
      "slots": "10:00 - 18:00",
      "load": "59%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Dental Specialist",
      "slots": "12:00 - 20:00",
      "load": "65%"
    }
  ],
  "patients": [
    {
      "id": "PT-2410",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2411",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2412",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2413",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2414",
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
