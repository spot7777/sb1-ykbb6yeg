import React, { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const Faq: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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

  const faqs = [
    {
      question: 'Quali servizi offrite per le piccole imprese?',
      answer: 'Offriamo una gamma completa di servizi per le piccole imprese, tra cui contabilità, dichiarazioni fiscali, pianificazione fiscale, consulenza aziendale e supporto per la conformità normativa. Il nostro approccio su misura ci permette di adattare i nostri servizi alle esigenze specifiche della tua azienda.'
    },
    {
      question: 'Con quale frequenza dovrei consultare un commercialista?',
      answer: 'Raccomandiamo consultazioni trimestrali per una revisione regolare della situazione fiscale, ma la frequenza ottimale dipende dalla complessità delle tue attività. Per le aziende con operazioni più complesse o in rapida crescita, incontri mensili possono essere più appropriati.'
    },
    {
      question: 'Come posso prepararmi per il primo appuntamento?',
      answer: 'Per il primo appuntamento, ti consigliamo di portare le dichiarazioni fiscali degli ultimi due anni, i documenti contabili recenti, eventuali avvisi fiscali ricevuti, e una lista delle tue principali preoccupazioni o obiettivi finanziari. Questo ci aiuterà a comprendere meglio la tua situazione e a fornirti un servizio più personalizzato.'
    },
    {
      question: 'Quanto costa la consulenza fiscale?',
      answer: 'Le nostre tariffe dipendono dalla complessità dei servizi richiesti. Offriamo pacchetti personalizzati con tariffe fisse per servizi continuativi e consulenze orarie per esigenze specifiche. Contattaci per un preventivo gratuito basato sulle tue necessità.'
    },
    {
      question: 'Assistete anche in caso di controlli fiscali?',
      answer: 'Sì, forniamo assistenza completa in caso di controlli fiscali. Il nostro team ti supporterà in ogni fase del processo, dalla preparazione della documentazione necessaria alla rappresentanza durante gli incontri con le autorità fiscali, lavorando per proteggere i tuoi interessi e risolvere eventuali problematiche.'
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2">Domande Frequenti</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Non hai trovato la risposta che cercavi?</p>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Contattaci
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="flex justify-between items-center w-full p-6 text-left bg-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-navy-900">{question}</h3>
        {isOpen ? 
          <Minus className="text-gold-500 h-5 w-5 flex-shrink-0" /> : 
          <Plus className="text-gold-500 h-5 w-5 flex-shrink-0" />
        }
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};