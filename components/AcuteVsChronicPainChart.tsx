// components/AcuteVsChronicPainChart.tsx
'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, Legend, LabelList } from 'recharts';

const data = [
  { name: 'Before', Acute: 4.0, Chronic: 2.0 },
  { name: 'After', Acute: 2.0, Chronic: 1.5 },
];

// --- 1. Our new dynamic label component ---
const DynamicLineLabel = (props) => {
  // Recharts provides these props automatically
  const { x, y, stroke, value, index, viewBox, dy } = props;

  // We only want to render the label once, so we attach it to the first data point (index 0)
  if (index !== 0) {
    return null;
  }

  // Calculate the horizontal center of the chart's plotting area
  const chartCenterX = viewBox.x + viewBox.width / 2;

  return (
    <text
      x={chartCenterX} // Always place it in the horizontal middle of the chart
      y={y + dy}       // Place it at the line's starting height, plus our vertical offset
      fill={stroke}
      fontSize={16}
      fontWeight="bold"
      textAnchor="middle"
    >
      {value}
    </text>
  );
};


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
            <YAxis 
                domain={[0, 5]} 
                ticks={[0, 1, 2, 3, 4, 5]} 
                interval={0}
            >
              <Label value="Pain Score (0-5)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Tooltip />
            <Legend />

            {/* --- 2. Lines now use the dynamic label --- */}
            <Line type="monotone" dataKey="Acute" stroke="#00BFFF" strokeWidth={3} dot={{ r: 8 }}>
              <LabelList dataKey="Acute" content={<DynamicLineLabel value="Acute 50% ↓" dy={-15} />} />
            </Line>
            <Line type="monotone" dataKey="Chronic" stroke="#FFA500" strokeWidth={3} dot={{ r: 8 }}>
              <LabelList dataKey="Chronic" content={<DynamicLineLabel value="Chronic 25% ↓" dy={15} />} />
            </Line>

            {/* --- 3. The old static annotation lines have been removed --- */}

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}