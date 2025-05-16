import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold">
              <span className="text-white">Fisco</span>
              <span className="text-gold-500">Consult</span>
            </span>
            <p className="text-gray-400 mt-4 max-w-md">
              Soluzioni fiscali professionali per imprese e privati. La nostra esperienza al servizio del tuo successo.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end">
                <MapPin className="text-gold-500 h-5 w-5 mr-2" />
                <span className="text-gray-300">Via Roma 123, 00100 Roma, Italia</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Phone className="text-gold-500 h-5 w-5 mr-2" />
                <span className="text-gray-300">+39 06 1234567 / +39 338 7654321</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Mail className="text-gold-500 h-5 w-5 mr-2" />
                <span className="text-gray-300">info@fiscoconsult.it</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FiscoConsult. Tutti i diritti riservati.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};