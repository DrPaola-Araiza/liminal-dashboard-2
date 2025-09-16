// components/AweIntensityChart.tsx
'use client';
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const data = [{ name: 'Awe Intensity', value: 70 }];

export default function AweIntensityChart() {
  return (
    <div className="w-full max-w-xs mx-auto">
      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow p-5 overflow-hidden">
        {/* Soft backdrop glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white" />

        {/* Header */}
        <div className="relative flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-purple-700 text-lg">
              ✨
            </span>
            <h3 className="text-base font-semibold text-gray-800">Awe Intensity</h3>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium">
            0–100 scale
          </span>
        </div>
        <p className="relative text-sm text-gray-500 mb-3">
          Overall user-reported intensity
        </p>

        {/* Chart */}
        <div className="relative" style={{ width: '100%', height: 210 }}>
          {/* Context labels */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[11px] text-gray-400">Low</div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-gray-400">High</div>

          <ResponsiveContainer>
            <RadialBarChart
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius="72%"
              outerRadius="100%"
              barSize={24}
            >
              <defs>
                {/* Progress gradient */}
                <linearGradient id="aweProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A78BFA" stopOpacity={1} />
                  <stop offset="95%" stopColor="#7C3AED" stopOpacity={1} />
                </linearGradient>
                {/* Track gradient */}
                <linearGradient id="aweTrack" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EDE9FE" />
                  <stop offset="100%" stopColor="#DDD6FE" />
                </linearGradient>
                {/* Glow filter */}
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Axis (no ticks for clean look) */}
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

              {/* Track ring */}
              <RadialBar
                data={[{ name: 'Track', value: 100 }]}
                dataKey="value"
                cornerRadius={12}
                fill="url(#aweTrack)"
                isAnimationActive={false}
                background={false}
              />

              {/* Progress ring */}
              <RadialBar
                dataKey="value"
                cornerRadius={12}
                fill="url(#aweProgress)"
                background={false}
                isAnimationActive
                animationBegin={200}
                animationDuration={900}
                className="[filter:url(#softGlow)]"
              />

              {/* Center value */}
              <text
                x="50%"
                y="56%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-3xl font-bold fill-purple-900"
              >
                {`${data[0].value}%`}
              </text>
              <text
                x="50%"
                y="72%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[11px] fill-gray-500"
              >
                Reported intensity
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* Footer hint / caption */}
        <div className="mt-3 text-[11px] text-gray-400">
          Based on session self-reports across the Awe category.
        </div>
      </div>
    </div>
  );
}

