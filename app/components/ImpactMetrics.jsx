'use client';
import { useEffect, useRef, useState } from 'react';

const ImpactMetrics = () => {
  const [metrics] = useState([
    { title: 'Farmers Trained', count: 2500, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: 'Entrepreneurs Supported', count: 1800, icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    { title: 'Hygiene Kits', count: 35000, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Training Centers', count: 15, icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { title: 'Vulnerable Supported', count: 10000, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
  ]);

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="rounded-t-lg shadow-lg md:px-24 md:p-2 grid grid-cols-2 md:grid-cols-5 gap-4 py-8"
    >
      {metrics.map((metric, index) => (
        <MetricItem 
          key={index}
          title={metric.title}
          count={metric.count}
          icon={metric.icon}
          animate={visible}
        />
      ))}
    </div>
  );
};

const MetricItem = ({ title, count, icon, animate }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const duration = 2000;

  useEffect(() => {
    if (!animate) return;

    let start;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      setDisplayCount(Math.floor(percentage * count));

      if (percentage < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [animate, count]);

  return (
    <div className="text-center">
      <div className="text-green-600 dark:text-green-300 mb-2 flex justify-center items-center">
        {/* Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon}/>
        </svg>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-200">
        {displayCount.toLocaleString()}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        {title}
      </div>
    </div>
  );
};

export default ImpactMetrics;