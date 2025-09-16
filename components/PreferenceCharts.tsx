'use client';

import AweIntensityChart from './AweIntensityChart';
import CategoryPreferenceDonut, { type CategoryItem } from './CategoryPreferenceDonut';

export default function PreferenceCharts() {
  const categoryData: CategoryItem[] = [
    { label: 'Calm',   percentage: 18, hex: '#1E3A8A' },
    { label: 'Energy', percentage: 34, hex: '#F59E0B' },
    { label: 'Focus',  percentage: 22, hex: '#10B981' },
    { label: 'Awe',    percentage: 14, hex: '#8B5CF6' },
    { label: 'Sleep',  percentage: 7,  hex: '#06B6D4' },
    { label: 'Pain',   percentage: 5,  hex: '#EF4444' },
  ];

  return (
    <div className="space-y-12">
      {/* First chart */}
      <AweIntensityChart />

      {/* Second chart */}
      <CategoryPreferenceDonut categoryData={categoryData} height={400} />
    </div>
  );
}
