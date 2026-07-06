import { useMemo } from "react";
import { GOALS, STAGE_ORDER } from "../data";

function seededRand(seed) {
  const x = Math.sin(seed * 999.9) * 10000;
  return x - Math.floor(x);
}

function phaseFill(v) {
  if (v <= 45) return "var(--gold)";
  if (v <= 90) return "var(--pitch)";
  return "var(--et)";
}

const ROW_H = 30;
const MARGIN_LEFT = 128;
const MARGIN_RIGHT = 24;
const MARGIN_TOP = 30;
const MARGIN_BOTTOM = 4;
const PLOT_W = 760;
const MAX_MINUTE = 128;

const REF_LINES = [
  { v: 45, label: "HT" },
  { v: 90, label: "FT" },
  { v: 105, label: "ET HT" },
  { v: 120, label: "ET FT" },
];

const xPos = (v) => MARGIN_LEFT + (v / MAX_MINUTE) * PLOT_W;

export default function ScatterPlot({ filter }) {
  const plotH = STAGE_ORDER.length * ROW_H;
  const width = MARGIN_LEFT + PLOT_W + MARGIN_RIGHT;
  const height = MARGIN_TOP + plotH + MARGIN_BOTTOM;
  const f = (filter || "").trim().toLowerCase();

  const marks = useMemo(() => {
    return GOALS.map((g, i) => {
      const x = xPos(g.minuteVal);
      const jitter = (seededRand(i) - 0.5) * (ROW_H * 0.6);
      const y = MARGIN_TOP + g.stageIdx * ROW_H + ROW_H / 2 + jitter;
      const fill = phaseFill(g.minuteVal);
      const opacity = g.conf === "warn" ? 0.5 : 0.95;
      const stroke = g.flagged ? "var(--flag)" : "none";
      const strokeWidth = g.flagged ? 2.2 : 0;
      const search = `${g.scorer} ${g.team} ${g.match} ${g.minuteStr} ${g.date}`.toLowerCase();
      const title = `${g.scorer} (${g.team})${g.tag ? " — " + g.tag : ""} — ${g.minuteStr} — ${g.match}, ${g.date}${g.flagged ? " ⚠ flagged: implausible minute" : ""}`;
      const dim = !!f && !search.includes(f);

      let shape;
      if (g.tag === "pen") {
        shape = (
          <rect
            x={x - 4} y={y - 4} width="8" height="8"
            fill={fill} opacity={opacity} stroke={stroke} strokeWidth={strokeWidth}
            transform={`rotate(45 ${x} ${y})`}
          />
        );
      } else if (g.tag === "o.g.") {
        shape = (
          <polygon
            points={`${x},${y - 4.6} ${x - 4.4},${y + 3.2} ${x + 4.4},${y + 3.2}`}
            fill={fill} opacity={opacity} stroke={stroke} strokeWidth={strokeWidth}
          />
        );
      } else {
        shape = <circle cx={x} cy={y} r="3.4" fill={fill} opacity={opacity} stroke={stroke} strokeWidth={strokeWidth} />;
      }

      return (
        <g key={i} className={`goal-mark${dim ? " dim" : ""}`}>
          {shape}
          <title>{title}</title>
        </g>
      );
    });
  }, [f]);

  return (
    <section className="viz">
      <div className="viz-head">
        <div>
          <h2>Every goal, plotted</h2>
          <p>
            Minute of play (x) by stage (y), all {GOALS.length} goals. Faded dots are
            self-consistent-but-unverified groups; the ringed dot is the flagged "90+12'"
            anomaly. Hover any dot for detail — search above dims the rest.
          </p>
        </div>
        <div className="viz-legend">
          <span><span className="swatch p1"></span>1st half</span>
          <span><span className="swatch p2"></span>2nd half</span>
          <span><span className="swatch et"></span>Extra time</span>
          <span className="shape-key">&#9679; Goal &nbsp; &#9670; Penalty &nbsp; &#9650; Own goal</span>
        </div>
      </div>
      <div className="viz-scroll">
        <svg viewBox={`0 0 ${width} ${height}`} width={width} style={{ maxWidth: "none", display: "block" }}>
          <rect x={MARGIN_LEFT} y={MARGIN_TOP} width={xPos(45) - MARGIN_LEFT} height={plotH} fill="var(--gold)" opacity="0.05" />
          <rect x={xPos(45)} y={MARGIN_TOP} width={xPos(90) - xPos(45)} height={plotH} fill="var(--pitch)" opacity="0.06" />
          <rect x={xPos(90)} y={MARGIN_TOP} width={width - MARGIN_RIGHT - xPos(90)} height={plotH} fill="var(--et)" opacity="0.08" />

          {REF_LINES.map((rl) => (
            <g key={rl.v}>
              <line x1={xPos(rl.v)} y1={MARGIN_TOP} x2={xPos(rl.v)} y2={MARGIN_TOP + plotH} stroke="var(--line)" strokeDasharray="2,3" />
              <text x={xPos(rl.v)} y={MARGIN_TOP - 8} fill="var(--muted)" fontSize="10" textAnchor="middle">{rl.label}</text>
            </g>
          ))}

          {STAGE_ORDER.map((s, i) => {
            const y = MARGIN_TOP + i * ROW_H;
            return (
              <g key={s}>
                <line x1={MARGIN_LEFT} y1={y} x2={width - MARGIN_RIGHT} y2={y} stroke="var(--line)" opacity="0.5" />
                <text x={MARGIN_LEFT - 10} y={y + ROW_H / 2 + 4} fill="var(--muted)" fontSize="11" textAnchor="end">{s}</text>
              </g>
            );
          })}
          <line x1={MARGIN_LEFT} y1={MARGIN_TOP + plotH} x2={width - MARGIN_RIGHT} y2={MARGIN_TOP + plotH} stroke="var(--line)" opacity="0.5" />

          {marks}
        </svg>
      </div>
    </section>
  );
}
