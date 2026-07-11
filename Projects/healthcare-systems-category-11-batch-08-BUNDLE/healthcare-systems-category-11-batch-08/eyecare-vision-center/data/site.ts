export const site = {
  "templateName": "EyeCare Vision Center",
  "sector": "Ophthalmology",
  "audience": "Eye clinics and optical centers",
  "useCase": "vision tests, appointments, prescriptions mock",
  "vibe": "precise optical interface",
  "gradient": "from-teal-600 to-cyan-500",
  "chip": "bg-teal-50 text-teal-700 ring-teal-200",
  "border": "border-teal-200",
  "departments": [
    "Retina",
    "Optometry",
    "Surgery",
    "Lens Fitting"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "47",
      "trend": "+7%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1591",
      "trend": "+3%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "17m",
      "trend": "-4m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "14",
      "trend": "1 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Retina Lead",
      "slots": "08:30 - 14:30",
      "load": "84%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Optometry Consultant",
      "slots": "10:00 - 18:00",
      "load": "71%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Surgery Specialist",
      "slots": "12:00 - 20:00",
      "load": "77%"
    }
  ],
  "patients": [
    {
      "id": "PT-2530",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2531",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2532",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2533",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2534",
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
