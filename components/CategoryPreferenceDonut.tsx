'use client';

import * as React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import type { PieLabelRenderProps } from 'recharts';

export type CategoryItem = {
  label: string;
  percentage: number;   // 0–100
  hex?: string;         // e.g. "#4a90e2"
};

export interface CategoryPreferenceDonutProps {
  categoryData: CategoryItem[];
  height?: number; // px
}

const RADIAN = Math.PI / 180;

const FALLBACK_COLORS = [
  '#4A90E2', '#F59E0B', '#10B981', '#EF4444', '#8B5CF6',
  '#06B6D4', '#84CC16', '#F97316', '#14B8A6', '#A855F7',
] as const;

const renderPercentLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent,
}: PieLabelRenderProps): React.ReactNode => {
  if (
    percent == null ||
    innerRadius == null ||
    outerRadius == null ||
    cx == null ||
    cy == null ||
    midAngle == null
  ) return null;

  if (percent < 0.03) return null;

  const r = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontWeight={700}>
      {(percent * 100).toFixed(0)}%
    </text>
  );
};

export default function CategoryPreferenceDonut({
  categoryData,
  height = 360,
}: CategoryPreferenceDonutProps) {
  const data = React.useMemo(
    () => categoryData.map(d => ({ name: d.label, value: d.percentage, hex: d.hex })),
    [categoryData]
  );

  return (
    <div className="w-full text-center">
      <h3 className="text-2xl font-semibold text-gray-800">Category Preferences</h3>
      <p className="text-gray-500 font-medium mt-2">
        WHERE USERS SPEND THE MOST TIME OR USER ENGAGEMENT BY CATEGORY
      </p>

      <div style={{ width: '100%', height }}>
        <ResponsiveContainer>
          <PieChart>
            <Tooltip formatter={(v: unknown) => [`${Number(v).toFixed(1)}%`, 'Engagement'] as [string, string]} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={140}
              paddingAngle={2}
              labelLine={false}
              label={renderPercentLabel}
              isAnimationActive={false}
            >
              {data.map((entry, i) => (
                <Cell
                  key={`cell-${entry.name}-${i}`}
                  fill={(entry.hex ?? FALLBACK_COLORS[i % FALLBACK_COLORS.length]) as string}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
