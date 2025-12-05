import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { GameState } from '../types';
import { Trophy, RefreshCw, BrainCircuit, Gamepad2, ArrowLeft } from 'lucide-react';
import { MemoryMatch } from './MemoryMatch';
import { motion } from 'framer-motion';

export const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<'none' | 'quiz' | 'memory'>('none');
  
  // Quiz State
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // --- Quiz Logic ---
  const handleStartQuiz = () => {
    setGameState(GameState.PLAYING);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (showExplanation) return;
    setSelectedOption(optionIndex);
    setShowExplanation(true);
    if (optionIndex === QUIZ_QUESTIONS[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setGameState(GameState.FINISHED);
    }
  };

  // --- Main Render ---
  return (
    <section className="py-16 bg-stone-bg min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Game Hub Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-heritage-green flex items-center justify-center gap-2">
            <Gamepad2 className="w-8 h-8" />
            Heritage Arcade
          </h2>
          <p className="text-stone-600 mt-2">Play to learn about our culture and future.</p>
        </div>

        {/* Game Selector */}
        {selectedGame === 'none' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Quiz Card */}
                <motion.div 
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                    onClick={() => setSelectedGame('quiz')}
                    className="bg-white p-8 rounded-2xl shadow-lg cursor-pointer border-t-4 border-heritage-green group"
                >
                    <div className="w-16 h-16 bg-heritage-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-heritage-green group-hover:text-white transition-colors">
                        <BrainCircuit className="w-8 h-8 text-heritage-green group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-2">Mincha's Cultural Quiz</h3>
                    <p className="text-stone-600 mb-4">Test your knowledge on festivals, temples, and eco-practices.</p>
                    <span className="text-heritage-green font-bold text-sm flex items-center">Play Now <ArrowLeft className="w-4 h-4 ml-1 rotate-180" /></span>
                </motion.div>

                {/* Memory Card */}
                <motion.div 
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                    onClick={() => setSelectedGame('memory')}
                    className="bg-white p-8 rounded-2xl shadow-lg cursor-pointer border-t-4 border-bamboo-yellow group"
                >
                    <div className="w-16 h-16 bg-bamboo-yellow/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-bamboo-yellow group-hover:text-white transition-colors">
                        <RefreshCw className="w-8 h-8 text-bamboo-yellow group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-2">Bhincha's Memory Match</h3>
                    <p className="text-stone-600 mb-4">Find the connections between ancient wisdom and modern sustainability.</p>
                    <span className="text-bamboo-yellow font-bold text-sm flex items-center">Play Now <ArrowLeft className="w-4 h-4 ml-1 rotate-180" /></span>
                </motion.div>
            </div>
        )}

        {/* Game View */}
        {selectedGame !== 'none' && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200 min-h-[500px]"
            >
                {/* Back Button */}
                <div className="p-4 border-b border-stone-100">
                    <button 
                        onClick={() => setSelectedGame('none')}
                        className="flex items-center text-sm font-bold text-stone-500 hover:text-heritage-green"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Arcade
                    </button>
                </div>

                {/* Quiz Content */}
                {selectedGame === 'quiz' && (
                    <div className="p-4 md:p-8">
                         {gameState === GameState.START && (
                            <div className="text-center py-8">
                                <h3 className="text-2xl font-bold mb-4">Ready to test your knowledge?</h3>
                                <button onClick={handleStartQuiz} className="px-8 py-3 bg-heritage-green text-white font-bold rounded-lg hover:bg-heritage-light-green transition-colors">Start Quiz</button>
                            </div>
                         )}

                         {gameState === GameState.PLAYING && (
                            <div className="max-w-2xl mx-auto">
                                <div className="flex justify-between items-center mb-6 text-sm font-medium text-stone-500">
                                    <span>Question {currentQuestionIndex + 1}/{QUIZ_QUESTIONS.length}</span>
                                    <span>Score: {score}</span>
                                </div>
                                <h3 className="text-xl font-bold text-stone-800 mb-8">{QUIZ_QUESTIONS[currentQuestionIndex].question}</h3>
                                <div className="space-y-3">
                                    {QUIZ_QUESTIONS[currentQuestionIndex].options.map((option, idx) => {
                                        const isSelected = selectedOption === idx;
                                        const isCorrect = idx === QUIZ_QUESTIONS[currentQuestionIndex].correctAnswer;
                                        let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all ";
                                        if (showExplanation) {
                                            if (isCorrect) buttonClass += "border-heritage-green bg-green-50 text-heritage-green";
                                            else if (isSelected && !isCorrect) buttonClass += "border-red-500 bg-red-50 text-red-700";
                                            else buttonClass += "border-stone-200 opacity-50";
                                        } else {
                                            buttonClass += "border-stone-200 hover:border-heritage-light-green hover:bg-stone-50";
                                        }
                                        return <button key={idx} onClick={() => handleOptionSelect(idx)} disabled={showExplanation} className={buttonClass}>{option}</button>;
                                    })}
                                </div>
                                {showExplanation && (
                                    <div className="mt-8 bg-bamboo-yellow/20 p-4 rounded-lg border border-bamboo-yellow text-stone-800 animate-fade-in">
                                        <p className="font-bold mb-2">Did you know?</p>
                                        <p>{QUIZ_QUESTIONS[currentQuestionIndex].explanation}</p>
                                        <div className="mt-4 flex justify-end">
                                            <button onClick={handleNextQuestion} className="px-6 py-2 bg-heritage-green text-white rounded-lg hover:bg-heritage-light-green font-bold">
                                                {currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? "Finish" : "Next"}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                         )}

                         {gameState === GameState.FINISHED && (
                            <div className="text-center py-8">
                                <Trophy className="w-16 h-16 text-heritage-green mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
                                <p className="text-xl text-heritage-green font-bold mb-6">Score: {score}/{QUIZ_QUESTIONS.length}</p>
                                <button onClick={handleStartQuiz} className="px-6 py-3 bg-stone-800 text-white font-bold rounded-lg hover:bg-black transition-colors">Play Again</button>
                            </div>
                         )}
                    </div>
                )}

                {/* Memory Content */}
                {selectedGame === 'memory' && (
                    <div className="p-4 md:p-8">
                        <MemoryMatch />
                    </div>
                )}
            </motion.div>
        )}
      </div>
    </section>
  );
};