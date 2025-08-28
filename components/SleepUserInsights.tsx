// components/SleepUserInsights.tsx

import React from 'react';

// Data for the insight rows, updated for the Sleep category
const insightsData = [
  // FIXED: Changed icon and label to match 'Play count' format
  { icon: '🎮', label: 'Play count', value: '85' }, // Changed from '🛌 Total sessions'
  { icon: '⏳', label: 'Average session duration', value: '12.1 min' },
  { icon: '⭐', label: '4 & 5 Enjoyability Rating', value: '92%' },
  { icon: '🌙', label: 'Sessions in last 30 days', value: '25' },
];

// The component to render a single row in the table
// FIXED: Added isHeader prop to apply distinct styling to the first row
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
export default function SleepUserInsights() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Sleep Experiences</h2>
      </div>

      <div className="text-left text-gray-700 space-y-2 mb-8">
        <p>
          This section provides an overview of user engagement with 'Sleep' experiences. 
        </p>
        <p>
          The metrics below highlight how users are utilizing Liminal VR to improve their sleep quality, reduce the time it takes to fall asleep, and achieve more restful states.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h3 className="text-xl font-bold text-gray-800 p-4 bg-gray-50 border-b">User Insights</h3>
        <div>
          {insightsData.map((item, index) => (
            // FIXED: Pass isHeader={true} for the first row (index === 0)
            <InsightRow key={index} icon={item.icon} label={item.label} value={item.value} isHeader={index === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}