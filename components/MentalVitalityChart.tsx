// components/MentalVitalityChart.tsx

"use client";

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// --- Chart Data ---
const chartData = [
  { name: 'Before', 'Mental Vitality': -2.0 },
  { name: 'After', 'Mental Vitality': 2.0 },
];

// --- Improvement Metrics ---
const percentageChange = 67; // As per your image

// Custom Tick Component for Y-Axis
const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const value = payload.value;
  let label = '';

  switch (value) {
    case 3:
      label = 'Mentally fresh';
      break;
    case 0:
      label = 'No Change';
      break;
    case -3:
      label = 'Mentally fatigued';
      break;
    default:
      label = '';
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-10} y={0} dy={5} textAnchor="end" fill="#6b7280" fontSize={12}>
        {value}
      </text>
      {label && (
        <text x={-35} y={0} dy={5} textAnchor="end" fill="#6b7280" fontSize={12} className="y-axis-label">
          {label}
        </text>
      )}
    </g>
  );
};


export default function MentalVitalityChart() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      {/* --- Description above the chart --- */}
      <div className="mb-6 text-gray-700">
        <p>
          The mental vitality graph reflects user perceptions of cognitive energy and alertness. Increased mental vitality supports better problem-solving, productivity, and overall mental performance.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden p-6">
        {/* --- Header Section --- */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Average Mental Vitality
          </h3>
          <p className="text-sm text-gray-500">Before vs. After 'Focus' Experiences</p>
        </div>

        {/* --- Improvement Stats --- */}
        <div className="flex justify-center items-baseline space-x-4 mb-6">
          {/* The +4.0 line has been removed from here */}
          <p className="text-3xl font-bold text-green-500">
            {percentageChange}% ↑
          </p>
        </div>

        {/* --- Chart --- */}
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 150, left: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: '#6b7280' }}
                axisLine={{ stroke: '#d1d5db' }}
                tickLine={{ stroke: '#d1d5db' }}
                padding={{ left: 60, right: 60 }}
              />
              <YAxis
                domain={[-3, 3]}
                ticks={[-3, -2, -1, 0, 1, 2, 3]}
                tick={<CustomYAxisTick />}
                width={170}
                axisLine={{ stroke: '#d1d5db' }}
                tickLine={{ stroke: '#d1d5db' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '0.5rem',
                }}
              />
              <Line
                type="monotone"
                dataKey="Mental Vitality"
                stroke="#00BFFF" // A bright blue color
                strokeWidth={3}
                dot={{ r: 6, fill: '#00BFFF' }}
                activeDot={{ r: 8, fill: '#00BFFF', stroke: '#00BFFF', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}