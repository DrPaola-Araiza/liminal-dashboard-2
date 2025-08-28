// components/FocusImpactChart.tsx

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
  { name: 'Before', 'Sense of Focus': -1.0 },
  { name: 'After', 'Sense of Focus': 2.0 },
];

// --- Improvement Metrics ---
const percentageChange = 42;

// Custom Tick Component for Y-Axis
const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const value = payload.value;
  let label = '';

  switch (value) {
    case 3:
      label = 'Extremely focussed';
      break;
    case 0:
      label = 'No Change';
      break;
    case -3:
      label = 'Persistently mind wandering';
      break;
    default:
      label = '';
  }

  return (
    <g transform={`translate(${x},${y})`}>
      {/* Numeric Tick Value */}
      <text x={-10} y={0} dy={5} textAnchor="end" fill="#6b7280" fontSize={12}>
        {value}
      </text>
      {/* Descriptive Label */}
      {label && (
        // FIXED: Increased spacing by changing x from -20 to -35
        <text x={-35} y={0} dy={5} textAnchor="end" fill="#6b7280" fontSize={12} className="y-axis-label">
          {label}
        </text>
      )}
    </g>
  );
};


export default function FocusImpactChart() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      {/* --- Description above the chart --- */}
      <div className="mb-6 text-gray-700">
        <p>
          This graph compares user-reported levels of focus before and after participation in the Focus Arena. An improved sense of focus is critical for tasks requiring sustained attention, cognitive clarity, and reduced distractibility.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden p-6">
        {/* --- Header Section --- */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Average Sense of Focus
          </h3>
          <p className="text-sm text-gray-500">Before vs. After 'Focus' Experiences</p>
        </div>

        {/* --- Improvement Stats --- */}
        <div className="flex justify-center items-baseline space-x-4 mb-6">
          {/* FIXED: Removed the +3.0 number as requested */}
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
                // FIXED: Increased padding to better center the graph
                padding={{ left: 60, right: 60 }}
              />
              <YAxis
                domain={[-3, 3]}
                ticks={[-3, -2, -1, 0, 1, 2, 3]}
                tick={<CustomYAxisTick />}
                width={200}
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
                dataKey="Sense of Focus"
                stroke="#14b8a6"
                strokeWidth={3}
                dot={{ r: 6, fill: '#14b8a6' }}
                activeDot={{ r: 8, fill: '#14b8a6', stroke: '#14b8a6', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}