import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="relative bg-stone-900 overflow-hidden h-[90vh] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Ancient Nepal Architecture" 
          className="w-full h-full object-cover scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 rounded-full border border-bamboo-yellow text-bamboo-yellow text-sm font-medium mb-8 bg-black/40 backdrop-blur-md"
        >
          <MapPin className="w-4 h-4 mr-2" />
          Expanding: Hadigaun → Patan → Bhaktapur → Pokhara → Lumbini
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight"
        >
          The Gateway to Nepal's <br/>
          <span className="text-bamboo-yellow inline-block">Living Heritage</span> & <br/>
          <span className="text-heritage-light-green inline-block">AI Exploration</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-stone-200 mb-10 leading-relaxed drop-shadow-md"
        >
          Your central hub for cultural preservation. Connect with AI agents to plan your visit, learn from Mincha & Bhincha, and support sustainable local communities.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Primary External Action: AI Planner */}
          <motion.a 
            href="https://planner.heritagehubnepal.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-heritage-light-green text-white font-bold rounded-lg hover:bg-heritage-green transition-colors shadow-xl flex items-center justify-center border border-white/20 backdrop-blur-sm"
          >
            <Sparkles className="mr-2 w-5 h-5" />
            Launch AI Planner
          </motion.a>

          {/* Secondary Internal Action */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExplore}
            className="px-8 py-4 bg-bamboo-yellow text-heritage-green font-bold rounded-lg hover:bg-white transition-colors shadow-xl flex items-center justify-center"
          >
            Explore The Hub
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 60C1440 60 1120 0 720 0C320 0 0 60 0 60L0 120Z" fill="#F4F1DE"/>
        </svg>
      </div>
    </div>
  );
};