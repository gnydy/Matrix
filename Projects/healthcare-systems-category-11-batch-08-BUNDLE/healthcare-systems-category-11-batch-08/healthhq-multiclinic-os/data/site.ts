export const site = {
  "templateName": "HealthHQ MultiClinic OS",
  "sector": "Multi-branch clinics",
  "audience": "Clinic chains and healthcare groups",
  "useCase": "branches, doctors, appointments, revenue mock",
  "vibe": "executive healthcare multi-branch system",
  "gradient": "from-blue-700 to-cyan-500",
  "chip": "bg-blue-50 text-blue-700 ring-blue-200",
  "border": "border-blue-200",
  "departments": [
    "Branches",
    "Doctors",
    "Finance",
    "Quality"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "54",
      "trend": "+5%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1920",
      "trend": "+4%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "17m",
      "trend": "-1m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "21",
      "trend": "0 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Branches Lead",
      "slots": "08:30 - 14:30",
      "load": "73%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Doctors Consultant",
      "slots": "10:00 - 18:00",
      "load": "78%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Finance Specialist",
      "slots": "12:00 - 20:00",
      "load": "84%"
    }
  ],
  "patients": [
    {
      "id": "PT-2600",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2601",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2602",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2603",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2604",
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
