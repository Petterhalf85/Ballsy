"use client";

import { useMemo, useReducer } from "react";
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

export default function BallsyQuiz() {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const { run, current, catSubtotals, totalScore, phase } = state;

  const pct = run.maxScore > 0 ? Math.min(100, (totalScore / run.maxScore) * 100) : 0;
  const q = run.questions[current];

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

  return (
    <div className="ticket">
      <header>
        <div className="eyebrow">AreYouBallsy?</div>
        <h1 className="display">
          DISCOVER YOUR COURAGE.
          <br />
          BUILD IT.
        </h1>
        <p className="manifesto">
          Ballsy isn&apos;t about being fearless. Ballsy is about what you do when you&apos;re afraid.
        </p>
        <p className="sub">
          33 questions, 3 from each of 11 courage categories, pulled at random. Answer honestly —
          there&apos;s no dodging your way to a real score.
        </p>
      </header>

      <div className="floor">
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
  );
}
