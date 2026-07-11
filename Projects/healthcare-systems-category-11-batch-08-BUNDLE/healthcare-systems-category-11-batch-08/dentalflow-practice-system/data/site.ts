export const site = {
  "templateName": "DentalFlow Practice System",
  "sector": "Dental practice",
  "audience": "Dental clinics and cosmetic dentistry centers",
  "useCase": "appointments, treatment plans, patient records",
  "vibe": "bright premium dental UI",
  "gradient": "from-cyan-600 to-sky-500",
  "chip": "bg-cyan-50 text-cyan-700 ring-cyan-200",
  "border": "border-cyan-200",
  "departments": [
    "Implants",
    "Orthodontics",
    "Whitening",
    "Surgery"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "37",
      "trend": "+6%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1121",
      "trend": "+5%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "14m",
      "trend": "-4m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "15",
      "trend": "3 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Implants Lead",
      "slots": "08:30 - 14:30",
      "load": "74%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Orthodontics Consultant",
      "slots": "10:00 - 18:00",
      "load": "61%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Whitening Specialist",
      "slots": "12:00 - 20:00",
      "load": "67%"
    }
  ],
  "patients": [
    {
      "id": "PT-2430",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2431",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2432",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2433",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2434",
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
