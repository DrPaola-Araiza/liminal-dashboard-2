// components/SleepEffectivenessChart.tsx

"use client";

import React, { useState } from 'react';

// --- Chart Data ---
const effectivenessScore = 3.7;
const maxScore = 5;

export default function SleepEffectivenessChart() {
  // State to manage tooltip visibility and position
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredScore, setHoveredScore] = useState(0);
  const [tooltipXPosition, setTooltipXPosition] = useState(0);

  // Calculate the width of the filled part of the bar as a percentage
  const fillPercentage = ((effectivenessScore - 1) / (maxScore - 1)) * 100;

  // Handle mouse movement over the bar
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    
    // FIXED: Adjusted formula to calculate score from 1 to 5
    let score = 1 + (x / rect.width) * (maxScore - 1);
    score = Math.max(1, Math.min(maxScore, score)); // Keep score within 1 and maxScore
    
    setHoveredScore(score);
    setTooltipXPosition(x);
    setIsHovered(true);
  };

  // Handle mouse leaving the bar
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        To what extent did the sleep experience help you fall asleep?
      </h2>
      <div className="mb-6 text-gray-700">
        <p>
          This graph captures user perceptions of how much the experiences in the sleep
          arena contributed to their ability to fall asleep. It provides insights into the
          experiences' impact and user satisfaction.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 text-center mb-8">
          Effectiveness of experience for falling asleep
        </h3>

        <div 
          className="relative w-full bg-gray-200 rounded-full h-4 cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
            style={{ width: `${fillPercentage}%` }}
          ></div>
          {isHovered && (
            <div 
              className="absolute -top-10 px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg whitespace-nowrap"
              style={{ left: `${tooltipXPosition}px`, transform: 'translateX(-50%)' }}
            >
              {hoveredScore.toFixed(1)} / {maxScore}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800"></div>
            </div>
          )}
        </div>

        <div className="flex justify-between text-xs text-gray-600 mt-2 mb-2">
          <span>Not effective</span>
          <span>Extremely effective</span>
        </div>

        <div className="relative h-4">
          <span className="absolute text-sm text-gray-500" style={{ left: '0%', transform: 'translateX(-50%)' }}>1</span>
          <span className="absolute text-sm text-gray-500" style={{ left: '25%', transform: 'translateX(-50%)' }}>2</span>
          <span className="absolute text-sm text-gray-500" style={{ left: '50%', transform: 'translateX(-50%)' }}>3</span>
          <span className="absolute text-sm text-gray-500" style={{ left: '75%', transform: 'translateX(-50%)' }}>4</span>
          <span className="absolute text-sm text-gray-500" style={{ left: '100%', transform: 'translateX(-50%)' }}>5</span>
        </div>

        <div className="text-center text-2xl font-bold text-gray-800 mt-6">
          {effectivenessScore.toFixed(1)} / {maxScore}
        </div>
      </div>
    </div>
  );
}