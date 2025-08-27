// components/AcuteVsChronicPainChart.tsx
'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, Legend } from 'recharts';

const data = [
  { name: 'Before', Acute: 4.0, Chronic: 2.0 },
  { name: 'After', Acute: 2.0, Chronic: 1.5 },
];

export default function AcuteVsChronicPainChart() {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Pain Intensity Change</h3>
      <h4 className="text-lg font-semibold text-gray-600 text-center mb-6">Average Acute vs. Chronic Pain Intensity</h4>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 20, right: 30, left: 20, bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            {/* --- CHANGE: Added ticks and interval to show all numbers --- */}
            <YAxis 
                domain={[0, 5]} 
                ticks={[0, 1, 2, 3, 4, 5]} 
                interval={0}
            >
              <Label value="Pain Score (0-5)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Acute" stroke="#00BFFF" strokeWidth={3} dot={{ r: 8 }} />
            <Line type="monotone" dataKey="Chronic" stroke="#FFA500" strokeWidth={3} dot={{ r: 8 }} />

            {/* Annotations */}
            <Line dataKey="Acute" stroke="none" isAnimationActive={false}>
              <Label value="Acute 50% ↓" position="center" fill="#00BFFF" fontSize={16} fontWeight="bold" />
            </Line>
            <Line dataKey="Chronic" stroke="none" isAnimationActive={false}>
               <Label value="Chronic 25% ↓" position="center" fill="#FFA500" fontSize={16} fontWeight="bold" />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
