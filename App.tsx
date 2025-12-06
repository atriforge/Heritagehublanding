import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { Hero } from './components/Hero';
import { AgenticHub } from './components/AgenticHub';
import { CharacterShowcase } from './components/CharacterShowcase';
import { Services } from './components/Services';
import { Games } from './components/Games';
import { StorySection } from './components/StorySection';
import { Leaf, Mail, Instagram, Facebook } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Simple scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero onExplore={() => setActiveTab('stories')} />
            {/* New Agentic Hub Section placed prominently */}
            <AgenticHub />
            <CharacterShowcase />
            <Services />
          </>
        )}
        
        {activeTab === 'characters' && <CharacterShowcase />}
        
        {activeTab === 'services' && <Services />}
        
        {activeTab === 'games' && <Games />}
        
        {activeTab === 'stories' && <StorySection />}
      </main>

      <footer className="bg-heritage-green text-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-bamboo-yellow" />
                <span className="font-serif font-bold text-xl text-bamboo-yellow">HERITAGE HUB NEPAL</span>
              </div>
              <p className="text-stone-300 text-sm max-w-sm mb-6">
                Preserving the past, protecting the future. Your gateway to Nepal's living heritage through digital innovation and community action.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-stone-300">
                <li className="hover:text-bamboo-yellow cursor-pointer"><a href="https://planner.heritagehubnepal.com/" target="_blank">AI Planner</a></li>
                <li className="hover:text-bamboo-yellow cursor-pointer" onClick={() => setActiveTab('stories')}>Stories</li>
                <li className="hover:text-bamboo-yellow cursor-pointer" onClick={() => setActiveTab('games')}>Games</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-stone-300">
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@heritagehub.np</li>
                <li className="flex items-center"><Instagram className="w-4 h-4 mr-2" /> @heritagehubnepal</li>
                <li className="flex items-center"><Facebook className="w-4 h-4 mr-2" /> /heritagehubnepal</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-heritage-light-green/30 mt-12 pt-8 text-center text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Heritage Hub Nepal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
