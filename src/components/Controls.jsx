export default function Controls({ value, onChange }) {
  return (
    <div className="controls">
      <input
        id="search"
        type="text"
        placeholder="Search player, team, or minute (e.g. Haaland, Morocco, 90+)…"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="legend">
        <span><span className="dot good"></span> Verified vs. raw source</span>
        <span><span className="dot warn"></span> Self-consistent, not independently cross-checked</span>
        <span><span className="dot flag"></span> Flagged anomaly in source</span>
      </div>
    </div>
  );
}
