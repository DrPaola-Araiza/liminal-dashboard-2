// components/AweMetricsChart.tsx
'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

// Data for the four metrics
const metricsData = [
  {
    label: 'Experience something greater than me',
    description: 'Users feeling a sense of grandeur',
    value: 66,
    fill: '#a78bfa', // Light Purple
  },
  {
    label: 'Feeling goosebumps',
    description: 'Users experiencing physical thrill',
    value: 59,
    fill: '#7dd3fc', // Light Blue
  },
  {
    label: 'Sense of being there',
    description: 'Users feeling presence in the moment',
    value: 67,
    fill: '#6ee7b7', // Light Teal
  },
  {
    label: 'Time slowing',
    description: 'Users perceiving altered passage of time',
    value: 61,
    fill: '#d9f99d', // Light Lime
  },
];

// Custom tick component to handle multi-line labels
const CustomizedYAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const data = metricsData.find(d => d.label === payload.value);
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={0} textAnchor="end" fill="#666" fontSize={14} fontWeight="bold">
                {data?.label}
            </text>
            <text x={0} y={20} dy={0} textAnchor="end" fill="#999" fontSize={12}>
                {data?.description}
            </text>
        </g>
    );
};

export default function AweMetricsChart() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Awe Metrics in User Experiences</h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            data={metricsData}
            margin={{
              top: 5,
              right: 30,
              left: 150, // Increased left margin for long labels
              bottom: 5,
            }}
          >
            <XAxis type="number" domain={[0, 100]} />
            <YAxis 
                dataKey="label" 
                type="category" 
                width={150} 
                tickLine={false} 
                axisLine={false}
                tick={<CustomizedYAxisTick />}
                interval={0}
            />
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Bar dataKey="value" barSize={30} radius={[0, 10, 10, 0]}>
                <LabelList dataKey="value" position="right" formatter={(value: number) => `${value}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
