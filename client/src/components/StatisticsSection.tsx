'use client';
import { useEffect, useState } from 'react';

export default function StatisticsSection() {
  const [counters, setCounters] = useState({
    clients: 0,
    years: 0,
    taxReturns: 0
  });

  useEffect(() => {
    const targetValues = {
      clients: 30,
      years: 6,
      taxReturns: 200
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounters = () => {
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          clients: Math.floor(targetValues.clients * progress),
          years: Math.floor(targetValues.years * progress),
          taxReturns: Math.floor(targetValues.taxReturns * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    animateCounters();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-16 h-16 bg-blue-100/50 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-amber-100/50 -rotate-12 rounded"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Kenyan Businesses
          </h2>
          <p className="text-xl text-gray-600">
            Delivering exceptional financial services across Kenya
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="animate-count-up">
            <div className="text-4xl font-bold text-blue-600 mb-2">{counters.clients}+</div>
            <div className="text-gray-600 font-medium">Clients Served</div>
          </div>
          <div className="animate-count-up">
            <div className="text-4xl font-bold text-amber-500 mb-2">{counters.years}+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="animate-count-up">
            <div className="text-4xl font-bold text-blue-600 mb-2">{counters.taxReturns}+</div>
            <div className="text-gray-600 font-medium">Tax Returns Filed</div>
          </div>
        </div>
      </div>
    </section>
  );
}