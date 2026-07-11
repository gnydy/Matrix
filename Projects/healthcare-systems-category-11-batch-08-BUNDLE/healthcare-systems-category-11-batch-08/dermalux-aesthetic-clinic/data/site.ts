export const site = {
  "templateName": "DermaLux Aesthetic Clinic",
  "sector": "Dermatology and aesthetics",
  "audience": "Cosmetic clinics and dermatology centers",
  "useCase": "services, client plans, procedures, before-after mock",
  "vibe": "luxury aesthetic clinical UI",
  "gradient": "from-amber-600 to-orange-500",
  "chip": "bg-amber-50 text-amber-700 ring-amber-200",
  "border": "border-amber-200",
  "departments": [
    "Laser",
    "Injectables",
    "Skin Care",
    "Consultation"
  ],
  "stats": [
    {
      "label": "Appointments Today",
      "value": "46",
      "trend": "+6%",
      "note": "scheduled visits"
    },
    {
      "label": "Active Patients",
      "value": "1544",
      "trend": "+2%",
      "note": "mock records"
    },
    {
      "label": "Avg Wait Time",
      "value": "16m",
      "trend": "-3m",
      "note": "front desk queue"
    },
    {
      "label": "Open Reports",
      "value": "13",
      "trend": "0 urgent",
      "note": "review needed"
    }
  ],
  "doctors": [
    {
      "name": "Dr. Lina Mansour",
      "role": "Laser Lead",
      "slots": "08:30 - 14:30",
      "load": "83%"
    },
    {
      "name": "Dr. Karim Nader",
      "role": "Injectables Consultant",
      "slots": "10:00 - 18:00",
      "load": "70%"
    },
    {
      "name": "Dr. Salma Farouk",
      "role": "Skin Care Specialist",
      "slots": "12:00 - 20:00",
      "load": "76%"
    }
  ],
  "patients": [
    {
      "id": "PT-2520",
      "name": "Nour Hassan",
      "case": "Follow-up review",
      "status": "Checked in",
      "time": "09:15"
    },
    {
      "id": "PT-2521",
      "name": "Omar Adel",
      "case": "New consultation",
      "status": "Waiting",
      "time": "10:00"
    },
    {
      "id": "PT-2522",
      "name": "Mariam Youssef",
      "case": "Report pickup",
      "status": "In progress",
      "time": "10:45"
    },
    {
      "id": "PT-2523",
      "name": "Yassin Maher",
      "case": "Procedure booking",
      "status": "Confirmed",
      "time": "11:30"
    },
    {
      "id": "PT-2524",
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
