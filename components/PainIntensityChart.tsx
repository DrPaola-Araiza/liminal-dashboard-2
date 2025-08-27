// components/PainIntensityChart.tsx
'use client';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, LabelList } from 'recharts';

const data = [
  { name: 'Before', 'Pain Score': 4.0 },
  { name: 'After', 'Pain Score': 1.0 },
];

export default function PainIntensityChart() {
  return (
    // --- CHANGE: Switched to a light-themed card ---
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Pain Intensity Change</h3>
      <h4 className="text-lg font-semibold text-gray-600 text-center mb-6">Average Overall Pain Intensity</h4>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 20, right: 30, left: 20, bottom: 20,
            }}
          >
            {/* --- CHANGE: Added a gradient definition for the area fill --- */}
            <defs>
              <linearGradient id="painGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 5]}>
              <Label value="Pain Score (0-5)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Tooltip />
            <Area type="monotone" dataKey="Pain Score" stroke="#2e7d32" strokeWidth={3} fillOpacity={1} fill="url(#painGradient)">
                {/* --- CHANGE: Using LabelList for precise positioning --- */}
                <LabelList
                    dataKey="Pain Score"
                    position="inside"
                    content={({ viewBox }: any) => {
                        if (viewBox && viewBox.points) {
                            const { points } = viewBox;
                            const midX = (points[0].x + points[1].x) / 2;
                            const midY = (points[0].y + points[1].y) / 2;
                            return (
                                <text x={midX} y={midY} dy={-10} fill="#2e7d32" fontSize={20} fontWeight="bold" textAnchor="middle">
                                    75% ↓
                                </text>
                            );
                        }
                        return null;
                    }}
                />
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
