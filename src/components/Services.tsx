import React from 'react';
import { Backpack, ShoppingBag, Package, Settings, Ruler, Shield } from 'lucide-react';

const services = [
  {
    icon: Backpack,
    title: 'Mochilas',
    description: 'Fabricación de mochilas resistentes para todo tipo de uso',
  },
  {
    icon: ShoppingBag,
    title: 'Bolsos',
    description: 'Diseño y producción de bolsos personalizados',
  },
  {
    icon: Package,
    title: 'Bananos',
    description: 'Confección de bananos funcionales y duraderos',
  },
  {
    icon: Settings,
    title: 'Personalización',
    description: 'Adaptamos cada producto a tus especificaciones',
  },
  {
    icon: Ruler,
    title: 'Diseño a medida',
    description: 'Desarrollo de prototipos y diseños exclusivos',
  },
  {
    icon: Shield,
    title: 'Control de calidad',
    description: 'Garantía en cada costura y acabado',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}