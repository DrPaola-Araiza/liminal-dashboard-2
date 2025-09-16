// components/UserInsightsTable.tsx
'use client';
import React from 'react';

// Match CalmUserInsights row structure & styling exactly
const insightsData = [
  { icon: '🎮', label: 'Play count', value: '2,200,000' },
  { icon: '⏳', label: 'Average time using Liminal (From log in to log out)', value: '21.8 min' },
  { icon: '⭐', label: '4 & 5 Enjoyability Rating', value: '500' },
  { icon: '📅', label: 'Last Month play count', value: '1,500' },
];

const InsightRow = ({
  icon,
  label,
  value,
  isHeader,
}: {
  icon: string;
  label: string;
  value: string;
  isHeader?: boolean;
}) => (
  <div
    className={`flex items-center text-sm ${
      isHeader
        ? 'bg-teal-700 text-white font-semibold'
        : 'bg-gray-100 text-gray-800 border-b border-gray-200'
    }`}
  >
    <div className="w-1/3 p-3 flex items-center">
      <span className="mr-3 text-lg">{icon}</span>
      <span>{label}</span>
    </div>
    <div className="w-2/3 p-3 font-bold text-right">{value}</div>
  </div>
);

export default function UserInsightsTable() {
  return (
    <section className="max-w-2xl mx-auto">
      {/* Title + intro text above the card */}
     <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
  Analytics Dashboard
</h2>
<p className="text-gray-600 mb-4 text-center">
  This dashboard provides key insights into how Liminal’s VR experiences influence well-being and engagement.
</p>


      {/* Card styled identically to CalmUserInsights */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h3 className="text-xl font-bold text-gray-800 p-4">User insights</h3>
        <div className="border-t border-gray-200">
          {/* Teal header row */}
          <InsightRow
            icon={insightsData[0].icon}
            label={insightsData[0].label}
            value={insightsData[0].value}
            isHeader
          />
          {/* Remaining gray rows */}
          {insightsData.slice(1).map((item, idx) => (
            <InsightRow key={idx} icon={item.icon} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
