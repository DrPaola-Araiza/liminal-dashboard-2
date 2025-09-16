'use client';
import React from 'react';

/** ---------- Reusable Bubble ---------- */
function Bubble({
  text,
  percentage,
  sizePx,
  gradient,
  top,
  left,
  z,
}: {
  text: string;
  percentage: number;
  sizePx: number;
  gradient: string; // tailwind bg-gradient classes
  top: string;
  left: string;
  z: number;
}) {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center rounded-full text-white font-semibold
                  shadow-xl ring-1 ring-white/40 hover:scale-[1.05] transition-transform
                  ${gradient}`}
      style={{ width: sizePx, height: sizePx, top, left, zIndex: z }}
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
    sizePx: number;
    gradient: string;
    top: string;
    left: string;
    z: number;
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
          <Bubble key={`${b.text}-${i}`} {...b} />
        ))}
      </div>
    </div>
  );
}

/** ---------- Data (single source of truth) ---------- */
type Emotion = {
  name: string;
  before: number; // %
  after: number;  // %
  gradient: string;
  pos: {
    before: { top: string; left: string };
    after: { top: string; left: string };
  };
};

const EMOTIONS: Emotion[] = [
  { name: 'Calm', before: 5, after: 35, gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
    pos: { before: { top: '36%', left: '6%' }, after: { top: '42%', left: '6%' } } },
  { name: 'Excited', before: 5, after: 10, gradient: 'bg-gradient-to-tr from-emerald-300 to-emerald-500',
    pos: { before: { top: '6%', left: '26%' }, after: { top: '16%', left: '30%' } } },
  { name: 'Relax', before: 8, after: 15, gradient: 'bg-gradient-to-tr from-teal-500 to-teal-700',
    pos: { before: { top: '18%', left: '32%' }, after: { top: '11%', left: '60%' } } },
  { name: 'Pain', before: 18, after: 7, gradient: 'bg-gradient-to-tr from-rose-700 to-rose-900',
    pos: { before: { top: '22%', left: '76%' }, after: { top: '36%', left: '86%' } } },
  { name: 'Focus', before: 9, after: 15, gradient: 'bg-gradient-to-tr from-sky-400 to-sky-600',
    pos: { before: { top: '56%', left: '70%' }, after: { top: '46%', left: '66%' } } },
  { name: 'Cheerful', before: 6, after: 12, gradient: 'bg-gradient-to-tr from-lime-400 to-emerald-600',
    pos: { before: { top: '66%', left: '26%' }, after: { top: '66%', left: '30%' } } },
  { name: 'Rested', before: 7, after: 20, gradient: 'bg-gradient-to-tr from-emerald-300 to-emerald-500',
    pos: { before: { top: '70%', left: '40%' }, after: { top: '71%', left: '56%' } } },
  { name: 'Mental vitality', before: 6, after: 18, gradient: 'bg-gradient-to-tr from-sky-500 to-blue-700',
    pos: { before: { top: '72%', left: '56%' }, after: { top: '70%', left: '76%' } } },
  { name: 'Sad', before: 26, after: 7, gradient: 'bg-gradient-to-tr from-amber-400 to-amber-600',
    pos: { before: { top: '78%', left: '12%' }, after: { top: '82%', left: '18%' } } },
  { name: 'Anxious', before: 28, after: 6, gradient: 'bg-gradient-to-tr from-rose-400 to-rose-600',
    pos: { before: { top: '52%', left: '10%' }, after: { top: '54%', left: '18%' } } },
  { name: 'Irritated', before: 20, after: 6, gradient: 'bg-gradient-to-tr from-orange-500 to-rose-600',
    pos: { before: { top: '15%', left: '45%' }, after: { top: '40%', left: '46%' } } },
  { name: 'Bored', before: 22, after: 7, gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
    pos: { before: { top: '62%', left: '50%' }, after: { top: '64%', left: '50%' } } },
];

/** ---------- Sizing helper ---------- */
function percentToSizePx(p: number, minPx = 54, maxPx = 140, minP = 3, maxP = 40) {
  const clamped = Math.max(minP, Math.min(maxP, p));
  const t = (clamped - minP) / (maxP - minP);
  return Math.round(minPx + t * (maxPx - minPx));
}

/** ---------- Layout helpers (collision avoidance) ---------- */
type BubbleDraft = {
  text: string;
  percentage: number;
  sizePx: number;
  gradient: string;
  // working coordinates in px
  x: number; // left in px
  y: number; // top in px
  r: number; // radius in px
};

// convert '42%' -> px (on a 360 canvas)
const p2px = (s: string, canvas = 360) => (parseFloat(s) / 100) * canvas;
const px2p = (v: number, canvas = 360) => `${(v / canvas) * 100}%`;

function clampToCircle(b: BubbleDraft, canvas = 360) {
  const cx = canvas / 2;
  const cy = canvas / 2;
  const maxR = canvas / 2 - b.r; // stay inside outer circle
  const dx = b.x - cx;
  const dy = b.y - cy;
  const dist = Math.hypot(dx, dy);
  if (dist > maxR) {
    const ux = dx / dist;
    const uy = dy / dist;
    b.x = cx + ux * maxR;
    b.y = cy + uy * maxR;
  }
}

function layoutBubbles(
  bubbles: Array<{ text: string; percentage: number; sizePx: number; gradient: string; top: string; left: string; }>,
  canvas = 360,
  padding = 6,
  iterations = 160
) {
  // to working model in px
  const work: BubbleDraft[] = bubbles.map(b => ({
    text: b.text,
    percentage: b.percentage,
    sizePx: b.sizePx,
    gradient: b.gradient,
    x: p2px(b.left, canvas),
    y: p2px(b.top, canvas),
    r: b.sizePx / 2,
  }));

  // iterative pairwise relaxation
  for (let k = 0; k < iterations; k++) {
    for (let i = 0; i < work.length; i++) {
      for (let j = i + 1; j < work.length; j++) {
        const a = work[i], c = work[j];
        let dx = c.x - a.x;
        let dy = c.y - a.y;
        let d = Math.hypot(dx, dy) || 1e-6;
        const minDist = a.r + c.r + padding;

        if (d < minDist) {
          const overlap = minDist - d;
          // unit vector from a -> c
          dx /= d; dy /= d;
          // push both halves
          const push = overlap / 2;
          a.x -= dx * push; a.y -= dy * push;
          c.x += dx * push; c.y += dy * push;
        }
      }
      clampToCircle(work[i], canvas);
    }
  }

  // back to % + z-index (smaller on top)
  return work.map(w => ({
    text: w.text,
    percentage: w.percentage,
    sizePx: w.sizePx,
    gradient: w.gradient,
    top: px2p(w.y, canvas),
    left: px2p(w.x, canvas),
    z: 1000 - Math.round(w.sizePx), // smaller bubbles render above larger ones
  }));
}

/** ---------- Page Component ---------- */
export default function EmotionChart() {
  // build initial (from EMOTIONS)
  const beforeInit = EMOTIONS.map(e => ({
    text: e.name,
    percentage: e.before,
    sizePx: percentToSizePx(e.before),
    gradient: e.gradient,
    top: e.pos.before.top,
    left: e.pos.before.left,
    z: 0,
  }));
  const afterInit = EMOTIONS.map(e => ({
    text: e.name,
    percentage: e.after,
    sizePx: percentToSizePx(e.after),
    gradient: e.gradient,
    top: e.pos.after.top,
    left: e.pos.after.left,
    z: 0,
  }));

  // nudge to avoid overlaps (keeps overall layout you chose)
  const beforeBubbles = layoutBubbles(beforeInit);
  const afterBubbles  = layoutBubbles(afterInit);

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        Emotion and Mental States Shifts
      </h3>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        A “radar-pool” view with guide rings helps compare emotion clusters before and after using the Liminal Platform.
      </p>

      <div className="flex flex-row justify-center gap-8 flex-wrap">
        <ChartSection
          title="Before"
          subtitle="Higher arousal / negative cluster dominates"
          bubbles={beforeBubbles}
        />
        <ChartSection
          title="After"
          subtitle="Shift toward calm, rest, and focus"
          bubbles={afterBubbles}
        />
      </div>

      <div className="mt-10 p-6 rounded-xl text-center max-w-lg mx-auto shadow bg-white">
        <p className="text-green-700 font-semibold">😊 Positive moods increased by: 53.97%</p>
        <p className="text-rose-600 font-semibold">😠 Negative moods decreased by: 20.8%</p>
      </div>
    </div>
  );
}
