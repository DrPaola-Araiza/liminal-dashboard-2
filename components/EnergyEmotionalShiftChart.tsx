// components/EnergyEmotionalShiftChart.tsx
'use client';
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine
} from 'recharts';

const base = [
  { name: 'Excited',         before: 4.1,  after: 2.7  },
  { name: 'Cheerful',        before: 3.9,  after: 4.4  },
  { name: 'Sad',             before: 14.5, after: 4.2  },
  { name: 'Anxious',         before: 5.8,  after: 3.4  },
  { name: 'Irritated/Bored', before: 7.6,  after: 7.0  },
  { name: 'Calm',            before: 16.3, after: 30.9 },
  { name: 'Relax',           before: 13.3, after: 29.5 },
];

const emotionData = base.map((d, i) => ({ ...d, idx: i }));
const afterColors = ['#f97316','#facc15','#ef4444','#ec4899','#a16207','#3b82f6','#22c55e'];

export default function EnergyEmotionalShiftChart() {
  return (
    <div className="w-full">
      {/* headings omitted for brevity */}

      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <BarChart
            data={emotionData}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            barCategoryGap={20}
          >
            {/* Single numeric axis for both bars & lines */}
            <XAxis
              type="number"
              dataKey="idx"
              domain={[-0.5, emotionData.length - 0.5]} // centers bars on integers
              ticks={emotionData.map((_, i) => i)}
              tickFormatter={(v: number) => emotionData[v]?.name ?? ''}
              allowDecimals={false}
              interval={0}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fontSize: 14, offset: -10 }}
            />
            <Tooltip />

            {/* Dividers — now perfectly centered between bars */}
            <ReferenceLine x={1.5} stroke="#9ca3af" strokeDasharray="3 3" ifOverflow="extendDomain" />
            <ReferenceLine x={4.5} stroke="#9ca3af" strokeDasharray="3 3" ifOverflow="extendDomain" />

            <Bar dataKey="before" fill="#d1d5db" name="Before" />
            <Bar dataKey="after" name="After">
              {emotionData.map((_, i) => (
                <Cell key={i} fill={afterColors[i % afterColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
