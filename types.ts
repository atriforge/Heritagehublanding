export interface Story {
  id: string;
  title: string;
  content: string;
  narrator: 'Mincha' | 'Bhincha';
  location: string;
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
}

export interface HeritageItem {
  id: string;
  name: string;
  type: 'Temple' | 'Festival' | 'Art' | 'Cuisine';
  description: string;
  imageUrl: string;
}

export interface MemoryPair {
  id: string;
  icon: string;
  text: string;
  pairId: string; // The ID of the item it matches with
  type: 'heritage' | 'sustainability';
}

export interface MemoryCardState extends MemoryPair {
  uniqueId: string; // unique ID for the game instance
  isFlipped: boolean;
  isMatched: boolean;
}

export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED'
}