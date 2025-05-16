import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { StarBorder } from './StarBorder';
import AnimatedTextCycle from './ui/animated-text-cycle';

export const Hero: React.FC = () => {
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

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-navy-900 text-white opacity-0 transition-opacity duration-1000"
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/95"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/mia-immagine.jpg')",
          backgroundAttachment: "fixed"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUpVariants}
          >
            <motion.span className="block text-white">
              La tua{" "}
              <AnimatedTextCycle
                words={[
                  "impresa",
                  "contabilità",
                  "fiscalità",
                  "crescita",
                  "serenità",
                  "pianificazione",
                  "dichiarazione",
                  "strategia",
                  "organizzazione"
                ]}
                interval={3000}
                className="text-gold-500"
              />{" "}
              merita una gestione migliore
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUpVariants}
          >
            Offriamo consulenza fiscale professionale e rappresentanza completa. 
            Il tuo successo è la nostra priorità.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUpVariants}
          >
            <StarBorder as="a" 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              <span className="flex items-center justify-center">
                Consulenza Gratuita
                <ArrowRight size={20} className="ml-2" />
              </span>
            </StarBorder>
            <StarBorder as="a" 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              <span>I Nostri Servizi</span>
            </StarBorder>
          </motion.div>
        </div>
      </div>
      
      {/* Scrolldown indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};