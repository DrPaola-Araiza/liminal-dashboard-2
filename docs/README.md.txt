# Liminal VR Psychometric Dashboard — Handover


A Next.js dashboard for psychometric analytics across Liminal VR categories.

## Documentation
- Handover & guide: [/docs/README.md](./docs/README.md)
- AI context (machine-readable): [/docs/ai_context.json](./docs/ai_context.json)
- Tasks / backlog: [/docs/tasks.todo.md](./docs/tasks.todo.md)
- Changelog: [/docs/changelog.md](./docs/changelog.md)
- Master plan: [/docs/MASTER_PLAN.md](./docs/MASTER_PLAN.md)

**Owner:** Paola  
**Last updated:** 2025-09-17  
**Branch:** main

## 1. Goal & Tech
- Goal: Visualize psychometric data across categories (Awe, Calm, Energy, Pain Relief, Sleep, Focus).
- Stack: Next.js (App Router), React, TypeScript, Tailwind CSS, Recharts.

## 2. Project Map
- App routes: `app/analytics/<category>/page.tsx`
- Shared components: `components/`
- Sidebar: `components/AnalyticsSidebar.tsx`

## 3. What’s Done
Pages: Calm, Energy, Awe, Pain Relief, Sleep, Focus.

Key components (examples):
- `AweIntensityChart.tsx` — radial gauge, size/typography props.
- `EmotionChart.tsx` — deterministic bubble layout + overlay tooltip; data-driven subtitles.
- `CategoryPreferenceDonut.tsx` — Recharts donut with % labels.

(See `/docs/ai_context.json` for the definitive list.)

## 4. Important Decisions
- **SSR hydration**: EmotionChart uses deterministic layout & rounded coords. Avoid randomness in SSR.
- **Tooltips**: Use chart-level overlay above bubbles to avoid z-index issues.
- **Recharts TS**: Use `import type { PieLabelRenderProps } from 'recharts'` on its own line.

## 5. Conventions
- Tailwind: avoid invalid classes (e.g., `font-large`, `text-[2xl]`). Use `font-medium`, `text-2xl`, etc.
- Charts: prefer deterministic calculations; keep animations optional.
- Components: strong typing for props; avoid implicit `any`.

## 6. How to Add a New Category
1. Create `app/analytics/<category>/page.tsx` from an existing page.
2. Duplicate components; rename to `<Category><Thing>.tsx`.
3. Replace hard-coded sample data with API wiring.
4. Add the route to `AnalyticsSidebar.tsx`.

## 7. Run & Build
```bash
npm install
npm run dev
# or: pnpm install && pnpm dev


