import React from 'react';
import { Scissors, Mail, Phone } from 'lucide-react';
import logo from '../assets/svg/logo.svg';

export function Header() {
  return (
    <header className="relative bg-gray-900 text-white">
      <div className="relative container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scissors size={32} className="text-orange-500" />
            <span className="text-xl font-bold">CosturasIndustriales</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#servicios" className="hover:text-orange-400">Servicios</a>
            <a href="#proceso" className="hover:text-orange-400">Proceso</a>
            <a href="#galeria" className="hover:text-orange-400">Galería</a>
            <a href="#contacto" className="hover:text-orange-400">Contacto</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+123456789" className="flex items-center space-x-2">
              <Phone size={18} />
              <span>123-456-789</span>
            </a>
            <a href="mailto:info@costurasindustriales.com" className="flex items-center space-x-2">
              <Mail size={18} />
              <span>info@costurasindustriales.com</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}