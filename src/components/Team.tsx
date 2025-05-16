import React, { useEffect, useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Team: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          const teamMembers = entry.target.querySelectorAll('.team-member');
          teamMembers.forEach((member, index) => {
            setTimeout(() => {
              member.classList.add('animate-slide-up');
              member.classList.remove('opacity-0');
              member.classList.remove('translate-y-8');
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

  const team = [
    {
      name: 'Marco Rossi',
      role: 'Dottore Commercialista, Fondatore',
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Esperto in consulenza fiscale aziendale con oltre 25 anni di esperienza.'
    },
    {
      name: 'Giulia Bianchi',
      role: 'Consulente Fiscale Senior',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Specializzata in pianificazione fiscale per PMI e startup innovative.'
    },
    {
      name: 'Antonio Verdi',
      role: 'Esperto Contabile',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Dedito alla gestione contabile e alla preparazione di bilanci aziendali.'
    },
    {
      name: 'Claudia Romano',
      role: 'Consulente del Lavoro',
      image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Esperta in normative del lavoro e gestione delle risorse umane.'
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-white opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-wider">Il Nostro Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2">Professionisti al Tuo Servizio</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="team-member bg-white rounded-lg overflow-hidden shadow-lg opacity-0 translate-y-8 transition-all duration-500"
            >
              <div className="relative group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-navy-900 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white bg-gold-500 hover:bg-gold-600 p-2 rounded-full transition-colors duration-300">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-white bg-gold-500 hover:bg-gold-600 p-2 rounded-full transition-colors duration-300">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900">{member.name}</h3>
                <p className="text-gold-500 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};