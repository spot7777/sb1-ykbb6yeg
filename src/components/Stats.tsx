import React, { useEffect, useRef, useState } from 'react';
import { Users, Award, Calendar, Building } from 'lucide-react';

export const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      value: 2000,
      suffix: '+',
      label: 'Clienti Soddisfatti',
      icon: <Users className="w-8 h-8 text-gold-500" />
    },
    {
      value: 20,
      suffix: '+',
      label: 'Anni di Esperienza',
      icon: <Calendar className="w-8 h-8 text-gold-500" />
    },
    {
      value: 15,
      suffix: '',
      label: 'Professionisti',
      icon: <Users className="w-8 h-8 text-gold-500" />
    },
    {
      value: 500,
      suffix: '+',
      label: 'Aziende Assistite',
      icon: <Building className="w-8 h-8 text-gold-500" />
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-navy-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 flex justify-center">
                <CountUp
                  end={stat.value}
                  duration={2}
                  start={0}
                  shouldStart={isVisible}
                />
                <span>{stat.suffix}</span>
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpProps {
  end: number;
  start: number;
  duration: number;
  shouldStart: boolean;
}

const CountUp: React.FC<CountUpProps> = ({ end, start = 0, duration, shouldStart }) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;
    
    const timer = setInterval(() => {
      const now = Date.now();
      if (now >= endTime) {
        setCount(end);
        clearInterval(timer);
        return;
      }
      
      const progress = (now - startTime) / (endTime - startTime);
      const currentCount = Math.floor(progress * (end - start) + start);
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, start, duration, shouldStart]);
  
  return <>{count}</>;
};