import React, { useState, useEffect } from 'react';
import { Users, Building, FlaskRound as Flask, Award } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState({
    doctors: 0,
    departments: 0,
    labs: 0,
    awards: 0
  });

  const finalValues = {
    doctors: 85,
    departments: 18,
    labs: 12,
    awards: 150
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => ({
        doctors: Math.min(prev.doctors + Math.ceil(finalValues.doctors / steps), finalValues.doctors),
        departments: Math.min(prev.departments + Math.ceil(finalValues.departments / steps), finalValues.departments),
        labs: Math.min(prev.labs + Math.ceil(finalValues.labs / steps), finalValues.labs),
        awards: Math.min(prev.awards + Math.ceil(finalValues.awards / steps), finalValues.awards)
      }));
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      number: counters.doctors,
      label: "Doctors"
    },
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      number: counters.departments,
      label: "Departments"
    },
    {
      icon: <Flask className="h-12 w-12 text-blue-600" />,
      number: counters.labs,
      label: "Research Labs"
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      number: counters.awards,
      label: "Awards"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;