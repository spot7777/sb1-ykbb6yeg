import React from 'react';
import { Testimonial } from './ui/testimonial-card';

const testimonials = [
  {
    name: "Marco Rossi",
    role: "Imprenditore",
    company: "Rossi Costruzioni",
    rating: 5,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    testimonial: "Da quando ci affidiamo a FiscoConsult, la gestione fiscale della nostra azienda è diventata semplice ed efficiente. Il loro approccio professionale e su misura ha fatto davvero la differenza per noi."
  },
  {
    name: "Giulia Bianchi",
    role: "Libera Professionista",
    rating: 4.5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    testimonial: "Professionisti competenti e sempre disponibili. Mi hanno aiutato a ottimizzare la mia situazione fiscale e ho risparmiato molto più di quanto mi aspettassi. Consigliatissimi!"
  },
  {
    name: "Antonio Verdi",
    role: "CEO",
    company: "Tech Solutions",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    testimonial: "La consulenza ricevuta è stata fondamentale per la crescita della mia startup. Il team di FiscoConsult comprende realmente le esigenze delle nuove imprese e fornisce soluzioni innovative."
  },
  {
    name: "Laura Ferrari",
    role: "Commerciante",
    company: "Boutique Milano",
    rating: 4.5,
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
    testimonial: "La qualità del servizio e la comunicazione durante tutto il processo sono stati eccezionali. Hanno fornito esattamente ciò di cui avevamo bisogno."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-wider">Testimonianze</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Cosa Dicono i Nostri Clienti</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};