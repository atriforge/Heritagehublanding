import { Story, QuizQuestion, ServiceItem, HeritageItem, MemoryPair } from './types';

export const AGENT_SERVICES = [
  {
    id: 'planner',
    title: 'AI Heritage Planner',
    description: 'Your personal AI travel companion. Plan personalized cultural itineraries for Hadigaun, Patan, and beyond based on your interests and time.',
    url: 'https://planner.heritagehubnepal.com/',
    icon: 'Map',
    status: 'Live',
    color: 'bg-heritage-green'
  },
  {
    id: 'storyteller',
    title: 'Interactive Folklore Agent',
    description: 'Chat with Mincha & Bhincha directly. Ask questions about myths, rituals, and history in real-time.',
    url: '#',
    icon: 'MessageCircle',
    status: 'Coming Soon',
    color: 'bg-earth-orange'
  },
  {
    id: 'market',
    title: 'Smart Market Connector',
    description: 'Real-time connections with local farmers and artisans for zero-waste products and organic produce.',
    url: '#',
    icon: 'ShoppingBag',
    status: 'Coming Soon',
    color: 'bg-bamboo-yellow'
  }
];

export const STORIES: Story[] = [
  {
    id: '1',
    title: 'The Cursed Princess of Bisket Jatra',
    content: 'Long ago, a princess of Bhaktapur was cursed to have any husband die on their wedding night. A brave prince, blessed by the goddess, stayed awake and saw two serpent threads emerge from her nostrils. He cut them, breaking the curse. This victory is celebrated as Bisket Jatra, symbolizing the death of serpents and the start of the new year.',
    narrator: 'Bhincha',
    location: 'Bhaktapur',
    tags: ['Myth', 'Festival', 'Courage']
  },
  {
    id: '2',
    title: 'The Formation of Phewa Lake',
    content: 'Legend says the valley of Pokhara was once dry. A deity disguised as a beggar asked for water, but only one old woman offered her pot. Pleased, the deity flooded the valley to form the lake, sparing the woman’s house, which became the island temple of Tal Barahi.',
    narrator: 'Bhincha',
    location: 'Pokhara',
    tags: ['Water', 'Kindness', 'Nature']
  },
  {
    id: '3',
    title: 'Zero-Waste Wisdom of the Ancients',
    content: 'Did you know that traditional Newari architecture used every part of the materials available? Just like how Mincha composts organic waste for our roof garden, our ancestors used rice husks in mud mortar to strengthen walls! Sustainability isn\'t new; it is our heritage.',
    narrator: 'Mincha',
    location: 'Hadigaun',
    tags: ['Sustainability', 'Architecture', 'Eco-friendly']
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Which festival celebrates the victory over the serpent demons in Bhaktapur?",
    options: ["Indra Jatra", "Bisket Jatra", "Dashain", "Tihar"],
    correctAnswer: 1,
    explanation: "Bisket Jatra marks the Nepali New Year and the legend of the cursed princess and the serpents."
  },
  {
    id: 2,
    question: "What is the traditional attire 'Haku Patasi' made of?",
    options: ["Black sari with red border", "Red silk robe", "White cotton dress", "Yellow wool coat"],
    correctAnswer: 0,
    explanation: "Bhincha wears Haku Patasi, a black sari with distinct red borders, handwoven traditionally."
  },
  {
    id: 3,
    question: "Which eco-friendly practice is Mincha most passionate about in the city?",
    options: ["Building concrete roads", "Urban Farming & Zero Waste", "Importing plastic", "Cutting down trees"],
    correctAnswer: 1,
    explanation: "Mincha advocates for urban farming (rooftop gardens) and zero-waste management in heritage sites."
  }
];

export const MEMORY_PAIRS: MemoryPair[] = [
  { id: 'm1', icon: '🌾', text: 'Rice Husks', pairId: 's1', type: 'heritage' },
  { id: 's1', icon: '🧱', text: 'Mud Mortar', pairId: 'm1', type: 'sustainability' },
  
  { id: 'm2', icon: '🌧️', text: 'Monsoon Rain', pairId: 's2', type: 'heritage' },
  { id: 's2', icon: '💧', text: 'Water Harvest', pairId: 'm2', type: 'sustainability' },
  
  { id: 'm3', icon: '🥬', text: 'Kitchen Scraps', pairId: 's3', type: 'heritage' },
  { id: 's3', icon: '🌱', text: 'Compost', pairId: 'm3', type: 'sustainability' },
  
  { id: 'm4', icon: '🎋', text: 'Bamboo', pairId: 's4', type: 'heritage' },
  { id: 's4', icon: '🛍️', text: 'Eco Crafts', pairId: 'm4', type: 'sustainability' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'market',
    title: 'Farmers Market Stalls',
    description: 'Fresh organic produce from local farmers. Vendor spaces available for NPR 500-1,000/day.',
    iconName: 'Store',
    color: 'bg-heritage-green'
  },
  {
    id: 'products',
    title: 'Eco-Products & Merch',
    description: 'Bamboo crafts, microgreens kits, and exclusive Mincha & Bhincha merchandise.',
    iconName: 'ShoppingBag',
    color: 'bg-bamboo-yellow'
  },
  {
    id: 'workshops',
    title: 'Training & Workshops',
    description: 'Learn urban farming, traditional pottery, and zero-waste living practices.',
    iconName: 'Sprout',
    color: 'bg-earth-orange'
  },
  {
    id: 'events',
    title: 'Event Hosting',
    description: 'Beautiful heritage venues for weddings, corporate retreats, and cultural festivals.',
    iconName: 'Calendar',
    color: 'bg-clay-red'
  },
  {
    id: 'cafe',
    title: 'Heritage Refreshments',
    description: 'Traditional Newari drinks like Aila (responsibly) and eco-friendly snacks.',
    iconName: 'Coffee',
    color: 'bg-stone-500'
  }
];

export const HERITAGE_SITES: HeritageItem[] = [
  {
    id: 'h1',
    name: 'Nyatapola Temple',
    type: 'Temple',
    description: 'The five-story pagoda of Bhaktapur, dedicated to Siddhi Lakshmi.',
    imageUrl: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: 'h2',
    name: 'Changu Narayan',
    type: 'Temple',
    description: 'The oldest Hindu temple in Nepal, showcasing Licchavi era craftsmanship.',
    imageUrl: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 'h3',
    name: 'Ranjana Script',
    type: 'Art',
    description: 'An ancient calligraphic script used by the Newar people for writing Sanskrit and Nepal Bhasa.',
    imageUrl: 'https://picsum.photos/400/300?random=3'
  }
];