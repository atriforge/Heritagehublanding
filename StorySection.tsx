import React, { useState } from 'react';
import { STORIES, HERITAGE_SITES } from './constants';
import { MapPin, User, Tag } from 'lucide-react';

export const StorySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'stories' | 'sites'>('all');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-stone-200 pb-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-stone-800">Tales & Treasures</h2>
            <p className="text-stone-500 mt-2">Discover myths, legends, and architectural marvels.</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${filter === 'all' ? 'bg-heritage-green text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
                All
            </button>
            <button 
                onClick={() => setFilter('stories')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${filter === 'stories' ? 'bg-heritage-green text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
                Stories
            </button>
            <button 
                onClick={() => setFilter('sites')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${filter === 'sites' ? 'bg-heritage-green text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
                Heritage Sites
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Render Stories */}
          {(filter === 'all' || filter === 'stories') && STORIES.map((story) => (
            <div key={story.id} className="bg-stone-50 rounded-xl overflow-hidden border border-stone-200 hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center text-xs font-bold px-2 py-1 rounded bg-bamboo-yellow/20 text-stone-800">
                            <User className="w-3 h-3 mr-1" />
                            Told by {story.narrator}
                        </span>
                        <span className="text-xs text-stone-500 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {story.location}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold font-serif text-stone-800 mb-3">{story.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-4">
                        {story.content}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {story.tags.map(tag => (
                            <span key={tag} className="flex items-center text-xs text-heritage-light-green bg-white border border-heritage-light-green px-2 py-0.5 rounded-full">
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
          ))}

          {/* Render Heritage Sites */}
          {(filter === 'all' || filter === 'sites') && HERITAGE_SITES.map((site) => (
            <div key={site.id} className="bg-stone-50 rounded-xl overflow-hidden border border-stone-200 hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                    <img src={site.imageUrl} alt={site.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                        {site.type}
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold font-serif text-stone-800 mb-2">{site.name}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        {site.description}
                    </p>
                </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
