// components/EmotionalShiftChart.tsx
'use client';
import React from 'react';
// Note: You may need to install recharts: npm install recharts
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

// Data based on the image provided
const emotionData = [
  { name: 'Calm', before: 16.3, after: 30.9 },
  { name: 'Relax', before: 13.3, after: 29.5 },
  { name: 'Sad', before: 14.5, after: 4.2 },
  { name: 'Anxious', before: 5.8, after: 3.4 },
  { name: 'Irritated/Bored', before: 7.6, after: 7.0 },
  { name: 'Excited', before: 4.1, after: 2.7 },
  { name: 'Cheerful', before: 3.9, after: 4.4 },
];

// Custom colors for the 'after' bars to match the design
const afterColors = [
    '#3b82f6', // Calm (blue)
    '#22c55e', // Relax (green)
    '#ef4444', // Sad (red)
    '#ec4899', // Anxious (pink)
    '#a16207', // Irritated/Bored (brown)
    '#f97316', // Excited (orange)
    '#facc15', // Cheerful (yellow)
];

export default function EmotionalShiftChart() {
  return (
    <div className="w-full">
        {/* Section Titles */}
        <div className="flex justify-around mb-2 text-center">
            <div className="w-1/3">
                <h4 className="font-semibold text-gray-700">Positive Emotions</h4>
                <p className="text-sm text-green-600 font-medium">↑ Emotions expected to increase</p>
            </div>
            <div className="w-1/3">
                <h4 className="font-semibold text-gray-700">Negative Emotions</h4>
                <p className="text-sm text-red-600 font-medium">↓ Emotions expected to decrease</p>
            </div>
            <div className="w-1/3">
                <h4 className="font-semibold text-gray-700">Other Emotional Shifts</h4>
            </div>
        </div>

        {/* Chart Container */}
        <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
                <BarChart
                    data={emotionData}
                    // --- CHANGE 1: Increased left margin to show Y-axis label ---
                    margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fontSize: 14, offset: -10 }} />
                    <Tooltip />
                    
                    {/* --- CHANGE 2: Added vertical divider lines --- */}
                    <ReferenceLine x="Sad" stroke="gray" strokeDasharray="3 3" />
                    <ReferenceLine x="Excited" stroke="gray" strokeDasharray="3 3" />

                    <Bar dataKey="before" fill="#d1d5db" name="Before" />
                    <Bar dataKey="after" name="After">
                        {emotionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={afterColors[index % afterColors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
}
