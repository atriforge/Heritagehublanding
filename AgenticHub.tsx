import React from 'react';
import * as LucideIcons from 'lucide-react';
import { AGENT_SERVICES } from './constants';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const AgenticHub: React.FC = () => {
  return (
    <section className="py-20 bg-stone-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-heritage-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm mb-4">
             <span className="px-3 py-1 bg-heritage-green text-white text-xs font-bold rounded-full mr-2">BETA</span>
             <span className="text-xs font-bold text-stone-600">Smart Services Live</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Agentic Services Hub</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Experience heritage through advanced AI. Our specialized agents help you plan, learn, and connect with Nepal's culture in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {AGENT_SERVICES.map((agent, index) => {
             const IconComponent = (LucideIcons as any)[agent.icon] || LucideIcons.Bot;
             const isLive = agent.status === 'Live';

             return (
              <motion.div 
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={isLive ? { y: -5 } : {}}
                className={`relative group bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden ${!isLive ? 'opacity-80 grayscale-[0.5]' : ''}`}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${isLive ? 'bg-green-100 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
                    {agent.status}
                  </span>
                </div>

                <div className={`h-2 bg-gradient-to-r ${agent.color === 'bg-heritage-green' ? 'from-heritage-green to-emerald-400' : agent.color === 'bg-earth-orange' ? 'from-earth-orange to-orange-400' : 'from-bamboo-yellow to-yellow-300'}`}></div>
                
                <div className="p-8">
                  <div className={`w-14 h-14 ${agent.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:rotate-6 transition-transform`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-800 mb-3 flex items-center">
                    {agent.title}
                    {isLive && <Sparkles className="w-4 h-4 text-bamboo-yellow ml-2 fill-current animate-pulse" />}
                  </h3>
                  
                  <p className="text-stone-600 mb-8 leading-relaxed h-20">
                    {agent.description}
                  </p>

                  {isLive ? (
                    <a 
                      href={agent.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-4 bg-stone-900 text-white font-bold rounded-lg hover:bg-heritage-green transition-colors group-hover:shadow-lg"
                    >
                      Open Agent <ArrowUpRight className="ml-2 w-4 h-4" />
                    </a>
                  ) : (
                    <button disabled className="w-full py-3 px-4 bg-stone-100 text-stone-400 font-bold rounded-lg cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
};
