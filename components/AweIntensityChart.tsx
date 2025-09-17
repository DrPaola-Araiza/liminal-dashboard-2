// components/AweIntensityChart.tsx
'use client';
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

type Props = {
  value?: number;             // 0–100
  height?: number;            // px for the chart area
  ringThickness?: number;     // px thickness of the ring
  maxWidthClass?: string;     // tailwind max-width utility for the card

  // 🔤 Text size controls
  valueFontPx?: number;       // center % number
  captionFontPx?: number;     // "Reported intensity"
  sideLabelFontPx?: number;   // "Low" / "High"
  titleClassName?: string;    // card title
  subtitleClassName?: string; // card subtitle under title
};

export default function AweIntensityChart({
  value = 70,
  height = 320,
  ringThickness = 34,
  maxWidthClass = 'max-w-xl',

  valueFontPx = 40,            // ⬆️ bigger center number
  captionFontPx = 18,          // ⬆️ bigger caption
  sideLabelFontPx = 20,        // ⬆️ bigger side labels
titleClassName = 'text-2xl md:text-3xl font-semibold text-gray-800',
subtitleClassName = 'relative text-base md:text-lg text-gray-500 mb-8',

}: Props) {
  const data = React.useMemo(() => [{ name: 'Awe Intensity', value }], [value]);

  return (
    <div className={`w-full ${maxWidthClass} mx-auto`}>
      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow p-6 overflow-hidden">
        {/* Soft backdrop glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white" />

        {/* Header */}
        <div className="relative flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 text-lg">
              ✨
            </span>
            <h3 className={titleClassName}>Awe Intensity</h3>
          </div>
          <span className="text-[2xl] px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-large">
            0–100 scale
          </span>
        </div>
        <p className={subtitleClassName}>
          Overall user-reported intensity
        </p>

        {/* Chart */}
        <div className="relative" style={{ width: '100%', height }}>
          {/* Context labels (left/right) */}
          <div
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            style={{ fontSize: sideLabelFontPx }}
          >
            Low
          </div>
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            style={{ fontSize: sideLabelFontPx }}
          >
            High
          </div>

          <ResponsiveContainer>
            <RadialBarChart
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius="58%"       // chunkier ring
              outerRadius="100%"
              barSize={ringThickness}
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

              {/* Center value + caption (sizes via props) */}
              <text
                x="50%"
                y="56%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-extrabold fill-purple-900"
                style={{ fontSize: valueFontPx }}
              >
                {`${data[0].value}%`}
              </text>
              <text
                x="50%"
                y="72%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-500"
                style={{ fontSize: captionFontPx }}
              >
                Reported intensity
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* Footer hint / caption */}
        <div className="mt-4 text-[11px] text-gray-400">
          Based on session self-reports across the Awe category.
        </div>
      </div>
    </div>
  );
}

