// components/AweIntensityChart.tsx
'use client';
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const data = [{ name: 'Awe Intensity', value: 70 }];

export default function AweIntensityChart() {
  return (
    <div className="w-full max-w-xs mx-auto text-center">
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
              fill="#6b21a8" // Purple color
              cornerRadius={10}
            />
            {/* Custom label for the percentage */}
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-purple-800">
              {`${data[0].value}%`}
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mt-2">Awe intensity</h3>
    </div>
  );
}
