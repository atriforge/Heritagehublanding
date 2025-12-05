import React, { useState, useEffect } from 'react';
import { MEMORY_PAIRS } from '../constants';
import { MemoryCardState, GameState } from '../types';
import { motion } from 'framer-motion';
import { Trophy, RefreshCw, Zap } from 'lucide-react';

export const MemoryMatch: React.FC = () => {
  const [cards, setCards] = useState<MemoryCardState[]>([]);
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const initializeGame = () => {
    // Duplicate pairs to create matching sets (item A and item B)
    // Actually, our data is already pairs (A matches B).
    // We need to put both A and B into the grid.
    // MEMORY_PAIRS has unique IDs for each item, and a pairId pointing to the other.
    
    // Let's take the first 6 pairs (12 cards) for a good grid size
    const selectedPairs = MEMORY_PAIRS.slice(0, 6);
    
    // For each pair, we need to create two card objects if they weren't already separated in constants
    // In constants, I defined them as individual items that link to each other. 
    // So we just need to shuffle them.
    
    const shuffledCards = [...selectedPairs]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({
        ...item,
        uniqueId: Math.random().toString(36).substr(2, 9),
        isFlipped: false,
        isMatched: false,
      }));

    setCards(shuffledCards);
    setGameState(GameState.PLAYING);
    setFlippedIndices([]);
    setMoves(0);
  };

  const handleCardClick = (index: number) => {
    // Prevent clicking if already 2 flipped, or card is already matched/flipped
    if (
      flippedIndices.length >= 2 ||
      cards[index].isFlipped ||
      cards[index].isMatched
    ) {
      return;
    }

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    
    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      setMoves((prev) => prev + 1);
      checkForMatch(newFlippedIndices, newCards);
    }
  };

  const checkForMatch = (indices: number[], currentCards: MemoryCardState[]) => {
    const [index1, index2] = indices;
    const card1 = currentCards[index1];
    const card2 = currentCards[index2];

    if (card1.pairId === card2.id) {
      // Match found
      setTimeout(() => {
        const matchedCards = [...currentCards];
        matchedCards[index1].isMatched = true;
        matchedCards[index2].isMatched = true;
        setCards(matchedCards);
        setFlippedIndices([]);

        // Check win condition
        if (matchedCards.every((c) => c.isMatched)) {
          setGameState(GameState.FINISHED);
        }
      }, 500);
    } else {
      // No match
      setTimeout(() => {
        const resetCards = [...currentCards];
        resetCards[index1].isFlipped = false;
        resetCards[index2].isFlipped = false;
        setCards(resetCards);
        setFlippedIndices([]);
      }, 1000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {gameState === GameState.START && (
        <div className="text-center py-12">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-heritage-light-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <Zap className="w-12 h-12 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 text-stone-800">Bhincha's Memory Match</h3>
          <p className="text-stone-600 mb-8 max-w-md mx-auto">
            Match traditional heritage items with their sustainable counterparts. Can you find all the connections?
          </p>
          <button
            onClick={initializeGame}
            className="px-8 py-3 bg-heritage-green text-white font-bold rounded-lg hover:bg-heritage-light-green transition-colors shadow-md"
          >
            Start Game
          </button>
        </div>
      )}

      {gameState === GameState.PLAYING && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-stone-600 font-bold">Moves: {moves}</span>
            <button 
              onClick={initializeGame}
              className="text-sm text-stone-500 hover:text-heritage-green flex items-center"
            >
              <RefreshCw className="w-4 h-4 mr-1" /> Restart
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.uniqueId}
                layoutId={card.uniqueId}
                onClick={() => handleCardClick(index)}
                className="aspect-square cursor-pointer perspective-1000"
              >
                <motion.div
                  className="w-full h-full relative"
                  initial={false}
                  animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front (Hidden) */}
                  <div className="absolute inset-0 bg-heritage-green rounded-xl shadow-md border-2 border-stone-100 flex items-center justify-center backface-hidden">
                    <span className="text-2xl opacity-20 text-white">?</span>
                  </div>

                  {/* Back (Revealed) */}
                  <div 
                    className={`absolute inset-0 rounded-xl shadow-md border-2 flex flex-col items-center justify-center p-2 backface-hidden rotate-y-180 ${
                      card.isMatched 
                        ? 'bg-bamboo-yellow/20 border-bamboo-yellow' 
                        : 'bg-white border-heritage-green'
                    }`}
                  >
                    <span className="text-4xl mb-2">{card.icon}</span>
                    <span className="text-xs text-center font-bold text-stone-700 leading-tight">{card.text}</span>
                    <span className={`text-[10px] mt-1 px-2 py-0.5 rounded-full uppercase font-bold ${
                        card.type === 'heritage' ? 'bg-clay-red/10 text-clay-red' : 'bg-heritage-green/10 text-heritage-green'
                    }`}>
                        {card.type}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {gameState === GameState.FINISHED && (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 bg-white rounded-2xl shadow-xl border border-stone-200"
        >
          <div className="w-24 h-24 bg-bamboo-yellow rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-heritage-green" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Wonderful!</h3>
          <p className="text-stone-600 mb-6">You connected all the heritage and sustainability pairs in {moves} moves.</p>
          <button
            onClick={initializeGame}
            className="px-8 py-3 bg-heritage-green text-white font-bold rounded-lg hover:bg-heritage-light-green transition-colors"
          >
            Play Again
          </button>
        </motion.div>
      )}
    </div>
  );
};