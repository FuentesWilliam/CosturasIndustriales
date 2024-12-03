import React from 'react';
import { Scissors, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors size={32} className="text-orange-500" />
              <span className="text-xl font-bold">CosturasIndustriales</span>
            </div>
            <p className="text-gray-400">
              Expertos en costuras duras y soluciones personalizadas para tu marca.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a href="tel:+123456789" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Phone size={18} />
                <span>123-456-789</span>
              </a>
              <a href="mailto:info@costurasindustriales.com" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Mail size={18} />
                <span>info@costurasindustriales.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={18} />
                <span>Calle Industrial 123, Ciudad</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-gray-400 hover:text-white">Servicios</a></li>
              <li><a href="#proceso" className="text-gray-400 hover:text-white">Proceso</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-white">Galería</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CosturasIndustriales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}