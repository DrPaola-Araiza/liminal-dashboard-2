// components/PreferenceCharts.tsx
'use client';
import React from 'react';

/* ---------------- Legend item ---------------- */
function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <div className={`w-3.5 h-3.5 rounded-sm ${color}`} />
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}

/* ---------------- Helpers for the Awe semi-circle path ---------------- */
function describeSemiArc(cx: number, cy: number, r: number) {
  // Semi-circle from left to right
  return `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
}
function semiLength(r: number) {
  return Math.PI * r; // half circumference
}

export default function PreferenceCharts() {
  /* ========= Data ========= */
  const awePercentage = 70;

  const categoryData = [
    { label: 'Calm',        percentage: 18, color: 'stroke-blue-900',   legendColor: 'bg-blue-900',   rotation: 0 },
    { label: 'Energy',      percentage: 34, color: 'stroke-orange-500', legendColor: 'bg-orange-500', rotation: 18 },
    { label: 'Pain Relief', percentage: 4,  color: 'stroke-green-700',  legendColor: 'bg-green-700',  rotation: 52 },
    { label: 'Focus',       percentage: 5,  color: 'stroke-cyan-500',   legendColor: 'bg-cyan-500',   rotation: 56 },
    { label: 'Awe',         percentage: 26, color: 'stroke-purple-600', legendColor: 'bg-purple-600', rotation: 61 },
    { label: 'Sleep',       percentage: 13, color: 'stroke-green-500',  legendColor: 'bg-green-500',  rotation: 87 },
  ];

  /* ========= Donut constants ========= */
  const donutRadius = 40;
  const donutCirc = 2 * Math.PI * donutRadius; // ~251.327
  const toDash = (pct: number) => (donutCirc * pct) / 100;

  /* ========= Awe arc constants ========= */
  const aweW = 320;
  const aweH = 190;
  const aweCx = aweW / 2;
  const aweCy = 150;
  const aweR = 120;
  const aweTrack = describeSemiArc(aweCx, aweCy, aweR);
  const aweLen = semiLength(aweR);

  return (
    <div className="mt-10 space-y-12">
      {/* ================== Awe Intensity (styled) ================== */}
      <div className="max-w-md mx-auto">
        <div className="relative bg-white rounded-2xl shadow p-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white" />

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
          <p className="relative text-sm text-gray-500 mb-4">
            Overall user-reported intensity
          </p>

          {/* Low / High labels */}
          <div className="relative flex items-center justify-between px-1" style={{ height: 0 }}>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[11px] text-gray-400">Low</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[11px] text-gray-400">High</span>
          </div>

          {/* SVG Semi-circle */}
          <div className="relative mx-auto" style={{ width: aweW, height: aweH }}>
            <svg width={aweW} height={aweH}>
              <defs>
                <linearGradient id="aweGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="aweTrackGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EDE9FE" />
                  <stop offset="100%" stopColor="#DDD6FE" />
                </linearGradient>
                <filter id="softGlowAwe" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Track */}
              <path
                d={aweTrack}
                stroke="url(#aweTrackGrad)"
                strokeWidth={34}
                strokeLinecap="round"
                fill="none"
              />
              {/* Progress (animated) */}
              <path
                d={aweTrack}
                stroke="url(#aweGrad)"
                strokeWidth={34}
                strokeLinecap="round"
                fill="none"
                filter="url(#softGlowAwe)"
                strokeDasharray={aweLen}
                strokeDashoffset={aweLen * (1 - awePercentage / 100)}
                style={{ transition: 'stroke-dashoffset 900ms ease 200ms' }}
              />

              {/* Center labels */}
              <text x={aweCx} y={aweCy - 12} textAnchor="middle" className="fill-purple-900" style={{ fontSize: 34, fontWeight: 800 }}>
                {awePercentage}%
              </text>
              <text x={aweCx} y={aweCy + 14} textAnchor="middle" className="fill-gray-500" style={{ fontSize: 12 }}>
                Awe intensity
              </text>
            </svg>
          </div>

          <p className="mt-3 text-[11px] text-gray-400">
            Research shows awe can reduce stress, enhance mood, and increase feelings of connection.
          </p>
        </div>
      </div>

      {/* ================== Category Preferences (donut) ================== */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Category Preferences</h3>
        <p className="text-gray-500 font-medium mt-2">
          WHERE USERS SPEND THE MOST TIME OR USER ENGAGEMENT BY CATEGORY
        </p>

        <div className="relative w-80 h-80 mx-auto mt-6">
          {/* Expanded viewBox to prevent clipping of labels outside the ring */}
          <svg className="w-full h-full" viewBox="-8 -8 116 116">
            <defs>
              <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feOffset dx="0" dy="0" />
                <feGaussianBlur stdDeviation="1.5" result="offset-blur" />
                <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                <feFlood floodColor="black" floodOpacity="0.08" result="color" />
                <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                <feComposite operator="over" in="shadow" in2="SourceGraphic" />
              </filter>
              <linearGradient id="donutTrack" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F3F4F6" />
                <stop offset="100%" stopColor="#E5E7EB" />
              </linearGradient>
            </defs>

            {/* Base neutral track */}
            <circle
              cx="50" cy="50" r={donutRadius}
              fill="transparent"
              stroke="url(#donutTrack)"
              strokeWidth="20"
              filter="url(#innerShadow)"
            />

            {/* Segments + labels */}
            {categoryData.map((item, index) => {
              const dash = (donutCirc * item.percentage) / 100;
              const gap = donutCirc - dash;
              const rotationDeg = (item.rotation / 100) * 360 - 90;

              // mid-angle for leader + label
              const midAngle = ((item.rotation + item.percentage / 2) / 100) * 360;
              const midRad = ((midAngle - 90) * Math.PI) / 180;

              const rMid   = donutRadius;      // middle of stroke
              const rOuter = donutRadius + 4;  // leader line end
              const rLabel = donutRadius + 8;  // label position (inside padded viewBox)

              const xArc  = 50 + rMid   * Math.cos(midRad);
              const yArc  = 50 + rMid   * Math.sin(midRad);
              const xLine = 50 + rOuter * Math.cos(midRad);
              const yLine = 50 + rOuter * Math.sin(midRad);
              const xText = 50 + rLabel * Math.cos(midRad);
              const yText = 50 + rLabel * Math.sin(midRad);

              const hideLabel = item.percentage < 5;

              return (
                <g key={index}>
                  {/* soft glow */}
                  <circle
                    cx="50" cy="50" r={donutRadius}
                    fill="transparent"
                    strokeWidth="20"
                    className={item.color}
                    strokeOpacity="0.25"
                    strokeDasharray={`${dash} ${gap}`}
                    strokeLinecap="round"
                    transform={`rotate(${rotationDeg} 50 50)`}
                    style={{ filter: 'blur(0.5px)' }}
                  />
                  {/* segment */}
                  <circle
                    cx="50" cy="50" r={donutRadius}
                    fill="transparent"
                    strokeWidth="20"
                    className={item.color}
                    strokeDasharray={`${dash} ${gap}`}
                    strokeLinecap="round"
                    transform={`rotate(${rotationDeg} 50 50)`}
                  />

                  {!hideLabel && (
                    <>
                      {/* leader line */}
                      <line x1={xArc} y1={yArc} x2={xLine} y2={yLine} stroke="rgba(0,0,0,.28)" strokeWidth="0.6" />
                      {/* outlined text for contrast */}
                      <text
                        x={xText}
                        y={yText}
                        dy="0.35em"
                        textAnchor="middle"
                        style={{ paintOrder: 'stroke', stroke: 'white', strokeWidth: 2 }}
                        fill="#111827"
                        fontSize="8.5"
                        fontWeight="800"
                      >
                        {item.percentage}%
                      </text>
                    </>
                  )}
                </g>
              );
            })}

            {/* Center label */}
            <text x="50" y="47" textAnchor="middle" fill="#111827" fontSize="8.5" fontWeight="700">
              Engagement
            </text>
            <text x="50" y="55.5" textAnchor="middle" fill="#6B7280" fontSize="6.5">
              by category
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-6">
          {categoryData.map((item) => (
            <LegendItem key={item.label} color={item.legendColor} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
