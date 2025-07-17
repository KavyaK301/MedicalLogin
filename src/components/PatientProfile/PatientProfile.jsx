import React from 'react';
import {
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Heart,
  Activity,
  Thermometer,
  Scale,
  Pill,
  AlertTriangle,
  ChevronRight,
  Edit,
  CalendarPlus,
  History,
  Presentation as Prescription,
  Users,
} from 'lucide-react';

const PatientProfile = () => {
  const patientData = {
    name: "Sarah Johnson",
    age: 34,
    gender: "Female",
    dateOfBirth: "March 15, 1990",
    id: "PT-2024-001",
    phone: "(555) 123-4567",
    email: "sarah.johnson@email.com",
    address: "123 Main Street, Springfield, IL 62701",
    bloodType: "A+",
    height: "5'6\"",
    weight: "135 lbs",
    profileImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  };

  const vitals = [
    { label: "Blood Pressure", value: "120/80", unit: "mmHg", icon: Heart, status: "normal" },
    { label: "Heart Rate", value: "72", unit: "bpm", icon: Activity, status: "normal" },
    { label: "Temperature", value: "98.6", unit: "°F", icon: Thermometer, status: "normal" },
    { label: "Weight", value: "135", unit: "lbs", icon: Scale, status: "normal" }
  ];

  const medications = [
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", prescriber: "Dr. Smith" },
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily", prescriber: "Dr. Johnson" },
    { name: "Vitamin D3", dosage: "1000 IU", frequency: "Once daily", prescriber: "Dr. Smith" }
  ];

  const appointments = [
    { date: "Jan 15, 2025", time: "2:00 PM", doctor: "Dr. Smith", type: "Follow-up", status: "upcoming" },
    { date: "Jan 8, 2025", time: "10:30 AM", doctor: "Dr. Johnson", type: "Lab Results", status: "completed" },
    { date: "Dec 20, 2024", time: "3:15 PM", doctor: "Dr. Wilson", type: "Annual Physical", status: "completed" }
  ];

  const conditions = [
    { name: "Hypertension", status: "Controlled", since: "2022" },
    { name: "Type 2 Diabetes", status: "Managed", since: "2023" }
  ];

  const allergies = [
    { name: "Penicillin", severity: "Severe", reaction: "Anaphylaxis" },
    { name: "Shellfish", severity: "Moderate", reaction: "Hives" }
  ];

  const emergencyContacts = [
    { name: "Michael Johnson", relationship: "Spouse", phone: "(555) 234-5678" },
    { name: "Linda Johnson", relationship: "Mother", phone: "(555) 345-6789" }
  ];

  // ✅ FIXED: Removed TypeScript annotation
  const getStatusColor = (status) => {
    switch (status) {
      case 'normal':
      case 'upcoming':
      case 'Controlled':
      case 'Managed':
        return 'text-green-600 bg-green-50';
      case 'completed':
        return 'text-blue-600 bg-blue-50';
      case 'Severe':
        return 'text-red-600 bg-red-50';
      case 'Moderate':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* ... your entire layout as is ... */}
      {/* All the JSX you've already written remains untouched. */}
      {/* No further corrections needed unless you're adding features. */}
    </div>
  );
};

export default PatientProfile;
