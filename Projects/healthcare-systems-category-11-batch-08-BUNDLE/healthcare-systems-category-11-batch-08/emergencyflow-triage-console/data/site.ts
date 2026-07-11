export const site = {
  "templateName": "EmergencyFlow Triage Console",
  "sector": "Emergency care",
  "audience": "Emergency units and urgent care centers",
  "useCase": "triage queues, severity levels, bed flow",
  "vibe": "fast urgent operations cockpit",
  "gradient": "from-orange-700 to-red-500",
  "chip": "bg-orange-50 text-orange-700 ring-orange-200",
  "border": "border-orange-200",
  "departments": [
    "Triage",
    "Beds",
    "Ambulance",
    "Critical Cases"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "50",
      "trend": "+10%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1732",
      "trend": "+6%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "13m",
      "trend": "-2m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "17",
      "trend": "0 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Triage Lead",
      "slots": "08:30 - 14:30",
      "load": "87%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Beds Consultant",
      "slots": "10:00 - 18:00",
      "load": "74%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Ambulance Specialist",
      "slots": "12:00 - 20:00",
      "load": "80%"
    }
  ],
  "patients": [
    {
      "id": "PT-2560",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2561",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2562",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2563",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2564",
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
