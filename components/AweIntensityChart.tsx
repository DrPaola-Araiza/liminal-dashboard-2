// components/AweIntensityChart.tsx
'use client';
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const data = [{ name: 'Awe Intensity', value: 70 }];

export default function AweIntensityChart() {
  return (
    // --- CHANGE: Wrapped in a styled card container ---
    <div className="w-full max-w-xs mx-auto text-center bg-white p-6 rounded-lg shadow">
      {/* --- CHANGE: Title moved to the top --- */}
      <h3 className="text-lg font-semibold text-gray-800">Awe Intensity</h3>
      <p className="text-sm text-gray-500 mb-4">Overall user-reported intensity</p>
      
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <RadialBarChart
            innerRadius="80%"
            outerRadius="100%"
            data={data}
            startAngle={180}
            endAngle={0}
            barSize={30}
          >
            {/* --- CHANGE: Added a gradient definition --- */}
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6D28D9" stopOpacity={1}/>
              </linearGradient>
            </defs>
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              angleAxisId={0}
              // --- CHANGE: Using the gradient fill ---
              fill="url(#colorUv)"
              cornerRadius={15}
            />
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-4xl font-bold fill-purple-900">
              {`${data[0].value}%`}
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}