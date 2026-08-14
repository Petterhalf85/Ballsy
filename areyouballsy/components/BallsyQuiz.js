"use client";

import { useEffect, useMemo, useReducer, useState } from "react";
import {
  bank,
  archetypes,
  typeDescriptions,
  tiers,
  challengeBank,
  achievementChallenges,
  scoreForIndex,
  optionLabel,
  starsFor,
  buildRun,
} from "../data/questions";

function initState() {
  const run = buildRun();
  return {
    run,
    current: 0,
    catSubtotals: run.catSubtotals,
    totalScore: 0,
    phase: "quiz", // 'quiz' | 'result'
  };
}

function reducer(state, action) {
  if (action.type === "ANSWER") {
    const { q, idx } = action;
    const rawScore = scoreForIndex(q, idx);
    const subscore = rawScore * q.weight * q.difficulty;
    const totalScore = state.totalScore + subscore;
    const catSubtotals = {
      ...state.catSubtotals,
      [q.cat]: state.catSubtotals[q.cat] + subscore,
    };
    const current = state.current + 1;
    const phase = current >= state.run.questions.length ? "result" : "quiz";
    return { ...state, current, catSubtotals, totalScore, phase };
  }
  if (action.type === "RETAKE") {
    return initState();
  }
  return state;
}

function BallsyMark({ className, width, height }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 4096 3048"
      aria-hidden="true"
    >
      <path
        fill="#E6B23F"
        d="M1229 22
           L1229 1492
           L1314 1472
           L1668 1174
           L1674 448
           L2184 446
           L2601 786
           L23 2956
           L22 3021
           L673 3006
           L2491 1493
           L3434 2246
           L3096 2601
           L2303 2601
           L1870 2933
           L1846 3002
           L3333 3024
           L4072 2246
           L4075 2167
           L2856 1200
           L3274 851
           L3316 743
           L2359 21
           Z"
      />
    </svg>
  );
}

