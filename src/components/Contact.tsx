import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          if (formRef.current) {
            formRef.current.classList.add('animate-slide-right');
            formRef.current.classList.remove('opacity-0');
            formRef.current.classList.remove('-translate-x-8');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Email non valida';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'L\'oggetto è obbligatorio';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Il messaggio deve contenere almeno 10 caratteri';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formState);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-wider">Contattaci</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2">Siamo Qui Per Te</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div 
            ref={formRef} 
            className="opacity-0 -translate-x-8 transition-all duration-1000"
          >
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 flex flex-col items-center text-center">
                <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold text-green-700 mb-2">Messaggio Inviato!</h3>
                <p className="text-green-600 mb-6">Grazie per averci contattato. Ti risponderemo al più presto.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-primary bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors duration-300 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Il tuo nome"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors duration-300 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="La tua email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors duration-300"
                      placeholder="Il tuo numero di telefono"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Oggetto *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors duration-300 ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Seleziona un oggetto</option>
                      <option value="Consulenza fiscale">Consulenza fiscale</option>
                      <option value="Contabilità">Contabilità</option>
                      <option value="Pianificazione fiscale">Pianificazione fiscale</option>
                      <option value="Altro">Altro</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Messaggio *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors duration-300 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Scrivi il tuo messaggio qui"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-primary">
                    Invia Messaggio
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};