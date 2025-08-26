// components/CalmUserInsights.tsx
import React from 'react';

// A simple data structure for the insight rows
const insightsData = [
  { icon: '🎮', label: 'Play count', value: '433,845' },
  { icon: '⏳', label: 'Average time using the Calm Category', value: '10 min' },
  { icon: '⭐', label: '4 & 5 Enjoyability Rating', value: '120' },
  { icon: '🗓️', label: 'Last Month play count', value: '20' },
  { icon: '📈', label: '% Increase in Calm & Relaxed Moods', value: '29.6%' },
  { icon: '📉', label: '% Decrease in Irritated & Anxious Moods', value: '15.8%' },
];

// The component to render a single row in the table
const InsightRow = ({ icon, label, value, isHeader }: { icon: string, label: string, value: string, isHeader?: boolean }) => (
  <div className={`flex items-center text-sm ${isHeader ? 'bg-teal-700 text-white font-semibold' : 'bg-gray-100 text-gray-800 border-b border-gray-200'}`}>
    <div className="w-1/3 p-3 flex items-center">
      <span className="mr-3 text-lg">{icon}</span>
      <span>{label}</span>
    </div>
    <div className="w-2/3 p-3 font-bold text-right">
      {value}
    </div>
  </div>
);

// The main component for the user insights table
export default function CalmUserInsights() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-gray-800 p-4">User insights</h3>
      <div className="border-t border-gray-200">
        <InsightRow icon="🎮" label="Play count" value="433,845" isHeader />
        {insightsData.slice(1).map((item, index) => (
          <InsightRow key={index} icon={item.icon} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  );
}