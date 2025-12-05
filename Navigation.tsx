import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'characters', label: 'Characters' },
    { id: 'services', label: 'Services' },
    { id: 'stories', label: 'Stories & Heritage' },
    { id: 'games', label: 'Games' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-heritage-green text-stone-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <Leaf className="h-8 w-8 text-bamboo-yellow" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wider text-bamboo-yellow">HERITAGE HUB</span>
              <span className="text-xs uppercase tracking-widest text-stone-300">Nepal</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-bamboo-yellow text-heritage-green font-bold'
                      : 'hover:bg-heritage-light-green hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-100 hover:text-white hover:bg-heritage-light-green focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-heritage-green pb-4 border-t border-heritage-light-green">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                   activeTab === item.id
                      ? 'bg-bamboo-yellow text-heritage-green'
                      : 'text-stone-100 hover:bg-heritage-light-green'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};