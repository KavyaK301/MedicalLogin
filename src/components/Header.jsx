import React, { useState } from "react";
import {
  ChevronDown,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const MedilabHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const [departmentsTimeout, setDepartmentsTimeout] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDepartmentsMouseEnter = () => {
    if (departmentsTimeout) {
      clearTimeout(departmentsTimeout);
      setDepartmentsTimeout(null);
    }
    setIsDepartmentsOpen(true);
  };

  const handleDepartmentsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDepartmentsOpen(false);
    }, 9000); // Small delay to allow moving to dropdown
    setDepartmentsTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (departmentsTimeout) {
      clearTimeout(departmentsTimeout);
      setDepartmentsTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsDepartmentsOpen(false);
  };

  // Sample department data
  const departments = [
    { name: "Cardiology", link: "#cardiology" },
    { name: "Neurology", link: "#neurology" },
    { name: "Hepatology", link: "#hepatology" },
    { name: "Pediatrics", link: "#pediatrics" },
    { name: "Eye Care", link: "#eye-care" },
    { name: "Dental Care", link: "#dental-care" },
  ];

  return (
    <div className="w-full">
      {/* Top Header Bar */}
      <div className="bg-blue-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">contact@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+1 5589 55488 55</span>
            </div>
          </div>

          {/* Social Icons and Close */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <Facebook className="h-4 w-4 hover:text-blue-200 cursor-pointer" />
              <Instagram className="h-4 w-4 hover:text-blue-200 cursor-pointer" />
              <Linkedin className="h-4 w-4 hover:text-blue-200 cursor-pointer" />
            </div>
            <X className="h-4 w-4 hover:text-blue-200 cursor-pointer ml-4" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-700">Medilab</h1>
            </div>

            {/* Navigation Links - Main Menu */}
            <div className="flex items-center space-x-8">
              {/* Home - Active with blue color and underline */}
              <a
                href="#"
                className="text-blue-600 font-medium text-base border-b-2 border-blue-600 pb-1 px-2 inline-block"
              >
                Home
              </a>

              {/* About */}
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium text-base pb-1 px-2 inline-block transition-colors"
              >
                About
              </a>

              {/* Services */}
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium text-base pb-1 px-2 inline-block transition-colors"
              >
                Services
              </a>

              {/* Departments with hover dropdown */}
              <div className="relative">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 font-medium text-base pb-1 px-2 inline-block transition-colors"
                  onMouseEnter={handleDepartmentsMouseEnter}
                  onMouseLeave={handleDepartmentsMouseLeave}
                >
                  Departments
                </a>

                {isDepartmentsOpen && (
                  <div
                    className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {departments.map((dept, index) => (
                      <a
                        key={index}
                        href={dept.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {dept.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Doctors */}
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium text-base pb-1 px-2 inline-block transition-colors"
              >
                Doctors
              </a>

              {/* Dropdown with chevron down arrow */}
              {/* <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-gray-600 hover:text-blue-600 font-medium text-base pb-1 px-2 flex items-center transition-colors"
                >
                  Dropdown
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sub Menu 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sub Menu 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sub Menu 3
                    </a>
                  </div>
                )}
              </div> */}

              {/* Contact */}
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium text-base pb-1 px-2 inline-block transition-colors"
              >
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Make an Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MedilabHeader;
