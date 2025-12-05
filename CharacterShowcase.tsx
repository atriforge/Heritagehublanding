import React from 'react';
import { Heart, BookOpen, Sprout, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export const CharacterShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-stone-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-heritage-green mb-4">Meet Our Guardians</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            A beautiful union of tradition and modernity, Mincha and Bhincha guide you through the wonders of Nepal's heritage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Mincha Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-heritage-green"
          >
            <div className="h-64 overflow-hidden bg-heritage-green/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              {/* Abstract Avatar Representation */}
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-40 h-40 rounded-full bg-heritage-green flex items-center justify-center border-4 border-white shadow-xl"
              >
                <Sprout className="w-20 h-20 text-white" />
              </motion.div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-heritage-green">Mincha</h3>
                <span className="px-3 py-1 bg-heritage-green/10 text-heritage-green text-xs font-bold rounded-full uppercase">The Eco-Warrior</span>
              </div>
              <p className="text-stone-600 mb-6">
                An enthusiastic learner who married into Newari culture. Though not originally from the community, his deep love for Bhincha fuels his passion to bridge ancient myths with modern eco-friendly practices. He is the voice of sustainability.
              </p>
              <div className="flex gap-4 text-heritage-green">
                <div className="flex items-center text-sm font-bold bg-stone-100 px-3 py-1 rounded-full">
                   <Sprout className="w-4 h-4 mr-1" /> Urban Farming
                </div>
                <div className="flex items-center text-sm font-bold bg-stone-100 px-3 py-1 rounded-full">
                   <BookOpen className="w-4 h-4 mr-1" /> Cultural Learner
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bhincha Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-clay-red"
          >
            <div className="h-64 overflow-hidden bg-clay-red/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              {/* Abstract Avatar Representation */}
              <motion.div 
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="w-40 h-40 rounded-full bg-clay-red flex items-center justify-center border-4 border-white shadow-xl"
              >
                <Music className="w-20 h-20 text-white" />
              </motion.div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-clay-red">Bhincha</h3>
                <span className="px-3 py-1 bg-clay-red/10 text-clay-red text-xs font-bold rounded-full uppercase">Cultural Guardian</span>
              </div>
              <p className="text-stone-600 mb-6">
                Dressed in her traditional black Haku Patasi with red borders, Bhincha is the keeper of stories. She lovingly guides Mincha and visitors through rituals, sharing the wisdom of her ancestors with grace and authenticity.
              </p>
              <div className="flex gap-4 text-clay-red">
                <div className="flex items-center text-sm font-bold bg-stone-100 px-3 py-1 rounded-full">
                   <Heart className="w-4 h-4 mr-1" /> Storyteller
                </div>
                <div className="flex items-center text-sm font-bold bg-stone-100 px-3 py-1 rounded-full">
                   <Music className="w-4 h-4 mr-1" /> Tradition
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};