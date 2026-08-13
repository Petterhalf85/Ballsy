# AreYouBallsy?

> Ballsy isn't about being fearless. Ballsy is about what you do when you're afraid.

A Next.js (App Router) port of the AreYouBallsy courage quiz — 33 randomly drawn
questions across 11 courage categories, a weighted scoring engine, your Ballsy
Type, and a personalized challenge.

## Structure

```
app/
  layout.js       root layout, fonts (next/font/google), page metadata
  page.js         renders <BallsyQuiz />
  globals.css     all styling (ported 1:1 from the static build)
components/
  BallsyQuiz.js   the quiz itself — state, scoring, and rendering
data/
  questions.js    question bank, Ballsy Types, tiers, challenges, scoring helpers
```

The quiz logic (`buildRun`, `scoreForIndex`, etc.) is unchanged from the static
HTML version — it's just driven by React state (`useReducer`) instead of direct
DOM manipulation, so behavior and copy should be identical.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

It's a standard Next.js app, so any Next-compatible host works with no extra config — e.g. Vercel (`vercel deploy`) or Netlify. `npm run build && npm start` works anywhere that can run a Node server.

## Notes / things to know

* No backend. All state (current run, scores) lives in the browser and resets on refresh — nothing is saved between visits yet.
* Free-text questions are excluded. A few original questions (K001, B006, L002, L008) need an AI grader to score open-ended answers, which this static build doesn't have. They're left out of the random draw pool.
* Category → Ballsy Type mapping is an inference. The concept doc lists 10 types for 11 categories; Fear Profile is treated as diagnostic-only and excluded from the type calculation. Worth double-checking the mapping in `data/questions.js` (`archetypes`) matches your intent.
