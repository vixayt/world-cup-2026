import { TOTAL_GOALS, TOTAL_MATCHES } from "../data";

export default function Masthead() {
  const perMatch = (TOTAL_GOALS / TOTAL_MATCHES).toFixed(1);

  return (
    <div className="masthead">
      <p className="eyebrow">2026 FIFA World Cup &middot; Canada / Mexico / USA</p>
      <h1>Every goal, and the minute it went in</h1>
      <p className="subhead">
        Compiled from Wikipedia match reports, cross-checked line-by-line against raw wikitext
        (and outside outlets for one group) to catch retrieval errors before they landed here.
        As of 6 July 2026 — group stage and Round of 32 complete, Round of 16 in progress.
      </p>
      <div className="stat-row">
        <div className="stat">
          <span className="stat-num">{TOTAL_GOALS}</span>
          <span className="stat-label">Goals logged</span>
        </div>
        <div className="stat">
          <span className="stat-num">{TOTAL_MATCHES}</span>
          <span className="stat-label">Matches played</span>
        </div>
        <div className="stat">
          <span className="stat-num">{perMatch}</span>
          <span className="stat-label">Goals / match</span>
        </div>
        <div className="stat">
          <span className="stat-num">76&ndash;90&prime;</span>
          <span className="stat-label">Busiest window</span>
        </div>
      </div>
    </div>
  );
}
