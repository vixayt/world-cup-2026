import { DATA, CONF_LABEL, parseMinute } from "../data";

function MatchCard({ row }) {
  const [stageName, home, hs, away, as, date, note, conf, goals] = row;
  const hasFlag = goals.some((g) => g[4]);
  const sortedGoals = [...goals].sort((a, b) => parseMinute(a[2]) - parseMinute(b[2]));

  return (
    <div className="match">
      <div className="match-head">
        <div className="match-teams">
          {home} <span className="score">{hs}–{as}</span> {away}
        </div>
        <div className="match-meta">
          <span>{date}</span>
          {note && <span className="note-tag">{note}</span>}
          <span className="conf-badge">
            <span className={`dot ${conf}`}></span>{CONF_LABEL[conf]}
          </span>
        </div>
      </div>

      {goals.length === 0 ? (
        <div className="no-goals">No goals scored</div>
      ) : (
        <table className="goals">
          <tbody>
            {sortedGoals.map((g, i) => {
              const [team, scorer, minute, tag, flagged] = g;
              return (
                <tr key={i}>
                  <td><span className={`min-chip${flagged ? " flagged" : ""}`}>{minute}</span></td>
                  <td className="scorer">{scorer}</td>
                  <td className="team-tag">{team}</td>
                  <td className="anno">{tag || ""}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {hasFlag && (
        <div className="flag-note">
          ⚠ Source literally reads "90+12'" — implausible stoppage time, most likely a Wikipedia
          data-entry typo (confirmed present in raw wikitext, not an AI fabrication). Treat this
          exact minute as unreliable.
        </div>
      )}
    </div>
  );
}

export default function MatchList({ filter }) {
  const f = (filter || "").trim().toLowerCase();
  let currentStage = null;
  const nodes = [];
  let anyVisible = false;

  DATA.forEach((row, idx) => {
    const [stageName, home, hs, away, as, date, note, conf, goals] = row;
    const haystack = [home, away, date, ...goals.flatMap((g) => [g[0], g[1], g[2]])]
      .join(" ")
      .toLowerCase();
    if (f && !haystack.includes(f)) return;
    anyVisible = true;

    if (stageName !== currentStage) {
      currentStage = stageName;
      nodes.push(<div className="stage-title" key={`stage-${stageName}-${idx}`}>{stageName}</div>);
    }
    nodes.push(<MatchCard row={row} key={idx} />);
  });

  return (
    <main>
      {anyVisible ? nodes : <div className="empty-state">No goals match that search.</div>}
    </main>
  );
}
