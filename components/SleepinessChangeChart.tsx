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
const chartData = [
  { name: 'Before', 'Alertness Level': 4 },
  { name: 'After', 'Alertness Level': 2 },
];

// --- Change Metric ---
const changeValue = -2.0;

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


export default function SleepinessChangeChart() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <div className="mb-6 text-gray-700">
        <p>
          The following graph illustrates how users' alertness levels transition from feeling awake to feeling sleepy after engaging with a Sleep Arena experience. It highlights the experiences’ ability to prepare users for rest and relaxation.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Average Change in Sleepiness from pre to post experience
          </h3>
        </div>

        {/* --- FIXED: Swapped the order of the word and the number --- */}
        <div className="flex justify-center items-baseline mb-6 space-x-2">
          <p className="text-1.9xl font-semibold text-gray-600">
            Change
          </p>
          <p className="text-1.9 xl font-bold text-red-500">
            {changeValue.toFixed(1)}
          </p>
        </div>

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
                domain={[1, 5]}
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
                stroke="#6a1b9a"
                strokeWidth={3}
                dot={({ cx, cy, stroke, key, index }) => {
                  if (index === 0) {
                    return <circle key={key} cx={cx} cy={cy} r={6} fill="#8e24aa" stroke="#8e24aa" strokeWidth={2} />;
                  }
                  return <circle key={key} cx={cx} cy={cy} r={6} fill="#00BFFF" stroke="#00BFFF" strokeWidth={2} />;
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