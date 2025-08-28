// components/SleepinessChangeChart.tsx

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
// Based on your image: Before is at 4, After is at 2
const chartData = [
  { name: 'Before', 'Alertness Level': 4 },
  { name: 'After', 'Alertness Level': 2 },
];

// --- Change Metric ---
const changeValue = -2.0; // As per your image

// Custom Tick Component for Y-Axis
const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const value = payload.value;
  let label = '';

  switch (value) {
    case 5:
      label = 'Awake';
      break;
    case 1:
      label = 'Sleepy';
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
        <text x={-35} y={0} dy={5} textAnchor="end" fill="#6b7280" fontSize={12} className="y-axis-label">
          {label}
        </text>
      )}
    </g>
  );
};


export default function SleepinessChangeChart() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      {/* --- Description above the chart --- */}
      <div className="mb-6 text-gray-700">
        <p>
          The following graph illustrates how users' alertness levels transition from feeling awake to feeling sleepy after engaging with a Sleep Arena experience. It highlights the experiences’ ability to prepare users for rest and relaxation.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden p-6">
        {/* --- Header Section --- */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Average Change in Sleepiness from pre to post experience
          </h3>
        </div>

        {/* --- Change Value (positioned near the line as in your image) --- */}
        {/* This will be positioned using a custom element or by adjusting margins if needed */}
        {/* For now, we'll display it below the title, similar to percentage change in other charts */}
        <div className="flex justify-center items-baseline mb-6">
          <p className="text-2xl font-bold text-red-500">
            {changeValue.toFixed(1)}
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
                domain={[1, 5]} // Y-axis from 1 to 5
                ticks={[1, 2, 3, 4, 5]}
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
                dataKey="Alertness Level"
                stroke="#6a1b9a" // A deep purple for the line
                strokeWidth={3}
                // Custom dots for Before (purple) and After (light blue)
                dot={({ cx, cy, stroke, key, index }) => {
                  if (index === 0) {
                    return <circle key={key} cx={cx} cy={cy} r={6} fill="#8e24aa" stroke="#8e24aa" strokeWidth={2} />; // Before dot (purple)
                  }
                  return <circle key={key} cx={cx} cy={cy} r={6} fill="#00BFFF" stroke="#00BFFF" strokeWidth={2} />; // After dot (light blue)
                }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}