import React, { useEffect, useRef } from 'react';
import { Calculator, FileCheck, Briefcase, FileEdit, BarChart, ShieldCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          const serviceCards = entry.target.querySelectorAll('.service-card');
          serviceCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-slide-up');
              card.classList.remove('opacity-0');
              card.classList.remove('translate-y-8');
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
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

  const services = [
    {
      title: 'Dichiarazioni Fiscali',
      description: 'Preparazione e presentazione di dichiarazioni fiscali per privati e aziende con massima precisione.',
      icon: <FileCheck className="w-12 h-12 text-gold-500" />
    },
    {
      title: 'Consulenza Aziendale',
      description: 'Supporto strategico per l\'ottimizzazione fiscale e la gestione finanziaria della tua impresa.',
      icon: <Briefcase className="w-12 h-12 text-gold-500" />
    },
    {
      title: 'Contabilità',
      description: 'Gestione completa della contabilità aziendale, dal bilancio alla reportistica finanziaria.',
      icon: <Calculator className="w-12 h-12 text-gold-500" />
    },
    {
      title: 'Analisi Finanziaria',
      description: 'Analisi approfondita dei dati finanziari per supportare decisioni aziendali strategiche.',
      icon: <BarChart className="w-12 h-12 text-gold-500" />
    },
    {
      title: 'Compliance Fiscale',
      description: 'Assicuriamo che la tua azienda sia sempre conforme alle normative fiscali vigenti.',
      icon: <ShieldCheck className="w-12 h-12 text-gold-500" />
    },
    {
      title: 'Pianificazione Fiscale',
      description: 'Strategie personalizzate per ottimizzare il carico fiscale in modo legale ed efficiente.',
      icon: <FileEdit className="w-12 h-12 text-gold-500" />
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-wider">I Nostri Servizi</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2">Soluzioni Complete Per Le Tue Esigenze Fiscali</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group relative bg-white p-8 rounded-2xl border-2 border-gold-500/20 hover:border-gold-500/40 
                shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 translate-y-8
                hover:bg-gradient-to-br hover:from-white hover:to-gold-50"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 
                  bg-gradient-to-br from-gold-100 to-white p-4 rounded-2xl w-20 h-20 flex items-center justify-center
                  shadow-md group-hover:shadow-lg">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gold-500/10 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};