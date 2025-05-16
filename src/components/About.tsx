import React, { useEffect, useRef } from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          if (contentRef.current) {
            contentRef.current.classList.add('animate-slide-left');
            contentRef.current.classList.remove('opacity-0');
            contentRef.current.classList.remove('translate-x-8');
          }
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

  const keyPoints = [
    'Esperienza ventennale nel settore fiscale',
    'Team di professionisti certificati',
    'Approccio personalizzato per ogni cliente',
    'Aggiornamento continuo sulle normative',
    'Tecnologia avanzata per massima efficienza'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div 
            ref={contentRef} 
            className="opacity-0 translate-x-8 transition-all duration-1000"
          >
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-wider">Chi Siamo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">La Tua Consulenza Fiscale di Fiducia</h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dal 2000, il nostro studio di consulenza fiscale si è dedicato a fornire servizi di alta qualità a privati e aziende in tutta Italia. La nostra missione è semplificare la gestione fiscale per i nostri clienti, offrendo soluzioni su misura che garantiscano tranquillità e conformità.
            </p>
            
            <ul className="space-y-3 mb-8">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-gold-500 h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://wa.me/+393331234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contattaci su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};