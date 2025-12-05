import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Farmers', value: 45 },
  { name: 'Visitors', value: 82 },
  { name: 'Waste Red.', value: 65 },
  { name: 'Events', value: 30 },
];

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Hub Services</h2>
          <p className="text-stone-500">Sustainable revenue streams supporting our cultural preservation mission.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service) => {
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.HelpCircle;
            
            return (
              <div key={service.id} className="p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 text-white shadow-lg`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Impact Chart Section */}
        <div className="bg-stone-50 rounded-2xl p-8 shadow-inner">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-heritage-green mb-4">Our Growing Impact</h3>
                    <p className="text-stone-600 mb-4">
                        Heritage Hub Nepal isn't just about culture; it's about measurable impact. From supporting local farmers to reducing urban waste through our zero-waste initiatives.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-sm text-stone-700">
                            <span className="w-2 h-2 bg-heritage-green rounded-full mr-2"></span>
                            45+ Local Farmers Supported
                        </li>
                        <li className="flex items-center text-sm text-stone-700">
                            <span className="w-2 h-2 bg-bamboo-yellow rounded-full mr-2"></span>
                            65% Waste Reduction in Hub Zones
                        </li>
                        <li className="flex items-center text-sm text-stone-700">
                            <span className="w-2 h-2 bg-earth-orange rounded-full mr-2"></span>
                            30+ Cultural Events Hosted
                        </li>
                    </ul>
                </div>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                            <XAxis dataKey="name" stroke="#57534e" fontSize={12} />
                            <YAxis stroke="#57534e" fontSize={12} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Bar dataKey="value" fill="#2D6A4F" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};