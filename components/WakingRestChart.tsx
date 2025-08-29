// components/WakingRestChart.tsx

"use client";

import React, { useState } from 'react';

// --- Chart Data ---
const wakingRestScore = 3.7; // Updated score
const maxScore = 5;

export default function WakingRestChart() {
  // State to manage tooltip visibility and position
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredScore, setHoveredScore] = useState(0);
  const [tooltipXPosition, setTooltipXPosition] = useState(0);

  // Calculate the width of the filled part of the bar as a percentage
  const fillPercentage = ((wakingRestScore - 1) / (maxScore - 1)) * 100;

  // Handle mouse movement over the bar
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    
    // Calculate score from 1 to 5 based on mouse position
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
      {/* --- Overall Header and Description --- */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        How rested did you feel when you woke up after using the Sleep experience?
      </h2>
      <div className="mb-6 text-gray-700">
        <p>
          This graph reports how refreshed and rested users felt upon waking after
          engaging with a Sleep Arena experience. It measures the overall quality of rest
          achieved.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {/* --- Chart Title --- */}
        <h3 className="text-lg font-bold text-gray-800 text-center mb-8">
          How rested did you feel when you woke up after using the Sleep experience?
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
              {hoveredScore.toFixed(1)} / {maxScore}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800"></div>
            </div>
          )}
        </div>

        {/* --- Labels (Fatigued, Rested) --- */}
        <div className="flex justify-between text-xs text-gray-600 mt-2 mb-2">
          <span>Fatigued</span>
          <span>Rested</span>
        </div>

        {/* --- Numeric Scale (1-5) --- */}
        <div className="relative h-4">
          <span className="absolute text-sm text-gray-500" style={{ left: '0%', transform: 'translateX(-50%)' }}>1</span>
          <span className="absolute text-sm text-gray-500" style={{ left: '25%', transform: 'translateX(-50%)' }}>2</span>
          <span className="absolute text-sm text-gray-500" style={{ left: '50%', transform: 'translateX(-50%)' }}>3</span>
          <span className="absolute text-sm text-gray-500" style={{ left: '75%', transform: 'translateX(-50%)' }}>4</span>
          <span className="absolute text-sm text-gray-500" style={{ left: '100%', transform: 'translateX(-50%)' }}>5</span>
        </div>

        {/* --- Centered Score Display --- */}
        <div className="text-center text-2xl font-bold text-gray-800 mt-6">
          {wakingRestScore.toFixed(1)} / {maxScore}
        </div>
      </div>
    </div>
  );
}