// components/CalmEmotionalShiftChart.tsx
'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

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

// Custom colors for the 'after' bars
const afterColors = [
    '#3b82f6', '#22c55e', '#ef4444', '#ec4899', '#a16207', '#f97316', '#facc15',
];

// NEW: Simplified component for the vertical divider lines using flexbox
const ChartDividers = () => (
    <div className="absolute top-0 left-0 w-full h-full flex pointer-events-none px-[20px] box-border">
        {/* Empty space for the Y-axis label */}
        <div className="w-[40px] flex-shrink-0" />
        
        {/* This container will hold our sections and dividers */}
        <div className="flex-1 flex">
            {/* Section 1: Positive Emotions (2 items) */}
            <div className="w-[28.57%]" /> 
            <div className="w-px h-[calc(100%-20px)] border-r border-dashed border-gray-400" />
            
            {/* Section 2: Negative Emotions (3 items) */}
            <div className="w-[42.85%]" />
            <div className="w-px h-[calc(100%-20px)] border-r border-dashed border-gray-400" />
            
            {/* Section 3: Other Emotions (2 items) */}
            <div className="flex-1" />
        </div>
    </div>
);


export default function CalmEmotionalShiftChart() {
  return (
    <div className="w-full">
        {/* Section Titles */}
        <div className="flex justify-around mb-2 text-center">
            <div className="w-1/3"><h4 className="font-semibold text-gray-700">Positive Emotions</h4><p className="text-sm text-green-600 font-medium">↑ Emotions expected to increase</p></div>
            <div className="w-1/3"><h4 className="font-semibold text-gray-700">Negative Emotions</h4><p className="text-sm text-red-600 font-medium">↓ Emotions expected to decrease</p></div>
            <div className="w-1/3"><h4 className="font-semibold text-gray-700">Other Emotional Shifts</h4></div>
        </div>

        {/* Chart Container - now relative for positioning the dividers */}
        <div className="relative" style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
                <BarChart data={emotionData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fontSize: 14, offset: -10 }} />
                    <Tooltip />
                    
                    <Bar dataKey="before" fill="#d1d5db" name="Before" />
                    <Bar dataKey="after" name="After">
                        {emotionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={afterColors[index % afterColors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            {/* The custom dividers overlay */}
            <ChartDividers />
        </div>
    </div>
  );
}