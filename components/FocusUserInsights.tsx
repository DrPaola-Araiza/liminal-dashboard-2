//components/FocusUserInsights.tsx

import React from 'react';

// Data for the insight rows, updated for the focus category
const insightsData = [
  { icon: '🎮', label: 'Play count', value: '110' },
  { icon: '⏳', label: 'Average time using Focus Arena', value: '4.4 min' },
  { icon: '⭐', label: '4 & 5 Enjoyability Rating', value: '95' }, // Example data
  { icon: '🗓️', label: 'Last Month play count', value: '30' }, // Example data
];

// The component to render a single row in the table
const InsightRow = ({ icon, label, value, isHeader }: { icon: string, label: string, value: string, isHeader?: boolean }) => (
  <div className={`flex items-center text-sm ${isHeader ? 'bg-teal-700 text-white font-semibold' : 'bg-white text-gray-800 border-b border-gray-200'}`}>
    <div className="w-2/3 p-3 flex items-center">
      <span className="mr-3 text-lg">{icon}</span>
      <span>{label}</span>
    </div>
    <div className="w-1/3 p-3 font-bold text-right">
      {value}
    </div>
  </div>
);

// The main component for the user insights section
export default function FocusReliefUserInsights() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Focus Relief Experiences</h2>
      </div>

      <div className="text-left text-gray-700 space-y-2 mb-8">
        <p>
          This section provides an overview of user engagement with 'Focus' experiences. 
        </p>
        <p>
          The metrics below highlight patterns in session frequency, duration, and popular content, helping to understand how users are leveraging Liminal VR to enhance their concentration and productivity.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h3 className="text-xl font-bold text-gray-800 p-4 bg-gray-50 border-b">User insights</h3>
        <div>
          {insightsData.map((item, index) => (
            <InsightRow key={index} icon={item.icon} label={item.label} value={item.value} isHeader={index === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}