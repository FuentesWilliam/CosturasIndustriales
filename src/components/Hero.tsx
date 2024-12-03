import React from 'react';
import { ArrowRight } from 'lucide-react';
import imgPortada from '../assets/images/costuras2.webp';

export function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src={imgPortada}
          alt="Industrial Sewing Machine in Action"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Transformamos tus ideas en productos resistentes
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Servicios especializados en costuras duras para bolsos, mochilas y bananos.
            Calidad y resistencia garantizada para tu marca.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Solicitar cotización
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}