export default function BallsyQuiz() {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const { run, current, catSubtotals, totalScore, phase } = state;
  const [showWhy, setShowWhy] = useState(false);

  const pct = run.maxScore > 0 ? Math.min(100, (totalScore / run.maxScore) * 100) : 0;
  const q = run.questions[current];

  useEffect(() => {
    if (!showWhy) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setShowWhy(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showWhy]);

  const result = useMemo(() => {
    if (phase !== "result") return null;

    const tier = tiers.find((t) => pct < t.max) || tiers[tiers.length - 1];
    const ringBell = tier.name === "Certified Daredevil" || tier.name === "Unhinged Legend";

    // rank categories by % of their own max (fair across differing weight/difficulty draws)
    const ranked = Object.keys(catSubtotals)
      .map((cat) => ({
        cat,
        pct: run.catMax[cat] > 0 ? (catSubtotals[cat] / run.catMax[cat]) * 100 : 0,
      }))
      .sort((a, b) => b.pct - a.pct);

    // Fear Profile is diagnostic, not one of the 10 type-defining categories —
    // excluded from the type ranking but still shown in the breakdown.
    const typeRanked = ranked.filter((r) => r.cat !== "Fear Profile");
    const top3 = typeRanked.slice(0, 3);
    const topType = archetypes[top3[0].cat] || top3[0].cat;

    // Weakest category that actually has a challenge set (Biology/Physiology
    // and Fear Profile don't have one); difficulty scales to how weak it is.
    const challengeEligible = ranked.filter((r) => challengeBank[r.cat]);
    const weakest = challengeEligible[challengeEligible.length - 1];
    const challengeLevel = weakest ? starsFor(weakest.pct) : null;
    const bonusLevel = starsFor(pct);

    return { tier, ringBell, ranked, top3, topType, weakest, challengeLevel, bonusLevel };
  }, [phase, pct, catSubtotals, run.catMax]);

  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <div className="brand">
          <BallsyMark className="brand-mark" width={40} height={30} />
          <span className="brand-name">BALLSY</span>
        </div>
        <button type="button" className="nav-cta" onClick={scrollToQuiz}>
          Take the test
        </button>
      </nav>

      <header className="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          <p className="eyebrow">Are you ballsy?</p>
          <BallsyMark className="hero-mark" width={130} height={96} />
          <h1>
            Ballsy isn&rsquo;t the absence of fear.
            <br />
            It&rsquo;s <em>the decision to act anyway.</em>
          </h1>
          <p className="sub">
            33 questions across 11 courage categories, pulled at random. Answer honestly — there&apos;s
            no dodging your way to a real score.{" "}
            <button type="button" className="why-link" onClick={() => setShowWhy(true)}>
              Why?
            </button>
          </p>
          <div className="hero-actions">
            <button type="button" className="btn-primary" onClick={scrollToQuiz}>
              Take the test
            </button>
            <p className="trust">
              <b>33 questions</b> &middot; <b>~8 minutes</b> &middot; 100% private
            </p>
          </div>
        </div>

        <div className="ridges" aria-hidden="true">
          <svg viewBox="0 0 1080 220" preserveAspectRatio="none">
            <polygon
              points="0,220 0,120 180,60 360,110 520,40 700,95 880,55 1080,100 1080,220"
              fill="var(--pine-800)"
              opacity="0.55"
            />
            <polygon
              points="0,220 0,160 220,110 420,150 640,90 860,140 1080,105 1080,220"
              fill="var(--pine-900)"
              opacity="0.85"
            />
            <polygon
              points="0,220 0,190 260,160 500,195 760,150 1080,185 1080,220"
              fill="var(--pine-950)"
            />
          </svg>
        </div>
      </header>

      <section className="steps">
        <div className="steps-inner">
          <div className="step">
            <p className="step-num">01</p>
            <h3>Answer honestly</h3>
            <p>Three random questions from each of 11 courage categories — social, conflict, romantic, moral, and more.</p>
          </div>
          <div className="step">
            <p className="step-num">02</p>
            <h3>Find your type</h3>
            <p>See your Ballsy Score and which of 10 courage archetypes fits you best, from Connector to Pioneer.</p>
          </div>
          <div className="step">
            <p className="step-num">03</p>
            <h3>Take the challenge</h3>
            <p>Get one real-world challenge, scaled to your weakest edge — because the test isn&apos;t the point, acting on it is.</p>
          </div>
        </div>
      </section>

      <div className="quiz-wrap" id="quiz">
        <div className="card">
          <div className="tower-wrap">
            <div className={`bell${result?.ringBell ? " ring" : ""}`}>🔔</div>
            <div className="meter">
              <div className="meter-ticks">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <span key={i} style={{ bottom: `${i * 12.5}%` }} />
                ))}
              </div>
              <div className="meter-fill" style={{ height: `${pct}%` }} />
              <div className="puck" style={{ bottom: `${pct}%` }} />
            </div>
            <div className="meter-label">
              Ballsy
              <br />
              Score
            </div>
          </div>

          <div className="panel">
            {phase === "quiz" && q && (
              <div className="quiz-body">
                <div className="progress-row">
                  <span className="progress-text">
                    Question {current + 1} of {run.questions.length}
                  </span>
                  <span className="cat-tag">{q.cat}</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${(current / run.questions.length) * 100}%` }}
                  />
                </div>
                <h2 className="q-title">{q.text}</h2>
                <div className="options">
                  {q.options.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="opt"
                      onClick={() => dispatch({ type: "ANSWER", q, idx })}
                    >
                      {optionLabel(q, idx)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {phase === "result" && result && (
              <div className="result show">
                <div className="score-line">
                  Ballsy Score: {Math.round(pct)}% ({totalScore} / {run.maxScore} points)
                </div>
                <div className="tier display">{result.tier.name}</div>
                <p className="desc">{result.tier.desc}</p>

                <div className="type-block">
                  <div className="eyebrow2">Your Ballsy Type</div>
                  <div className="type-name">{result.topType}</div>
                  <p className="type-desc">{typeDescriptions[result.topType] || ""}</p>
                  <div className="type-tags">
                    {result.top3.map((t) => (
                      <span className="type-tag" key={t.cat}>
                        {archetypes[t.cat] ? `${archetypes[t.cat]} · ${t.cat}` : t.cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="breakdown">
                  {result.ranked.map((r) => (
                    <div className="bd-row" key={r.cat}>
                      <div className="bd-cat">{r.cat}</div>
                      <div className="bd-bar-wrap">
                        <div className="bd-bar" style={{ width: `${Math.round(r.pct)}%` }} />
                      </div>
                      <div className="bd-pct">{Math.round(r.pct)}%</div>
                    </div>
                  ))}
                </div>

                {result.weakest && (
                  <div className="challenge-block">
                    <div className="eyebrow2">Your Next Challenge</div>
                    <div className="challenge-cat">{result.weakest.cat}</div>
                    <div className="challenge-stars">
                      {"★".repeat(result.challengeLevel) + "☆".repeat(3 - result.challengeLevel)}
                    </div>
                    <p className="challenge-text">
                      {challengeBank[result.weakest.cat][result.challengeLevel - 1]}
                    </p>
                    <div className="challenge-bonus">
                      <b>Feeling extra bold?</b> {achievementChallenges[result.bonusLevel - 1]}
                    </div>
                  </div>
                )}

                <button type="button" className="retake" onClick={() => dispatch({ type: "RETAKE" })}>
                  Step Up Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showWhy && (
        <div className="why-overlay" onClick={() => setShowWhy(false)}>
          <div className="why-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="why-close"
              onClick={() => setShowWhy(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="eyebrow2">Why Ballsy?</div>
            <p className="why-text">
              Ballsy isn&apos;t about being fearless. It&apos;s about choosing to move forward when
              fear is there. It&apos;s the courage to take the leap, speak up, try again, and show
              up as yourself — even when your heart is racing. Because being ballsy doesn&apos;t
              mean you&apos;re not afraid. It means you don&apos;t let fear decide for you.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
