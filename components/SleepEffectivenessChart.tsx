// components/SleepEffectivenessChart.tsx

"use client";

import React, { useState } from 'react';

// --- Chart Data ---
const effectivenessScore = 3.7;
const maxScore = 5;

export default function SleepEffectivenessChart() {
  // State to manage tooltip visibility and position
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredScore, setHoveredScore] = useState(0); // NEW: State to store the score at hover position
  const [tooltipXPosition, setTooltipXPosition] = useState(0); // NEW: State for tooltip's X position

  // Calculate the width of the filled part of the bar as a percentage
  const fillPercentage = (effectivenessScore / maxScore) * 100;

  // Handle mouse movement over the bar
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    
    // Calculate the score based on the mouse's position
    let score = (x / rect.width) * maxScore;
    score = Math.max(0, Math.min(maxScore, score)); // Keep score within 0 and maxScore
    
    setHoveredScore(score);
    setTooltipXPosition(x); // Set tooltip's X position directly
    setIsHovered(true);
  };

  // Handle mouse leaving the bar
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12">
      {/* --- Overall Header and Description --- */}
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
        {/* --- Chart Title --- */}
        <h3 className="text-lg font-bold text-gray-800 text-center mb-8">
          Effectiveness of experience for falling asleep
        </h3>

        {/* --- Gradient Progress Bar with Hover --- */}
        <div 
          className="relative w-full bg-gray-200 rounded-full h-4 cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
            style={{ width: `${fillPercentage}%` }}
          ></div>
          {/* --- Tooltip on Hover --- */}
          {isHovered && (
            <div 
              className="absolute -top-10 px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg whitespace-nowrap"
              style={{ left: `${tooltipXPosition}px`, transform: 'translateX(-50%)' }}
            >
              {hoveredScore.toFixed(1)} / {maxScore} {/* NEW: Display dynamic hoveredScore */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800"></div>
            </div>
          )}
        </div>

        {/* --- Labels (Not effective, Extremely effective) --- */}
        <div className="flex justify-between text-xs text-gray-600 mt-2 mb-2">
          <span>Not effective</span>
          <span>Extremely effective</span>
        </div>

        {/* --- Numeric Scale (1-5) --- */}
        <div className="flex justify-between text-sm text-gray-500">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className="w-6 text-center">
              {num}
            </span>
          ))}
        </div>

        {/* --- Centered Score Display --- */}
        <div className="text-center text-2xl font-bold text-gray-800 mt-6">
          {effectivenessScore.toFixed(1)} / {maxScore}
        </div>
      </div>
    </div>
  );
}