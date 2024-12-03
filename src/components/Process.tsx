import React from 'react';
import { ClipboardList, Palette, Settings2, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Consulta inicial',
    description: 'Recibimos tu idea o diseño y entendemos tus necesidades',
  },
  {
    icon: Palette,
    title: 'Asesoría',
    description: 'Te asesoramos sobre materiales y opciones de producción',
  },
  {
    icon: Settings2,
    title: 'Producción',
    description: 'Fabricamos tu producto con precisión y calidad',
  },
  {
    icon: CheckCircle,
    title: 'Entrega',
    description: 'Realizamos control de calidad y entregamos tu pedido',
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestro Proceso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-orange-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}