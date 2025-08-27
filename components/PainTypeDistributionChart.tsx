// components/PainTypeDistributionChart.tsx
'use client';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Medical Procedure', value: 20.4 },
  { name: 'Joint Pain', value: 10.2 },
  { name: 'Back Pain', value: 21.0 },
  { name: 'Nerve Pain', value: 9.9 },
  { name: 'Cuts', value: 1.0 },
  { name: 'Bone Fracture', value: 1.5 },
  { name: 'Burn', value: 2.0 },
  { name: 'Soft Tissue Pain', value: 6.6 },
  { name: 'Migraine Or Headache', value: 10.2 },
  { name: 'Other', value: 17.8 },
];

const COLORS = [
  '#84d97e', // Medical Procedure (light green)
  '#4caf50', // Joint Pain (green)
  '#4a90e2', // Back Pain (blue)
  '#b388ff', // Nerve Pain (purple)
  '#f39c12', // Cuts (orange)
  '#81d4fa', // Bone Fracture (light blue)
  '#e57373', // Burn (red)
  '#795548', // Soft Tissue Pain (brown)
  '#ffc107', // Migraine (yellow)
  '#bdbdbd', // Other (grey)
];

// --- FIX: Using a custom label to place percentages inside the slices ---
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Don't render label for very small slices to avoid clutter
  if (percent < 0.05) {
    return null;
  }

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PainTypeDistributionChart() {
  return (
    <div className="w-full text-center">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Pain Types</h3>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={80}
              outerRadius={140} // Increased outer radius for better look
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
              label={renderCustomizedLabel} // Using the corrected label function
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}