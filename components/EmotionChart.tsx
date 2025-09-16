// components/EmotionChart.tsx
'use client';
import React from 'react';

/** ---------- Reusable Bubble ---------- */
function Bubble({
  text,
  percentage,
  size,
  gradient,
  top,
  left,
}: {
  text: string;
  percentage: number;
  size: string;
  gradient: string; // expects bg-gradient classes
  top: string;
  left: string;
}) {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center rounded-full text-white font-semibold
                  shadow-xl ring-1 ring-white/40 hover:scale-[1.05] transition-transform
                  ${gradient}`}
      style={{
        width: size,
        height: size,
        top,
        left,
      }}
    >
      <span className="text-[11px] leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,.35)]">
        {text}
      </span>
      <span className="text-[10px] font-normal opacity-95 drop-shadow-[0_1px_1px_rgba(0,0,0,.35)]">
        {percentage}%
      </span>
    </div>
  );
}

/** ---------- Section Card (Before / After) ---------- */
function ChartSection({
  title,
  subtitle,
  bubbles,
}: {
  title: string;
  subtitle: string;
  bubbles: Array<{
    text: string;
    percentage: number;
    size: string;
    gradient: string;
    top: string;
    left: string;
  }>;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-[430px]">
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      {/* Radar-pool canvas with concentric guide rings */}
      <div
        className="relative rounded-full border border-gray-200/70 mx-auto"
        style={{
          width: 360,
          height: 360,
          background:
            'radial-gradient(circle at 50% 50%, rgba(59,130,246,.08), rgba(0,0,0,0) 60%), ' +
            'repeating-radial-gradient(circle at 50% 50%, rgba(148,163,184,.25) 0 1px, transparent 1px 36px)',
        }}
      >
        {/* Crosshair guides */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gray-200/60 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200/60 -translate-y-1/2" />

        {bubbles.map((b, i) => (
          <Bubble key={i} {...b} />
        ))}
      </div>
    </div>
  );
}

/** ---------- Page Component ---------- */
export default function EmotionChart() {
  const beforeBubbles = [
    { text: 'Anxious',   percentage: 28, size: '110px', gradient: 'bg-gradient-to-tr from-rose-400 to-rose-600',   top: '52%', left: '10%' },
    { text: 'Irritated', percentage: 15, size: '90px',  gradient: 'bg-gradient-to-tr from-orange-500 to-rose-600', top: '15%', left: '45%' },
    { text: 'Bored',     percentage: 22, size: '100px', gradient: 'bg-gradient-to-tr from-amber-400 to-amber-600', top: '62%', left: '50%' },
    { text: 'Sad',       percentage: 18, size: '80px',  gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600', top: '78%', left: '22%' },
    { text: 'Pain',      percentage: 7,  size: '62px',  gradient: 'bg-gradient-to-tr from-rose-500 to-rose-800',   top: '30%', left: '76%' },
    { text: 'Excited',   percentage: 5,  size: '70px',  gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600', top: '6%',  left: '26%' },
    { text: 'Calm',      percentage: 5,  size: '54px',  gradient: 'bg-gradient-to-tr from-emerald-300 to-emerald-500', top: '36%', left: '6%' },
  ];

  const afterBubbles = [
    { text: 'Calm',    percentage: 35, size: '124px', gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600', top: '42%', left: '6%' },
    { text: 'Rested',  percentage: 20, size: '104px', gradient: 'bg-gradient-to-tr from-emerald-300 to-emerald-500', top: '71%', left: '56%' },
    { text: 'Focus',   percentage: 15, size: '92px',  gradient: 'bg-gradient-to-tr from-sky-400 to-sky-600',         top: '46%', left: '66%' },
    { text: 'Relax',   percentage: 15, size: '112px', gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',       top: '11%', left: '60%' },
    { text: 'Excited', percentage: 10, size: '82px',  gradient: 'bg-gradient-to-tr from-emerald-500 to-emerald-700', top: '16%', left: '30%' },
    { text: 'Cheerful',percentage: 5,  size: '72px',  gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',   top: '66%', left: '30%' },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        Emotion and Mental States Shifts
      </h3>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        A “radar-pool” view with guide rings helps compare emotion clusters before and after using the Liminal Platform.
      </p>

      <div className="flex flex-row justify-center gap-8 flex-wrap">
        <ChartSection title="Before" subtitle="Higher arousal / negative cluster dominates" bubbles={beforeBubbles} />
        <ChartSection title="After"  subtitle="Shift toward calm, rest, and focus"          bubbles={afterBubbles} />
      </div>

      <div className="mt-10 p-6 rounded-xl text-center max-w-lg mx-auto shadow bg-white">
        <p className="text-green-700 font-semibold">😊 Positive moods increased by: 53.97%</p>
        <p className="text-rose-600 font-semibold">😠 Negative moods decreased by: 20.8%</p>
      </div>
    </div>
  );
}
