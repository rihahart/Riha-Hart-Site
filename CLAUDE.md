# CLAUDE.md — Riha Hart Portfolio

Working memory and rules file for Claude Code. Update this as the project evolves.

---

## 1. Purpose

This file tells Claude how to work in this repo. It covers writing tone, code style, UI decisions, and things to remember across sessions.

---

## 2. Global Rules

- **CAVEMAN MODE ALWAYS. No exceptions.** Short words. Simple sentences. No fancy talk. Me say thing fast. No filler. No big words when small words work.

- Make minimal edits. Don't refactor beyond what's asked.
- Preserve existing tone and voice in all writing.
- No filler. No over-explaining. Keep it tight.
- Ask before making structural changes to pages, layouts, or navigation.
- Don't add abstractions, helpers, or utilities unless explicitly asked.
- Read existing sibling components before writing new ones — match their spacing, container patterns, and naming.
- No comments unless the reason is non-obvious.
- No emojis unless asked.

---

## 3. Writing Preferences

- Voice is direct, clear, and warm — not corporate, not casual.
- Short sentences. No padding.
- Don't rewrite copy unless asked. If copy needs fixing, flag it and ask.
- Preserve first-person tone on bio and case study pages.
- Avoid jargon unless it's already in the copy.

---

## 4. Code Preferences

- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4 (beta), GSAP
- Prefer editing existing files over creating new ones.
- Match the file type of siblings (`.tsx` vs `.js` — check before creating).
- No unnecessary `useEffect` cleanup or error handling for cases that can't happen.
- Animations use GSAP — don't introduce other animation libraries.
- Don't add `console.log` unless debugging something specific.
- Keep components flat unless nesting is already established.

---

## 5. UI / Design Preferences

- Desktop-first layout, but mobile must work.
- Test autoplay video behavior on mobile — it requires programmatic `.play()` (see commit `4432d32`).
- Animations: limit concurrency, defer until idle (see commit `607b172`).
- Nav hides on scroll on homepage only.
- Keep visual hierarchy consistent with existing case study pages before adding new ones.

---

## 6. Workflow Rules

- Don't commit unless asked.
- Don't push unless asked.
- Don't create PRs unless asked.
- When something is ambiguous, ask a single specific question — don't guess and implement.
- For big structural changes (new route, new layout, removing a section): describe the plan first, wait for a yes.
- Run `npm run dev` to test locally. No test suite exists.

---

## 7. Project Memory

**Stack**
- Next.js 16 / React 19 / TypeScript / Tailwind CSS v4 beta / GSAP

**Pages / Case Studies**
- `bio` — About page
- `everest-federal-credit-union` — EFCU case study
- `earthhero` — Earth Hero case study
- `iklass` — iKlass case study
- `jh-mural-project` — JH Mural case study
- `menu` — [add description]

**Known Quirks**
- Mobile video autoplay requires programmatic `.play()` — do not rely on `autoPlay` attribute alone.
- Animation frame counter must remain stable — parallel preload pattern is established, don't break it.
- `bioData.js` has had syntax issues before — be careful with edits there.

**Data files live in** `src/data/`

---

## 8. Open Questions / Things to Remember Later

- [ ] What is the `menu` page for?
- [ ] Is `app.js` at root still in use?
- [ ] Confirm Tailwind v4 beta upgrade path when stable releases.
- [ ] Add deployment info here (host, domain, deploy command).
- [ ] Add any SEO / meta tag rules once established.
