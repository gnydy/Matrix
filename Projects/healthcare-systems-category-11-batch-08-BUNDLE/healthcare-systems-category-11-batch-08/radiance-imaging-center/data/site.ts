export const site = {
  "templateName": "Radiance Imaging Center",
  "sector": "Radiology",
  "audience": "Radiology and imaging centers",
  "useCase": "scan schedule, reports, imaging status",
  "vibe": "dark imaging operations UI",
  "gradient": "from-zinc-900 to-slate-600",
  "chip": "bg-zinc-100 text-zinc-700 ring-zinc-200",
  "border": "border-zinc-200",
  "departments": [
    "MRI",
    "CT Scan",
    "X-Ray",
    "Ultrasound"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "53",
      "trend": "+4%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1873",
      "trend": "+3%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "16m",
      "trend": "-5m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "20",
      "trend": "3 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "MRI Lead",
      "slots": "08:30 - 14:30",
      "load": "72%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "CT Scan Consultant",
      "slots": "10:00 - 18:00",
      "load": "77%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "X-Ray Specialist",
      "slots": "12:00 - 20:00",
      "load": "83%"
    }
  ],
  "patients": [
    {
      "id": "PT-2590",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2591",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2592",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2593",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2594",
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
