// components/EmotionChart.tsx
'use client';
import React from 'react';

/** ---------- Reusable Bubble (reports hover to parent) ---------- */
function Bubble({
  text,
  percentage,
  sizePx,
  gradient,
  top,
  left,
  z,
  onHover,
  onLeave,
}: {
  text: string;
  percentage: number;
  sizePx: number;
  gradient: string; // tailwind bg-gradient classes
  top: string;
  left: string;
  z: number;
  onHover: (e: React.MouseEvent<HTMLDivElement>) => void;
  onLeave: () => void;
}) {
  // Dynamic label sizing/wrapping (keeps long names inside)
  const nameFontPx = Math.round(
    Math.max(9, Math.min(16, sizePx * 0.18, 190 / (text.length + 3)))
  );
  const pctFontPx = Math.max(9, Math.min(13, sizePx * 0.14));

  return (
    <div
      className={`absolute flex flex-col items-center justify-center rounded-full text-white font-semibold
                  shadow-xl ring-1 ring-white/40 hover:scale-[1.05] transition-transform
                  ${gradient}`}
      style={{ width: sizePx, height: sizePx, top, left, zIndex: z }}
      onMouseEnter={onHover}
      onMouseMove={onHover}
      onMouseLeave={onLeave}
      title={`${text} · ${percentage}%`} // native fallback
      aria-label={`${text} · ${percentage}%`}
    >
      <div
        style={{
          maxWidth: '85%',
          textAlign: 'center',
          lineHeight: 1.05,
          fontSize: nameFontPx,
          wordBreak: 'break-word',
          whiteSpace: 'normal',
          padding: '0 2px',
          textShadow: '0 1px 1px rgba(0,0,0,.35)',
        }}
      >
        {text}
      </div>
      <div
        style={{
          fontWeight: 500,
          opacity: 0.95,
          fontSize: pctFontPx,
          textShadow: '0 1px 1px rgba(0,0,0,.35)',
        }}
      >
        {percentage}%
      </div>
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
  // Tooltip overlay state (rendered ABOVE all bubbles)
  const [tip, setTip] = React.useState<{
    show: boolean;
    x: number;
    y: number;
    label: string;
  }>({ show: false, x: 0, y: 0, label: '' });

  const canvasRef = React.useRef<HTMLDivElement>(null);

  const handleHover = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const bubbleRect = target.getBoundingClientRect();
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;
    const x = bubbleRect.left + bubbleRect.width / 2 - canvasRect.left;
    const y = bubbleRect.top - canvasRect.top;
    const label = target.getAttribute('aria-label') || '';
    setTip({ show: true, x, y, label });
  }, []);

  const handleLeave = React.useCallback(() => {
    setTip((t) => ({ ...t, show: false }));
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-[430px]">
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      {/* Radar-pool canvas with concentric guide rings */}
      <div
        ref={canvasRef}
        className="relative rounded-full border border-gray-200/70 mx-auto"
        style={{
          width: 360,
          height: 360,
          background:
            'radial-gradient(circle at 50% 50%, rgba(59,130,246,.08), rgba(0,0,0,0) 60%), ' +
            'repeating-radial-gradient(circle at 50% 50%, rgba(148,163,184,.25) 0 1px, transparent 1px 36px)',
        }}
        onMouseLeave={handleLeave}
      >
        {/* Crosshair guides */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gray-200/60 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200/60 -translate-y-1/2" />

        {bubbles.map((b, i) => (
          <Bubble
            key={`${b.text}-${i}`}
            {...b}
            onHover={handleHover}
            onLeave={handleLeave}
          />
        ))}

        {/* Tooltip overlay (always above bubbles) */}
        {tip.show && (
          <div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-full
                       rounded-md bg-gray-900/90 text-white text-[11px] px-2 py-1 shadow-lg
                       whitespace-nowrap"
            style={{ left: tip.x, top: tip.y, zIndex: 5000 }}
          >
            {tip.label}
          </div>
        )}
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

/** ---------- Layout helpers (deterministic collision + springs) ---------- */
type BubbleDraft = {
  text: string;
  percentage: number;
  sizePx: number;
  gradient: string;
  x: number; // left in px
  y: number; // top in px
  r: number; // radius in px
  ax: number; // anchor x (from your design)
  ay: number; // anchor y
};

const p2px = (s: string, canvas = 360) => (parseFloat(s) / 100) * canvas;
// round to 3 decimals so SSR === client
const px2p = (v: number, canvas = 360) => `${((v / canvas) * 100).toFixed(3)}%`;

function clampToCircle(b: BubbleDraft, canvas = 360) {
  const cx = canvas / 2;
  const cy = canvas / 2;
  const maxR = canvas / 2 - b.r;
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

/**
 * Repulsion-based layout with anchor springs (deterministic):
 * - NO randomness
 * - rounds output so SSR and client match exactly
 */
function layoutBubbles(
  bubbles: Array<{ text: string; percentage: number; sizePx: number; gradient: string; top: string; left: string; }>,
  canvas = 360,
  padding = 10,
  iterations = 260,
  spring = 0.04
) {
  const work: BubbleDraft[] = bubbles
    .map(b => ({
      text: b.text,
      percentage: b.percentage,
      sizePx: b.sizePx,
      gradient: b.gradient,
      x: p2px(b.left, canvas),
      y: p2px(b.top, canvas),
      r: b.sizePx / 2,
      ax: p2px(b.left, canvas),
      ay: p2px(b.top, canvas),
    }))
    .sort((a, b) => b.r - a.r);

  for (let k = 0; k < iterations; k++) {
    for (let i = 0; i < work.length; i++) {
      const a = work[i];

      // pairwise repulsion
      for (let j = i + 1; j < work.length; j++) {
        const c = work[j];
        let dx = c.x - a.x;
        let dy = c.y - a.y;
        let d = Math.hypot(dx, dy);
        const minDist = a.r + c.r + padding;

        if (d < minDist && d > 0) {
          const overlap = minDist - d;
          dx /= d; dy /= d; // unit
          const push = overlap / 2;
          a.x -= dx * push; a.y -= dy * push;
          c.x += dx * push; c.y += dy * push;
        }
      }

      // spring gently toward original anchor (keeps your composition)
      a.x += (a.ax - a.x) * spring;
      a.y += (a.ay - a.y) * spring;

      // stay inside
      clampToCircle(a, canvas);
    }
  }

  return work.map(w => ({
    text: w.text,
    percentage: w.percentage,
    sizePx: w.sizePx,
    gradient: w.gradient,
    top: px2p(w.y, canvas),
    left: px2p(w.x, canvas),
    z: 1000 - Math.round(w.sizePx), // smaller on top
  }));
}

/** ---------- Emotion polarity + subtitles ---------- */
const POSITIVE = new Set([
  'Calm', 'Relax', 'Rested', 'Cheerful', 'Excited', 'Focus', 'Mental vitality',
]);
const NEGATIVE = new Set([
  'Anxious', 'Irritated', 'Bored', 'Sad', 'Pain',
]);

type Totals = { positive: number; negative: number };

function computeTotals(items: Array<{ text: string; percentage: number }>): Totals {
  return items.reduce<Totals>(
    (acc, b) => {
      if (POSITIVE.has(b.text)) acc.positive += b.percentage;
      else if (NEGATIVE.has(b.text)) acc.negative += b.percentage;
      return acc;
    },
    { positive: 0, negative: 0 }
  );
}

function pickBeforeSubtitle(t: Totals, margin = 2) {
  if (t.positive - t.negative > margin) return 'Positive emotions dominate';
  if (t.negative - t.positive > margin) return 'Negative emotions dominate';
  return 'Balanced emotional mix';
}

function pickAfterSubtitle(
  before: Totals,
  after: Totals,
  margin = 2,
  shiftThreshold = 4
) {
  const afterPosDom = after.positive - after.negative > margin;
  const afterNegDom = after.negative - after.positive > margin;
  const posShift = after.positive - before.positive;
  const negShift = after.negative - before.negative;

  if (afterPosDom && posShift > shiftThreshold) return 'Shift toward positive emotions';
  if (afterNegDom && negShift > shiftThreshold) return 'Shift toward negative emotions';

  if (afterPosDom) return 'Positive emotions dominate';
  if (afterNegDom) return 'Negative emotions dominate';
  return 'Balanced emotional mix';
}

/** ---------- Page Component ---------- */
export default function EmotionChart() {
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

  const beforeBubbles = layoutBubbles(beforeInit);
  const afterBubbles  = layoutBubbles(afterInit);

  const beforeTotals = computeTotals(beforeBubbles);
  const afterTotals  = computeTotals(afterBubbles);
  const beforeSubtitle = pickBeforeSubtitle(beforeTotals);
  const afterSubtitle  = pickAfterSubtitle(beforeTotals, afterTotals);

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
          subtitle={beforeSubtitle}
          bubbles={beforeBubbles}
        />
        <ChartSection
          title="After"
          subtitle={afterSubtitle}
          bubbles={afterBubbles}
        />
      </div>

      <div className="mt-10 p-6 rounded-xl text-center max-w-lg mx-auto shadow bg-white">
        <p className="text-green-700 font-semibold">
          😊 Positive moods increased by: {Math.max(0, (afterTotals.positive - beforeTotals.positive)).toFixed(1)}%
        </p>
        <p className="text-rose-600 font-semibold">
          😠 Negative moods changed by: {(afterTotals.negative - beforeTotals.negative).toFixed(1)}%
        </p>
      </div>
    </div>
  );
}
