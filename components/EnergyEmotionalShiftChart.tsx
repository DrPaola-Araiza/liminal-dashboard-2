// components/EnergyEmotionalShiftChart.tsx
'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

// Data updated for the Energy category with reversed emotion order
const emotionData = [
  { name: 'Excited', before: 4.1, after: 2.7 },
  { name: 'Cheerful', before: 3.9, after: 4.4 },
  { name: 'Sad', before: 14.5, after: 4.2 },
  { name: 'Anxious', before: 5.8, after: 3.4 },
  { name: 'Irritated/Bored', before: 7.6, after: 7.0 },
  { name: 'Calm', before: 16.3, after: 30.9 },
  { name: 'Relax', before: 13.3, after: 29.5 },
];

// Custom colors for the 'after' bars to match the new order
const afterColors = [
    '#f97316', // Excited (orange)
    '#facc15', // Cheerful (yellow)
    '#ef4444', // Sad (red)
    '#ec4899', // Anxious (pink)
    '#a16207', // Irritated/Bored (brown)
    '#3b82f6', // Calm (blue)
    '#22c55e', // Relax (green)
];

export default function EnergyEmotionalShiftChart() {
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
                    margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                >
                    {/* --- FIX: Reverted to type="category" which correctly handles labels and line positions --- */}
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} type="category" />
                    <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fontSize: 14, offset: -10 }} />
                    <Tooltip />
                    
                    {/* --- FIX: Using correct numeric indices to place lines between bars --- */}
                    <ReferenceLine x={1.5} stroke="gray" strokeDasharray="3 3" ifOverflow="visible" />
                    <ReferenceLine x={4.5} stroke="gray" strokeDasharray="3 3" ifOverflow="visible" />

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