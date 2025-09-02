'use client';
import { useEffect, useRef, useState } from 'react';

const ImpactMetrics = () => {
  const [metrics] = useState([
    { title: 'Agriculteurs Formés', count: 45, icon: '🌱' },
    { title: 'Entrepreneurs Soutenus', count: 62, icon: '💼' },
    { title: 'Kits d’Hygiène Distribués', count: 350, icon: '🧼' },
    { title: 'Centres de Formation', count: 3, icon: '🏫' },
    { title: 'Personnes Vulnérables Aidées', count: 459, icon: '🤝' }
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
    <div className="py-16 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-green-800 dark:text-green-300 mb-6">
        Notre Impact
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 px-4">
        Découvrez comment nos actions améliorent la vie de milliers de personnes chaque jour.
      </p>
      <div
        ref={sectionRef}
        className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto px-4"
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
    </div>
  );
};

const MetricItem = ({ title, count, icon, animate }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const duration = 1200;

  useEffect(() => {
    if (!animate || hasAnimated) return;

    setHasAnimated(true);
    let start;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      setDisplayCount(Math.floor(percentage * count));
      if (percentage < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [animate, count, hasAnimated]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4 text-2xl">
        {icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-300">
        {displayCount.toLocaleString()}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
        {title}
      </div>
    </div>
  );
};

export default ImpactMetrics;
